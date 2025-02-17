import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import MainPage from "./pages/index";
import useSmoothScroll from "./assets/js/useSmoothScroll";

// 환경 변수에서 mode 확인
const isProduction = import.meta.env.VITE_APP_MODE === "production";
const basename = isProduction ? "/portfolio25" : "/";
console.log("Current Mode:", import.meta.env.VITE_APP_MODE);

const router = createBrowserRouter([
    {
        path: basename, // 🔥 여기에 `basename` 적용
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
    return <RouterProvider router={router} />;
};

export default App;
