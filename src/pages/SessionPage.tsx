import {
  Calendar,
  CheckCircle,
  ChevronRight,
  Clock,
  Mail,
  Phone,
  SkipForward,
  XCircle,
} from 'lucide-react';
import { useMemo, useState } from 'react';
import { Lead, LeadStatus } from '../types';

type Props = {
  leads: Lead[];
  setLeads: (leads: Lead[]) => void;
  session: any;
  setSession: (session: any) => void;
};

export function SessionPage({ leads, setLeads, session, setSession }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [note, setNote] = useState('');

  const callableLeads = useMemo(
    () => leads.filter((lead) => lead.status !== 'Archiv'),
    [leads]
  );

  const currentLead = callableLeads[currentIndex] || callableLeads[0];

  function goNext() {
    setNote('');

    if (currentIndex >= callableLeads.length - 1) {
      setCurrentIndex(0);
      return;
    }

    setCurrentIndex(currentIndex + 1);
  }

  function updateStats(type: 'call' | 'reached' | 'notReached' | 'appointment') {
    const nextSession = {
      ...session,
      calls: (session?.calls || 0) + 1,
      reached: (session?.reached || 0) + (type === 'reached' ? 1 : 0),
      notReached: (session?.notReached || 0) + (type === 'notReached' ? 1 : 0),
      appointments: (session?.appointments || 0) + (type === 'appointment' ? 1 : 0),
      startedAt: session?.startedAt || new Date().toISOString(),
    };

    setSession(nextSession);
  }

  function updateLead(
    status: LeadStatus,
    nextAction?: string,
    statType: 'call' | 'reached' | 'notReached' | 'appointment' = 'call'
  ) {
    if (!currentLead) return;

    const noteEntry = note.trim();
    const updatedLead: Lead = {
      ...currentLead,
      status,
      note: noteEntry
        ? `${currentLead.note ? `${currentLead.note}\n` : ''}${new Date().toLocaleString()} - ${noteEntry}`
        : currentLead.note,
      nextAction: nextAction || currentLead.nextAction,
      attempts: currentLead.attempts + 1,
      updatedAt: new Date().toISOString(),
    };

    setLeads(leads.map((lead) => (lead.id === currentLead.id ? updatedLead : lead)));
    updateStats(statType);
    goNext();
  }

  function setFollowUp(label: string, days: number) {
    if (!currentLead) return;

    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + days);

    const updatedLead: Lead = {
      ...currentLead,
      status: 'Nachfassen',
      note: note.trim()
        ? `${currentLead.note ? `${currentLead.note}\n` : ''}${new Date().toLocaleString()} - ${note.trim()}`
        : currentLead.note,
      nextAction: label,
      dueDate: dueDate.toISOString().slice(0, 10),
      attempts: currentLead.attempts + 1,
      updatedAt: new Date().toISOString(),
    };

    setLeads(leads.map((lead) => (lead.id === currentLead.id ? updatedLead : lead)));
    updateStats('call');
    goNext();
  }

  if (!currentLead) {
    return (
      <div className="sessionEmpty card">
        <CheckCircle size={48} />
        <h2>Keine Kontakte offen</h2>
        <p className="muted">Aktuell gibt es keine Kontakte für die Telefon-Session.</p>
      </div>
    );
  }

  return (
    <div className="session3">
      <section className="card sessionHero">
        <div>
          <p className="eyebrow">Telefon-Session 3.1</p>
          <h2>Ein Kontakt nach dem anderen.</h2>
          <p className="muted">
            Anrufen, Ergebnis setzen, Notiz speichern und direkt zum nächsten Kontakt.
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
            <p className="muted">
              {currentLead.contact}
              {currentLead.role ? ` · ${currentLead.role}` : ''}
            </p>
          </div>

          <span className="badge red">{currentLead.priority}</span>
        </div>

        <div className="sessionContactGrid">
          <div><span>Telefon</span><strong>{currentLead.phone || 'Keine Nummer'}</strong></div>
          <div><span>Mobil</span><strong>{currentLead.mobile || 'Keine Mobilnummer'}</strong></div>
          <div><span>E-Mail</span><strong>{currentLead.email || 'Keine E-Mail'}</strong></div>
          <div><span>Status</span><strong>{currentLead.status}</strong></div>
        </div>

        <textarea
          rows={4}
          placeholder="Notiz zum Gespräch eintragen..."
          value={note}
          onChange={(event) => setNote(event.target.value)}
        />

        <div className="sessionMainActions">
          <a className="btn btnPrimary" href={currentLead.phone ? `tel:${currentLead.phone}` : undefined}>
            <Phone size={20} />
            Jetzt anrufen
          </a>

          <button className="btn" onClick={() => updateLead('Kontakt hergestellt', 'Kontakt hergestellt', 'reached')}>
            <CheckCircle size={18} />
            Erreicht
          </button>

          <button className="btn" onClick={() => updateLead('Nicht erreicht 1', 'Erneut anrufen', 'notReached')}>
            <XCircle size={18} />
            Nicht erreicht
          </button>

          <button className="btn" onClick={() => updateLead('Mail 1 gesendet', 'Mail gesendet', 'call')}>
            <Mail size={18} />
            Mail
          </button>

          <button className="btn" onClick={() => setFollowUp('Später erneut anrufen', 2)}>
            <SkipForward size={18} />
            Später
          </button>
        </div>
      </section>

      <section className="sessionGrid">
        <div className="card">
          <p className="eyebrow">Wiedervorlage</p>
          <h3>Nächster Schritt</h3>

          <div className="sessionQuickDates">
            <button className="btn" onClick={() => setFollowUp('Heute erneut anrufen', 0)}>
              <Clock size={16} />
              Heute
            </button>

            <button className="btn" onClick={() => setFollowUp('Morgen erneut anrufen', 1)}>
              <Calendar size={16} />
              Morgen
            </button>

            <button className="btn" onClick={() => setFollowUp('Nächste Woche anrufen', 7)}>
              <Calendar size={16} />
              Nächste Woche
            </button>
          </div>
        </div>

        <div className="card">
          <p className="eyebrow">Qualifizierung</p>
          <h3>Kontakt bewerten</h3>

          <div className="sessionQuickDates">
            <button className="btn btnPrimary" onClick={() => updateLead('Termin', 'Termin vereinbart', 'appointment')}>
              <CheckCircle size={16} />
              Termin
            </button>

            <button className="btn" onClick={() => updateLead('Verloren', 'Kein Interesse', 'call')}>
              <XCircle size={16} />
              Kein Interesse
            </button>

            <button className="btn" onClick={() => updateLead('Gewonnen', 'Kontakt gewonnen', 'reached')}>
              <ChevronRight size={16} />
              Gewonnen
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
