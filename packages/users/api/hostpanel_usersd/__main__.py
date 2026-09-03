"""Entrypoint for `python -m hostpanel_usersd`.

Separate from main.py so importing the app factory never binds a port.
"""
from hostpanel_usersd.main import main

main()
