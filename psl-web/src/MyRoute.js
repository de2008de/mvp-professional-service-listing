import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";

const MyRoute = () => {
    return (
        <div className="Route">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
};

export default MyRoute;
