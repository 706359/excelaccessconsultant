const PILLARS = [
  {
    id: 'database',
    label: 'Database',
    accent: 'access',
    icon: (
      <svg width='20' height='20' viewBox='0 0 20 20' fill='none' aria-hidden='true'>
        <rect x='3' y='4' width='14' height='3' rx='1' stroke='currentColor' strokeWidth='1.25' />
        <rect x='3' y='8.5' width='14' height='3' rx='1' stroke='currentColor' strokeWidth='1.25' />
        <rect x='3' y='13' width='14' height='3' rx='1' stroke='currentColor' strokeWidth='1.25' />
      </svg>
    ),
  },
  {
    id: 'reporting',
    label: 'Reporting',
    accent: 'excel',
    icon: (
      <svg width='20' height='20' viewBox='0 0 20 20' fill='none' aria-hidden='true'>
        <rect x='4' y='11' width='3' height='5' fill='currentColor' opacity='0.85' />
        <rect x='8.5' y='8' width='3' height='8' fill='currentColor' />
        <rect x='13' y='5' width='3' height='11' fill='currentColor' opacity='0.7' />
      </svg>
    ),
  },
  {
    id: 'automation',
    label: 'Automation',
    accent: 'excel',
    icon: (
      <svg width='20' height='20' viewBox='0 0 20 20' fill='none' aria-hidden='true'>
        <rect x='2.5' y='7' width='5' height='6' rx='1' stroke='currentColor' strokeWidth='1.25' />
        <path
          d='M9 10h2.5M13.5 10H17'
          stroke='currentColor'
          strokeWidth='1.25'
          strokeLinecap='round'
        />
        <path
          d='M15.5 8.5l2 1.5-2 1.5'
          stroke='currentColor'
          strokeWidth='1.25'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    ),
  },
  {
    id: 'migration',
    label: 'Migration',
    accent: 'access',
    icon: (
      <svg width='20' height='20' viewBox='0 0 20 20' fill='none' aria-hidden='true'>
        <ellipse cx='6' cy='10' rx='4' ry='5' stroke='currentColor' strokeWidth='1.25' />
        <path
          d='M11 10h3.5M14 8.5l2.5 1.5L14 11.5'
          stroke='currentColor'
          strokeWidth='1.25'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <rect
          x='15.5'
          y='6'
          width='2.5'
          height='8'
          rx='0.5'
          stroke='currentColor'
          strokeWidth='1.25'
        />
      </svg>
    ),
  },
];

const NAV_MODULES = [
  { label: 'Customers', active: false, type: 'db' },
  { label: 'Orders', active: true, type: 'db' },
  { label: 'Inventory', active: false, type: 'db' },
  { label: 'Reports', active: false, type: 'report' },
];

const TABLE_ROWS = [
  { id: 'ORD-1042', customer: 'Acme Manufacturing', status: 'Shipped', qty: '240' },
  { id: 'ORD-1043', customer: 'Summit Distribution', status: 'Processing', qty: '128' },
  { id: 'ORD-1044', customer: 'Northline Finance', status: 'Pending', qty: '64' },
  { id: 'ORD-1045', customer: 'Valley Healthcare', status: 'Shipped', qty: '512' },
];

function statusClass(status) {
  const key = status.toLowerCase();
  if (key === 'shipped') return 'hero-db__status-pill--shipped';
  if (key === 'processing') return 'hero-db__status-pill--processing';
  return 'hero-db__status-pill--pending';
}

function StatusPill({ status }) {
  return <span className={`hero-db__status-pill ${statusClass(status)}`}>{status}</span>;
}

function NavIcon({ type }) {
  if (type === 'report') {
    return (
      <svg
        className='hero-db__nav-icon hero-db__nav-icon--excel'
        width='14'
        height='14'
        viewBox='0 0 14 14'
        fill='none'
        aria-hidden='true'
      >
        <rect x='2' y='8' width='2' height='4' fill='currentColor' />
        <rect x='5.5' y='5' width='2' height='7' fill='currentColor' />
        <rect x='9' y='3' width='2' height='9' fill='currentColor' />
      </svg>
    );
  }

  return (
    <svg
      className='hero-db__nav-icon hero-db__nav-icon--access'
      width='14'
      height='14'
      viewBox='0 0 14 14'
      fill='none'
      aria-hidden='true'
    >
      <rect x='2' y='2.5' width='10' height='2.5' rx='0.5' stroke='currentColor' strokeWidth='1' />
      <rect x='2' y='6' width='10' height='2.5' rx='0.5' stroke='currentColor' strokeWidth='1' />
      <rect x='2' y='9.5' width='10' height='2.5' rx='0.5' stroke='currentColor' strokeWidth='1' />
    </svg>
  );
}

