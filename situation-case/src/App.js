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
          <Route exact path="/" Component={Home} />
          <Route path="/post" Component={NewPost} />
          <Route path="/edit/:id" Component={EditPost} />
          <Route path="/post/:id" Component={PostPage} />
          <Route path="/about" Component={About} />
          <Route path="*" Component={Missing} />
        </Routes>
      </DataProvider>
      <Footer />
    </div>
  );
}

export default App;

