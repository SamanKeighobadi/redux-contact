import React from "react";
// toastify 
import {ToastContainer} from 'react-toastify'
// layouts
import MainLayout from "./components/layout/MainLayout";

const App = () => {
  return (
    <div>
      <MainLayout>
        <div className="max-h-screen">
          <h1 className="text-3xl text-blue-500">Hello </h1>
        </div>
      </MainLayout>
      <ToastContainer />
    </div>
  );
};

export default App;
