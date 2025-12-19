import './App.css'
// import logo from './assets/logo-white.png'
import {Routes, Route} from "react-router-dom";
import Homepage from "./pages/homepage/Homepage.jsx";
import NewPosts from "./pages/newposts/NewPosts.jsx";
import Overview from "./pages/overview/Overview.jsx";
import Error from "./pages/error/Error.jsx";
import Navigation from "./components/navigation/Navigation.jsx";
import Blogpost from "./components/blogpost/Blogpost.jsx";

function App() {
    return (
        <>
        <Navigation/>

            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/nieuwe-posts" element={<NewPosts/>}/>
                <Route path="/overzicht" element={<Overview/>}/>
                <Route path="/posts/:id" element={<Blogpost />} />
                <Route path="/fout" element={<Error/>}/>
            </Routes>

        </>
    )
}

export default App
