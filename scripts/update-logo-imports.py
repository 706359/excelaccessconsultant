#!/usr/bin/env python3
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

OLD_BLOCK = """const BASE = 'https://excelaccessconsultant.com';
const OG_IMAGE = { url: `${BASE}/logo.png`, width: 512, height: 512, alt: 'ExcelAccessConsultant' };"""

def brand_import(import_path: str) -> str:
    return (
        f"import {{ BRAND_LOGO_OG, SITE_URL }} from '{import_path}';\n\n"
        "const BASE = SITE_URL;\n"
        "const OG_IMAGE = BRAND_LOGO_OG;"
    )

FILES = [
    ("src/app/about/layout.jsx", "../../config/brand"),
    ("src/app/blog/layout.jsx", "../../config/brand"),
    ("src/app/case-studies/layout.jsx", "../../config/brand"),
    ("src/app/contact/layout.jsx", "../../config/brand"),
    ("src/app/faq/layout.jsx", "../../config/brand"),
    ("src/app/privacy-policy/layout.jsx", "../../config/brand"),
    ("src/app/thank-you/layout.jsx", "../../config/brand"),
    ("src/app/excel-consultant-utah/layout.jsx", "../../config/brand"),
    ("src/app/hire-excel-vba-consultant/layout.jsx", "../../config/brand"),
    ("src/app/access-consulting/layout.jsx", "../../config/brand"),
    ("src/app/database-migration/layout.jsx", "../../config/brand"),
    ("src/app/excel-automation/layout.jsx", "../../config/brand"),
    ("src/app/financial-modeling/layout.jsx", "../../config/brand"),
    ("src/app/vba-development/layout.jsx", "../../config/brand"),
    ("src/app/case-studies/[slug]/page.jsx", "../../../config/brand"),
]

for rel_path, import_path in FILES:
    path = ROOT / rel_path
    text = path.read_text()
    if OLD_BLOCK not in text:
        print(f"skip (no block): {rel_path}")
        continue
    replacement = brand_import(import_path)
    if "import { BRAND_LOGO_OG" not in text:
        if rel_path.endswith("access-consulting/layout.jsx") or "ServiceSchema" in text.split(OLD_BLOCK)[0][-200:]:
            # insert after first import block
            first_blank = text.find("\n\n", text.find("import "))
            if first_blank != -1:
                text = text[: first_blank + 2] + replacement + text[first_blank + 2 :]
                text = text.replace(OLD_BLOCK + "\n\n", "", 1)
                text = text.replace(OLD_BLOCK + "\n", "", 1)
            else:
                text = text.replace(OLD_BLOCK, replacement, 1)
        else:
            text = text.replace(OLD_BLOCK, replacement, 1)
    text = text.replace("images: [`${BASE}/logo.png`]", "images: [BRAND_LOGO_OG.url]")
    text = text.replace("url: `${BASE}/logo.png`", "url: BRAND_LOGO_OG.url")
    path.write_text(text)
    print(f"updated: {rel_path}")
