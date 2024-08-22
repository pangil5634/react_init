import { Outlet } from "react-router-dom";
import Headers from "./Header";
import { BaseContainer } from "../Util/Container";

function Layout() {
    
    return (
        <div>
            <div>
                <Headers/>
            </div>
            <BaseContainer>
                <Outlet/>
            </BaseContainer>
        </div>
    )
};

export default Layout;