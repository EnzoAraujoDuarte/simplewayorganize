import OrganogramChart from '@/components/OrganogramChart';
import Legend from '@/components/Legend';
import { organogramData } from '@/data/organogramData';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <div className="hero-section">
        <header className="header">
          <h1>{organogramData.company.name}</h1>
          <p>{organogramData.company.description}</p>
        </header>

        <section className="company-hero">
          <div className="company-hero__shapes">
            <span className="blob blob--one" />
            <span className="blob blob--two" />
            <span className="grid-overlay" />
          </div>
          
          <div className="company-hero__content">
            <div className="company-hero__header">
              <div className="company-hero__top-row">
                <div className="brand-chip">SIMPLEWAY</div>
                <Link href="/organograma" className="cta-button cta-button--small">
                  Ver Organograma
                </Link>
              </div>
              <h2 className="company-hero__title">Excelência em Atacado e Varejo</h2>
              <p className="company-hero__subtitle">
                A SimpleWay é uma companhia capixaba com presença estratégica em Colatina, Espírito Santo, atuando de forma integrada nos segmentos de atacado e varejo. Nosso posicionamento combina operação eficiente, curadoria de portfólio e tecnologia aplicada à cadeia de valor para entregar disponibilidade, preço competitivo e experiência superior em cada ponto de venda.
              </p>
            </div>

            <div className="company-hero__cards">
              <div className="company-card">
                <h3>Eficiência Operacional</h3>
                <p>Logística ágil, previsibilidade de estoque e SLA consistente suportados por processos padronizados.</p>
              </div>
              <div className="company-card">
                <h3>Tecnologia e Dados</h3>
                <p>Decisões guiadas por dados, automações e plataformas proprietárias para maximizar eficiência e margem.</p>
              </div>
              <div className="company-card">
                <h3>Parceria e Confiança</h3>
                <p>Compromisso de longo prazo com clientes e fornecedores, transparência e execução com qualidade.</p>
              </div>
              <div className="company-card">
                <h3>SAP ERP Integrado</h3>
                <p>Sistema SAP ERP integrado a aplicativo de vendas e e-commerce, proporcionando gestão unificada e visibilidade completa das operações.</p>
              </div>
              <div className="company-card">
                <h3>SimpleWay Tech</h3>
                <p>Braço de desenvolvimento interno focado em soluções tecnológicas e automações personalizadas para otimizar processos empresariais.</p>
              </div>
              <div className="company-card">
                <h3>"Simplicidade que Transforma"</h3>
                <p>Nosso lema reflete a busca constante por soluções que simplificam desafios complexos e os transformam em resultados excepcionais.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 