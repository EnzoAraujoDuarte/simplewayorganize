import OrganogramChart from '@/components/OrganogramChart';
import Legend from '@/components/Legend';
import { organogramData } from '@/data/organogramData';
import Link from 'next/link';

export default function Organograma() {
  return (
    <div className="container">
      <header className="header">
        <div className="header__content">
          <div className="header__text">
            <h1>{organogramData.company.name}</h1>
            <p>Organograma Corporativo</p>
          </div>
          <Link href="/" className="cta-button cta-button--small cta-button--outline">
            Voltar ao Início
          </Link>
        </div>
      </header>
      
      <main className="organogram-section">
        <OrganogramChart levels={organogramData.levels} />
        <Legend />
      </main>
    </div>
  );
}
