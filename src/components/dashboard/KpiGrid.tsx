import {
  CheckCircle,
  Clock,
  Download,
  Phone,
  Target,
  Upload,
} from 'lucide-react';

type KpiItem = {
  label: string;
  value: string | number;
  trend: string;
  icon: JSX.Element;
  color?: 'red' | 'green' | 'blue' | 'yellow';
};

const kpis: KpiItem[] = [
  {
    label: 'Anrufe heute',
    value: 42,
    trend: '120 Tagesziel',
    icon: <Phone size={20} />,
    color: 'red',
  },
  {
    label: 'Erreicht',
    value: 18,
    trend: '43% Quote',
    icon: <CheckCircle size={20} />,
    color: 'green',
  },
  {
    label: 'Qualifiziert',
    value: 8,
    trend: 'bereit für Export',
    icon: <Target size={20} />,
    color: 'yellow',
  },
  {
    label: 'Wiedervorlagen',
    value: 6,
    trend: 'heute fällig',
    icon: <Clock size={20} />,
    color: 'red',
  },
  {
    label: 'Importiert',
    value: 126,
    trend: 'neue Kontakte',
    icon: <Upload size={20} />,
    color: 'blue',
  },
  {
    label: 'Exportbereit',
    value: 8,
    trend: 'qualifizierte Leads',
    icon: <Download size={20} />,
    color: 'green',
  },
];

export function KpiGrid() {
  return (
    <section className="awKpiGrid">
      {kpis.map((item) => (
        <div className={`awKpiCard ${item.color ?? 'red'}`} key={item.label}>
          <div className="awKpiIcon">{item.icon}</div>

          <div>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
            <p>{item.trend}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
