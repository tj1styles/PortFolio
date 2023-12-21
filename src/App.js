import React from "react";
import Loadable from "react-loadable";
import Loader from "./Loader/Loader";
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

const HomeComponent = Loadable({
  loader: () => import("./screens/HomeScreen"),
  loading: Loader,
});
const HomeOutletComponent = Loadable({
  loader: () => import("./Layouts/HomeOutlet"),
  loading: Loader,
});

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Navigate replace to='/profile' />} />
        <Route path="/" element={<HomeComponent />}>
            <Route path="profile" element={<HomeOutletComponent />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
