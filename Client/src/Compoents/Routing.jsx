import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardMain from './DashBoardMain/DashboardMain';
import Demo from './demo/Demo';
import Landing from './Landing';
import Login from './login/Login';
import Confirmation from './Payment/Confirmation';
import Otp from './Payment/Otp';
import Pricing from './pricing/Pricing';
import SignUp from './Signup/SignUp';
import SignupPages from './Signup/SignupPages';


const Routing = () => {
  return (
    <>
      <Routes>
      <Route path="/otp" element={<Otp /> } />
      <Route path="/pricing/demo" element={<Demo /> } />
      <Route path="/pricing" element={<Pricing /> } />
      <Route path="/login" element={<Login /> } />
      <Route path="/signup" element={<SignUp /> } />
      <Route path="/signupage" element={<SignupPages /> } />
      <Route path="/" element={<Landing /> } />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/dashboard" element={<DashboardMain />} />
      </Routes>
    </>
  );
};

export default Routing;
