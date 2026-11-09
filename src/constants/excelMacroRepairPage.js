/** Copy for /excel-macro-repair */

export const PAGE_REVIEWED = '2026-11-06';

export const FAILURE_CAUSES = [
  {
    title: 'Renamed sheets, ranges, or files',
    description:
      'Code still points at an old sheet name or workbook path. Excel throws a run-time error when that object is missing.',
  },
  {
    title: 'Missing library references',
    description:
      'A Reference in the VBA editor points to Outlook, ADO, or another library missing on the new PC. Compile fails before the macro runs.',
  },
  {
    title: '32-bit to 64-bit Office',
    description:
      'Old Declare statements need the PtrSafe keyword and updated pointer types for 64-bit Excel. Without that, the project will not compile.',
  },
  {
    title: 'Macro security and Trust Center',
    description:
      "The Trust Center is Excel's macro security settings. If macros are disabled or the file is untrusted, the code never starts.",
  },
  {
    title: 'Data layout changed',
    description:
      'Columns moved, headers changed, or blank rows appeared. The macro keeps old assumptions and returns wrong results or errors.',
  },
  {
    title: 'Excel version or companion apps',
    description:
      'Code that called Outlook, another workbook, or an .xlam add-in breaks when those pieces move, update, or stop loading.',
  },
];

export const REAL_ERRORS = [
  "Run-time error '9': Subscript out of range",
  "Run-time error '1004'",
  "Run-time error '13': Type mismatch",
  "Run-time error '91': Object variable or With block variable not set",
  "Compile error: Can't find project or library",
  'Compile error: The code in this project must be updated for use on 64-bit systems.',
];

export const WHAT_WE_FIX = [
  {
    title: 'Runtime and compile errors',
    description: 'Messages that stop the macro mid-run or stop it from compiling in the VBA editor.',
  },
  {
    title: 'Wrong results without a crash',
    description:
      'The button still runs, but totals, exports, or emails are wrong after a layout or logic change.',
  },
  {
    title: 'Slow macros',
    description: 'Code that used to finish quickly and now crawls through rows, sheets, or file loops.',
  },
  {
    title: 'New Excel version or new computer',
    description: 'A macro that worked on the old PC and fails after a Windows, Office, or 64-bit move.',
  },
  {
    title: 'Add-ins that stopped loading',
    description: '.xlam add-ins that no longer appear, fail on open, or break after an Office update.',
  },
  {
    title: 'Inherited macros with no notes',
    description:
      'Legacy Excel macro code left by someone who is gone, with no map of what each module does.',
  },
];

export const REPAIR_STEPS = [
  {
    title: 'You send the file and the error',
    desc: 'Share the .xlsm or .xlam, the exact message or screenshot, and what the macro should do. Note when it last worked and what changed.',
  },
  {
    title: 'Reproduce the problem',
    desc: '{{CONFIRM: Excel macro repairs are reproduced on a copy of your workbook before any production change}}. I recreate the failure with your steps before editing code.',
  },
  {
    title: 'Find the cause',
    desc: 'I check references, Declare statements, sheet names, Trust Center blocks, and the line that throws. The goal is the real break, not a guess.',
  },
  {
    title: 'Fix and test',
    desc: 'I patch the code and retest against your sample data or the scenario you described. Edge cases that caused the failure stay in the test pass.',
  },
  {
    title: 'Hand back with notes',
    desc: 'You get the repaired file and a short note on what changed. You own the code. {{CONFIRM: post-fix support window for Excel macro repair engagements}}',
  },
];

export const SEND_CHECKLIST = [
  'The workbook or add-in file (.xlsm, .xlsb, or .xlam)',
  'The exact error text or a screenshot of the dialog',
  'What the macro should do in plain words',
  'When it last worked',
  'Excel version and whether you are on Windows or Mac',
  'What changed since: new PC, Office update, renamed sheets, new data layout, missing companion file',
];

