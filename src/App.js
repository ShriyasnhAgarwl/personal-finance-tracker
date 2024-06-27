import { HomePage } from "./pages";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Page page={<HomePage />} />}></Route>
      </Routes>
    </div>
  );
}
function Page(props) {
  return <Suspense fallback={<div>Loadinggg....</div>}>{props.page}</Suspense>;
}
export default App;
