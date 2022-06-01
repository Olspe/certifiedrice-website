import Navbar from "./Navbar";
import Foot from "./Footer";

const Layout = ({children}) => {
    return (
        <div className="content">
            <Navbar />
            {children}
            <Foot />
        </div>
    );
}

export default Layout;