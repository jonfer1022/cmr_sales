import React, { useState } from 'react';
import VerificationInput from 'react-verification-input';
import { Container } from './style';
import { HeadingTwo, Text } from '../../components/basic/Text';
import { ButtonAction } from '../../components/basic/Buttons';
import Loading from '../../components/basic/Loading';
import { useLocation, useNavigate } from 'react-router-dom';
import { routes } from '../../utils/routes';
import { ISignUpNavigation } from '../../utils/interfaces/navigation.interfaces';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { confirmSignup } from '../../redux/slices/auth.slice';
import { setMenu } from '../../redux/slices/menu.slice';
import { sidePages } from '../../utils/constants';

const ConfirmSignup: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const { email, password, name } = location.state as ISignUpNavigation;
  const [code, setCode] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      dispatch(confirmSignup({ email, password, name, code })).then(
        (result) => {
          if (confirmSignup.fulfilled.match(result)) {
            setLoading(false);
            dispatch(setMenu(sidePages.dashboard.label));
            navigate(routes.dashboard);
          } else {
            setLoading(false);
          }
        }
      );
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <Container>
      <div>
        <HeadingTwo text="Confirm your email" />
        <Text text="We sent a verification code to your email" />
        <Text text="Please check your inbox and enter the verification code below to verify your email address." />
        <div className="input-code">
          <VerificationInput
            value={code}
            length={6}
            onChange={setCode}
            validChars="0-9"
          />
        </div>
        <ButtonAction
          value="Verify"
          onClick={handleSubmit}
          disabled={code.length < 6 || loading}
        />
      </div>
      {loading && <Loading />}
    </Container>
  );
};

export default ConfirmSignup;
