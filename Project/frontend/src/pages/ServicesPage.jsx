import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaOilCan, FaTools, FaCar, FaTachometerAlt, FaBatteryFull, FaSnowflake, FaWrench, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServicesContainer = styled.div`
  min-height: calc(100vh - 70px);
  padding: 4rem 1rem;
  background-color: var(--background);
`;

const ServicesHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const ServicesTitle = styled(motion.h1)`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 1rem;
  
  span {
    color: var(--secondary);
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ServicesDescription = styled(motion.p)`
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto;
  font-size: 1.1rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled(motion.div)`
  background-color: var(--primary);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ServiceImage = styled.div`
  height: 200px;
  background-color: #333;
  position: relative;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${ServiceCard}:hover & img {
    transform: scale(1.1);
  }
`;

const ServiceIcon = styled.div`
  position: absolute;
  bottom: -25px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text);
  font-size: 1.5rem;
  box-shadow: var(--shadow);
`;

const ServiceContent = styled.div`
  padding: 2rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  margin-bottom: 1.5rem;
`;

const ServiceFeature = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  color: var(--text-secondary);
  
  svg {
    color: var(--secondary);
    font-size: 1rem;
  }
`;

const ServiceButton = styled(motion.button)`
  background-color: var(--secondary);
  color: var(--text);
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius);
  font-weight: 600;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--accent);
  }
`;

const ServiceCTA = styled.div`
  background-color: var(--primary);
  padding: 4rem 1rem;
  margin-top: 4rem;
  text-align: center;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const CTATitle = styled(motion.h2)`
  font-size: 2rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 1rem;
  
  span {
    color: var(--secondary);
  }
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const CTADescription = styled(motion.p)`
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto 2rem;
  font-size: 1.1rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CTAButton = styled(motion.button)`
  background-color: var(--secondary);
  color: var(--text);
  padding: 1rem 2rem;
  border-radius: var(--border-radius);
  font-weight: 600;
  font-size: 1.1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--accent);
  }
`;

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: 'Troca de Óleo',
      description: 'Serviço completo de troca de óleo com produtos de alta qualidade para garantir o bom funcionamento do motor.',
      image: '/src/assets/oil-change.jpg',
      icon: <FaOilCan />,
      features: [
        'Óleo de alta qualidade',
        'Troca de filtro de óleo',
        'Verificação de níveis',
        'Diagnóstico básico'
      ]
    },
    {
      id: 2,
      title: 'Revisão de Freios',
      description: 'Revisão completa do sistema de freios para garantir a segurança e eficiência na frenagem do seu veículo.',
      image: '/src/assets/brake-service.jpg',
      icon: <FaTools />,
      features: [
        'Troca de pastilhas',
        'Verificação de discos',
        'Regulagem do freio de mão',
        'Verificação do fluido de freio'
      ]
    },
    {
      id: 3,
      title: 'Alinhamento e Balanceamento',
      description: 'Alinhamento e balanceamento das rodas para melhorar a dirigibilidade e aumentar a vida útil dos pneus.',
      image: '/src/assets/wheel-alignment.jpg',
      icon: <FaCar />,
      features: [
        'Alinhamento computadorizado',
        'Balanceamento de rodas',
        'Verificação da suspensão',
        'Rodízio de pneus'
      ]
    },
    {
      id: 4,
      title: 'Diagnóstico Eletrônico',
      description: 'Diagnóstico completo dos sistemas eletrônicos do veículo para identificar falhas e problemas.',
      image: '/src/assets/diagnostic.jpg',
      icon: <FaTachometerAlt />,
      features: [
        'Leitura de códigos de erro',
        'Verificação de sensores',
        'Análise de sistemas',
        'Relatório detalhado'
      ]
    },
    {
      id: 5,
      title: 'Manutenção de Bateria',
      description: 'Verificação e manutenção da bateria do seu veículo para evitar problemas de partida e sistema elétrico.',
      image: '/src/assets/battery.jpg',
      icon: <FaBatteryFull />,
      features: [
        'Teste de carga',
        'Limpeza de terminais',
        'Verificação do alternador',
        'Substituição quando necessário'
      ]
    },
    {
      id: 6,
      title: 'Manutenção do Ar Condicionado',
      description: 'Manutenção e recarga do sistema de ar condicionado para garantir o conforto térmico no interior do veículo.',
      image: '/src/assets/ac-service.jpg',
      icon: <FaSnowflake />,
      features: [
        'Recarga de gás',
        'Limpeza do sistema',
        'Verificação de vazamentos',
        'Troca de filtro de cabine'
      ]
    }
  ];
  
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
    <ServicesContainer>
      <ServicesHeader>
        <ServicesTitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Nossos <span>Serviços</span>
        </ServicesTitle>
        <ServicesDescription
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Oferecemos uma ampla gama de serviços de manutenção e reparo para manter seu veículo em perfeitas condições.
          Nossos técnicos são altamente qualificados e utilizam equipamentos de última geração.
        </ServicesDescription>
      </ServicesHeader>
      
      <ServicesGrid
        as={motion.div}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {services.map(service => (
          <ServiceCard
            key={service.id}
            variants={fadeInUp}
          >
            <ServiceImage>
              <img src={service.image} alt={service.title} />
              <ServiceIcon>
                {service.icon}
              </ServiceIcon>
            </ServiceImage>
            <ServiceContent>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <ServiceFeatures>
                {service.features.map((feature, index) => (
                  <ServiceFeature key={index}>
                    <FaCheckCircle /> {feature}
                  </ServiceFeature>
                ))}
              </ServiceFeatures>
              <ServiceButton
                as={Link}
                to="/orcamento"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Solicitar Orçamento
              </ServiceButton>
            </ServiceContent>
          </ServiceCard>
        ))}
      </ServicesGrid>
      
      <ServiceCTA>
        <CTATitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Não encontrou o <span>serviço</span> que procura?
        </CTATitle>
        <CTADescription
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Entre em contato conosco para discutir suas necessidades específicas. 
          Estamos sempre prontos para ajudar a manter seu veículo em perfeitas condições.
        </CTADescription>
        <CTAButton
          as={Link}
          to="/contato"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <FaWrench /> Fale Conosco
        </CTAButton>
      </ServiceCTA>
    </ServicesContainer>
  );
};

export default ServicesPage;
