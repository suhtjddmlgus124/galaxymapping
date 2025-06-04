import { BrowserRouter, Routes, Route } from "react-router-dom";


import GalaxyList from "./routes/galaxy/GalaxyList";
import GalaxyDetail from "./routes/galaxy/GalaxyDetail";
function GalaxyRoutes() {
    return (
        <Routes>
            <Route path="/" element={<GalaxyList/>}/>
            <Route path=":galaxyId/" element={<GalaxyDetail/>}/>
        </Routes>
    )
}

import GalaxyMap from "./routes/Mapping";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/galaxy/*" element={<GalaxyRoutes/>}/>
                <Route path="/mapping/" element={<GalaxyMap/>}/>
            </Routes>
        </BrowserRouter>
    );
}