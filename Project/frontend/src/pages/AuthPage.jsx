import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaUser, FaLock, FaEnvelope, FaPhone, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AuthContainer = styled.div`
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), 
              url('/src/assets/auth-bg.jpg') center/cover no-repeat;
`;

const AuthCard = styled(motion.div)`
  background-color: var(--primary);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  width: 100%;
  max-width: 500px;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const AuthHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const AuthTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 0.5rem;
  
  span {
    color: var(--secondary);
  }
`;

const AuthDescription = styled.p`
  color: var(--text-secondary);
`;

const AuthTabs = styled.div`
  display: flex;
  margin-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const AuthTab = styled.button`
  flex: 1;
  padding: 1rem;
  font-weight: 600;
  color: ${props => props.active ? 'var(--secondary)' : 'var(--text-secondary)'};
  border-bottom: 2px solid ${props => props.active ? 'var(--secondary)' : 'transparent'};
  transition: var(--transition);
  
  &:hover {
    color: ${props => props.active ? 'var(--secondary)' : 'var(--text)'};
  }
`;

const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  position: relative;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--border-radius);
  color: var(--text);
  font-size: 1rem;
  transition: var(--transition);
  
  &:focus {
    border-color: var(--secondary);
    outline: none;
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  &::placeholder {
    color: var(--text-secondary);
  }
`;

const FormIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
  color: var(--secondary);
  font-size: 1.2rem;
`;

const FormButton = styled(motion.button)`
  background-color: var(--secondary);
  color: var(--text);
  padding: 1rem;
  border-radius: var(--border-radius);
  font-weight: 600;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--accent);
  }
`;

const FormFooter = styled.div`
  margin-top: 1.5rem;
  text-align: center;
  color: var(--text-secondary);
  
  a {
    color: var(--secondary);
    font-weight: 600;
    transition: var(--transition);
    
    &:hover {
      color: var(--accent);
    }
  }
`;

const ErrorMessage = styled.div`
  background-color: rgba(255, 51, 51, 0.1);
  border: 1px solid var(--error);
  color: var(--error);
  padding: 0.75rem;
  border-radius: var(--border-radius);
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;

const SuccessMessage = styled.div`
  background-color: rgba(0, 204, 102, 0.1);
  border: 1px solid var(--success);
  color: var(--success);
  padding: 0.75rem;
  border-radius: var(--border-radius);
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;

const RememberMeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  
  label {
    color: var(--text-secondary);
    font-size: 0.9rem;
    cursor: pointer;
  }
  
  input {
    cursor: pointer;
  }
`;

