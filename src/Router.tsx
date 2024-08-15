import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import NavbarLanding from './components/layouts/NavbarLanding';
import {
  ConfirmSignup,
  EditSales,
  Login,
  MainDashboard,
  Register,
  Sales,
} from './views';
import { routes } from './utils/routes';
import MainNavbar from './components/layouts/MainNavbar';

const MainRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavbarLanding />}>
          <Route path={routes.login} element={<Login />} />
          <Route path={routes.register} element={<Register />} />
          <Route path={routes.confirmSignup} element={<ConfirmSignup />} />
          <Route
            path="*"
            element={<Navigate to={routes.login} replace={true} />}
          />
        </Route>
        <Route element={<MainNavbar />}>
          <Route path={routes.sales} element={<Sales />} />
          <Route path={routes.editSales()} element={<EditSales />} />
          <Route path={routes.dashboard} element={<MainDashboard />} />
          <Route path={routes.products} element={<div>Products</div>} />
          <Route path={routes.categories} element={<div>Categories</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
