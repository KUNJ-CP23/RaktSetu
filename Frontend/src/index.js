import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import BloodDonationForm from './Pages/BloodDonationForm';
import BloodBankList from './Pages/BloodBankList';
import DonationList from './Pages/DonationList';
import HospitalDirectory from './Pages/HospitalDirectory';
import UserList from './Pages/UserList';
import AddBloodInventory from './Pages/AddBloodInventory';
import AddDonor from './Pages/AddDonor';
import Login from './Pages/Login';
import Register from './Pages/Register';
import RequestBlood from './Pages/RequestBlood';
import DonationHistory from './Pages/DonationHistory';
import ContactUs from './Pages/ContactUs';
import AddBloodBankForm from './Pages/AddBloodBank';
import Notification from './Pages/Notification';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="donate-blood" element={<BloodDonationForm />} />
          <Route path="bloodbank-list" element={<BloodBankList />} />
          <Route path="donation-list" element={<DonationList />} />
          <Route path="hospitaldirectory-list" element={<HospitalDirectory />} />
          <Route path="user-list" element={<UserList />} />
          <Route path="add-bloodinventory" element={<AddBloodInventory />} />
          <Route path="add-bloodblank" element={<AddBloodBankForm />} />
          <Route path="add-donor" element={<AddDonor />} />
          <Route path="login" element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path="request-blood" element={<RequestBlood />} />
          <Route path="donation-history" element={<DonationHistory />} />
          <Route path="register" element={<Register />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="notification" element={<Notification />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);