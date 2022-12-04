import { Routes, Route } from "react-router-dom";
import { History } from "./components/pages/History";
import { Home } from "./components/pages/Home";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/History" element={<History />} />
      </Route>
    </Routes>
  );
}
