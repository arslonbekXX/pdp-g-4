import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Section, Problem, Login, Register, Home } from "./pages";

const App: FC = () => (
  <div>
    <Routes>
      <Route path='/:languageID' element={<Home />} />
      <Route path='section' element={<Section />} />
      <Route path='problem' element={<Problem />} />
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
    </Routes>
  </div>
);

export default App;
