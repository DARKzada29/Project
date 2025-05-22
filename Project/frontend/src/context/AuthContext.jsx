import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Verificar se há um token no localStorage
    const token = localStorage.getItem('token');
    
    if (token) {
      loadUser(token);
    } else {
      setLoading(false);
    }
  }, []);
  
  // Carregar usuário com base no token
  const loadUser = async (token) => {
    try {
      // Configurar o token no header
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
      const res = await axios.get('/api/users/me');
      
      setUser(res.data);
      setLoading(false);
    } catch (error) {
      localStorage.removeItem('token');
      delete axios.defaults.headers.common['Authorization'];
      setUser(null);
      setLoading(false);
    }
  };
  
  // Registrar usuário
  const register = async (userData) => {
    try {
      const res = await axios.post('/api/users/register', userData);
      
      if (res.data.token) {
        localStorage.setItem('token', res.data.token);
        await loadUser(res.data.token);
        return res.data;
      }
    } catch (error) {
      throw error;
    }
  };
  
  // Login de usuário
  const login = async (email, password, rememberMe) => {
    try {
      const res = await axios.post('/api/users/login', { email, password });
      
      if (res.data.token) {
        if (rememberMe) {
          localStorage.setItem('token', res.data.token);
        } else {
          // Se não quiser lembrar, armazenar apenas na sessão
          sessionStorage.setItem('token', res.data.token);
        }
        
        await loadUser(res.data.token);
        return res.data;
      }
    } catch (error) {
      throw error;
    }
  };
  
  // Logout de usuário
  const logout = () => {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
    setUser(null);
  };
  
  // Atualizar dados do usuário
  const updateUser = async (userData) => {
    try {
      const res = await axios.put('/api/users/update', userData);
      
      setUser(res.data);
      return res.data;
    } catch (error) {
      throw error;
    }
  };
  
  // Verificar se está autenticado
  const isAuthenticated = () => {
    return !!user;
  };
  
  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        register,
        login,
        logout,
        updateUser,
        isAuthenticated
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
