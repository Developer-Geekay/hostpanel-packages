"""Entrypoint for `python -m hostpanel_ftpd`.

Separate from main.py so importing the app factory never binds a port.
"""
from hostpanel_ftpd.main import main

main()
