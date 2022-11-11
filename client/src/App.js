import { Routes, Route } from "react-router";
import Login from "./Components/login/login.component";
import SignUp from "./Components/sign-up/sign-up.component";
import ExplorePage from "./Pages/explorepage/explorepage.component";
import LandingPage from "./Pages/landingpage/landing.component";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/explore" element={<ExplorePage />} />
    </Routes> 
    </>
  );
}

export default App;