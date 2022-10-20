import { FC } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { Section, Login, Register, Home } from "./pages";
import { getMe } from "./store/slices/auth";

const App: FC = () => {
  const { accessToken } = useSelector(getMe);

  return (
    <div>
      <Routes>
        <Route
          path='login'
          element={accessToken ? <Navigate to='/home' /> : <Login />}
        />
        <Route
          path='register'
          element={accessToken ? <Navigate to='/home' /> : <Register />}
        />

        <Route
          path='section/:sectionID'
          element={accessToken ? <Section /> : <Navigate to='/login' />}
        />
        <Route path=''>
          <Route
            index
            element={accessToken ? <Home /> : <Navigate to='/login' />}
          />
          <Route
            path='/:languageID'
            element={accessToken ? <Home /> : <Navigate to='/login' />}
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
