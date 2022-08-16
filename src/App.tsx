import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Glimmer } from "./components/glimmer";
import "./App.css";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { Error404 } from "./pages/not-found";

const Home = lazy(() => import("./pages/home"));
const HotelsList = lazy(() => import("./pages/hotels-list"));
const Signin = lazy(() => import("./pages/sign-in"));
const Signup = lazy(() => import("./pages/sign-up"));

function App() {
  return (
    <Suspense fallback={<Glimmer />}>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="hotels" element={<HotelsList />} />
        <Route path="auth">
          <Route index element={<Signin />} />
          <Route path="sign-up" element={<Signup />} />
        </Route>
        <Route path="not-found" element={<Error404 />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
      <Footer />
    </Suspense>
  );
}

export default App;

