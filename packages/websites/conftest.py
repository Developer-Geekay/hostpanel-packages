import sys
from pathlib import Path
pkg_dir = Path(__file__).resolve().parent
sys.path.insert(0, str(pkg_dir / "api"))
portald_dir = pkg_dir.parent.parent / "portald"
sys.path.insert(0, str(portald_dir))
