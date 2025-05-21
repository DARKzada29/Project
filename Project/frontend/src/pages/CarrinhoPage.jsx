import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaTrash, FaPlus, FaMinus, FaCheck, FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const CarrinhoContainer = styled.div`
  min-height: calc(100vh - 70px);
  padding: 4rem 1rem;
  background-color: var(--background);
`;

const CarrinhoHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const CarrinhoTitle = styled(motion.h1)`
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

const CarrinhoDescription = styled(motion.p)`
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto;
  font-size: 1.1rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CarrinhoContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CarrinhoItems = styled(motion.div)`
  background-color: var(--primary);
  border-radius: var(--border-radius);
  padding: 2rem;
  box-shadow: var(--shadow);
`;

const CarrinhoItem = styled(motion.div)`
  display: flex;
  align-items: center;
  padding: 1.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const ItemImage = styled.div`
  width: 80px;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: var(--border-radius);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.5rem;
  
  svg {
    font-size: 2rem;
    color: var(--secondary);
  }
  
  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const ItemInfo = styled.div`
  flex: 1;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ItemTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 0.5rem;
`;

const ItemDescription = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const ItemPrice = styled.span`
  color: var(--secondary);
  font-weight: 600;
`;

const ItemActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const QuantityButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--text);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--secondary);
  }
`;

const QuantityValue = styled.span`
  font-weight: 600;
  color: var(--text);
  min-width: 30px;
  text-align: center;
`;

const RemoveButton = styled.button`
  color: var(--error);
  background: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: var(--transition);
  
  &:hover {
    opacity: 0.8;
  }
`;

const EmptyCart = styled.div`
  text-align: center;
  padding: 3rem 0;
  color: var(--text-secondary);
  
  svg {
    font-size: 4rem;
    color: var(--secondary);
    margin-bottom: 1.5rem;
    opacity: 0.5;
  }
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--text);
  }
  
  p {
    margin-bottom: 2rem;
  }
`;

const CarrinhoSummary = styled(motion.div)`
  background-color: var(--primary);
  border-radius: var(--border-radius);
  padding: 2rem;
  box-shadow: var(--shadow);
  position: sticky;
  top: 100px;
`;

const SummaryTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 1.5rem;
  
  span {
    color: var(--secondary);
  }
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  &:last-of-type {
    border-bottom: none;
  }
`;

const SummaryLabel = styled.span`
  color: var(--text-secondary);
`;

const SummaryValue = styled.span`
  color: var(--text);
  font-weight: 600;
`;

const SummaryTotal = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 0;
  margin-top: 1rem;
  border-top: 2px solid rgba(255, 255, 255, 0.1);
`;

const SummaryTotalLabel = styled.span`
  color: var(--text);
  font-weight: 600;
  font-size: 1.2rem;
`;

const SummaryTotalValue = styled.span`
  color: var(--secondary);
  font-weight: 700;
  font-size: 1.2rem;
`;

const CheckoutButton = styled(motion.button)`
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
  width: 100%;
  margin-top: 2rem;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--accent);
  }
`;

const ContinueShoppingButton = styled(motion.button)`
  background-color: transparent;
  color: var(--text);
  padding: 1rem;
  border-radius: var(--border-radius);
  font-weight: 600;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  margin-top: 1rem;
  border: 2px solid var(--secondary);
  transition: var(--transition);
  
  &:hover {
    background-color: rgba(255, 77, 0, 0.1);
  }
`;

const CarrinhoPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Troca de Óleo',
      description: 'Troca de óleo completa com filtro de óleo incluso',
      price: 150,
      quantity: 1
    },
    {
      id: 2,
      name: 'Revisão de Freios',
      description: 'Verificação e ajuste do sistema de freios',
      price: 200,
      quantity: 1
    },
    {
      id: 3,
      name: 'Alinhamento e Balanceamento',
      description: 'Alinhamento e balanceamento das 4 rodas',
      price: 180,
      quantity: 1
    }
  ]);
  
  const handleQuantityChange = (id, change) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id 
          ? { ...item, quantity: Math.max(1, item.quantity + change) } 
          : item
      )
    );
  };
  
  const handleRemoveItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };
  
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };
  
  const calculateTax = () => {
    return calculateSubtotal() * 0.1; // 10% de taxa
  };
  
  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax();
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
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  return (
    <CarrinhoContainer>
      <CarrinhoHeader>
        <CarrinhoTitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Seu <span>Carrinho</span> de Serviços
        </CarrinhoTitle>
        <CarrinhoDescription
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Revise os serviços selecionados e confirme seu pedido para agendar com a Mecânica DARK.
        </CarrinhoDescription>
      </CarrinhoHeader>
      
      <CarrinhoContent>
        <CarrinhoItems
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {cartItems.length > 0 ? (
            cartItems.map(item => (
              <CarrinhoItem key={item.id} variants={fadeInUp}>
                <ItemImage>
                  <FaShoppingCart />
                </ItemImage>
                <ItemInfo>
                  <ItemTitle>{item.name}</ItemTitle>
                  <ItemDescription>{item.description}</ItemDescription>
                  <ItemPrice>R$ {item.price.toFixed(2)}</ItemPrice>
                </ItemInfo>
                <ItemActions>
                  <QuantityControl>
                    <QuantityButton onClick={() => handleQuantityChange(item.id, -1)}>
                      <FaMinus />
                    </QuantityButton>
                    <QuantityValue>{item.quantity}</QuantityValue>
                    <QuantityButton onClick={() => handleQuantityChange(item.id, 1)}>
                      <FaPlus />
                    </QuantityButton>
                  </QuantityControl>
                  <RemoveButton onClick={() => handleRemoveItem(item.id)}>
                    <FaTrash /> Remover
                  </RemoveButton>
                </ItemActions>
              </CarrinhoItem>
            ))
          ) : (
            <EmptyCart>
              <FaShoppingCart />
              <h3>Seu carrinho está vazio</h3>
              <p>Adicione serviços para continuar.</p>
              <ContinueShoppingButton
                as={Link}
                to="/servicos"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Serviços Disponíveis
              </ContinueShoppingButton>
            </EmptyCart>
          )}
        </CarrinhoItems>
        
        {cartItems.length > 0 && (
          <CarrinhoSummary
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <SummaryTitle>
              Resumo do <span>Pedido</span>
            </SummaryTitle>
            
            <SummaryItem>
              <SummaryLabel>Subtotal</SummaryLabel>
              <SummaryValue>R$ {calculateSubtotal().toFixed(2)}</SummaryValue>
            </SummaryItem>
            
            <SummaryItem>
              <SummaryLabel>Taxa de serviço (10%)</SummaryLabel>
              <SummaryValue>R$ {calculateTax().toFixed(2)}</SummaryValue>
            </SummaryItem>
            
            <SummaryTotal>
              <SummaryTotalLabel>Total</SummaryTotalLabel>
              <SummaryTotalValue>R$ {calculateTotal().toFixed(2)}</SummaryTotalValue>
            </SummaryTotal>
            
            <CheckoutButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaCheck /> Finalizar Pedido
            </CheckoutButton>
            
            <ContinueShoppingButton
              as={Link}
              to="/servicos"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaArrowRight /> Continuar Comprando
            </ContinueShoppingButton>
          </CarrinhoSummary>
        )}
      </CarrinhoContent>
    </CarrinhoContainer>
  );
};

export default CarrinhoPage;
