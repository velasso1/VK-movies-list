import { Route, Routes } from "react-router-dom";

import Header from "./components/header";
import StartPage from "./pages/start-page";
import ArticlePage from "./pages/article-page";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/current-card/:movieId" element={<ArticlePage />} />
      </Routes>
    </>
  );
};

export default App;
