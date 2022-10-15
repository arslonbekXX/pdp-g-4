import React from "react";
import { useLocation } from "react-router-dom";

interface RegisterProps {}

const Register: React.FC<RegisterProps> = () => {
  const location = useLocation();

  return (
    <div>
      <h1>Register Component</h1>
      <pre>{JSON.stringify(location.state)}</pre>
    </div>
  );
};

export default Register;
