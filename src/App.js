import { BrowserRouter, Route, Routes } from "react-router-dom"
import Bollywood from "./components/Bollywood"
import Fitness from "./components/Fitness"
import Food from "./components/Food"
import Hollywood from "./components/Hollywood"
import Home from "./components/Home"
import Technology from "./components/Technology"
import Post from "./components/Post"
import ScrollToTop from "./components/ScrollToTop"

function App() {

    return (
        <>

            <BrowserRouter>
                
            <ScrollToTop/>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/bollywood" element={<Bollywood />}></Route>
                    <Route path="/technology" element={<Technology />}></Route>
                    <Route path="/hollywood" element={<Hollywood />}></Route>
                    <Route path="/fitness" element={<Fitness />}></Route>
                    <Route path="/food" element={<Food />}></Route>
                    <Route path="/post" element={<Post />}></Route>

                </Routes>
            </BrowserRouter>

        </>
    )
}

export default App