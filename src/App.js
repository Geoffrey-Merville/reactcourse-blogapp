import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NewPost from "./components/NewPost";
import PostPage from "./components/PostPage";
import About from "./components/About";
import Missing from "./components/Missing";
import EditPost from "./components/EditPost";
import { Route, Routes } from "react-router-dom";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <div className="App">
      <Header title="React JS Blog" />
      <DataProvider>
        <Nav />
        <Routes>
          <Route path="/reactcourse-blogapp/" element={<Home />} />
          <Route path="/reactcourse-blogapp/post" element={<NewPost />} />
          <Route path="/reactcourse-blogapp/edit/:id" element={<EditPost />} />
          <Route path="/reactcourse-blogapp/post/:id" element={<PostPage />} />
          <Route path="/reactcourse-blogapp/about" element={<About />} />
          <Route path="/reactcourse-blogapp/*" element={<Missing />} />
        </Routes>
      </DataProvider>
      <Footer />
    </div>
  );
}

export default App;
