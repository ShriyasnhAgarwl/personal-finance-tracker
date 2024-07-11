import { lazy } from "react";
const HomePage = lazy(() => import("./Home"));
const AuthPage = lazy(() => import("./Auth.page"));
export { HomePage, AuthPage };
