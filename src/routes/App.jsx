import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// containers
import Layout from '../containers/Layout';

// pages
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Login from '../pages/Login';
import PasswordRecovery from '../pages/PasswordRecovery';
import SendMail from '../pages/SendMail';
import NewPassword from '../pages/NewPassword';
import MyAccount from '../pages/MyAccount';
import CreateAccount from '../pages/CreateAccount';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';



// styles
import '../styles/global.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes >
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/password-recovery" element={<PasswordRecovery/>} />
          <Route path="/send-mail" element={<SendMail/>} />
          <Route path="/new-password" element={<NewPassword/>} />
          <Route path="/account" element={<MyAccount/>} />
          <Route path="/signup" element={<CreateAccount/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;