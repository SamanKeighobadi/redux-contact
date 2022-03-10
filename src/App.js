import React from "react";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="max-h-screen">
        <h1 className="text-3xl text-blue-500">Hello </h1>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
