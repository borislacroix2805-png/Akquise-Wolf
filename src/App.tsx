import { useEffect, useState } from 'react';
import { Sidebar, Page } from './components/Sidebar';
import { Topbar } from './components/Topbar';
import { Dashboard } from './pages/Dashboard';
import { LeadsPage } from './pages/LeadsPage';
import { SessionPage } from './pages/SessionPage';
import { ExportPage, ImportPage } from './pages/ImportExport';
import { SettingsPage, StatsPage, UsersPage } from './pages/OtherPages';
import { Lead } from './types';
import { loadLeads, loadSession, saveLeads, saveSession } from './utils/storage';
import { LeadFormModal } from './components/LeadFormModal';
import './styles.css';

export default function App() {
  const [page, setPage] = useState<Page>('dashboard');
  const [leads, setLeadsState] = useState<Lead[]>(loadLeads);
  const [session, setSessionState] = useState(loadSession);
  const [menu, setMenu] = useState(false);
  const [modal, setModal] = useState<null | { mode: 'full' | 'quick'; area: 'kunden' | 'netzwerk' }>(null);

  const setLeads = (nextLeads: Lead[]) => {
    setLeadsState(nextLeads);
    saveLeads(nextLeads);
  };

  const setSession = (nextSession: any) => {
    setSessionState(nextSession);
    saveSession(nextSession);
  };

  useEffect(() => {
    saveLeads(leads);
  }, [leads]);

  function addLead(lead: Lead) {
    setLeads([lead, ...leads]);
  }

  const title = {
    dashboard: 'Dashboard',
    session: 'Telefon-Session',
    kunden: 'Leads',
    netzwerk: 'Netzwerk',
    import: 'Import',
    export: 'Export',
    users: 'Benutzer',
    stats: 'Statistik',
    settings: 'Einstellungen',
  }[page];

  const subtitle = {
    dashboard: 'Telefonieren. Qualifizieren. Exportieren.',
    session: 'Ein Kontakt nach dem anderen. Schnell, klar, effektiv.',
    kunden: 'Lead Engine für aktive Telefonakquise.',
    netzwerk: 'Network Engine für Kontakte, Recherche und Kooperationen.',
    import: 'Leads und Netzwerkkontakte aus externen Quellen übernehmen.',
    export: 'Qualifizierte Kontakte sauber exportieren.',
    users: 'Rollen und Team vorbereiten.',
    stats: 'Telefonquoten und Leistung auswerten.',
    settings: 'System konfigurieren.',
  }[page];

  return (
    <div className="app">
      <Sidebar
        page={page}
        setPage={setPage}
        open={menu}
        onClose={() => setMenu(false)}
      />

      <main className="main">
        <Topbar
          title={title}
          subtitle={subtitle}
          onSession={() => setPage('session')}
          onMenu={() => setMenu(true)}
        />

        {page === 'dashboard' && (
          <Dashboard onSession={() => setPage('session')} />
        )}

        {page === 'session' && (
          <SessionPage
            leads={leads}
            setLeads={setLeads}
            session={session}
            setSession={setSession}
          />
        )}

        {page === 'kunden' && (
          <LeadsPage
            area="kunden"
            leads={leads}
            onNew={() => setModal({ mode: 'full', area: 'kunden' })}
            onQuick={() => setModal({ mode: 'quick', area: 'kunden' })}
            onUpdate={(lead) =>
              setLeads(leads.map((item) => (item.id === lead.id ? lead : item)))
            }
          />
        )}

        {page === 'netzwerk' && (
          <LeadsPage
            area="netzwerk"
            leads={leads}
            onNew={() => setModal({ mode: 'full', area: 'netzwerk' })}
            onQuick={() => setModal({ mode: 'quick', area: 'netzwerk' })}
            onUpdate={(lead) =>
              setLeads(leads.map((item) => (item.id === lead.id ? lead : item)))
            }
          />
        )}

        {page === 'import' && (
          <ImportPage onImport={(rows) => setLeads([...rows, ...leads])} />
        )}

        {page === 'export' && <ExportPage leads={leads} />}

        {page === 'users' && <UsersPage />}
        {page === 'stats' && <StatsPage />}
        {page === 'settings' && <SettingsPage />}
      </main>

      {modal && (
        <LeadFormModal
          mode={modal.mode}
          area={modal.area}
          onClose={() => setModal(null)}
          onSave={addLead}
        />
      )}
    </div>
  );
}
