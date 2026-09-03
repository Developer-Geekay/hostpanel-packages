import os
import uvicorn
from hostpanel_websitesd import main

if __name__ == "__main__":
    app = main.create_app()
    port = int(os.environ.get("HP_PACKAGE_PORT", "9103"))
    host = os.environ.get("HP_PACKAGE_HOST", "127.0.0.1")
    uvicorn.run(app, host=host, port=port)
