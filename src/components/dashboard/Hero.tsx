import { Phone, Target, TrendingUp } from 'lucide-react';

type HeroProps = {
  onSession: () => void;
};

export function Hero({ onSession }: HeroProps) {
  return (
    <section className="awHero card awHero31">
      <div className="awHeroContent">
        <p className="eyebrow">AKQUISE WOLF 3.1</p>

        <h2>
          Lead Engine.
          <br />
          <span>Network Engine.</span>
        </h2>

        <p className="muted">
          Dein Cockpit für aktive Akquise, schnelle Telefon-Sessions und
          systematischen Netzwerkaufbau.
        </p>

        <div className="awHeroMiniStats">
          <div>
            <Phone size={19} />
            <strong>15% mehr</strong>
            <span>als gestern</span>
          </div>

          <div>
            <Target size={19} />
            <strong>Tagesziel</strong>
            <span>120 Anrufe</span>
          </div>

          <div>
            <TrendingUp size={19} />
            <strong>43%</strong>
            <span>Quote</span>
          </div>
        </div>

        <button className="btn btnPrimary awHeroMainButton" onClick={onSession}>
          <Phone size={20} />
          Telefon-Session starten
        </button>
      </div>

      <div className="awHeroWolf">
        <img src="/alpha-wolf.png" alt="Akquise Wolf" />
      </div>
    </section>
  );
}
