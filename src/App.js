import React from "react";
// toastify 
import {ToastContainer} from 'react-toastify'
// layouts
import MainLayout from "./components/layout/MainLayout";
// React Router DOM 
import {Route,Routes} from 'react-router-dom'
// Custom components
import Home from "./components/Home";
import AddContact from "./components/Contacts/AddContact";
import EditContact from "./components/Contacts/EditContact";

const App = () => {
  return (
    <div className="bg-cyan-600 min-h-screen">
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addContact" element={<AddContact />} />
          <Route path="/edit/:id" element={<EditContact />} />
        </Routes>
      </MainLayout>
      <ToastContainer />
    </div>
  );
};

export default App;
