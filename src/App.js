import { HomePage, AuthPage } from "./pages";
import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App font-['poppins']">
      <Routes>
        <Route path="/" element={<Page page={<HomePage />} />}></Route>
        <Route path="/auth" element={<Page page={<AuthPage />} />}></Route>
        <Route
          path="*"
          element={
            <Page
              page={
                <div className="flex flex-col justify-center items-center h-screen text-[18px] font-[600] font-['poppins']">
                  <p className="">Item you are looking for, Not Found *_*</p>
                  <div className="mt-10">
                    <Link to="/">
                      <button className="cursor-pointer bg-red-500  rounded-md p-2 text-white hover:scale-[1.1] duration-300">
                        HomePage
                      </button>
                    </Link>
                  </div>
                </div>
              }
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}
function Page(props) {
  return <Suspense fallback={<div>Loadinggg....</div>}>{props.page}</Suspense>;
}
export default App;
