import { Routes, Route } from "react-router";
import Login from "./Components/login/login.component";
import Navbar from "./Components/navbar/navbar.component";
import SignUp from "./Components/sign-up/sign-up.component";
import CreatePage from "./Pages/create/create.component";
import ExplorePage from "./Pages/explorepage/explorepage.component";
import LandingPage from "./Pages/landingpage/landing.component";
import JoinPage from "./Pages/join/join.component";
import PostPage from "./Pages/post-page/post-page.component";
import Aos from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from "react";


function App() {
  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/post">
          <Route path=":id" element={<PostPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;