import {
  Calendar,
  CheckCircle,
  Clock,
  Network,
  Phone,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react';
import { Lead } from '../types';
import { KpiCard } from '../components/KpiCard';
import { dueClass } from '../utils/lead';

export function Dashboard({
  leads,
  onSession,
}: {
  leads: Lead[];
  onSession: () => void;
}) {
  const calls = 42;
  const reached = 18;
  const quote = Math.round((reached / calls) * 100);

  const appointments = leads.filter((l) => l.status === 'Termin').length;
  const customers = leads.filter((l) => l.area === 'kunden').length;
  const network = leads.filter((l) => l.area === 'netzwerk').length;
  const overdue = leads.filter((l) => dueClass(l) === 'red').length;

  const leadEngine = leads.filter((l) => l.area === 'kunden');
  const networkEngine = leads.filter((l) => l.area === 'netzwerk');

  return (
    <>
      <section className="dashboardHero">
        <div className="card heroMain">
          <div className="heroText">
            <p className="eyebrow">AKQUISE WOLF 2.0</p>
            <h2>
              Lead Engine.
              <br />
              <span>Network Engine.</span>
            </h2>
            <p className="muted">
              Ein Cockpit für aktive Akquise, schnelle Telefon-Sessions und
              systematischen Netzwerkaufbau.
            </p>

            <button className="btn btnPrimary heroButton" onClick={onSession}>
              <Phone size={20} />
              Telefon-Session starten
            </button>
          </div>

          <div className="dashboardWolf">
            <img src="/alpha-wolf.png" alt="Akquise Wolf" />
          </div>
        </div>

        <div className="card todayCard">
          <h3>Heute jagen</h3>
          <p className="muted">Tagesziel: 120 Anrufe</p>

          <div className="todayNumber">
            <strong>{calls}</strong>
            <span>/ 120</span>
          </div>

          <div className="progressBar">
            <div style={{ width: '35%' }} />
          </div>

          <div className="todayStats">
            <span>{reached} erreicht</span>
            <span>{quote}% Quote</span>
          </div>
        </div>
      </section>

      <section className="engineGrid">
        <div className="card engineCard leadEngine">
          <div className="engineHeader">
            <div>
              <p className="eyebrow">Lead Engine</p>
              <h3>Kunden-Leads</h3>
            </div>
            <Target />
          </div>

          <div className="engineStats">
            <div>
              <strong>{leadEngine.length}</strong>
              <span>Leads gesamt</span>
            </div>
            <div>
              <strong>{appointments}</strong>
              <span>Termine</span>
            </div>
            <div>
              <strong>{overdue}</strong>
              <span>Überfällig</span>
            </div>
          </div>
        </div>

        <div className="card engineCard networkEngine">
          <div className="engineHeader">
            <div>
              <p className="eyebrow">Network Engine</p>
              <h3>Geschäftskontakte</h3>
            </div>
            <Network />
          </div>

          <div className="engineStats">
            <div>
              <strong>{networkEngine.length}</strong>
              <span>Kontakte</span>
            </div>
            <div>
              <strong>12</strong>
              <span>Gefunden</span>
            </div>
            <div>
              <strong>5</strong>
              <span>Nachfassen</span>
            </div>
          </div>
        </div>
      </section>

      <section className="grid kpiGrid">
        <KpiCard icon={<Phone />} label="Anrufe heute" value={calls} trend="15% mehr als gestern" />
        <KpiCard icon={<CheckCircle />} label="Erreicht" value={reached} trend={`${quote}% Quote`} color="green" />
        <KpiCard icon={<Calendar />} label="Termine" value={appointments} trend="diese Woche" color="yellow" />
        <KpiCard icon={<Users />} label="Kunden-Leads" value={customers} trend="aktiv" color="blue" />
        <KpiCard icon={<Network />} label="Netzwerk" value={network} trend="Kontakte" color="yellow" />
        <KpiCard icon={<Clock />} label="Wiedervorlagen" value={overdue} trend="überfällig" />
      </section>

      <section className="grid dashboardBottom">
        <div className="card">
          <h3>Telefonquote</h3>
          <div className="quoteWrap">
            <div
              className="quoteCircle"
              style={{
                background: `conic-gradient(#ef4444 0 ${quote}%, #1f2937 ${quote}% 100%)`,
              }}
            >
              <div className="quoteInner">
                <strong>{quote}%</strong>
                <span>Quote</span>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <h3>Überfällige Wiedervorlagen</h3>
          <div className="list">
            {leads
              .filter((l) => dueClass(l) === 'red')
              .slice(0, 5)
              .map((l) => (
                <div className="row" key={l.id}>
                  <strong>{l.company}</strong>
                  <span>{l.nextAction}</span>
                  <span>{l.dueDate}</span>
                  <span className="badge red">{l.priority}</span>
                </div>
              ))}
          </div>
        </div>

        <div className="card">
          <h3>Team Übersicht</h3>
          <div className="list">
            {['Boris Lacroix', 'Anna Wolf', 'Lisa Netzwerk', 'Markus Dach'].map((u, i) => (
              <div className="row" key={u}>
                <strong>{u}</strong>
                <span>{[42, 28, 25, 18][i]} Anrufe</span>
                <span>{[18, 12, 9, 6][i]} erreicht</span>
                <span className={`badge ${i < 2 ? 'green' : i === 2 ? 'yellow' : 'red'}`}>
                  {[43, 42, 36, 33][i]}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
