import React from 'react';

import SignIn from './pages/SignIn/index';
// import SignUp from './pages/SignUp/index';

import { AuthProvider } from './context/AuthContext';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <GlobalStyle />
  </>
);

export default App;
