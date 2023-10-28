import { Footer } from "components/Footer/Footer";
import { Header } from "components/Header/Header";
import { Outlet } from "react-router-dom";


const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet/>
            </main>
            <Footer />
        </>
    );
}

export default Layout;