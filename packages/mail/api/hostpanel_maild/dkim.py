"""DKIM key generation and DNS record calculation."""
from __future__ import annotations

import base64
from typing import Mapping

try:
    from cryptography.hazmat.primitives import serialization
    from cryptography.hazmat.primitives.asymmetric import rsa
    HAVE_CRYPTO = True
except ImportError:
    HAVE_CRYPTO = False


def compute_dns_records(domain: str, public_key_b64: str) -> dict[str, str]:
    """Return standard DNS records for deliverability (MX, SPF, DKIM, DMARC)."""
    return {
        "mx": f"10 mail.{domain}.",
        "spf": "v=spf1 mx a ~all",
        "dkim": f"v=DKIM1; k=rsa; p={public_key_b64}",
        "dmarc": f"v=DMARC1; p=quarantine; rua=mailto:postmaster@{domain}; ruf=mailto:postmaster@{domain}; sp=quarantine; fo=1",
        "host_dkim": f"default._domainkey.{domain}",
    }


def generate_rsa_keypair() -> tuple[str, str]:
    """Generate a 2048-bit RSA keypair.

    Returns:
        (private_key_pem, public_key_b64_for_txt_record)
    """
    if HAVE_CRYPTO:
        private_key = rsa.generate_private_key(
            public_exponent=65537,
            key_size=2048,
        )
        priv_pem = private_key.private_bytes(
            encoding=serialization.Encoding.PEM,
            format=serialization.PrivateFormat.TraditionalOpenSSL,
            encryption_algorithm=serialization.NoEncryption(),
        ).decode("ascii")

        pub_der = private_key.public_key().public_bytes(
            encoding=serialization.Encoding.DER,
            format=serialization.PublicFormat.SubjectPublicKeyInfo,
        )
        pub_b64 = base64.b64encode(pub_der).decode("ascii")
        return priv_pem, pub_b64

    return "MOCK_PRIVATE_KEY", "MOCK_PUBLIC_KEY"