const WelcomeMessage = styled.div`
  text-align: center;
  padding: 2rem 0;
  
  h3 {
    font-size: 1.8rem;
    color: var(--text);
    margin-bottom: 1rem;
    
    span {
      color: var(--secondary);
    }
  }
  
  p {
    color: var(--text-secondary);
    margin-bottom: 2rem;
  }
`;

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  
  const { user, login, isAuthenticated, loading } = useAuth();
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setError('');
    setSuccess('');
  };
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validação básica
    if (activeTab === 'register') {
      if (!formData.name || !formData.email || !formData.password || !formData.phone) {
        setError('Por favor, preencha todos os campos.');
        return;
      }
    } else {
      if (!formData.email || !formData.password) {
        setError('Por favor, preencha todos os campos.');
        return;
      }
    }
    
    // Simulação de envio para o backend
    setError('');
    
    // Simulação de resposta do backend
    setTimeout(() => {
      if (activeTab === 'login') {
        // Simular login bem-sucedido
        const userData = {
          _id: '123456',
          name: 'Usuário Teste',
          email: formData.email,
          role: 'client',
          token: 'jwt-token-example'
        };
        
        login(userData, rememberMe);
        setSuccess('Login realizado com sucesso!');
      } else {
        // Simular cadastro bem-sucedido
        setSuccess('Cadastro realizado com sucesso! Faça login para continuar.');
        setActiveTab('login');
      }
    }, 1000);
    
    // Aqui seria feita a integração real com o backend
    // const endpoint = activeTab === 'login' ? '/api/users/login' : '/api/users/register';
    // const data = activeTab === 'login' ? 
    //   { email: formData.email, password: formData.password } : 
    //   formData;
    // fetch(endpoint, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data)
    // })
    // .then(res => res.json())
    // .then(data => {
    //   if (data.token) {
    //     login(data, rememberMe);
    //     setSuccess(activeTab === 'login' ? 'Login realizado com sucesso!' : 'Cadastro realizado com sucesso!');
    //   } else {
    //     setError(data.message);
    //   }
    // })
    // .catch(err => setError('Erro ao conectar com o servidor.'));
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
  
  // Se estiver carregando, mostrar nada ou um loader
  if (loading) {
    return null;
  }
  
  // Se já estiver autenticado, redirecionar para a página inicial
  if (isAuthenticated()) {
    return <Navigate to="/" />;
  }
  
  return (
    <AuthContainer>
      <AuthCard
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <AuthHeader>
          <AuthTitle>
            <span>DARK</span> Mecânica
          </AuthTitle>
          <AuthDescription>
            {activeTab === 'login' ? 'Faça login para acessar sua conta' : 'Crie sua conta para solicitar serviços'}
          </AuthDescription>
        </AuthHeader>
        
        <AuthTabs>
          <AuthTab 
            active={activeTab === 'login'} 
            onClick={() => handleTabChange('login')}
          >
            Login
          </AuthTab>
          <AuthTab 
            active={activeTab === 'register'} 
            onClick={() => handleTabChange('register')}
          >
            Cadastro
          </AuthTab>
        </AuthTabs>
        
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <SuccessMessage>{success}</SuccessMessage>}
        
        <AuthForm onSubmit={handleSubmit}>
          {activeTab === 'register' && (
            <FormGroup>
              <FormIcon>
                <FaUser />
              </FormIcon>
              <FormInput 
                type="text" 
                name="name" 
                placeholder="Nome completo"
                value={formData.name}
                onChange={handleChange}
              />
            </FormGroup>
          )}
          
          <FormGroup>
            <FormIcon>
              <FaEnvelope />
            </FormIcon>
            <FormInput 
              type="email" 
              name="email" 
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
            />
          </FormGroup>
          
          <FormGroup>
            <FormIcon>
              <FaLock />
            </FormIcon>
            <FormInput 
              type="password" 
              name="password" 
              placeholder="Senha"
              value={formData.password}
              onChange={handleChange}
            />
          </FormGroup>
          
          {activeTab === 'register' && (
            <FormGroup>
              <FormIcon>
                <FaPhone />
              </FormIcon>
              <FormInput 
                type="tel" 
                name="phone" 
                placeholder="Telefone"
                value={formData.phone}
                onChange={handleChange}
              />
            </FormGroup>
          )}
          
          {activeTab === 'login' && (
            <RememberMeContainer>
              <input 
                type="checkbox" 
                id="rememberMe" 
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label htmlFor="rememberMe">Permanecer conectado</label>
            </RememberMeContainer>
          )}
          
          <FormButton
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
          >
            {activeTab === 'login' ? (
              <>
                <FaSignInAlt /> Entrar
              </>
            ) : (
              <>
                <FaUserPlus /> Cadastrar
              </>
            )}
          </FormButton>
        </AuthForm>
        
        <FormFooter>
          {activeTab === 'login' ? (
            <>
              Não tem uma conta? <Link to="#" onClick={() => handleTabChange('register')}>Cadastre-se</Link>
            </>
          ) : (
            <>
              Já tem uma conta? <Link to="#" onClick={() => handleTabChange('login')}>Faça login</Link>
            </>
          )}
        </FormFooter>
      </AuthCard>
    </AuthContainer>
  );
};

export default AuthPage;
