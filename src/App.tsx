import { HashRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

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

import Index from "./routes/Index";
import GalaxyMap from "./routes/Mapping";

export default function App() {
    return (
        <HashRouter>
            <div className="d-flex">
                <div style={{width: "17rem"}}>
                    <Sidebar/>
                </div>
                <div className="flex-grow-1">
                    <Routes>
                        <Route path="/" element={<Index/>}/>
                        <Route path="/galaxy/*" element={<GalaxyRoutes/>}/>
                        <Route path="/mapping/" element={<GalaxyMap/>}/>
                    </Routes>
                </div>
            </div>
        </HashRouter>
    );
}