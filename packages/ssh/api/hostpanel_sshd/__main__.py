"""Entrypoint for `python -m hostpanel_sshd`.

Separate from main.py so importing the app factory never binds a port.
"""
from hostpanel_sshd.main import main

main()
