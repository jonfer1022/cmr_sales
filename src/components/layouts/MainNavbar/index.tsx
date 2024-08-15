import React from 'react';
import { Container } from './style';
import SideNavbar from '../../basic/SideNavbar';
import TopNavbar from '../../basic/TopNavbar';
import { Outlet } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute';

const MainNavbar: React.FC = () => {
  return (
    <Container>
      <SideNavbar />
      <div className="main-container">
        <TopNavbar />
        <ProtectedRoute element={<Outlet />} />
      </div>
    </Container>
  );
};

export default MainNavbar;
