import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaUser, FaCar, FaHome, FaEdit, FaSave, FaPlus, FaTrash } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const ProfileContainer = styled.div`
  min-height: calc(100vh - 70px);
  padding: 4rem 1rem;
  background-color: var(--background);
`;

const ProfileHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const ProfileTitle = styled(motion.h1)`
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

const ProfileDescription = styled(motion.p)`
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto;
  font-size: 1.1rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

const ProfileSidebar = styled(motion.div)`
  flex: 1;
  max-width: 300px;
  background-color: var(--primary);
  border-radius: var(--border-radius);
  padding: 2rem;
  box-shadow: var(--shadow);
  align-self: flex-start;
  
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const ProfileMain = styled(motion.div)`
  flex: 2;
  background-color: var(--primary);
  border-radius: var(--border-radius);
  padding: 2rem;
  box-shadow: var(--shadow);
`;

const ProfileNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ProfileNavItem = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  border-radius: var(--border-radius);
  color: var(--text);
  font-weight: 500;
  transition: var(--transition);
  text-align: left;
  
  svg {
    color: var(--secondary);
    font-size: 1.2rem;
  }
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
  
  &.active {
    background-color: rgba(255, 255, 255, 0.1);
    border-left: 3px solid var(--secondary);
  }
`;

const ProfileAvatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: var(--secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  color: var(--text);
  font-size: 3rem;
`;

const ProfileUserName = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text);
  text-align: center;
  margin-bottom: 0.5rem;
`;

const ProfileUserEmail = styled.p`
  color: var(--text-secondary);
  text-align: center;
  margin-bottom: 2rem;
`;

const FormSection = styled.div`
  margin-bottom: 2rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const FormSectionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  svg {
    color: var(--secondary);
  }
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
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
  
  &:hover {
    background-color: var(--accent);
  }
`;

const VehicleCard = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  position: relative;
`;

const VehicleTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 1rem;
`;

const VehicleInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const VehicleInfoItem = styled.div`
  margin-bottom: 0.5rem;
  
  span {
    display: block;
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin-bottom: 0.25rem;
  }
  
  strong {
    color: var(--text);
  }
`;

const VehicleActions = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  gap: 0.5rem;
`;

const VehicleActionButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--text);
  transition: var(--transition);
  
  &:hover {
    background-color: var(--secondary);
  }
  
  &.delete {
    &:hover {
      background-color: #e74c3c;
    }
  }
`;

const AddButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: rgba(255, 255, 255, 0.05);
  color: var(--text);
  padding: 1rem;
  border-radius: var(--border-radius);
  font-weight: 500;
  width: 100%;
  transition: var(--transition);
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  svg {
    color: var(--secondary);
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

const ErrorMessage = styled(motion.div)`
  background-color: rgba(231, 76, 60, 0.1);
  border: 1px solid #e74c3c;
  color: #e74c3c;
  padding: 1rem;
  border-radius: var(--border-radius);
  margin-bottom: 1.5rem;
  text-align: center;
`;

const ProfilePage = () => {
  const { user, updateUser, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  const [activeTab, setActiveTab] = useState('personal');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: {
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
      zipcode: ''
    },
    vehicles: []
  });
  
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editingVehicleIndex, setEditingVehicleIndex] = useState(-1);
  const [newVehicle, setNewVehicle] = useState({
    brand: '',
    model: '',
    year: '',
    plate: ''
  });
  
  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/login');
      return;
    }
    
    if (user) {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        phone: user.phone || '',
        address: {
          street: user.address?.street || '',
          number: user.address?.number || '',
          complement: user.address?.complement || '',
          neighborhood: user.address?.neighborhood || '',
          city: user.address?.city || '',
          state: user.address?.state || '',
          zipcode: user.address?.zipcode || ''
        },
        vehicles: user.vehicles || []
      });
    }
  }, [user, isAuthenticated, navigate]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData({
        ...formData,
        [parent]: {
          ...formData[parent],
          [child]: value
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };
  
  const handleVehicleChange = (e) => {
    const { name, value } = e.target;
    setNewVehicle({
      ...newVehicle,
      [name]: value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    
    try {
      await updateUser(formData);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Erro ao atualizar perfil');
    }
  };
  
  const handleAddVehicle = () => {
    if (editingVehicleIndex >= 0) {
      // Editando veículo existente
      const updatedVehicles = [...formData.vehicles];
      updatedVehicles[editingVehicleIndex] = newVehicle;
      
      setFormData({
        ...formData,
        vehicles: updatedVehicles
      });
      
      setEditingVehicleIndex(-1);
    } else {
      // Adicionando novo veículo
      setFormData({
        ...formData,
        vehicles: [...formData.vehicles, newVehicle]
      });
    }
    
    setNewVehicle({
      brand: '',
      model: '',
      year: '',
      plate: ''
    });
    
    setIsEditing(false);
  };
  
  const handleEditVehicle = (index) => {
    setNewVehicle(formData.vehicles[index]);
    setEditingVehicleIndex(index);
    setIsEditing(true);
  };
  
  const handleDeleteVehicle = (index) => {
    const updatedVehicles = formData.vehicles.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      vehicles: updatedVehicles
    });
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
    <ProfileContainer>
      <ProfileHeader>
        <ProfileTitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Meu <span>Perfil</span>
        </ProfileTitle>
        <ProfileDescription
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Gerencie suas informações pessoais, endereço e veículos cadastrados.
        </ProfileDescription>
      </ProfileHeader>
      
      <ProfileContent>
        <ProfileSidebar
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <ProfileAvatar>
            <FaUser />
          </ProfileAvatar>
          <ProfileUserName>{formData.name}</ProfileUserName>
          <ProfileUserEmail>{formData.email}</ProfileUserEmail>
          
          <ProfileNav>
            <ProfileNavItem 
              className={activeTab === 'personal' ? 'active' : ''}
              onClick={() => setActiveTab('personal')}
            >
              <FaUser /> Dados Pessoais
            </ProfileNavItem>
            <ProfileNavItem 
              className={activeTab === 'address' ? 'active' : ''}
              onClick={() => setActiveTab('address')}
            >
              <FaHome /> Endereço
            </ProfileNavItem>
            <ProfileNavItem 
              className={activeTab === 'vehicles' ? 'active' : ''}
              onClick={() => setActiveTab('vehicles')}
            >
              <FaCar /> Meus Veículos
            </ProfileNavItem>
          </ProfileNav>
        </ProfileSidebar>
        
        <ProfileMain
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          {showSuccess && (
            <SuccessMessage
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              Perfil atualizado com sucesso!
            </SuccessMessage>
          )}
          
          {errorMessage && (
            <ErrorMessage
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              {errorMessage}
            </ErrorMessage>
          )}
          
          {activeTab === 'personal' && (
            <FormSection>
              <FormSectionTitle>
                <FaUser /> Dados Pessoais
              </FormSectionTitle>
              
              <form onSubmit={handleSubmit}>
                <FormGrid>
                  <FormGroup>
                    <FormLabel htmlFor="name">Nome Completo</FormLabel>
                    <FormInput 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
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
                    <FormLabel htmlFor="phone">Telefone</FormLabel>
                    <FormInput 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      required 
                    />
                  </FormGroup>
                </FormGrid>
                
                <FormButton
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaSave /> Salvar Alterações
                </FormButton>
              </form>
            </FormSection>
          )}
          
          {activeTab === 'address' && (
            <FormSection>
              <FormSectionTitle>
                <FaHome /> Endereço
              </FormSectionTitle>
              
              <form onSubmit={handleSubmit}>
                <FormGrid>
                  <FormGroup>
                    <FormLabel htmlFor="address.street">Rua</FormLabel>
                    <FormInput 
                      type="text" 
                      id="address.street" 
                      name="address.street" 
                      value={formData.address.street}
                      onChange={handleChange}
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel htmlFor="address.number">Número</FormLabel>
                    <FormInput 
                      type="text" 
                      id="address.number" 
                      name="address.number" 
                      value={formData.address.number}
                      onChange={handleChange}
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel htmlFor="address.complement">Complemento</FormLabel>
                    <FormInput 
                      type="text" 
                      id="address.complement" 
                      name="address.complement" 
                      value={formData.address.complement}
                      onChange={handleChange}
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel htmlFor="address.neighborhood">Bairro</FormLabel>
                    <FormInput 
                      type="text" 
                      id="address.neighborhood" 
                      name="address.neighborhood" 
                      value={formData.address.neighborhood}
                      onChange={handleChange}
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel htmlFor="address.city">Cidade</FormLabel>
                    <FormInput 
                      type="text" 
                      id="address.city" 
                      name="address.city" 
                      value={formData.address.city}
                      onChange={handleChange}
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel htmlFor="address.state">Estado</FormLabel>
                    <FormInput 
                      type="text" 
                      id="address.state" 
                      name="address.state" 
                      value={formData.address.state}
                      onChange={handleChange}
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel htmlFor="address.zipcode">CEP</FormLabel>
                    <FormInput 
                      type="text" 
                      id="address.zipcode" 
                      name="address.zipcode" 
                      value={formData.address.zipcode}
                      onChange={handleChange}
                    />
                  </FormGroup>
                </FormGrid>
                
                <FormButton
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaSave /> Salvar Alterações
                </FormButton>
              </form>
            </FormSection>
          )}
          
          {activeTab === 'vehicles' && (
            <FormSection>
              <FormSectionTitle>
                <FaCar /> Meus Veículos
              </FormSectionTitle>
              
              {formData.vehicles.length > 0 ? (
                formData.vehicles.map((vehicle, index) => (
                  <VehicleCard key={index}>
                    <VehicleTitle>{vehicle.brand} {vehicle.model}</VehicleTitle>
                    <VehicleInfo>
                      <VehicleInfoItem>
                        <span>Marca</span>
                        <strong>{vehicle.brand}</strong>
                      </VehicleInfoItem>
                      <VehicleInfoItem>
                        <span>Modelo</span>
                        <strong>{vehicle.model}</strong>
                      </VehicleInfoItem>
                      <VehicleInfoItem>
                        <span>Ano</span>
                        <strong>{vehicle.year}</strong>
                      </VehicleInfoItem>
                      <VehicleInfoItem>
                        <span>Placa</span>
                        <strong>{vehicle.plate}</strong>
                      </VehicleInfoItem>
                    </VehicleInfo>
                    <VehicleActions>
                      <VehicleActionButton onClick={() => handleEditVehicle(index)}>
                        <FaEdit />
                      </VehicleActionButton>
                      <VehicleActionButton className="delete" onClick={() => handleDeleteVehicle(index)}>
                        <FaTrash />
                      </VehicleActionButton>
                    </VehicleActions>
                  </VehicleCard>
                ))
              ) : (
                <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                  Você ainda não possui veículos cadastrados.
                </p>
              )}
              
              {isEditing ? (
                <FormSection>
                  <FormSectionTitle>
                    {editingVehicleIndex >= 0 ? 'Editar Veículo' : 'Adicionar Veículo'}
                  </FormSectionTitle>
                  <FormGrid>
                    <FormGroup>
                      <FormLabel htmlFor="brand">Marca</FormLabel>
                      <FormInput 
                        type="text" 
                        id="brand" 
                        name="brand" 
                        value={newVehicle.brand}
                        onChange={handleVehicleChange}
                        required 
                      />
                    </FormGroup>
                    
                    <FormGroup>
                      <FormLabel htmlFor="model">Modelo</FormLabel>
                      <FormInput 
                        type="text" 
                        id="model" 
                        name="model" 
                        value={newVehicle.model}
                        onChange={handleVehicleChange}
                        required 
                      />
                    </FormGroup>
                    
                    <FormGroup>
                      <FormLabel htmlFor="year">Ano</FormLabel>
                      <FormInput 
                        type="text" 
                        id="year" 
                        name="year" 
                        value={newVehicle.year}
                        onChange={handleVehicleChange}
                        required 
                      />
                    </FormGroup>
                    
                    <FormGroup>
                      <FormLabel htmlFor="plate">Placa</FormLabel>
                      <FormInput 
                        type="text" 
                        id="plate" 
                        name="plate" 
                        value={newVehicle.plate}
                        onChange={handleVehicleChange}
                        required 
                      />
                    </FormGroup>
                  </FormGrid>
                  
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <FormButton
                      type="button"
                      onClick={handleAddVehicle}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaSave /> {editingVehicleIndex >= 0 ? 'Salvar Veículo' : 'Adicionar Veículo'}
                    </FormButton>
                    
                    <FormButton
                      type="button"
                      onClick={() => {
                        setIsEditing(false);
                        setEditingVehicleIndex(-1);
                        setNewVehicle({
                          brand: '',
                          model: '',
                          year: '',
                          plate: ''
                        });
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                    >
                      Cancelar
                    </FormButton>
                  </div>
                </FormSection>
              ) : (
                <AddButton
                  onClick={() => setIsEditing(true)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaPlus /> Adicionar Veículo
                </AddButton>
              )}
              
              <div style={{ marginTop: '2rem' }}>
                <FormButton
                  type="button"
                  onClick={handleSubmit}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaSave /> Salvar Alterações
                </FormButton>
              </div>
            </FormSection>
          )}
        </ProfileMain>
      </ProfileContent>
    </ProfileContainer>
  );
};

export default ProfilePage;

