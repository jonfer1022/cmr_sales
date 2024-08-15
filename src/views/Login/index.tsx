import React, { useCallback, useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form, FormikProps } from 'formik';
import { Container } from './style';
import { InputCheckbox, InputText } from '../../components/basic/Inputs';
import { ButtonAction } from '../../components/basic/Buttons';
import { FootText, HeadingTwo } from '../../components/basic/Text';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../utils/routes';
import Loading from '../../components/basic/Loading';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { login } from '../../redux/slices/auth.slice';
import { setMenu } from '../../redux/slices/menu.slice';
import { sidePages } from '../../utils/constants';

const initialValues = {
  email: '',
  password: '',
  showPassword: false,
};

const validationSchema = Yup.object().shape({
  email: Yup.string().required('The email is required'),
  password: Yup.string().required('The password is required'),
});

const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = useCallback(
    async (values: typeof initialValues) => {
      setLoading(true);
      dispatch(login({ email: values.email, password: values.password })).then(
        (result) => {
          if (login.fulfilled.match(result)) {
            setLoading(false);
            dispatch(setMenu(sidePages.dashboard.label));
            navigate(routes.dashboard);
          } else {
            setLoading(false);
          }
        }
      );
    },
    [navigate, dispatch]
  );

  return (
    <Container>
      <div>
        <HeadingTwo text="Login" />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values: typeof initialValues) => {
            onSubmit(values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            handleBlur,
            setFieldValue,
          }: FormikProps<typeof initialValues>) => (
            <Form className="form">
              <InputText
                name="email"
                classname="input-text"
                value={values.email}
                touched={touched}
                onChange={(value) => handleChange('email')(value)}
                handleBlur={handleBlur}
                placeholder="Enter your email"
                error={touched.email && errors.email ? errors.email : ''}
              />
              <InputText
                name="password"
                classname="input-text"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                touched={touched}
                onChange={(value) => handleChange('password')(value)}
                handleBlur={handleBlur}
                placeholder="Enter your password"
                error={
                  touched.password && errors.password ? errors.password : ''
                }
              />
              <InputCheckbox
                name="showPassword"
                value={values.showPassword}
                onChange={(value) => setFieldValue('showPassword', value)}
                handleBlur={handleBlur}
                label="Show Password"
                classname="input-checkbox"
              />
              <ButtonAction
                type="submit"
                value="Sign in"
                onClick={handleSubmit}
                disabled={!values.email || !values.password || loading}
              />
              <div className="foot-text">
                <FootText text="Don't have an account? " />
                <FootText
                  text="Sign up"
                  onClick={() => navigate(routes.register)}
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
      {loading && <Loading />}
    </Container>
  );
};

export default Login;
