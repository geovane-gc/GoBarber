import React from 'react';

import SignIn from './pages/SignIn/index';
// import SignUp from './pages/SignUp/index';

import AuthContext from './context/AuthContext';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'Geovane' }}>
      <SignIn />
    </AuthContext.Provider>
    <GlobalStyle />
  </>
);

export default App;
