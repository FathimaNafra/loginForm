// App.tsx
import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login.tsx';
import ProtectedRoute from './components/ProtectedRoute.tsx';
import RoleBasedContent from './components/RoleBasedContent.tsx';

const App: React.FC = () => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN!;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID!;
  const audience = process.env.REACT_APP_AUTH0_AUDIENCE!;
  const redirectUri = process.env.REACT_APP_AUTH0_REDIRECT_URI || window.location.origin;

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: redirectUri, audience }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/content"
            element={<ProtectedRoute component={RoleBasedContent} />}
          />
        </Routes>
      </Router>
    </Auth0Provider>
  );
};

export default App;
