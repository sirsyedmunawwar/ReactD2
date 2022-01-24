import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bollywood from "./Bollywood/Bollywood";
import fitness from "./Fitness/Fitness";
import food from "./Food/Food";
import Hollywood from "./Hollywood/Hollywood";
import Post from "./components/Post";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./Home/Home";
import { Blogcontent } from "./components/ContextAPI";

function App() {
  return (

      <Blogcontent>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            {/* <Route path="/bollywood" element={<Bollywood />}></Route>
            <Route path="/technology" element={<Technology />}></Route>
            <Route path="/hollywood" element={<Hollywood />}></Route>
            <Route path="/fitness" element={<Fitness />}></Route>
            <Route path="/food" element={<Food />}></Route>
            <Route path="/post" element={<Post />}></Route> */}
          </Routes>
        </BrowserRouter>
      </Blogcontent>
   
  );
}

export default App;
