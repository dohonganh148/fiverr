import "./App.scss";
import Home from "pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "components/Header";
import JobDetail from "pages/JobDetail";
import JobList from "pages/JobList";
import Login from "pages/Login";
import Signup from "pages/Signup";
import Profile from "pages/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/jobdetail" element={<JobDetail />} />
        <Route path="/joblist" element={<JobList />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
