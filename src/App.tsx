import { Route, Routes } from "react-router-dom";

import Header from "./components/header";
import StartPage from "./pages/start-page";
import ArticlePage from "./pages/article-page";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/test-alfa-preview" element={<StartPage />} />
        <Route
          path="/test-alfa-preview/current-card/:pictureId"
          element={<ArticlePage />}
        />
      </Routes>
    </>
  );
};

export default App;
