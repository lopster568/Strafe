import { Routes, Route } from "react-router";
import LandingPage from "./Pages/landingpage/landing.component";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
