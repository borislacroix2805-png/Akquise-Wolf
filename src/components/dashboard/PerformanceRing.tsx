import { TrendingUp } from 'lucide-react';

type PerformanceRingProps = {
  value?: number;
  label?: string;
  subline?: string;
};

export function PerformanceRing({
  value = 43,
  label = 'Telefonquote',
  subline = '18 von 42 Kontakten erreicht',
}: PerformanceRingProps) {
  const safeValue = Math.min(Math.max(value, 0), 100);
  const radius = 78;
  const stroke = 14;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (safeValue / 100) * circumference;

  return (
    <section className="card awPerformanceRing awPerformanceRing31">
      <div className="awSectionHeader">
        <div>
          <p className="eyebrow">Performance</p>
          <h3>Telefonquote</h3>
        </div>

        <TrendingUp size={26} />
      </div>

      <div className="awSvgRingWrap">
        <svg className="awSvgRing" viewBox="0 0 200 200">
          <circle
            className="awSvgRingTrack"
            cx="100"
            cy="100"
            r={radius}
            strokeWidth={stroke}
          />

          <circle
            className="awSvgRingProgress"
            cx="100"
            cy="100"
            r={radius}
            strokeWidth={stroke}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </svg>

        <div className="awSvgRingCenter">
          <strong>{safeValue}%</strong>
          <span>{label}</span>
        </div>
      </div>

      <p className="awRingSubline">{subline}</p>
    </section>
  );
}
