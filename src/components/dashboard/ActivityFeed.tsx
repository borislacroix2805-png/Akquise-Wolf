import {
  CheckCircle,
  Download,
  Mail,
  Phone,
  RefreshCw,
  Star,
} from 'lucide-react';

const activities = [
  {
    type: 'call',
    title: 'Meyer Bedachungen erreicht',
    detail: 'Lead wurde telefonisch erreicht und für Wiedervorlage markiert.',
    time: 'vor 8 Min.',
    icon: <Phone size={17} />,
    color: 'red',
  },
  {
    type: 'qualified',
    title: 'Hausverwaltung Nord qualifiziert',
    detail: 'Kontakt ist exportbereit für das externe CRM.',
    time: 'vor 21 Min.',
    icon: <Star size={17} />,
    color: 'green',
  },
  {
    type: 'mail',
    title: 'Mail 1 gesendet',
    detail: 'Automatische Nachfassmail nach nicht erreichtem Kontakt.',
    time: 'vor 36 Min.',
    icon: <Mail size={17} />,
    color: 'blue',
  },
  {
    type: 'import',
    title: 'CSV-Import abgeschlossen',
    detail: '126 neue Kontakte wurden in die Lead Engine übernommen.',
    time: 'heute 08:42',
    icon: <RefreshCw size={17} />,
    color: 'yellow',
  },
  {
    type: 'export',
    title: '8 qualifizierte Leads exportiert',
    detail: 'Export wurde als Excel-Datei bereitgestellt.',
    time: 'gestern 17:10',
    icon: <Download size={17} />,
    color: 'green',
  },
];

export function ActivityFeed() {
  return (
    <section className="card awActivityFeed">
      <div className="awSectionHeader">
        <div>
          <p className="eyebrow">Live Aktivität</p>
          <h3>Akquise-Verlauf</h3>
        </div>

        <span className="awSectionHint">
          Telefonie · Import · Export · Qualifizierung
        </span>
      </div>

      <div className="awActivityList">
        {activities.map((activity) => (
          <div className="awActivityItem" key={`${activity.type}-${activity.title}`}>
            <div className={`awActivityIcon ${activity.color}`}>
              {activity.icon}
            </div>

            <div className="awActivityContent">
              <div>
                <strong>{activity.title}</strong>
                <span>{activity.time}</span>
              </div>

              <p>{activity.detail}</p>
            </div>

            <CheckCircle className="awActivityCheck" size={18} />
          </div>
        ))}
      </div>
    </section>
  );
}
