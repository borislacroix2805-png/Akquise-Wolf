import { Calendar, CheckCircle, Clock, Network, Phone, Target } from 'lucide-react';
import { Lead } from '../types';
import { KpiCard } from '../components/KpiCard';
import { dueClass } from '../utils/lead';

export function Dashboard({ leads, onSession }: { leads: Lead[]; onSession: () => void }) {
  const calls = 42;
  const reached = 18;
  const appointments = leads.filter((l) => l.status === 'Termin').length;
  const customers = leads.filter((l) => l.area === 'kunden').length;
  const network = leads.filter((l) => l.area === 'netzwerk').length;
  const overdue = leads.filter((l) => dueClass(l) === 'red').length;
  const quote = Math.round((reached / calls) * 100);

  return (
    <>
      <div className="hero">
        <div className="card banner cleanBanner">
          <div className="bannerText">
            <h3>
              BEUTE MACHEN.
              <br />
              <span>NICHT AUSREDEN.</span>
            </h3>

            <p className="muted">
              Akquise Wolf führt dein Team schnell durch jeden Kontakt:
              anrufen, Status setzen, weiter.
            </p>

            <button className="btn btnPrimary" onClick={onSession}>
              <Phone size={20} />
              Telefon-Session starten
            </button>
          </div>

          <div className="bannerWolfIcon">
            <img src="/alpha-wolf.png" alt="Akquise Wolf" />
          </div>
        </div>

        <div className="card huntCard">
          <h3>Heute jagen</h3>
          <p className="muted">Tagesziel: 120 Anrufe</p>

          <div>
            <strong className="bigNumber">{calls}</strong>
            <span className="muted"> / 120 Anrufe</span>
          </div>

          <div className="progressBar">
            <div style={{ width: '35%' }} />
          </div>

          <p className="wolfQuote">„Jeder Anruf. Ein Schritt zum Ziel.“</p>
        </div>
      </div>

      <div className="grid kpiGrid">
        <KpiCard icon={<Phone />} label="Anrufe heute" value={calls} trend="15% mehr als gestern" />
        <KpiCard icon={<CheckCircle />} label="Erreicht" value={reached} trend={`${quote}% Quote`} color="green" />
        <KpiCard icon={<Calendar />} label="Termine" value={appointments} trend="diese Woche" color="yellow" />
        <KpiCard icon={<Target />} label="Kunden-Leads" value={customers} trend="gesamt" color="blue" />
        <KpiCard icon={<Network />} label="Netzwerk" value={network} trend="Kontakte" color="yellow" />
        <KpiCard icon={<Clock />} label="Wiedervorlagen" value={overdue} trend="überfällig" />
      </div>

      <div className="grid dashboardBottom">
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
      </div>
    </>
  );
}
