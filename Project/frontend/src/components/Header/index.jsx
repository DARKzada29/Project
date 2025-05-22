import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaTools, FaWrench, FaCar, FaBars, FaTimes, FaUser, FaShoppingCart, FaSignOutAlt, FaHome, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const HeaderContainer = styled(motion.header)`
  background-color: var(--primary);
  box-shadow: var(--shadow);
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 0.5rem 0;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--accent);
    
    span {
      color: var(--secondary);
    }
    
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
  
  svg {
    color: var(--secondary);
    font-size: 1.8rem;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  max-width: 300px;
  height: 100vh;
  background-color: var(--primary);
  padding: 2rem 1rem;
  z-index: 200;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.3);
  
  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.5rem;
    color: var(--text);
  }
`;

const MobileNavLinks = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 3rem;
`;

const NavItem = styled(motion.div)`
  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text);
    font-weight: 500;
    transition: var(--transition);
    
    &:hover {
      color: var(--secondary);
    }
    
    svg {
      font-size: 1.2rem;
    }
  }
`;

const MenuButton = styled.button`
  display: none;
  font-size: 1.5rem;
  color: var(--text);
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const ActionButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--secondary);
  color: var(--text);
  border-radius: var(--border-radius);
  padding: 0.5rem;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--accent);
    transform: translateY(-2px);
  }
  
  svg {
    font-size: 1.2rem;
  }
  
  @media (max-width: 768px) {
    padding: 0.4rem;
    
    svg {
      font-size: 1rem;
    }
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text);
  
  span {
    font-weight: 500;
    display: none;
    
    @media (min-width: 992px) {
      display: inline;
    }
  }
`;

const LogoutButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: var(--text);
  border-radius: var(--border-radius);
  padding: 0.5rem;
  transition: var(--transition);
  
  &:hover {
    color: var(--secondary);
  }
  
  svg {
    font-size: 1.2rem;
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 150;
  backdrop-filter: blur(3px);
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };
  
  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    },
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    }
  };
  
  const overlayVariants = {
    closed: {
      opacity: 0,
      display: 'none'
    },
    open: {
      opacity: 1,
      display: 'block'
    }
  };
  
  const navItemVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 10
      }
    }
  };
  
  return (
    <HeaderContainer
      animate={{
        backgroundColor: scrolled ? 'rgba(26, 26, 26, 0.95)' : 'var(--primary)',
        boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.2)' : 'var(--shadow)'
      }}
    >
      <HeaderContent>
        <Logo
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FaWrench />
          <h1>JK <span>Mecânica</span></h1>
        </Logo>
        
        {/* Menu de navegação para desktop */}
        <NavLinks>
          <NavItem whileHover="hover" variants={navItemVariants}>
            <Link to="/">
              <FaHome /> Início
            </Link>
          </NavItem>
          <NavItem whileHover="hover" variants={navItemVariants}>
            <Link to="/servicos">
              <FaTools /> Serviços
            </Link>
          </NavItem>
          <NavItem whileHover="hover" variants={navItemVariants}>
            <Link to="/orcamento">
              <FaWrench /> Orçamento
            </Link>
          </NavItem>
        </NavLinks>
        
        <ActionButtons>
          {isAuthenticated() ? (
            <>
              <UserInfo>
                <FaUser />
                <span>{user?.name?.split(' ')[0]}</span>
              </UserInfo>
              <LogoutButton
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleLogout}
              >
                <FaSignOutAlt />
              </LogoutButton>
            </>
          ) : (
            <ActionButton
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link to="/login">
                <FaUser />
              </Link>
            </ActionButton>
          )}
          
          <ActionButton
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to="/carrinho">
              <FaShoppingCart />
            </Link>
          </ActionButton>
          
          {/* Botão de menu hambúrguer (apenas para mobile) */}
          <MenuButton onClick={toggleMenu}>
            <FaBars />
          </MenuButton>
        </ActionButtons>
      </HeaderContent>
      
      {/* Menu móvel */}
      <Overlay
        variants={overlayVariants}
        initial="closed"
        animate={isMenuOpen ? 'open' : 'closed'}
        onClick={toggleMenu}
      />
      
      <MobileMenu
        variants={menuVariants}
        initial="closed"
        animate={isMenuOpen ? 'open' : 'closed'}
      >
        <button className="close-btn" onClick={toggleMenu}>
          <FaTimes />
        </button>
        
        <MobileNavLinks>
          <NavItem whileHover="hover" variants={navItemVariants}>
            <Link to="/" onClick={toggleMenu}>
              <FaHome /> Início
            </Link>
          </NavItem>
          <NavItem whileHover="hover" variants={navItemVariants}>
            <Link to="/servicos" onClick={toggleMenu}>
              <FaTools /> Serviços
            </Link>
          </NavItem>
          <NavItem whileHover="hover" variants={navItemVariants}>
            <Link to="/orcamento" onClick={toggleMenu}>
              <FaWrench /> Orçamento
            </Link>
          </NavItem>
        
          {isAuthenticated() ? (
            <>
              <NavItem whileHover="hover" variants={navItemVariants}>
                <Link to="/Carrinho" onClick={toggleMenu}>
                  <FaUser /> Meu Perfil
                </Link>
              </NavItem>
              <NavItem whileHover="hover" variants={navItemVariants}>
                <Link to="#" onClick={handleLogout}>
                  <FaSignOutAlt /> Sair
                </Link>
              </NavItem>
            </>
          ) : (
            <NavItem whileHover="hover" variants={navItemVariants}>
              <Link to="/login" onClick={toggleMenu}>
                <FaUser /> Login / Cadastro
              </Link>
            </NavItem>
          )}
        </MobileNavLinks>
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header;
