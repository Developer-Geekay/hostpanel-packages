"""Minimal async test support, so the suite does not require pytest-asyncio."""
import asyncio
import inspect
import pytest


def pytest_configure(config):
    config.addinivalue_line("markers", "asyncio: run this coroutine test in an event loop")


@pytest.hookimpl(tryfirst=True)
def pytest_pyfunc_call(pyfuncitem):
    fn = pyfuncitem.obj
    if not inspect.iscoroutinefunction(fn):
        return None
    kwargs = {k: v for k, v in pyfuncitem.funcargs.items()
              if k in pyfuncitem._fixtureinfo.argnames}
    asyncio.run(fn(**kwargs))
    return True
