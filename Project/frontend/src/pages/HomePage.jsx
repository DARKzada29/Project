import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaTools, FaWrench, FaCar, FaOilCan, FaCogs, FaTachometerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HeroSection = styled.section`
  position: relative;
  height: 80vh;
  min-height: 500px;
  display: flex;
  align-items: center;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
                url('/src/assets/hero-bg.jpg') center/cover no-repeat;
    z-index: -1;
  }
  
  @media (max-width: 768px) {
    height: 70vh;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  width: 100%;
  color: var(--text);
  z-index: 1;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  
  span {
    color: var(--secondary);
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  max-width: 600px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const HeroButton = styled(motion.button)`
  background-color: var(--secondary);
  color: var(--text);
  padding: 0.8rem 2rem;
  border-radius: var(--border-radius);
  font-weight: 600;
  font-size: 1rem;
  transition: var(--transition);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background-color: var(--accent);
    transform: translateY(-3px);
  }
`;

const ServicesSection = styled.section`
  padding: 5rem 0;
  background-color: var(--background);
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--text);
  
  span {
    color: var(--secondary);
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const ServiceCard = styled(motion.div)`
  background-color: var(--primary);
  border-radius: var(--border-radius);
  padding: 2rem;
  box-shadow: var(--shadow);
  transition: var(--transition);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ServiceIcon = styled.div`
  font-size: 3rem;
  color: var(--secondary);
  margin-bottom: 1.5rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text);
`;

const ServiceDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`;

const ServiceButton = styled(Link)`
  color: var(--secondary);
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: var(--transition);
  
  &:hover {
    color: var(--accent);
    transform: translateX(5px);
  }
`;

const AboutSection = styled.section`
  padding: 5rem 0;
  background-color: var(--primary);
`;

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutImage = styled(motion.div)`
  position: relative;
  height: 400px;
  border-radius: var(--border-radius);
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    width: 100%;
    height: 100%;
    border: 4px solid var(--secondary);
    border-radius: var(--border-radius);
    z-index: -1;
  }
  
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AboutTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--text);
  
  span {
    color: var(--secondary);
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const AboutDescription = styled(motion.p)`
  color: var(--text-secondary);
  margin-bottom: 2rem;
  line-height: 1.8;
`;

const AboutFeatures = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const AboutFeatureItem = styled(motion.li)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text);
  
  svg {
    color: var(--secondary);
  }
`;

const CTASection = styled.section`
  padding: 5rem 0;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), 
              url('/src/assets/cta-bg.jpg') center/cover no-repeat;
  text-align: center;
`;

const CTAContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const CTATitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--text);
  
  span {
    color: var(--secondary);
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CTADescription = styled(motion.p)`
  color: var(--text-secondary);
  margin-bottom: 2rem;
  font-size: 1.1rem;
`;

const CTAButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CTAPrimaryButton = styled(motion.button)`
  background-color: var(--secondary);
  color: var(--text);
  padding: 0.8rem 2rem;
  border-radius: var(--border-radius);
  font-weight: 600;
  font-size: 1rem;
  transition: var(--transition);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background-color: var(--accent);
    transform: translateY(-3px);
  }
`;

const CTASecondaryButton = styled(motion.button)`
  background-color: transparent;
  color: var(--text);
  padding: 0.8rem 2rem;
  border-radius: var(--border-radius);
  font-weight: 600;
  font-size: 1rem;
  transition: var(--transition);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: 2px solid var(--secondary);
  
  &:hover {
    background-color: var(--secondary);
    transform: translateY(-3px);
  }
`;

const HomePage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  return (
    <main>
      <HeroSection>
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Mecânica <span>JK</span> - Excelência em Serviços Automotivos
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Oferecemos serviços de alta qualidade para manter seu veículo em perfeitas condições. Confie em quem entende do assunto.
          </HeroSubtitle>
          <HeroButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <FaWrench /> Solicitar Orçamento
          </HeroButton>
        </HeroContent>
      </HeroSection>
      
      <ServicesSection>
        <SectionTitle>Nossos Principais <span>Serviços</span></SectionTitle>
        <ServicesGrid>
          <ServiceCard
            whileHover={{ y: -10 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <ServiceIcon>
              <FaOilCan />
            </ServiceIcon>
            <ServiceTitle>Troca de Óleo</ServiceTitle>
            <ServiceDescription>
              Realizamos troca de óleo com produtos de alta qualidade, garantindo maior vida útil para o motor do seu veículo.
            </ServiceDescription>
            <ServiceButton to="/servicos">
              Saiba mais
            </ServiceButton>
          </ServiceCard>
          
          <ServiceCard
            whileHover={{ y: -10 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <ServiceIcon>
              <FaCogs />
            </ServiceIcon>
            <ServiceTitle>Revisão Completa</ServiceTitle>
            <ServiceDescription>
              Revisão completa do veículo, verificando todos os componentes essenciais para garantir segurança e desempenho.
            </ServiceDescription>
            <ServiceButton to="/servicos">
              Saiba mais
            </ServiceButton>
          </ServiceCard>
          
          <ServiceCard
            whileHover={{ y: -10 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <ServiceIcon>
              <FaTachometerAlt />
            </ServiceIcon>
            <ServiceTitle>Diagnóstico Eletrônico</ServiceTitle>
            <ServiceDescription>
              Utilizamos equipamentos de última geração para identificar problemas eletrônicos no seu veículo com precisão.
            </ServiceDescription>
            <ServiceButton to="/servicos">
              Saiba mais
            </ServiceButton>
          </ServiceCard>
        </ServicesGrid>
      </ServicesSection>
      
      <AboutSection>
        <AboutContainer>
          <AboutImage
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src="/src/assets/about.jpg" alt="Mecânica Jk" />
          </AboutImage>
          
          <AboutContent>
            <AboutTitle
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Por que escolher a <span>Mecânica JK</span>?
            </AboutTitle>
            
            <AboutDescription
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Com mais de 1 anos de experiência no mercado, a Mecânica JK se destaca pela qualidade dos serviços e pelo compromisso com a satisfação dos clientes. Utilizamos peças originais e contamos com profissionais altamente qualificados.
            </AboutDescription>
            
            <AboutFeatures
              as={motion.ul}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <AboutFeatureItem variants={fadeInUp}>
                <FaTools /> Profissionais Qualificados
              </AboutFeatureItem>
              <AboutFeatureItem variants={fadeInUp}>
                <FaCar /> Atendimento Personalizado
              </AboutFeatureItem>
              <AboutFeatureItem variants={fadeInUp}>
                <FaWrench /> Garantia nos Serviços
              </AboutFeatureItem>
              <AboutFeatureItem variants={fadeInUp}>
                <FaCogs /> Equipamentos Modernos
              </AboutFeatureItem>
            </AboutFeatures>
            
            <HeroButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Conheça Nossa Equipe
            </HeroButton>
          </AboutContent>
        </AboutContainer>
      </AboutSection>
      
      <CTASection>
        <CTAContainer>
          <CTATitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Precisa de um <span>orçamento</span>?
          </CTATitle>
          
          <CTADescription
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Solicite um orçamento online e receba uma estimativa do valor do serviço. Tenha acesso a preços exclusivos.
          </CTADescription>
          
          <CTAButtons>
            <CTAPrimaryButton
              as={Link}
              to="/orcamento"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <FaWrench /> Solicitar Orçamento
            </CTAPrimaryButton>
            
            <CTASecondaryButton
              as={Link}
              to="/contato"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Fale Conosco
            </CTASecondaryButton>
          </CTAButtons>
        </CTAContainer>
      </CTASection>
    </main>
  );
};

export default HomePage;
