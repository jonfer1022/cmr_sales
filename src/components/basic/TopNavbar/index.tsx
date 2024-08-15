import React from 'react';
import { Container } from './style';
import { LogoutIcon } from '../Icons/Logout';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../../redux/slices/auth.slice';
import { routes } from '../../../utils/routes';

const TopNavbar: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  return (
    <Container>
      <div
        onClick={() => {
          dispatch(logout());
          navigate(routes.login);
        }}
      >
        <LogoutIcon size={20} color={'white'} />
      </div>
    </Container>
  );
};

export default TopNavbar;
