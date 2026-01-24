import { Link } from 'react-router-dom';
import FAQSchema from '../../../components/SEO/FAQSchema';
import SEO from '../../../components/SEO/SEO';
import '../../../styles/global.css';

function CommonExcelVBAMistakes() {
  const post = {
    slug: 'common-excel-vba-mistakes-and-how-to-fix-them',
    title: 'Common Excel VBA Mistakes (And How to Fix Them)',
    category: 'VBA Development',
    date: '2026-01-24',
    readTime: '10 min read',
    seoTitle: 'Common Excel VBA Mistakes & How to Fix Them | VBA Tips',
    seoDescription:
      'Avoid these 10 common Excel VBA mistakes that cause errors, slow performance, and code that breaks. Learn how to fix them with expert VBA tips.',
    keywords:
      'excel vba mistakes, vba errors, vba debugging, excel vba tips, vba best practices, fix vba code',
    ogTitle: 'Common Excel VBA Mistakes & How to Fix Them',
    faqs: [
      {
        question: 'Why does my VBA code run slowly?',
        answer:
          'Common causes: not disabling screen updating, cell-by-cell operations instead of arrays, missing Option Explicit, or inefficient loops. I can optimize your VBA code for better performance.',
      },
      {
        question: 'How do I fix "Object variable not set" errors in VBA?',
        answer:
          'This error occurs when you try to use an object variable before setting it. Always use "Set" keyword when assigning objects, check if objects are Nothing before using them, and use proper error handling.',
      },
      {
        question: 'Why does my VBA macro work sometimes but not others?',
        answer:
          'Usually caused by: missing error handling, assuming specific worksheet names exist, not checking if ranges exist, or relying on specific data formats. Add validation and error handling to make code robust.',
      },
      {
        question: 'How much does VBA code optimization cost?',
        answer:
          'Simple optimizations: $1,500-$3,000. Complex refactoring: $3,000-$8,000. Most optimizations are completed within 1-2 weeks. I provide fixed-price quotes after reviewing your code.',
      },
    ],
  };

  return (
    <div className='bg-base min-h-screen text-slate-800 font-sans'>
      <SEO
        title={post.seoTitle}
        description={post.seoDescription}
        keywords={post.keywords}
        url={`https://excelaccessconsultant.com/blog/${post.slug}`}
        ogTitle={post.ogTitle}
      />

      <FAQSchema faqs={post.faqs} />

      {/* Article Header */}
      <article className='py-8 md:py-12 bg-white border-b border-slate-200'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='mb-6'>
            <div className='mb-4'>
              <span className='inline-block px-3 py-1 bg-excel/10 text-excel text-sm font-semibold rounded'>
                {post.category}
              </span>
            </div>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 font-display text-slate-900'>
              {post.title}
            </h1>
            <div className='flex items-center gap-4 text-slate-600 text-sm'>
              <span>By Robert Terry</span>
              <span>•</span>
              <span>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Article Content */}
          <div className='prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-6'>
            <p className='text-lg text-slate-700 font-medium'>
              VBA mistakes can cause errors, slow performance, and code that breaks unexpectedly.
              Here are 10 common Excel VBA mistakes I see regularly—and how to fix them.
            </p>

            <h2 className='text-3xl font-bold mt-8 mb-4 font-display text-slate-900'>
              Mistake #1: Not Using Option Explicit
            </h2>
            <p>
              <strong>The Problem:</strong> Without{' '}
              <code className='bg-slate-100 px-2 py-1 rounded'>Option Explicit</code>, typos in
              variable names create new variables instead of causing errors. This leads to bugs that
              are hard to find.
            </p>
            <div className='bg-slate-50 p-4 rounded-lg border border-slate-200 my-4'>
              <p className='text-sm font-mono text-slate-700 mb-2'>
                <strong>Bad:</strong>
              </p>
              <pre className='text-xs bg-slate-900 text-slate-100 p-3 rounded overflow-x-auto'>
                {`Sub ProcessData()
    Dim rowCount As Long
    rowCount = 100
    ' Typo: rowCount vs rowCount
    If rowCount > 50 Then  ' This creates a NEW variable!
        ' Code never executes
    End If
End Sub`}
              </pre>
            </div>
            <div className='bg-excel-green/10 p-4 rounded-lg border border-excel-green/30 my-4'>
              <p className='text-sm font-mono text-slate-700 mb-2'>
                <strong>Good:</strong>
              </p>
              <pre className='text-xs bg-slate-900 text-slate-100 p-3 rounded overflow-x-auto'>
                {`Option Explicit

Sub ProcessData()
    Dim rowCount As Long
    rowCount = 100
    ' Typo now causes compile error - caught immediately!
    If rowCount > 50 Then
        ' Code executes correctly
    End If
End Sub`}
              </pre>
            </div>
            <p>
              <strong>The Fix:</strong> Always put{' '}
              <code className='bg-slate-100 px-2 py-1 rounded'>Option Explicit</code> at the top of
              every module. It forces variable declaration and catches typos at compile time.
            </p>

            <h2 className='text-3xl font-bold mt-8 mb-4 font-display text-slate-900'>
              Mistake #2: Not Disabling Screen Updating
            </h2>
            <p>
              <strong>The Problem:</strong> Screen updates slow down macros significantly. Every
              cell change triggers a screen refresh, making code 10-100x slower.
            </p>
            <div className='bg-slate-50 p-4 rounded-lg border border-slate-200 my-4'>
              <p className='text-sm font-mono text-slate-700 mb-2'>
                <strong>Bad:</strong>
              </p>
              <pre className='text-xs bg-slate-900 text-slate-100 p-3 rounded overflow-x-auto'>
                {`Sub ProcessData()
    Dim i As Long
    For i = 1 To 10000
        Cells(i, 1).Value = i  ' Screen updates 10,000 times!
    Next i
End Sub`}
              </pre>
            </div>
            <div className='bg-excel-green/10 p-4 rounded-lg border border-excel-green/30 my-4'>
              <p className='text-sm font-mono text-slate-700 mb-2'>
                <strong>Good:</strong>
              </p>
              <pre className='text-xs bg-slate-900 text-slate-100 p-3 rounded overflow-x-auto'>
                {`Sub ProcessData()
    Application.ScreenUpdating = False
    Dim i As Long
    For i = 1 To 10000
        Cells(i, 1).Value = i  ' No screen updates!
    Next i
    Application.ScreenUpdating = True
End Sub`}
              </pre>
            </div>
            <p>
              <strong>The Fix:</strong> Always disable screen updating at the start of macros, and
              re-enable it at the end (even in error handlers).
            </p>

            <h2 className='text-3xl font-bold mt-8 mb-4 font-display text-slate-900'>
              Mistake #3: Using Select and Activate
            </h2>
            <p>
              <strong>The Problem:</strong>{' '}
              <code className='bg-slate-100 px-2 py-1 rounded'>Select</code> and{' '}
              <code className='bg-slate-100 px-2 py-1 rounded'>Activate</code> are slow,
              error-prone, and unnecessary. They make code dependent on which sheet is active.
            </p>
            <div className='bg-slate-50 p-4 rounded-lg border border-slate-200 my-4'>
              <p className='text-sm font-mono text-slate-700 mb-2'>
                <strong>Bad:</strong>
              </p>
              <pre className='text-xs bg-slate-900 text-slate-100 p-3 rounded overflow-x-auto'>
                {`Sub FormatCell()
    Sheets("Data").Select
    Range("A1").Select
    ActiveCell.Value = "Hello"
    ActiveCell.Font.Bold = True
End Sub`}
              </pre>
            </div>
            <div className='bg-excel-green/10 p-4 rounded-lg border border-excel-green/30 my-4'>
              <p className='text-sm font-mono text-slate-700 mb-2'>
                <strong>Good:</strong>
              </p>
              <pre className='text-xs bg-slate-900 text-slate-100 p-3 rounded overflow-x-auto'>
                {`Sub FormatCell()
    Dim ws As Worksheet
    Set ws = ThisWorkbook.Worksheets("Data")
    ws.Range("A1").Value = "Hello"
    ws.Range("A1").Font.Bold = True
End Sub`}
              </pre>
            </div>
            <p>
              <strong>The Fix:</strong> Work with objects directly. Use worksheet and range
              variables instead of selecting.
            </p>

            <h2 className='text-3xl font-bold mt-8 mb-4 font-display text-slate-900'>
              Mistake #4: Cell-by-Cell Operations Instead of Arrays
            </h2>
            <p>
              <strong>The Problem:</strong> Reading/writing cells one at a time is extremely slow.
              Processing 10,000 cells can take minutes.
            </p>
            <div className='bg-slate-50 p-4 rounded-lg border border-slate-200 my-4'>
              <p className='text-sm font-mono text-slate-700 mb-2'>
                <strong>Bad:</strong>
              </p>
              <pre className='text-xs bg-slate-900 text-slate-100 p-3 rounded overflow-x-auto'>
                {`Sub ProcessData()
    Dim i As Long
    For i = 1 To 10000
        Cells(i, 1).Value = Cells(i, 1).Value * 2  ' Very slow!
    Next i
End Sub`}
              </pre>
            </div>
            <div className='bg-excel-green/10 p-4 rounded-lg border border-excel-green/30 my-4'>
              <p className='text-sm font-mono text-slate-700 mb-2'>
                <strong>Good:</strong>
              </p>
              <pre className='text-xs bg-slate-900 text-slate-100 p-3 rounded overflow-x-auto'>
                {`Sub ProcessData()
    Dim dataArray As Variant
    Dim i As Long
    ' Read all data at once
    dataArray = Range("A1:A10000").Value
    ' Process in memory (fast!)
    For i = 1 To UBound(dataArray, 1)
        dataArray(i, 1) = dataArray(i, 1) * 2
    Next i
    ' Write all data at once
    Range("A1:A10000").Value = dataArray
End Sub`}
              </pre>
            </div>
            <p>
              <strong>The Fix:</strong> Use arrays for bulk operations. Read data into an array,
              process it, then write it back. 10-100x faster.
            </p>

            <h2 className='text-3xl font-bold mt-8 mb-4 font-display text-slate-900'>
              Mistake #5: Missing Error Handling
            </h2>
            <p>
              <strong>The Problem:</strong> Without error handling, any error crashes the macro and
              shows ugly error messages to users.
            </p>
            <div className='bg-slate-50 p-4 rounded-lg border border-slate-200 my-4'>
              <p className='text-sm font-mono text-slate-700 mb-2'>
                <strong>Bad:</strong>
              </p>
              <pre className='text-xs bg-slate-900 text-slate-100 p-3 rounded overflow-x-auto'>
                {`Sub OpenFile()
    Workbooks.Open "C:\\Data\\file.xlsx"  ' What if file doesn't exist?
    ' Code crashes with error
End Sub`}
              </pre>
            </div>
            <div className='bg-excel-green/10 p-4 rounded-lg border border-excel-green/30 my-4'>
              <p className='text-sm font-mono text-slate-700 mb-2'>
                <strong>Good:</strong>
              </p>
              <pre className='text-xs bg-slate-900 text-slate-100 p-3 rounded overflow-x-auto'>
                {`Sub OpenFile()
    On Error GoTo ErrorHandler
    Dim wb As Workbook
    Set wb = Workbooks.Open("C:\\Data\\file.xlsx")
    ' Process file
    Exit Sub

ErrorHandler:
    MsgBox "Error: " & Err.Description, vbCritical, "File Error"
    ' Clean up if needed
End Sub`}
              </pre>
            </div>
            <p>
              <strong>The Fix:</strong> Always use{' '}
              <code className='bg-slate-100 px-2 py-1 rounded'>On Error GoTo</code> for procedures
              that can fail. Handle errors gracefully.
            </p>

            <h2 className='text-3xl font-bold mt-8 mb-4 font-display text-slate-900'>
              Mistake #6: Not Using Set for Object Variables
            </h2>
            <p>
              <strong>The Problem:</strong> Forgetting{' '}
              <code className='bg-slate-100 px-2 py-1 rounded'>Set</code> when assigning objects
              causes "Object variable not set" errors.
            </p>
            <div className='bg-slate-50 p-4 rounded-lg border border-slate-200 my-4'>
              <p className='text-sm font-mono text-slate-700 mb-2'>
                <strong>Bad:</strong>
              </p>
              <pre className='text-xs bg-slate-900 text-slate-100 p-3 rounded overflow-x-auto'>
                {`Sub ProcessData()
    Dim ws As Worksheet
    ws = ThisWorkbook.Worksheets("Data")  ' Missing Set!
    ' Runtime error: Object variable not set
End Sub`}
              </pre>
            </div>
            <div className='bg-excel-green/10 p-4 rounded-lg border border-excel-green/30 my-4'>
              <p className='text-sm font-mono text-slate-700 mb-2'>
                <strong>Good:</strong>
              </p>
              <pre className='text-xs bg-slate-900 text-slate-100 p-3 rounded overflow-x-auto'>
                {`Sub ProcessData()
    Dim ws As Worksheet
    Set ws = ThisWorkbook.Worksheets("Data")  ' Correct!
    ws.Range("A1").Value = "Hello"
End Sub`}
              </pre>
            </div>
            <p>
              <strong>The Fix:</strong> Always use{' '}
              <code className='bg-slate-100 px-2 py-1 rounded'>Set</code> when assigning object
              variables. Remember: Set for objects, no Set for values.
            </p>

            <h2 className='text-3xl font-bold mt-8 mb-4 font-display text-slate-900'>
              Mistake #7: Hardcoding Worksheet Names
            </h2>
            <p>
              <strong>The Problem:</strong> Hardcoded sheet names break when users rename sheets or
              when sheets don&apos;t exist.
            </p>
            <div className='bg-slate-50 p-4 rounded-lg border border-slate-200 my-4'>
              <p className='text-sm font-mono text-slate-700 mb-2'>
                <strong>Bad:</strong>
              </p>
              <pre className='text-xs bg-slate-900 text-slate-100 p-3 rounded overflow-x-auto'>
                {`Sub ProcessData()
    Dim ws As Worksheet
    Set ws = ThisWorkbook.Worksheets("Data")  ' What if sheet is renamed?
    ' Code breaks
End Sub`}
              </pre>
            </div>
            <div className='bg-excel-green/10 p-4 rounded-lg border border-excel-green/30 my-4'>
              <p className='text-sm font-mono text-slate-700 mb-2'>
                <strong>Good:</strong>
              </p>
              <pre className='text-xs bg-slate-900 text-slate-100 p-3 rounded overflow-x-auto'>
                {`Sub ProcessData()
    Dim ws As Worksheet
    On Error Resume Next
    Set ws = ThisWorkbook.Worksheets("Data")
    On Error GoTo 0
    If ws Is Nothing Then
        MsgBox "Data sheet not found!", vbCritical
        Exit Sub
    End If
    ' Process data
End Sub`}
              </pre>
            </div>
            <p>
              <strong>The Fix:</strong> Check if sheets exist before using them, or use sheet index
              numbers or code names for reliability.
            </p>

            <h2 className='text-3xl font-bold mt-8 mb-4 font-display text-slate-900'>
              Mistake #8: Not Releasing Object References
            </h2>
            <p>
              <strong>The Problem:</strong> Not setting objects to{' '}
              <code className='bg-slate-100 px-2 py-1 rounded'>Nothing</code> can cause memory leaks
              and prevent files from closing.
            </p>
            <div className='bg-slate-50 p-4 rounded-lg border border-slate-200 my-4'>
              <p className='text-sm font-mono text-slate-700 mb-2'>
                <strong>Bad:</strong>
              </p>
              <pre className='text-xs bg-slate-900 text-slate-100 p-3 rounded overflow-x-auto'>
                {`Sub ProcessFile()
    Dim wb As Workbook
    Set wb = Workbooks.Open("file.xlsx")
    ' Process file
    wb.Close
    ' wb still holds reference - file may not close properly
End Sub`}
              </pre>
            </div>
            <div className='bg-excel-green/10 p-4 rounded-lg border border-excel-green/30 my-4'>
              <p className='text-sm font-mono text-slate-700 mb-2'>
                <strong>Good:</strong>
              </p>
              <pre className='text-xs bg-slate-900 text-slate-100 p-3 rounded overflow-x-auto'>
                {`Sub ProcessFile()
    Dim wb As Workbook
    On Error GoTo ErrorHandler
    Set wb = Workbooks.Open("file.xlsx")
    ' Process file
    wb.Close SaveChanges:=False
    Set wb = Nothing  ' Release reference
    Exit Sub

ErrorHandler:
    If Not wb Is Nothing Then
        wb.Close SaveChanges:=False
        Set wb = Nothing
    End If
End Sub`}
              </pre>
            </div>
            <p>
              <strong>The Fix:</strong> Always set objects to{' '}
              <code className='bg-slate-100 px-2 py-1 rounded'>Nothing</code> when done, especially
              in error handlers.
            </p>

            <h2 className='text-3xl font-bold mt-8 mb-4 font-display text-slate-900'>
              Mistake #9: Using Variant for Everything
            </h2>
            <p>
              <strong>The Problem:</strong> Variant types are slower and hide type errors. They use
              more memory and make code harder to debug.
            </p>
            <div className='bg-slate-50 p-4 rounded-lg border border-slate-200 my-4'>
              <p className='text-sm font-mono text-slate-700 mb-2'>
                <strong>Bad:</strong>
              </p>
              <pre className='text-xs bg-slate-900 text-slate-100 p-3 rounded overflow-x-auto'>
                {`Sub ProcessData()
    Dim rowCount, fileName, isComplete  ' All Variants
    rowCount = 100
    fileName = "data.xlsx"
    isComplete = True
    ' Type errors not caught until runtime
End Sub`}
              </pre>
            </div>
            <div className='bg-excel-green/10 p-4 rounded-lg border border-excel-green/30 my-4'>
              <p className='text-sm font-mono text-slate-700 mb-2'>
                <strong>Good:</strong>
              </p>
              <pre className='text-xs bg-slate-900 text-slate-100 p-3 rounded overflow-x-auto'>
                {`Sub ProcessData()
    Dim rowCount As Long
    Dim fileName As String
    Dim isComplete As Boolean
    rowCount = 100
    fileName = "data.xlsx"
    isComplete = True
    ' Type errors caught at compile time
End Sub`}
              </pre>
            </div>
            <p>
              <strong>The Fix:</strong> Declare explicit types for all variables. Use Variant only
              when necessary (like for arrays from ranges).
            </p>

            <h2 className='text-3xl font-bold mt-8 mb-4 font-display text-slate-900'>
              Mistake #10: Not Validating Data Before Processing
            </h2>
            <p>
              <strong>The Problem:</strong> Assuming data exists or is in the expected format causes
              runtime errors when assumptions are wrong.
            </p>
            <div className='bg-slate-50 p-4 rounded-lg border border-slate-200 my-4'>
              <p className='text-sm font-mono text-slate-700 mb-2'>
                <strong>Bad:</strong>
              </p>
              <pre className='text-xs bg-slate-900 text-slate-100 p-3 rounded overflow-x-auto'>
                {`Sub ProcessData()
    Dim lastRow As Long
    lastRow = Cells(Rows.Count, 1).End(xlUp).Row
    ' What if sheet is empty? lastRow = 1, but no data!
    For i = 1 To lastRow
        ' Process data - may process empty rows
    Next i
End Sub`}
              </pre>
            </div>
            <div className='bg-excel-green/10 p-4 rounded-lg border border-excel-green/30 my-4'>
              <p className='text-sm font-mono text-slate-700 mb-2'>
                <strong>Good:</strong>
              </p>
              <pre className='text-xs bg-slate-900 text-slate-100 p-3 rounded overflow-x-auto'>
                {`Sub ProcessData()
    Dim lastRow As Long
    lastRow = Cells(Rows.Count, 1).End(xlUp).Row
    ' Validate data exists
    If lastRow < 2 Then
        MsgBox "No data to process!", vbInformation
        Exit Sub
    End If
    ' Process data
    For i = 2 To lastRow  ' Skip header row
        If Not IsEmpty(Cells(i, 1)) Then
            ' Process row
        End If
    Next i
End Sub`}
              </pre>
            </div>
            <p>
              <strong>The Fix:</strong> Always validate data before processing. Check if ranges
              exist, if data is in expected format, and handle edge cases.
            </p>

            <div className='bg-excel/10 p-6 rounded-lg border border-excel/20 mt-8'>
              <h3 className='text-heading-lg font-bold mb-3 font-display text-slate-900'>
                Summary: Best Practices
              </h3>
              <ul className='list-disc list-inside space-y-2 text-slate-700'>
                <li>
                  Always use <code className='bg-white px-2 py-1 rounded'>Option Explicit</code>
                </li>
                <li>Disable screen updating for long operations</li>
                <li>Avoid Select/Activate - work with objects directly</li>
                <li>Use arrays for bulk operations</li>
                <li>Add error handling to all procedures</li>
                <li>
                  Use <code className='bg-white px-2 py-1 rounded'>Set</code> for object variables
                </li>
                <li>Validate data before processing</li>
                <li>Release object references when done</li>
                <li>Declare explicit variable types</li>
                <li>Check if objects exist before using them</li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className='mt-12 bg-slate-100 p-8 rounded-lg border border-slate-200'>
            <h3 className='text-2xl font-bold mb-4 font-display text-slate-900'>
              Need Help Fixing Your VBA Code?
            </h3>
            <p className='text-slate-700 mb-6'>
              I can review your VBA code, fix these common mistakes, and optimize performance. Get a
              free consultation and fixed-price quote.
            </p>
            <div className='flex flex-col sm:flex-row gap-4'>
              <Link
                to='/contact'
                className='bg-excel hover:bg-excel-hover text-white hover:text-white px-8 py-4 text-base font-medium transition-colors rounded-md text-center'
              >
                Schedule Free Consultation
              </Link>
              <a
                href='tel:8016163702'
                className='bg-white hover:bg-slate-50 text-excel border-2 border-excel px-8 py-4 text-base font-medium transition-colors rounded-md text-center'
              >
                Call 801-616-3702
              </a>
            </div>
            <div className='mt-6'>
              <Link
                to='/vba-development'
                className='text-excel hover:text-excel-hover font-semibold text-sm inline-flex items-center gap-2'
              >
                Learn more about VBA Development Services →
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default CommonExcelVBAMistakes;
