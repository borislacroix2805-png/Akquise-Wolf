import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  label: string;
  value: string | number;
  trend?: string;
  color?: "red" | "green" | "blue" | "yellow";
};

export function KpiCard({
  icon,
  label,
  value,
  trend,
  color = "red",
}: Props) {
  return (
    <div className={`kpiCard ${color}`}>
      <div className="kpiTop">
        <div className="kpiIcon">
          {icon}
        </div>

        {trend && (
          <div className="kpiTrend">
            <ArrowUpRight size={14} />
            {trend}
          </div>
        )}
      </div>

      <div className="kpiContent">
        <span className="kpiLabel">{label}</span>

        <strong className="kpiValue">
          {value}
        </strong>
      </div>

      <div className="kpiGlow"></div>
    </div>
  );
}
