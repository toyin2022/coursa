// import "./App.css";
// import React, { useState } from "react";
// import SimpleSlider from "./Sliders/Slides";
// import { AiOutlineMenuUnfold } from "react-icons/ai";

// function App() {
//   const [menu, setmenu] = useState(false);
//   return (
//     <div className="App">
//       <div className="header">
//         <div className="icon" onClick={() => setmenu(!menu)}>
//           <AiOutlineMenuUnfold />
//         </div>
//       </div>
//       <SimpleSlider />
//       <ul className={`ull  ${menu ? "hide" : "ul"} `}>
//         <li>home</li>
//         <li>home</li>
//         <li>home</li>
//       </ul>
//     </div>
//   );
// }

// export default App;

import React from "react";
import "./App.css";
import Header from "./components/Header";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import HomePage from "./pages/HomePage";

const App = () => {
  const Layout = () => {
    return (
      <>
        <Header />
        <ScrollRestoration />
        <Outlet />
        {/* <Footer /> */}
      </>
    );
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<HomePage />} />
        {/* <Route path="/products/:id" element={<ProductDetails />} /> */}
        {/* <Route path="/checkout" element={<Checkout />} /> */}
        <Route path="contact">
          {/* <Route path="" element={<Contact />} /> */}
        </Route>
        {/* <Route path="/auth" element={<Auth />} /> */}
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
