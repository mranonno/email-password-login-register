import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Root = () => {
    return (
        <div className="container mx-auto">
            <Header />
            <Outlet/>
        </div>
    );
};

export default Root;