function DashboardStatusBar() {
  return (
    <div className='hero-db__status'>
      <span className='hero-db__badge hero-db__badge--access'>15 users · Stable</span>
      <span className='hero-db__badge hero-db__badge--excel'>Report automated</span>
    </div>
  );
}

function OrdersTable({ rows, compact = false }) {
  return (
    <div className='hero-db__table-wrap'>
      <table className={`hero-db__table ${compact ? 'hero-db__table--compact' : ''}`}>
        <thead>
          <tr>
            <th>Order ID</th>
            {!compact && <th>Customer</th>}
            <th>Status</th>
            <th>Qty</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              {!compact && <td>{row.customer}</td>}
              <td>
                <StatusPill status={row.status} />
              </td>
              <td className='hero-db__num'>{row.qty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PillarChips() {
  return (
    <div className='hero-pillars__grid hero-pillars__grid--inline'>
      {PILLARS.map((pillar) => (
        <div
          key={pillar.id}
          className={`hero-pillars__item hero-pillars__item--${pillar.accent} hero-pillars__item--chip`}
        >
          <span className='hero-pillars__icon'>{pillar.icon}</span>
          <span className='hero-pillars__label'>{pillar.label}</span>
        </div>
      ))}
    </div>
  );
}

function CompactDashboard() {
  return (
    <div className='hero-visual__compact hero-db hero-db--compact'>
      <div className='hero-db__titlebar'>
        <span className='hero-db__titlebar-accent' />
        <span className='hero-db__titlebar-text'>Operations Manager, Live Data</span>
        <span className='hero-db__titlebar-dots'>
          <span />
          <span />
          <span />
        </span>
      </div>

      <div className='hero-db__compact-nav'>
        {NAV_MODULES.map((mod) => (
          <span
            key={mod.label}
            className={`hero-db__compact-nav-item ${mod.active ? 'hero-db__compact-nav-item--active' : ''} hero-db__compact-nav-item--${mod.type === 'report' ? 'excel' : 'access'}`}
          >
            {mod.label}
          </span>
        ))}
      </div>

      <OrdersTable rows={TABLE_ROWS.slice(0, 2)} compact />
      <div className='hero-db__compact-extra'>
        <OrdersTable rows={TABLE_ROWS.slice(2, 4)} compact />
      </div>

      <DashboardStatusBar />

      <div className='hero-db__compact-pillars'>
        <PillarChips />
      </div>
    </div>
  );
}

function FullDashboard() {
  return (
    <div className='hero-visual__dashboard hero-db'>
      <div className='hero-db__titlebar'>
        <span className='hero-db__titlebar-accent' />
        <span className='hero-db__titlebar-text'>Operations Manager, Live Data</span>
        <span className='hero-db__titlebar-dots'>
          <span />
          <span />
          <span />
        </span>
      </div>

      <div className='hero-db__body'>
        <nav className='hero-db__nav' aria-hidden='true'>
          <p className='hero-db__nav-heading'>Tables</p>
          <ul className='hero-db__nav-list'>
            {NAV_MODULES.map((mod) => (
              <li
                key={mod.label}
                className={`hero-db__nav-item ${mod.active ? 'hero-db__nav-item--active' : ''} hero-db__nav-item--${mod.type === 'report' ? 'excel' : 'access'}`}
              >
                <NavIcon type={mod.type} />
                <span>{mod.label}</span>
              </li>
            ))}
          </ul>
        </nav>

        <div className='hero-db__content'>
          <div className='hero-db__toolbar'>
            <span className='hero-db__view-label'>Orders</span>
            <span className='hero-db__toolbar-actions'>
              <span className='hero-db__toolbar-btn hero-db__toolbar-btn--excel'>
                Weekly Report
              </span>
              <span className='hero-db__toolbar-btn'>Refresh</span>
            </span>
          </div>

          <OrdersTable rows={TABLE_ROWS} />
          <DashboardStatusBar />
        </div>
      </div>
    </div>
  );
}

export default function HeroVisual() {
  return (
    <div className='hero-visual hero-enter hero-enter-7' aria-hidden='true'>
      <CompactDashboard />
      <FullDashboard />
    </div>
  );
}
