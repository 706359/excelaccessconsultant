# Lead Magnet PDFs

This folder contains HTML files for three lead magnets that can be converted to PDF.

## Files

1. **excel-automation-readiness-checklist.html** - 15-point checklist for Excel automation readiness
2. **access-database-health-check.html** - Warning signs, performance indicators, and maintenance tips
3. **vba-best-practices-guide.html** - Coding standards, error handling, and performance tips

## Converting to PDF

### Option 1: Browser Print-to-PDF (Easiest)
1. Open the HTML file in any web browser
2. Press `Cmd+P` (Mac) or `Ctrl+P` (Windows)
3. Select "Save as PDF" as the destination
4. Click "Save"

### Option 2: Online Converter
- Use services like HTMLtoPDF.com or PDF24.org
- Upload the HTML file and download the PDF

### Option 3: Command Line (for developers)
```bash
# Using wkhtmltopdf (install first)
wkhtmltopdf excel-automation-readiness-checklist.html excel-automation-readiness-checklist.pdf

# Using Puppeteer (Node.js)
node convert-to-pdf.js
```

## Notes

- All files are styled with print-optimized CSS
- Files include branding (ExcelAccessConsultant.com)
- Contact information and CTAs are included
- Files are ready for email delivery or direct download

## Next Steps

After converting to PDF:
1. Test PDFs open correctly
2. Set up email delivery system (Task 3.4)
3. Create landing page for lead magnets
4. Update buttons/links to point to lead magnet landing page
