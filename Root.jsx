import { Outlet } from "react-router-dom";
import Nav from "./src/components/Nav/Nav";


const Root = () => {
    return (
        <div className="mono ">
            <Nav></Nav>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;