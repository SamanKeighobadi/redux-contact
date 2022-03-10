import React from "react";
// toastify 
import {ToastContainer} from 'react-toastify'
// layouts
import MainLayout from "./components/layout/MainLayout";
// React Router DOM 
import {Route,Routes} from 'react-router-dom'
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addContact" />
          <Route path="/edit/:id" />
        </Routes>
      </MainLayout>
      <ToastContainer />
    </div>
  );
};

export default App;
