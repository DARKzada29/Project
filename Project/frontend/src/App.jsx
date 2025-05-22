import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import OrcamentoPage from './pages/OrcamentoPage';
import CarrinhoPage from './pages/CarrinhoPage';
import ServicesPage from './pages/ServicesPage';
import GlobalStyles from './styles/GlobalStyles';
import { AnimationProvider } from './context/AnimationContext';
import { AuthProvider } from './context/AuthContext';
import CarrinhoPage from './pages/ProfilePage';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular carregamento inicial
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#121212',
        color: '#ff4d00',
        fontSize: '2rem',
        fontWeight: 'bold'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h1>JK Mecânica</h1>
          <div style={{ 
            width: '50px', 
            height: '50px', 
            border: '5px solid #ff4d00',
            borderTopColor: 'transparent',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '20px auto'
          }}></div>
          <style>{`
            @keyframes spin {
              to { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      </div>
    );
  }

  return (
    <AuthProvider>
      <AnimationProvider>
        <Router>
          <GlobalStyles />
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<AuthPage />} />
            <Route path="/orcamento" element={<OrcamentoPage />} />
            <Route path="/carrinho" element={<CarrinhoPage />} />
            <Route path="/servicos" element={<ServicesPage />} />
            <Route path="/contato" element={<div className="container" style={{minHeight: "80vh", padding: "4rem 1rem"}}>Página de Contato</div>} />
            <Route path="/perfil" element={<ProfilePage /> } />
          </Routes>
        </Router>
      </AnimationProvider>
    </AuthProvider>
  );
}

export default App;
