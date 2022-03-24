// frontend/src/App.js
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./pages/nav/Nav";
import Home from "./pages/home/Home";

import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const About = React.lazy(() => import("./pages/about/About"));
const Estates = React.lazy(() => import("./pages/estates/Estates"));

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="estates"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <Estates />
              </Suspense>
            }
          />
          <Route
            path="estates/:id"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <About />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}
