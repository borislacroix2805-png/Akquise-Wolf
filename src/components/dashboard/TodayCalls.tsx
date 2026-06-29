import {
  ArrowRight,
  Building2,
  Clock3,
  Phone,
  Star,
} from 'lucide-react';

const todayCalls = [
  {
    company: 'Meyer Bedachungen',
    contact: 'Thomas Meyer',
    priority: 'A',
    time: '09:00',
  },
  {
    company: 'Hausverwaltung Nord',
    contact: 'Sabine Krüger',
    priority: 'A',
    time: '09:30',
  },
  {
    company: 'Architekturbüro Hansen',
    contact: 'Jan Hansen',
    priority: 'B',
    time: '10:00',
  },
  {
    company: 'Elektro Petersen',
    contact: 'Peter Petersen',
    priority: 'B',
    time: '10:30',
  },
  {
    company: 'Immobilien Küste',
    contact: 'Nicole Braun',
    priority: 'C',
    time: '11:00',
  },
];

export function TodayCalls() {
  return (
    <section className="card awTodayCalls">
      <div className="awSectionHeader">
        <div>
          <p className="eyebrow">Heute zuerst</p>
          <h3>Anrufliste</h3>
        </div>

        <button className="btn btnPrimary">
          <Phone size={18} />
          Telefon-Session starten
        </button>
      </div>

      <div className="awTodayList">
        {todayCalls.map((lead) => (
          <div className="awTodayRow" key={lead.company}>
            <div className={`awPriority ${lead.priority}`}>
              <Star size={14} />
              {lead.priority}
            </div>

            <div className="awTodayCompany">
              <Building2 size={18} />
              <div>
                <strong>{lead.company}</strong>
                <span>{lead.contact}</span>
              </div>
            </div>

            <div className="awTodayTime">
              <Clock3 size={16} />
              {lead.time}
            </div>

            <button className="btn">
              <Phone size={16} />
              Anrufen
            </button>

            <button className="btn">
              <ArrowRight size={16} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
