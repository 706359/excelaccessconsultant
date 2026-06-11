#!/usr/bin/env python3
"""Generate logo and favicon assets from public/eaclogo.png."""

from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "public" / "eaclogo.png"
OUT_DIR = ROOT / "public"

LOGO_WIDTH = 1100
LOGO_HEIGHT = 198

ICON_SIZES = {
    "favicon-16x16.png": 16,
    "favicon-32x32.png": 32,
    "apple-touch-icon.png": 180,
    "android-chrome-192x192.png": 192,
    "android-chrome-512x512.png": 512,
}


def fit_in_square(image: Image.Image, size: int, padding: float = 0.08) -> Image.Image:
    canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    max_w = int(size * (1 - 2 * padding))
    max_h = int(size * (1 - 2 * padding))
    ratio = min(max_w / image.width, max_h / image.height)
    new_w = max(1, int(image.width * ratio))
    new_h = max(1, int(image.height * ratio))
    resized = image.resize((new_w, new_h), Image.Resampling.LANCZOS)
    x = (size - new_w) // 2
    y = (size - new_h) // 2
    canvas.paste(resized, (x, y), resized)
    return canvas


def main() -> None:
    if not SRC.exists():
        raise SystemExit(f"Source logo not found: {SRC}")

    logo = Image.open(SRC).convert("RGBA")

    logo.save(OUT_DIR / "logo.png", "PNG", optimize=True)
    logo.save(OUT_DIR / "logo.webp", "WEBP", quality=90, method=6)

    for name, size in ICON_SIZES.items():
        square = fit_in_square(logo, size)
        square.save(OUT_DIR / name, "PNG", optimize=True)

    ico_images = [fit_in_square(logo, size) for size in (16, 32, 48)]
    ico_images[0].save(
        OUT_DIR / "favicon.ico",
        format="ICO",
        sizes=[(16, 16), (32, 32), (48, 48)],
        append_images=ico_images[1:],
    )

    print(f"Generated logo assets from {SRC.name} ({LOGO_WIDTH}x{LOGO_HEIGHT})")


if __name__ == "__main__":
    main()
