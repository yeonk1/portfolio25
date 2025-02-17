import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import MainPage from "./pages/index";
import useSmoothScroll from "./assets/js/useSmoothScroll";

const router = createBrowserRouter([
    {
        path: "/portfolio25",
        element: (
            <>

                <Header />
                <MainPage />
                <Footer />
            </>
        ),
    },
], {
    future: {
        v7_startTransition: true,
    },
});

const App = () => {
    useSmoothScroll();
    return <RouterProvider router={router} basename="/portfolio25" />;
};

export default App;
