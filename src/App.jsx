// import "./App.css";

import { Outlet } from "react-router-dom";
import PageHeader from "./components/PageHeader";
import Footer from "./components/Footer";
import { getLang } from "./lib";

function App() {
  const lang = getLang();

  return (
    <>
      <PageHeader langName={lang} />
      <main className="min-h-[calc(100vh-120px)] pt-16 bg-slate-100 dark:bg-black dark:text-white text-black overflow-x-hidden">
        <Outlet />
      </main>
      <Footer langName={lang} />
    </>
  );
}

export default App;
