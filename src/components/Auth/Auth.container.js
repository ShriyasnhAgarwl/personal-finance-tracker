import AuthView from "./Auth.view";
import { useState } from "react";
import axios from "axios";

function AuthContainer() {
  const [authMethod, setAuthMethod] = useState("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState(null);

  const handleSignUp = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/signup",
        {
          email,
          password,
          phoneNumber,
          name,
          country,
        }
      );
      setMessage({ type: "success", text: response?.data?.message });
    } catch (error) {
      console.log(error);
      setMessage({ type: "error", text: error?.response?.data?.message });
    } finally {
      clearMessageAfterTimeout();
    }
  };
  // console.log(message);

  const handleSignIn = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/signin",
        {
          email,
          password,
        }
      );
      setMessage({ type: "success", text: response.data.message });
    } catch (error) {
      setMessage({ type: "error", text: error.response.data.message });
    } finally {
      clearMessageAfterTimeout();
    }
  };

  const toggleAuthMethod = () => {
    setAuthMethod(authMethod === "signin" ? "signup" : "signin");
  };

  const clearMessageAfterTimeout = () => {
    setTimeout(() => {
      setMessage(null);
    }, 5000);
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
      message={message}
    />
  );
}

export default AuthContainer;
