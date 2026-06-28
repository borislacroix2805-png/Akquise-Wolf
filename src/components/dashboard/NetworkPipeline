import { ArrowRight, Building2, Handshake, Phone, Search, Sparkles } from 'lucide-react';

const stages = [
  {
    label: 'Gefunden',
    value: 24,
    icon: <Search size={18} />,
    className: 'blue',
  },
  {
    label: 'Erstkontakt',
    value: 12,
    icon: <Phone size={18} />,
    className: 'yellow',
  },
  {
    label: 'Kontakt hergestellt',
    value: 8,
    icon: <Handshake size={18} />,
    className: 'green',
  },
  {
    label: 'Potenzial',
    value: 6,
    icon: <Sparkles size={18} />,
    className: 'red',
  },
  {
    label: 'Kooperation',
    value: 3,
    icon: <Building2 size={18} />,
    className: 'green',
  },
];

export function NetworkPipeline() {
  return (
    <section className="card awPipelineCard">
      <div className="awSectionHeader">
        <div>
          <p className="eyebrow">Network Engine</p>
          <h3>Strategische Kontakte</h3>
        </div>

        <span className="awSectionHint">
          Partner · Recherche · Kooperationen
        </span>
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
