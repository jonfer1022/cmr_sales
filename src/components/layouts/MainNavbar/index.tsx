import React from 'react';
import { Container } from './style';
import SideNavbar from '../../basic/SideNavbar';
import TopNavbar from '../../basic/TopNavbar';
import { Outlet } from 'react-router-dom';

const MainNavbar: React.FC = () => {
  return (
    <Container>
      <SideNavbar />
      <div className="main-container">
        <TopNavbar />
        <Outlet />
      </div>
    </Container>
  );
};

export default MainNavbar;