export const SERVICE_COMPARE = [
  {
    service: 'Macro repair',
    bestFor: 'An existing macro that throws errors or stopped after a change',
    youGet: 'Diagnose, fix, test, and return the working file with notes',
    href: '/excel-macro-repair',
    pageLabel: 'Excel macro repair',
  },
  {
    service: 'VBA development',
    bestFor: 'New modules, rebuilds, forms, or major rewrites',
    youGet: 'Fixed-price custom VBA built or rebuilt from a clear scope',
    href: '/vba-development',
    pageLabel: 'VBA development',
  },
  {
    service: 'Excel automation',
    bestFor: 'End-to-end reporting or workflow automation, not a single broken button',
    youGet: 'Process automation across files, reports, and distribution',
    href: '/excel-automation',
    pageLabel: 'Excel automation',
  },
  {
    service: 'Hire a VBA consultant',
    bestFor: 'Choosing a partner for larger Excel VBA work and ongoing builds',
    youGet: 'How engagements run, pricing bands, and what to expect',
    href: '/hire-excel-vba-consultant',
    pageLabel: 'Hire an Excel VBA consultant',
  },
];

export const REPAIR_FAQS = [
  {
    question: 'Why did a macro that worked yesterday fail today?',
    answer:
      'Something around the code changed. Common triggers are a renamed sheet, a missing reference, a Trust Center block, a 64-bit Office install, or data in a new layout. The code did not age overnight. The inputs around it did. Finding what changed is the first repair step.',
  },
  {
    question: 'Can you fix a macro someone else wrote?',
    answer:
      'Yes. Most repair work starts on code I did not write. I read the modules, recreate the failure, and fix the break. Undocumented legacy Excel macro projects are common when the author left and nobody kept notes. A clear error message and sample data still help even when the original author is gone.',
  },
  {
    question: 'Why does a macro work on one computer but not another?',
    answer:
      'The second PC often has a different Excel bitness, missing library references, stricter macro security, or a different folder layout. Declare statements that lack PtrSafe fail on 64-bit Office. That is a common Excel VBA debugging service case when a macro works on an old computer but not a new one.',
  },
  {
    question: 'Is it better to repair or rewrite the macro?',
    answer:
      'Repair when the design still matches the job and the break is local. Rewrite when the code is fragile across many modules, depends on brittle sheet layouts, or needs features the old design cannot hold. Rebuilds belong under VBA development.',
  },
  {
    question: 'How much does Excel macro repair cost?',
    answer:
      'Cost follows how hard the break is to reproduce, how many modules are involved, and whether 64-bit updates, add-ins, or Outlook automation are in play. Quotes follow the same advisory and fixed-price patterns on the pricing page. This page does not list a separate repair rate.',
  },
  {
    question: 'Can AI tools fix my Excel macro?',
    answer:
      'They can help with simple syntax hints. They cannot see your workbook, your live data, your missing references, or your other files. A wrong edit can damage results. For undocumented macros and data you cannot risk, hire someone to fix my Excel macro with a tested file handback.',
  },
  {
    question: 'Do Excel macros work the same on Mac?',
    answer:
      'Excel for Mac can run many VBA macros in macro-enabled workbooks, but security prompts and some Windows-only features differ. Macros that call Windows APIs or certain ActiveX controls often need Windows desktop Excel. Say which platform fails when you send the file.',
  },
];

export const RELATED_GROUPS = [
  {
    heading: 'Services',
    links: [
      {
        href: '/vba-development',
        title: 'VBA Development',
        description: 'Rebuilds and new modules when repair is not enough.',
      },
      {
        href: '/excel-automation',
        title: 'Excel Automation',
        description: 'Larger process automation beyond a single macro fix.',
      },
      {
        href: '/hire-excel-vba-consultant',
        title: 'Hire an Excel VBA Consultant',
        description: 'How larger VBA engagements are scoped and priced.',
      },
      {
        href: '/pricing',
        title: 'Pricing',
        description: 'Advisory rates and fixed-price project bands.',
      },
      {
        href: '/faq',
        title: 'FAQ',
        description: 'Ownership and how projects run.',
      },
    ],
  },
  {
    heading: 'Guides',
    links: [
      {
        href: '/blog/common-excel-vba-mistakes-and-how-to-fix-them',
        title: 'Common Excel VBA mistakes',
        description: 'Informational patterns; this page is the hire path for a fix.',
      },
      {
        href: '/excel-dashboard-development',
        title: 'Excel dashboard development',
        description: 'When the need is a reporting workbook, not a broken macro.',
      },
    ],
  },
];
