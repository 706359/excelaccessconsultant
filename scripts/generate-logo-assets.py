#!/usr/bin/env python3
"""Generate logo assets from eaclogo.png and EA monogram favicons on white."""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "public" / "eaclogo.png"
OUT_DIR = ROOT / "public"

EXCEL_GREEN = (0x1B, 0x5E, 0x20, 255)
ACCESS_CRIMSON = (0x8B, 0x1A, 0x1A, 255)
WHITE = (0xFF, 0xFF, 0xFF, 255)

ICON_SIZES = {
    "favicon-16x16.png": 16,
    "favicon-32x32.png": 32,
    "apple-touch-icon.png": 180,
    "android-chrome-192x192.png": 192,
    "android-chrome-512x512.png": 512,
}

FONT_CANDIDATES = [
    "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
    "/System/Library/Fonts/Supplemental/Arial Black.ttf",
    "/Library/Fonts/Arial Bold.ttf",
    "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
    "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf",
]


def load_bold_font(size: int):
    for path in FONT_CANDIDATES:
        if Path(path).exists():
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


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


def render_ea_monogram(size: int) -> Image.Image:
    canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(canvas)
    draw.ellipse((0, 0, size - 1, size - 1), fill=WHITE)

    font_size = max(8, int(size * 0.58))
    font = load_bold_font(font_size)
    kern = max(0, int(size * 0.04))

    e_w = draw.textlength("E", font=font)
    a_w = draw.textlength("A", font=font)
    group_w = e_w + a_w - kern

    cx = size / 2
    cy = size / 2

    e_cx = cx - group_w / 2 + e_w / 2
    a_cx = cx - group_w / 2 + e_w - kern + a_w / 2

    stagger = max(1, round(size * 0.05))

    draw.text((e_cx, cy - stagger), "E", font=font, fill=EXCEL_GREEN, anchor="mm")
    draw.text((a_cx, cy + stagger), "A", font=font, fill=ACCESS_CRIMSON, anchor="mm")

    return canvas


def generate_logos() -> None:
    if not SRC.exists():
        raise SystemExit(f"Source logo not found: {SRC}")

    logo = Image.open(SRC).convert("RGBA")
    logo.save(OUT_DIR / "logo.png", "PNG", optimize=True)
    logo.save(OUT_DIR / "logo.webp", "WEBP", quality=90, method=6)
    print(f"Generated logo.png and logo.webp from {SRC.name}")


def generate_favicons() -> None:
    for name, size in ICON_SIZES.items():
        monogram = render_ea_monogram(size)
        monogram.save(OUT_DIR / name, "PNG", optimize=True)

    ico_images = [render_ea_monogram(s) for s in (16, 32, 48)]
    ico_images[0].save(
        OUT_DIR / "favicon.ico",
        format="ICO",
        sizes=[(16, 16), (32, 32), (48, 48)],
        append_images=ico_images[1:],
    )
    print("Generated EA monogram favicons (white circle background)")


def main() -> None:
    generate_logos()
    generate_favicons()


if __name__ == "__main__":
    main()
