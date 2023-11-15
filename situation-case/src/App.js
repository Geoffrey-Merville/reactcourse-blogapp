import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NewPost from "./components/NewPost";
import PostPage from "./components/PostPage";
import About from "./components/About";
import Missing from "./components/Missing";
import { Route, Routes, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/post" Component={NewPost} />
        <Route path="/post/:id" Component={PostPage} />
        <Route path="/about" Component={About} />
        <Route path="*" Component={Missing} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

