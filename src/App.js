import Home from "pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "layout";
import JobDetail from "pages/JobDetail";
import JobList from "pages/JobList";
import Login from "pages/Login";
import Signup from "pages/Signup";
import Profile from "pages/Profile";
import Category from "pages/Category";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-modal-video/scss/modal-video.scss";
import "./App.scss";

const App = () => {
  const notShow = ["/login", "/signup"];
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout notShow={notShow} />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/jobdetail" element={<JobDetail />} />
          <Route path="/joblist" element={<JobList />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
