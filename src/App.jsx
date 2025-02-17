import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import MainPage from "./pages/index";
import useSmoothScroll from "./assets/js/useSmoothScroll";

const router = createBrowserRouter([
    {
        path: "/",
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
        v7_relativeSplatPath: true,
    },
});

const App = () => {
    useSmoothScroll();
    return <RouterProvider router={router} />;
};

export default App;
