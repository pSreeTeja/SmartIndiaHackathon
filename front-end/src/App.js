import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Containers/LandingPage";
import "./App.css";
import SignupPage from "./Containers/SignupPage";
import LoginPage from "./Containers/LoginPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
