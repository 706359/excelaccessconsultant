#!/usr/bin/env node

/**
 * Migration Helper Script
 * Helps convert React Router imports to Next.js
 * 
 * Run: node migrate-to-nextjs.js [file-path]
 * 
 * This will:
 * 1. Replace react-router-dom imports with next/navigation
 * 2. Replace Link from react-router-dom with Link from next/link
 * 3. Replace useNavigate with useRouter
 * 4. Replace useLocation with usePathname
 * 5. Update Link props: to -> href
 */

const fs = require('fs');
const path = require('path');

function migrateFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // Replace imports
  if (content.includes("from 'react-router-dom'") || content.includes('from "react-router-dom"')) {
    // Remove react-router-dom imports
    content = content.replace(/import\s+{[^}]*}\s+from\s+['"]react-router-dom['"];?\n?/g, '');
    
    // Add Next.js imports if needed
    if (content.includes('Link') && !content.includes("from 'next/link'")) {
      content = content.replace(/(import\s+.*?from\s+['"][^'"]+['"];?\n)/, "$1import Link from 'next/link';\n");
    }
    if ((content.includes('useNavigate') || content.includes('useRouter')) && !content.includes("from 'next/navigation'")) {
      content = content.replace(/(import\s+.*?from\s+['"][^'"]+['"];?\n)/, "$1import { useRouter } from 'next/navigation';\n");
    }
    if (content.includes('usePathname') && !content.includes("from 'next/navigation'")) {
      if (!content.includes("from 'next/navigation'")) {
        content = content.replace(/(import\s+.*?from\s+['"][^'"]+['"];?\n)/, "$1import { usePathname } from 'next/navigation';\n");
      }
    }
    changed = true;
  }

  // Replace useNavigate with useRouter
  if (content.includes('useNavigate')) {
    content = content.replace(/const\s+navigate\s*=\s*useNavigate\(\)/g, 'const router = useRouter()');
    content = content.replace(/navigate\(([^)]+)\)/g, 'router.push($1)');
    changed = true;
  }

  // Replace useLocation with usePathname
  if (content.includes('useLocation')) {
    content = content.replace(/const\s+location\s*=\s*useLocation\(\)/g, 'const pathname = usePathname()');
    content = content.replace(/location\.pathname/g, 'pathname');
    content = content.replace(/location\.hash/g, 'window.location.hash');
    changed = true;
  }

  // Replace Link props: to -> href
  content = content.replace(/<Link\s+to=/g, '<Link href=');
  content = content.replace(/to\s*=\s*{/g, 'href={');
  content = content.replace(/to\s*=\s*['"]/g, 'href="');
  changed = true;

  // Add 'use client' if hooks are used
  if ((content.includes('useState') || content.includes('useEffect') || content.includes('useRouter') || content.includes('usePathname')) && !content.includes("'use client'")) {
    content = "'use client'\n\n" + content;
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Migrated: ${filePath}`);
  } else {
    console.log(`⏭️  No changes needed: ${filePath}`);
  }
}

// If file path provided, migrate that file
const filePath = process.argv[2];
if (filePath) {
  migrateFile(filePath);
} else {
  console.log('Usage: node migrate-to-nextjs.js [file-path]');
  console.log('\nExample: node migrate-to-nextjs.js src/pages/About/About.jsx');
}
