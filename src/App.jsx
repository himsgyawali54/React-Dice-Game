import { useState } from "react";
import FirstPage from "./Front View/FirstPage";
import SecondPage from "./SecondView/SecondPage";

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/second-page" element={<SecondPage />} />
      </Routes>
    </>
  );
};

export default App;
