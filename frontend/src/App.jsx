import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import OnlyAdminRoute from './admin/OnlyAdminRoute'
import CreatePost from "./admin/CreatePost";
import UpdatePost from "./admin/UpdatePost";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/sign-in' element={<SignIn/>}></Route>
        <Route path='/sign-up' element={<SignUp/>}></Route>
        <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
        </Route>
        <Route element={<OnlyAdminRoute />}>
          <Route path='/create-post' element={<CreatePost/>}></Route>
          <Route path='/update-post/:postId' element={<UpdatePost/>}></Route>
        </Route>

        <Route path='/projects' element={<Projects/>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

