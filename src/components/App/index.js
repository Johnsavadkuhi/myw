import "./App.css";
import React, { Suspense } from "react";

import Button from "react-bootstrap/Button"

export default function App() {
  return (
    <Suspense fallback="loading">
      <div>
        {/* <MyNavbar/> */}
      </div>
    </Suspense>
  );
}
