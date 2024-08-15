import React from 'react';
import { Container } from './style';
import LinkItem from '../LinkItem';
import { AppDispatch, RootState } from '../../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { setMenu } from '../../../redux/slices/menu.slice';
import { sidePages } from '../../../utils/constants';
import { useNavigate } from 'react-router-dom';
import { FcSalesPerformance } from 'react-icons/fc';
import { Text } from '../Text';

const SideNavbar: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { sideMenu } = useSelector((state: RootState) => state.menu);

  const navigateToPage = (page: (typeof sidePages)[keyof typeof sidePages]) => {
    dispatch(setMenu(page.label));
    navigate(page.path);
  };

  return (
    <Container>
      <div className="logo">
        <FcSalesPerformance size={30} />
        <Text text="Sales" />
      </div>
      {Object.values(sidePages).map((page, i) => (
        <LinkItem
          key={i}
          text={page.label}
          active={page.label === sideMenu}
          onClick={() => navigateToPage(page)}
        />
      ))}
    </Container>
  );
};

export default SideNavbar;
