import React, { Suspense } from "react";
import Layout from "../components/layout";
import { Route, Routes } from "react-router-dom";
import Pages from "./routes";
// import { useSelector } from "react-redux";
// import { get } from "lodash";

const appRoutes = (routes) => {
  return routes.map((route, key) => (
    <React.Fragment key={key}>
      <Route
        path={route.path}
        element={<Suspense fallback="LOADING...">{route.component}</Suspense>}
      />
      {route.children && appRoutes(route.children)}
    </React.Fragment>
  ));
};

const routesWrapper = () => {
  //   const { isAuthenticated } = useSelector((state) => get(state, "auth"));
  const isAuthenticated = true;
  return (
    <Routes>
      <Route path="*" element={<h2>Not Fonund</h2>} />
      {isAuthenticated ? (
        <Route path="/" element={<Layout />}>
          {appRoutes(Pages.pages)}
        </Route>
      ) : (
        appRoutes(Pages.authRoutes)
      )}
    </Routes>
  );
  // return <Routes>{appRoutes(privateRoutes)}</Routes>;
};

export default routesWrapper;
