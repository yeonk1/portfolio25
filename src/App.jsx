import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import MainPage from "./pages/index";
import useSmoothScroll from "./assets/js/useSmoothScroll";

// Vite에서 사용하는 환경 변수
const isProduction = process.env.NODE_ENV === "production";
const basename = isProduction ? "/portfolio25" : "/";

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
