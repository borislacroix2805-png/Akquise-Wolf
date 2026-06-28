import {
  BarChart3,
  Download,
  Home,
  Import,
  Phone,
  Settings,
  Users,
  Network,
  UserCog,
} from 'lucide-react';

export type Page =
  | 'dashboard'
  | 'session'
  | 'kunden'
  | 'netzwerk'
  | 'import'
  | 'export'
  | 'users'
  | 'stats'
  | 'settings';

const items = [
  ['dashboard', Home, 'Dashboard'],
  ['session', Phone, 'Telefon-Session'],
  ['kunden', Users, 'Kunden-Leads'],
  ['netzwerk', Network, 'Netzwerk'],
  ['import', Import, 'Import'],
  ['export', Download, 'Export'],
  ['stats', BarChart3, 'Statistik'],
  ['users', UserCog, 'Benutzer'],
  ['settings', Settings, 'Einstellungen'],
] as const;

export function Sidebar({
  page,
  setPage,
  open,
  onClose,
}: {
  page: Page;
  setPage: (p: Page) => void;
  open: boolean;
  onClose: () => void;
}) {
  return (
    <aside className={`sidebar ${open ? 'open' : ''}`}>
      <div className="brand">
        <div className="wolfmark">
          <img src="/alpha-wolf.png" alt="Akquise Wolf" />
        </div>

        <div>
          <h1>
            AKQUISE <span>WOLF</span>
          </h1>
          <p>Jeder Anruf zählt</p>
        </div>
      </div>

      <nav className="nav">
        {items.map(([id, Icon, label]) => (
          <button
            key={id}
            className={page === id ? 'active' : ''}
            onClick={() => {
              setPage(id);
              onClose();
            }}
          >
            <Icon size={18} />
            {label}
          </button>
        ))}
      </nav>

      <div className="sidebarFooter">
        <strong>Wolf Team</strong>
        <p className="muted">
          Heute fokussiert arbeiten: Kontakte jagen, Status setzen, weiter.
        </p>
        <p className="wolfQuote">„Beute machen. Nicht ausreden.“</p>
      </div>
    </aside>
  );
}
