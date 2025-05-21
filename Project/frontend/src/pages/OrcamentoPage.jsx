import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaWrench, FaCar, FaCheckCircle, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const OrcamentoContainer = styled.div`
  min-height: calc(100vh - 70px);
  padding: 4rem 1rem;
  background-color: var(--background);
`;

const OrcamentoHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const OrcamentoTitle = styled(motion.h1)`
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

const OrcamentoDescription = styled(motion.p)`
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto;
  font-size: 1.1rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const OrcamentoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

const OrcamentoForm = styled(motion.form)`
  flex: 1;
  background-color: var(--primary);
  border-radius: var(--border-radius);
  padding: 2rem;
  box-shadow: var(--shadow);
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const OrcamentoInfo = styled(motion.div)`
  flex: 1;
  background-color: var(--primary);
  border-radius: var(--border-radius);
  padding: 2rem;
  box-shadow: var(--shadow);
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text);
  font-weight: 500;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--border-radius);
  color: var(--text);
  font-size: 1rem;
  
  &:focus {
    border-color: var(--secondary);
    outline: none;
  }
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 0.75rem;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--border-radius);
  color: var(--text);
  font-size: 1rem;
  
  &:focus {
    border-color: var(--secondary);
    outline: none;
  }
  
  option {
    background-color: var(--primary);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--border-radius);
  color: var(--text);
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  
  &:focus {
    border-color: var(--secondary);
    outline: none;
  }
`;

const FormButton = styled(motion.button)`
  background-color: var(--secondary);
  color: var(--text);
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius);
  font-weight: 600;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  
  &:hover {
    background-color: var(--accent);
  }
`;

const WhatsAppButton = styled(motion.button)`
  background-color: #25D366;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius);
  font-weight: 600;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  
  &:hover {
    background-color: #128C7E;
  }
`;

const ServiceList = styled.div`
  margin-bottom: 2rem;
`;

const ServiceItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  &:last-child {
    border-bottom: none;
  }
`;

const ServiceIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text);
  font-size: 1.2rem;
  flex-shrink: 0;
`;

const ServiceInfo = styled.div`
  flex: 1;
`;

const ServiceTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 0.25rem;
`;

const ServiceDescription = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

const InfoTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 1.5rem;
`;

const InfoText = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const InfoList = styled.ul`
  list-style: none;
  margin-bottom: 1.5rem;
`;

const InfoItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  color: var(--text-secondary);
  
  svg {
    color: var(--secondary);
    font-size: 1rem;
  }
`;

const SuccessMessage = styled(motion.div)`
  background-color: rgba(0, 204, 102, 0.1);
  border: 1px solid var(--success);
  color: var(--success);
  padding: 1rem;
  border-radius: var(--border-radius);
  margin-bottom: 1.5rem;
  text-align: center;
`;

