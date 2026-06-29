import { ActivityFeed } from '../components/dashboard/ActivityFeed';
import { GoalCard } from '../components/dashboard/GoalCard';
import { Hero } from '../components/dashboard/Hero';
import { KpiGrid } from '../components/dashboard/KpiGrid';
import { LeadPipeline } from '../components/dashboard/LeadPipeline';
import { NetworkPipeline } from '../components/dashboard/NetworkPipeline';
import { PerformanceRing } from '../components/dashboard/PerformanceRing';
import { TodayCalls } from '../components/dashboard/TodayCalls';

export function Dashboard({ onSession }: { onSession: () => void }) {
  return (
    <div className="awDashboard">
      <Hero onSession={onSession} />

      <KpiGrid />

      <div className="awDashboardGrid">
        <LeadPipeline />
        <NetworkPipeline />
      </div>

      <div className="awDashboardGrid awDashboardGridWide">
        <TodayCalls />

        <div className="awSideStack">
          <GoalCard />
          <PerformanceRing />
        </div>
      </div>

      <ActivityFeed />
    </div>
  );
}
