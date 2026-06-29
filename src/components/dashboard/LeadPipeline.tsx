import { ArrowRight, Mail, Phone, Star, UserCheck, XCircle } from 'lucide-react';

const stages = [
  {
    label: 'Neu',
    value: 32,
    icon: <UserCheck size={18} />,
    className: 'red',
  },
  {
    label: 'Heute anrufen',
    value: 18,
    icon: <Phone size={18} />,
    className: 'red',
  },
  {
    label: 'Nicht erreicht',
    value: 14,
    icon: <XCircle size={18} />,
    className: 'yellow',
  },
  {
    label: 'Mail gesendet',
    value: 9,
    icon: <Mail size={18} />,
    className: 'blue',
  },
  {
    label: 'Qualifiziert',
    value: 8,
    icon: <Star size={18} />,
    className: 'green',
  },
];

export function LeadPipeline() {
  return (
    <section className="card awPipelineCard">
      <div className="awSectionHeader">
        <div>
          <p className="eyebrow">Lead Engine</p>
          <h3>Telefon-Pipeline</h3>
        </div>

        <span className="awSectionHint">Nur Akquise · keine Projekte</span>
      </div>

      <div className="awPipeline">
        {stages.map((stage, index) => (
          <div className={`awPipelineStage ${stage.className}`} key={stage.label}>
            <div className="awPipelineIcon">{stage.icon}</div>

            <span>{stage.label}</span>

            <strong>{stage.value}</strong>

            {index < stages.length - 1 && (
              <ArrowRight className="awPipelineArrow" size={18} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
