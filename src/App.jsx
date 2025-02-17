import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import MainPage from "./pages/index";
import useSmoothScroll from "./assets/js/useSmoothScroll";

const isProduction = import.meta.env.VITE_APP_MODE === "production";
const basename = isProduction ? "/portfolio25" : "/";
console.log(import.meta.env.MODE);
const router = createBrowserRouter(
    [
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
    ],
    {
        future: {
            v7_startTransition: true,
        },
    }
);

const App = () => {
    useSmoothScroll();
    return <RouterProvider router={router} basename={basename} />;
};

export default App;
