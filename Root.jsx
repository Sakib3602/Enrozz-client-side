import { Outlet } from "react-router-dom";
import Nav from "./src/components/Nav/Nav";
import Footer from "./src/components/Footer.jsx/Footer";


const Root = () => {
    return (
        <div className="mono ">
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;