import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { Glimmer } from "./components/glimmer";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

import { Error404 } from "./pages/not-found";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { EditHotel } from "./pages/hotels/edit-hotel";

const Home = lazy(() => import("./pages/home"));
const HotelsList = lazy(() => import("./pages/hotels"));
const Signin = lazy(() => import("./pages/sign-in"));
const Signup = lazy(() => import("./pages/sign-up"));
const AddHotelForm = lazy(() => import("./pages/hotels/create-hotel"));
const SingleHotel = lazy(() => import("./pages/hotels/single-hotel"));

function App() {
  return (
    <Suspense fallback={<Glimmer />}>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="hotels">
          <Route index element={<HotelsList />} />
          <Route path="create" element={<AddHotelForm />} />
          <Route path=":id" element={<SingleHotel />} />
          <Route path="edit/:id" element={<EditHotel />} />
        </Route>
        <Route path="auth">
          <Route index element={<Signin />} />
          <Route path="sign-in" element={<Signin />} />
          <Route path="sign-up" element={<Signup />} />
        </Route>
        <Route path="not-found" element={<Error404 />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
      <Footer />

      <ToastContainer autoClose={1000} />
    </Suspense>
  );
}

export default App;

