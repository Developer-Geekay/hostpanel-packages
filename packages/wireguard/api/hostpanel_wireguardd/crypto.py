"""
WireGuard Curve25519 / X25519 Cryptographic Key Utilities.

Provides pure Python / cryptography helpers for generating WireGuard private keys,
public keys, and preshared keys (base64 encoded 32-byte values).
"""
from __future__ import annotations

import base64
import os
import secrets
from typing import Tuple

# RFC 7748 Curve25519 field constants
_P = 2**255 - 19
_A24 = 121665


def _clamp_scalar(k: bytearray) -> bytearray:
    k[0] &= 248
    k[31] &= 127
    k[31] |= 64
    return k


def _cswap(swap: int, x_2: int, x_3: int) -> Tuple[int, int]:
    dummy = swap * ((x_2 ^ x_3) % _P)
    x_2 = (x_2 ^ dummy) % _P
    x_3 = (x_3 ^ dummy) % _P
    return x_2, x_3


def _x25519_scalar_mult(scalar_bytes: bytes, u_bytes: bytes = b"\x09" + b"\x00" * 31) -> bytes:
    """Pure Python Curve25519 scalar multiplication (RFC 7748)."""
    k = _clamp_scalar(bytearray(scalar_bytes))
    u = int.from_bytes(u_bytes, "little")

    x_1 = u
    x_2 = 1
    z_2 = 0
    x_3 = u
    z_3 = 1
    swap = 0

    for t in range(254, -1, -1):
        k_t = (k[t // 8] >> (t % 8)) & 1
        swap ^= k_t
        x_2, x_3 = _cswap(swap, x_2, x_3)
        z_2, z_3 = _cswap(swap, z_2, z_3)
        swap = k_t

        a = (x_2 + z_2) % _P
        aa = (a * a) % _P
        b = (x_2 - z_2) % _P
        bb = (b * b) % _P
        e = (aa - bb) % _P
        c = (x_3 + z_3) % _P
        d = (x_3 - z_3) % _P
        da = (d * a) % _P
        cb = (c * b) % _P

        x_3 = ((da + cb) ** 2) % _P
        z_3 = (x_1 * ((da - cb) ** 2)) % _P
        x_2 = (aa * bb) % _P
        z_2 = (e * (aa + _A24 * e)) % _P

    x_2, x_3 = _cswap(swap, x_2, x_3)
    z_2, z_3 = _cswap(swap, z_2, z_3)

    result = (x_2 * pow(z_2, _P - 2, _P)) % _P
    return result.to_bytes(32, "little")


def generate_private_key() -> str:
    """Generate a base64-encoded WireGuard private key."""
    raw = bytearray(secrets.token_bytes(32))
    raw = _clamp_scalar(raw)
    return base64.b64encode(bytes(raw)).decode("ascii")


def generate_public_key(private_key_b64: str) -> str:
    """Derive base64-encoded public key from base64 private key."""
    try:
        from cryptography.hazmat.primitives.asymmetric import x25519
        from cryptography.hazmat.primitives import serialization

        priv_bytes = base64.b64decode(private_key_b64)
        priv = x25519.X25519PrivateKey.from_private_bytes(priv_bytes)
        pub_bytes = priv.public_key().public_bytes(
            encoding=serialization.Encoding.Raw,
            format=serialization.PublicFormat.Raw,
        )
        return base64.b64encode(pub_bytes).decode("ascii")
    except Exception:
        # Pure Python fallback
        priv_bytes = base64.b64decode(private_key_b64)
        pub_bytes = _x25519_scalar_mult(priv_bytes)
        return base64.b64encode(pub_bytes).decode("ascii")


def generate_preshared_key() -> str:
    """Generate a base64-encoded 256-bit preshared key."""
    return base64.b64encode(secrets.token_bytes(32)).decode("ascii")


def generate_keypair() -> Tuple[str, str]:
    """Generate (private_key, public_key) pair."""
    priv = generate_private_key()
    pub = generate_public_key(priv)
    return priv, pub
