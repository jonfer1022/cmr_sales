import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { NavbarContainer } from '../basic/NavbarLandingContainer';
import { OuterContainer } from '../basic/OuterContainer';

const NavbarLanding: React.FC = () => {
  const navigate = useNavigate();
  return (
    <OuterContainer>
      <NavbarContainer>
        <div className="header-container">
          <div>
            <span>Logo</span>
          </div>
          <div>
            <div onClick={() => navigate('/login')}>
              <span>Sign in</span>
            </div>
            <div onClick={() => navigate('/register')}>
              <span>Sign up</span>
            </div>
          </div>
          <div>
            <span>Language</span>
          </div>
        </div>
      </NavbarContainer>
      <Outlet />
    </OuterContainer>
  );
};

export default NavbarLanding;
