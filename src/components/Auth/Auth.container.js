import AuthView from "./Auth.view";
import { useState } from "react";
function AuthContainer(props) {
  const [authMethod, setAuthMethod] = useState("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");

  const handleSignUp = (event) => {
    event.preventDefault();
    // Handle sign-up logic here
    console.log("Sign Up", { email, password });
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    // Handle sign-in logic here
    console.log("Sign In", { email, password });
  };

  const toggleAuthMethod = () => {
    setAuthMethod(authMethod === "signin" ? "signup" : "signin");
  };
  return (
    <AuthView
      authMethod={authMethod}
      setAuthMethod={setAuthMethod}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      phoneNumber={phoneNumber}
      setPhoneNumber={setPhoneNumber}
      name={name}
      setName={setName}
      country={country}
      setCountry={setCountry}
      handleSignUp={handleSignUp}
      handleSignIn={handleSignIn}
      toggleAuthMethod={toggleAuthMethod}
    />
  );
}

export default AuthContainer;
