// App.tsx - Versión con diagnóstico y solución
import React from 'react';
import LoginPage from './components/pages/LoginPage';
import { AuthProvider } from './context/authContext';

const App: React.FC = () => {
  // Agregamos un console.log para verificar que el componente se está renderizando
  console.log('App component is rendering');

  return (
    <AuthProvider>
      <div className="App">
        <LoginPage />
      </div>
    </AuthProvider>
  );
};

export default App;