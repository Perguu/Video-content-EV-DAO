import base64
import html
import json
import re
import sys
from pathlib import Path

project = Path(sys.argv[1])
config = json.loads((project / "chapters.json").read_text(encoding="utf-8-sig"))
edl = json.loads((project / "edl.json").read_text(encoding="utf-8-sig"))
duration = edl["total"] / edl["fps"]
page = (Path(__file__).parent / "review-template.html").read_text(encoding="utf-8")
video = base64.b64encode((project / "local/render.mp4").read_bytes()).decode()
for token, value in {
    "{{MEDIA}}": video, "{{TITLE}}": html.escape(config["title"]),
    "{{CHAPTERS}}": json.dumps(config["chapters"]).replace("<", r"\u003c"),
    "{{DURATION}}": str(duration), "{{KEY}}": re.sub(r"[^a-zA-Z0-9_-]", "-", project.name)
}.items():
    page = page.replace(token, value)
(project / "preview.html").write_text(page, encoding="utf-8")
