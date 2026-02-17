import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='min-h-[60vh] flex flex-col items-center justify-center px-6 text-center'>
      <h1 className='text-display-lg md:text-display-xl font-extrabold text-slate-900 mb-2'>404</h1>
      <p className='text-body-lg text-slate-600 mb-6 max-w-md'>
        This page could not be found. It may have been moved or removed.
      </p>
      <Link
        href='/'
        className='inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white font-semibold px-6 py-3 rounded-lg transition-colors'
      >
        Back to Home
      </Link>
    </div>
  );
}
