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
]);

const App = () => {
    useSmoothScroll();
    return <RouterProvider router={router} basename="/portfolio25" />;  // basename 추가
};

export default App;
