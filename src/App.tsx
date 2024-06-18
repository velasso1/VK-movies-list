import { Navigate, Route, Routes } from "react-router-dom";

import Header from "./components/header";
import StartPage from "./pages/start-page";
import ArticlePage from "./pages/article-page";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/page/1" replace />} />
        <Route path="/page/:page" element={<StartPage />} />
        <Route path="/current-card/:movieId" element={<ArticlePage />} />
      </Routes>
    </>
  );
};

export default App;
