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
export default function App(){const [page,setPage]=useState<Page>('dashboard');const [leads,setLeadsState]=useState<Lead[]>(loadLeads);const [session,setSessionState]=useState(loadSession);const [menu,setMenu]=useState(false);const [modal,setModal]=useState<null|{mode:'full'|'quick',area:'kunden'|'netzwerk'}>(null);const setLeads=(l:Lead[])=>{setLeadsState(l);saveLeads(l)};const setSession=(s:any)=>{setSessionState(s);saveSession(s)};useEffect(()=>saveLeads(leads),[leads]);function addLead(lead:Lead){setLeads([lead,...leads]);}
 const title={dashboard:'Dashboard',session:'Telefon-Session',kunden:'Kunden-Leads',netzwerk:'Netzwerk-Aufbau',import:'Import',export:'Export',users:'Benutzer',stats:'Statistik',settings:'Einstellungen'}[page];
 const subtitle={dashboard:'Willkommen im Rudel. Heute zählt jeder Anruf.',session:'Ein Kontakt nach dem anderen. Schnell, klar, effektiv.',kunden:'PV, Dach und Sanierungsleads bis zum Abschluss führen.',netzwerk:'Kontakte herstellen und Kooperationen aufbauen.',import:'Excel und CSV übernehmen.',export:'Daten sauber exportieren.',users:'Rollen und Team vorbereiten.',stats:'Quoten und Leistung auswerten.',settings:'System konfigurieren.'}[page];
 return <div className="app"><Sidebar page={page} setPage={setPage} open={menu} onClose={()=>setMenu(false)}/><main className="main"><Topbar title={title} subtitle={subtitle} onSession={()=>setPage('session')} onMenu={()=>setMenu(true)}/>{page==='dashboard'&&<Dashboard leads={leads} onSession={()=>setPage('session')}/>} {page==='session'&&<SessionPage leads={leads} setLeads={setLeads} session={session} setSession={setSession}/>} {page==='kunden'&&<LeadsPage area="kunden" leads={leads} onNew={()=>setModal({mode:'full',area:'kunden'})} onQuick={()=>setModal({mode:'quick',area:'kunden'})} onUpdate={l=>setLeads(leads.map(x=>x.id===l.id?l:x))}/>} {page==='netzwerk'&&<LeadsPage area="netzwerk" leads={leads} onNew={()=>setModal({mode:'full',area:'netzwerk'})} onQuick={()=>setModal({mode:'quick',area:'netzwerk'})} onUpdate={l=>setLeads(leads.map(x=>x.id===l.id?l:x))}/>} {page==='import'&&<ImportPage onImport={rows=>setLeads([...rows,...leads])}/>} {page==='export'&&<ExportPage leads={leads}/>} {page==='users'&&<UsersPage/>}{page==='stats'&&<StatsPage/>}{page==='settings'&&<SettingsPage/>}</main>{modal&&<LeadFormModal mode={modal.mode} area={modal.area} onClose={()=>setModal(null)} onSave={addLead}/>}</div>}
