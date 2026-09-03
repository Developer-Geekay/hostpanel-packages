"""Entrypoint for `python -m hostpanel_phpd`.

Separate from main.py so importing the app factory never binds a port.
"""
from hostpanel_phpd.main import main

main()