const OrcamentoPage = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    veiculo: '',
    modelo: '',
    ano: '',
    servico: '',
    mensagem: ''
  });
  
  const [showSuccess, setShowSuccess] = useState(false);
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Aqui seria a integração com o backend para envio do e-mail
    console.log('Dados do formulário:', formData);
    
    // Simulação de envio bem-sucedido
    setShowSuccess(true);
    
    // Limpar o formulário após alguns segundos
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        veiculo: '',
        modelo: '',
        ano: '',
        servico: '',
        mensagem: ''
      });
    }, 5000);
  };
  
  const handleWhatsAppSubmit = () => {
    // Formatar a mensagem para o WhatsApp
    const message = `
*Solicitação de Orçamento - JK Mecânica*
Nome: ${formData.nome}
Email: ${formData.email}
Telefone: ${formData.telefone}
Veículo: ${formData.veiculo}
Modelo: ${formData.modelo}
Ano: ${formData.ano}
Serviço: ${formData.servico}
Mensagem: ${formData.mensagem}
    `.trim();
    
    // Codificar a mensagem para URL
    const encodedMessage = encodeURIComponent(message);
    
    // Abrir o WhatsApp com a mensagem pré-preenchida
    // Substitua o número abaixo pelo número da oficina
    window.open(`https://wa.me/5500000000000?text=${encodedMessage}`, '_blank');
  };
  
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
  
  return (
    <OrcamentoContainer>
      <OrcamentoHeader>
        <OrcamentoTitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Solicite um <span>Orçamento</span>
        </OrcamentoTitle>
        <OrcamentoDescription
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Preencha o formulário abaixo para solicitar um orçamento personalizado para o seu veículo.
          Nossa equipe entrará em contato o mais breve possível.
        </OrcamentoDescription>
      </OrcamentoHeader>
      
      <OrcamentoContent>
        <OrcamentoForm
          as={motion.form}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          onSubmit={handleSubmit}
        >
          {showSuccess && (
            <SuccessMessage
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <FaCheckCircle /> Orçamento solicitado com sucesso! Em breve entraremos em contato.
            </SuccessMessage>
          )}
          
          <FormGroup>
            <FormLabel htmlFor="nome">Nome Completo</FormLabel>
            <FormInput 
              type="text" 
              id="nome" 
              name="nome" 
              value={formData.nome}
              onChange={handleChange}
              required 
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <FormInput 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="telefone">Telefone</FormLabel>
            <FormInput 
              type="tel" 
              id="telefone" 
              name="telefone" 
              value={formData.telefone}
              onChange={handleChange}
              required 
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="veiculo">Marca do Veículo</FormLabel>
            <FormInput 
              type="text" 
              id="veiculo" 
              name="veiculo" 
              value={formData.veiculo}
              onChange={handleChange}
              required 
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="modelo">Modelo</FormLabel>
            <FormInput 
              type="text" 
              id="modelo" 
              name="modelo" 
              value={formData.modelo}
              onChange={handleChange}
              required 
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="ano">Ano</FormLabel>
            <FormInput 
              type="text" 
              id="ano" 
              name="ano" 
              value={formData.ano}
              onChange={handleChange}
              required 
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="servico">Serviço Desejado</FormLabel>
            <FormSelect 
              id="servico" 
              name="servico" 
              value={formData.servico}
              onChange={handleChange}
              required
            >
              <option value="">Selecione um serviço</option>
              <option value="Troca de Óleo">Troca de Óleo</option>
              <option value="Revisão de Freios">Revisão de Freios</option>
              <option value="Alinhamento e Balanceamento">Alinhamento e Balanceamento</option>
              <option value="Diagnóstico Eletrônico">Diagnóstico Eletrônico</option>
              <option value="Manutenção de Bateria">Manutenção de Bateria</option>
              <option value="Manutenção do Ar Condicionado">Manutenção do Ar Condicionado</option>
              <option value="Outro">Outro</option>
            </FormSelect>
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="mensagem">Detalhes Adicionais</FormLabel>
            <FormTextarea 
              id="mensagem" 
              name="mensagem" 
              value={formData.mensagem}
              onChange={handleChange}
              placeholder="Descreva o problema ou forneça detalhes adicionais sobre o serviço desejado..."
            />
          </FormGroup>
          
          <div>
            <FormButton
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope /> Solicitar por E-mail
            </FormButton>
            
            <WhatsAppButton
              type="button"
              onClick={handleWhatsAppSubmit}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp /> Enviar via WhatsApp
            </WhatsAppButton>
          </div>
        </OrcamentoForm>
        
        <OrcamentoInfo
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          <InfoTitle>Por que solicitar um orçamento?</InfoTitle>
          <InfoText>
            Solicitar um orçamento é o primeiro passo para garantir que seu veículo receba o cuidado adequado.
            Na JK Mecânica, oferecemos orçamentos detalhados e transparentes para que você saiba exatamente o que esperar.
          </InfoText>
          
          <InfoList>
            <InfoItem>
              <FaCheckCircle /> Análise detalhada do problema
            </InfoItem>
            <InfoItem>
              <FaCheckCircle /> Preços justos e transparentes
            </InfoItem>
            <InfoItem>
              <FaCheckCircle /> Prazo estimado para conclusão do serviço
            </InfoItem>
            <InfoItem>
              <FaCheckCircle /> Recomendações de manutenção preventiva
            </InfoItem>
            <InfoItem>
              <FaCheckCircle /> Garantia em todos os serviços
            </InfoItem>
          </InfoList>
          
          <ServiceList>
            <InfoTitle>Serviços Populares</InfoTitle>
            
            <ServiceItem>
              <ServiceIcon>
                <FaWrench />
              </ServiceIcon>
              <ServiceInfo>
                <ServiceTitle>Revisão Completa</ServiceTitle>
                <ServiceDescription>Verificação de todos os sistemas essenciais do veículo.</ServiceDescription>
              </ServiceInfo>
            </ServiceItem>
            
            <ServiceItem>
              <ServiceIcon>
                <FaCar />
              </ServiceIcon>
              <ServiceInfo>
                <ServiceTitle>Diagnóstico Computadorizado</ServiceTitle>
                <ServiceDescription>Identificação precisa de problemas eletrônicos.</ServiceDescription>
              </ServiceInfo>
            </ServiceItem>
            
            <ServiceItem>
              <ServiceIcon>
                <FaWrench />
              </ServiceIcon>
              <ServiceInfo>
                <ServiceTitle>Troca de Óleo e Filtros</ServiceTitle>
                <ServiceDescription>Manutenção essencial para prolongar a vida útil do motor.</ServiceDescription>
              </ServiceInfo>
            </ServiceItem>
          </ServiceList>
        </OrcamentoInfo>
      </OrcamentoContent>
    </OrcamentoContainer>
  );
};

export default OrcamentoPage;
