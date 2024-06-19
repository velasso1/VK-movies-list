import { Navigate, Route, Routes } from "react-router-dom";
import { useAppSelector } from "./store";

import Header from "./components/header";
import StartPage from "./pages/start-page";
import ArticlePage from "./pages/article-page";

const App = () => {
  const page = useAppSelector((state) => state.movieInformation.page);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to={`/page/${page}`} replace />} />
        <Route path="/page/:page" element={<StartPage />} />
        <Route path="/current-card/:movieId" element={<ArticlePage />} />
      </Routes>
    </>
  );
};

export default App;
