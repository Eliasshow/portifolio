import React from 'react';
import { motion } from 'framer-motion';
import {
  Rocket,
  Store,
  ShoppingBag,
  Scissors,
  Zap,
  MonitorSmartphone,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import './App.css';

function App() {
  const whatsappNumber = '5551999279904';
  const whatsappMessage =
    'Olá! Vi seu portfólio e gostaria de conversar sobre a criação de um sistema/e-commerce personalizado.';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  // Variáveis de animação para o Framer Motion
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <div className="app-container">
      {/* Background Dinâmico Minimalista */}
      <div className="noise-bg"></div>
      <div className="glow-orb main-orb"></div>
      <div className="glow-orb secondary-orb"></div>

      <header className="navbar">
        <div className="logo">
          Dev<span className="accent-text">Future</span>
        </div>
        <nav>
          <a href="#projetos">Ecossistemas</a>
          <a href="#vantagens">Tecnologia</a>
        </nav>
      </header>

      <section className="hero">
        <motion.div 
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Nova Badge focada em Solução */}
          <motion.div variants={fadeUp} className="badge-animated">
            <span className="dot-pulse"></span>
            Soluções Digitais sob Medida
          </motion.div>
          
          {/* Novo Título focado na dor do cliente */}
          <motion.h1 variants={fadeUp} className="hero-title">
            Transforme suas ideias e <br />
            <span className="text-gradient shimmer-text">planilhas em Aplicativos.</span>
          </motion.h1>
          
          {/* Novo Subtítulo conversando com o pequeno/médio empreendedor */}
          <motion.p variants={fadeUp} className="hero-subtitle">
            Do catálogo online para a sua nova loja até um painel de gestão completo. 
            Crio sistemas modernos, rápidos e fáceis de usar para o seu negócio decolar.
          </motion.p>
          
          <motion.div variants={fadeUp} className="hero-buttons">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary glow-effect">
              Iniciar Projeto <Rocket size={18} />
            </a>
            <a href="#projetos" className="btn-secondary">
              Explorar Sistemas
            </a>
          </motion.div>
        </motion.div>
      </section>
      
      <section id="projetos" className="projects-section">
        <motion.h2
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
        >
          Sistemas em Destaque
        </motion.h2>

        {/* CARD PRINCIPAL (PROJETO MESTRE) */}
        <motion.div
          className="main-project-card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeUp}
          whileHover={{ y: -5, scale: 1.01 }}
          transition={{ duration: 0.4 }}
        >
          <div className="main-project-visual">
            <div className="glass-badge holographic">VENDAS VITÓRIA</div>
          </div>
          <div className="main-project-info">
            <span className="tag-highlight">PROJETO MESTRE</span>
            <h3>Plataforma E-commerce & BI</h3>
            <p>
              Ecossistema corporativo duplo integrado ao Supabase. Painel
              Administrativo de alta precisão (Recharts, BI, PDF) e Vitrine
              E-commerce de altíssima conversão.
            </p>
            <div className="tech-stack">
              <span>React</span>
              <span>Supabase</span>
              <span>Tailwind</span>
            </div>
            <a
              href="https://controle-de-vendas-demo-git-main-eliashow.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-4 glow-effect"
            >
              Acessar Sistema ao Vivo <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>

        {/* GRID SECUNDÁRIO */}
        <motion.div
          className="projects-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
        >
          {/* Card 1 - DOCE ENCANTO COM LINK */}
          <motion.div
            variants={fadeUp}
            className="project-card"
            whileHover="hover"
          >
            <div className="card-visual doceria">
              <motion.div
                className="icon-wrapper"
                variants={{ hover: { scale: 1.2, rotate: 5 } }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Store size={48} strokeWidth={1.5} color="#fff" />
              </motion.div>
            </div>
            <div className="card-info">
              <h3>Doce Encanto</h3>
              <p>
                Catálogo digital imersivo para confeitarias. UX focada no
                fechamento rápido de pedidos.
              </p>
              
              {/* O NOVO BOTÃO ENTRA AQUI */}
              <a 
                href="https://doceria-red.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-demo"
              >
                Ver Demo Interativa <ArrowRight size={16} />
              </a>
              
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={fadeUp}
            className="project-card"
            whileHover="hover"
          >
            <div className="card-visual burger">
              <motion.div
                className="icon-wrapper"
                variants={{ hover: { scale: 1.2, rotate: -5 } }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <ShoppingBag size={48} strokeWidth={1.5} color="#fff" />
              </motion.div>
            </div>
            <div className="card-info">
              <h3>Burger Delivery</h3>
              <p>
                Automação de cardápio com roteamento de taxas e gestão de
                cozinha em tempo real.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={fadeUp}
            className="project-card"
            whileHover="hover"
          >
            <div className="card-visual barber">
              <motion.div
                className="icon-wrapper"
                variants={{ hover: { scale: 1.2, rotate: 5 } }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Scissors size={48} strokeWidth={1.5} color="#fff" />
              </motion.div>
            </div>
            <div className="card-info">
              <h3>Barber Booking</h3>
              <p>
                Agenda inteligente para estúdios premium com controle de
                fidelidade e CRM.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Seção de Vantagens com Ícones */}
      <section id="vantagens" className="features-section">
        <motion.div
          className="features-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="feature-card">
            <Zap size={32} className="feature-icon" />
            <h3>Hyper Performance</h3>
            <p>
              Load instantâneo e arquitetura otimizada para retenção máxima de
              usuários.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="feature-card">
            <MonitorSmartphone size={32} className="feature-icon" />
            <h3>PWA Nativo</h3>
            <p>
              Sem burocracia de App Stores. Seu cliente instala o sistema direto
              pelo navegador.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="feature-card">
            <ShieldCheck size={32} className="feature-icon" />
            <h3>Cloud & Segurança</h3>
            <p>
              Bancos de dados blindados e hospedagem serverless com
              escalabilidade global.
            </p>
          </motion.div>
        </motion.div>
      </section>

      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} DevFuture. Elevando negócios ao
          ápice da tecnologia.
        </p>
      </footer>
    </div>
  );
}

export default App;