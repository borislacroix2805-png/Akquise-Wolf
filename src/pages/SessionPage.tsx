import { Calendar, CheckCircle, ChevronRight, Clock, Mail, Phone, SkipForward, XCircle } from 'lucide-react';
import { Lead } from '../types';

type Props = {
  leads: Lead[];
  setLeads: (leads: Lead[]) => void;
  session: any;
  setSession: (session: any) => void;
};

export function SessionPage({ leads, setLeads }: Props) {
  const callableLeads = leads.filter((lead) => lead.status !== 'Archiviert');
  const currentLead = callableLeads[0];

  function updateLead(status: string, note?: string) {
    if (!currentLead) return;

    const updatedLead = {
      ...currentLead,
      status,
      notes: note
        ? [...(currentLead.notes || []), note]
        : currentLead.notes,
      updatedAt: new Date().toISOString(),
    };

    setLeads(
      leads.map((lead) =>
        lead.id === currentLead.id ? updatedLead : lead
      )
    );
  }

  function skipLead() {
    if (!currentLead) return;

    const updatedLead = {
      ...currentLead,
      status: 'Wiedervorlage',
      nextAction: 'Später erneut anrufen',
      updatedAt: new Date().toISOString(),
    };

    setLeads(
      leads.map((lead) =>
        lead.id === currentLead.id ? updatedLead : lead
      )
    );
  }

  if (!currentLead) {
    return (
      <div className="sessionEmpty card">
        <CheckCircle size={48} />
        <h2>Keine Kontakte offen</h2>
        <p className="muted">
          Aktuell gibt es keine Leads oder Netzwerkkontakte für die Telefon-Session.
        </p>
      </div>
    );
  }

  return (
    <div className="session3">
      <section className="card sessionHero">
        <div>
          <p className="eyebrow">Telefon-Session 3.0</p>
          <h2>Ein Kontakt nach dem anderen.</h2>
          <p className="muted">
            Fokusmodus für klare Akquise: anrufen, Ergebnis setzen, Notiz schreiben,
            nächster Kontakt.
          </p>
        </div>

        <div className="sessionProgress">
          <strong>{callableLeads.length}</strong>
          <span>Kontakte offen</span>
        </div>
      </section>

      <section className="card sessionContact">
        <div className="sessionContactHeader">
          <div>
            <p className="eyebrow">Aktueller Kontakt</p>
            <h2>{currentLead.company}</h2>
            <p className="muted">{currentLead.contact}</p>
          </div>

          <span className="badge red">
            {currentLead.priority || 'Normal'}
          </span>
        </div>

        <div className="sessionContactGrid">
          <div>
            <span>Telefon</span>
            <strong>{currentLead.phone || 'Keine Nummer'}</strong>
          </div>

          <div>
            <span>E-Mail</span>
            <strong>{currentLead.email || 'Keine E-Mail'}</strong>
          </div>

          <div>
            <span>Ort</span>
            <strong>{currentLead.city || 'Nicht angegeben'}</strong>
          </div>

          <div>
            <span>Status</span>
            <strong>{currentLead.status}</strong>
          </div>
        </div>

        <div className="sessionMainActions">
          <a
            className="btn btnPrimary"
            href={currentLead.phone ? `tel:${currentLead.phone}` : undefined}
          >
            <Phone size={20} />
            Jetzt anrufen
          </a>

          <button className="btn" onClick={() => updateLead('Erreicht')}>
            <CheckCircle size={18} />
            Erreicht
          </button>

          <button className="btn" onClick={() => updateLead('Nicht erreicht')}>
            <XCircle size={18} />
            Nicht erreicht
          </button>

          <button className="btn" onClick={() => updateLead('Mail gesendet')}>
            <Mail size={18} />
            Mail
          </button>

          <button className="btn" onClick={skipLead}>
            <SkipForward size={18} />
            Später
          </button>
        </div>
      </section>

      <section className="sessionGrid">
        <div className="card">
          <p className="eyebrow">Nächster Schritt</p>
          <h3>Wiedervorlage setzen</h3>

          <div className="sessionQuickDates">
            <button className="btn" onClick={() => updateLead('Wiedervorlage', 'Heute erneut anrufen')}>
              <Clock size={16} />
              Heute
            </button>

            <button className="btn" onClick={() => updateLead('Wiedervorlage', 'Morgen erneut anrufen')}>
              <Calendar size={16} />
              Morgen
            </button>

            <button className="btn" onClick={() => updateLead('Wiedervorlage', 'Nächste Woche anrufen')}>
              <Calendar size={16} />
              Nächste Woche
            </button>
          </div>
        </div>

        <div className="card">
          <p className="eyebrow">Qualifizierung</p>
          <h3>Lead bewerten</h3>

          <div className="sessionQuickDates">
            <button className="btn btnPrimary" onClick={() => updateLead('Qualifiziert')}>
              <CheckCircle size={16} />
              Qualifiziert
            </button>

            <button className="btn" onClick={() => updateLead('Kein Interesse')}>
              <XCircle size={16} />
              Kein Interesse
            </button>

            <button className="btn" onClick={() => updateLead('Exportbereit')}>
              <ChevronRight size={16} />
              Exportbereit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
