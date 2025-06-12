import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import SinglePost from "./components/singlepost";
import Post from "./components/post";
import Project from "./components/project";
import NavBar from "./components/navbar";



function App() {
  return (
    <BrowserRouter>
    <NavBar />
      
        <Routes>
        <Route Component={Home} path='/' exact />
        <Route Component={About} path='/about' />
        <Route Component={SinglePost} path='/post:slug' />
        <Route Component={Post} path='/post' />
        <Route Component={Project} path='/project' />
        </Routes>
      
    </BrowserRouter>
  )
}

export default App;
