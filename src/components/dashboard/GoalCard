import { Flame, Target, Trophy } from 'lucide-react';

type GoalCardProps = {
  callsToday?: number;
  dailyGoal?: number;
};

export function GoalCard({
  callsToday = 42,
  dailyGoal = 120,
}: GoalCardProps) {
  const progress = Math.min(
    Math.round((callsToday / dailyGoal) * 100),
    100
  );

  const remaining = Math.max(dailyGoal - callsToday, 0);

  return (
    <section className="card awGoalCard">
      <div className="awSectionHeader">
        <div>
          <p className="eyebrow">Tagesziel</p>
          <h3>Heute zählt jeder Anruf</h3>
        </div>

        <Target size={26} />
      </div>

      <div className="awGoalNumbers">
        <strong>{callsToday}</strong>
        <span>/ {dailyGoal} Anrufe</span>
      </div>

      <div className="awGoalBar">
        <div
          className="awGoalProgress"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="awGoalFooter">
        <div>
          <Flame size={18} />
          <div>
            <strong>{remaining}</strong>
            <span>Noch bis zum Tagesziel</span>
          </div>
        </div>

        <div>
          <Trophy size={18} />
          <div>
            <strong>{progress}%</strong>
            <span>Fortschritt</span>
          </div>
        </div>
      </div>

      <div className="awGoalQuote">
        „Jeder Anruf bringt dich näher zum nächsten Abschluss.“
      </div>
    </section>
  );
}
