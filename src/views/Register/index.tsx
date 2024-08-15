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
import { ISignUpNavigation } from '../../utils/interfaces/navigation.interfaces';
import { AppDispatch } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { signup } from '../../redux/slices/auth.slice';

const initialValues = {
  name: '',
  email: '',
  password: '',
  showPassword: false,
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('The full name is required'),
  password: Yup.string().required('The password is required'),
  email: Yup.string().required('The email is required'),
});

const Register: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = useCallback(
    async (values: typeof initialValues) => {
      const state: ISignUpNavigation = {
        email: values.email,
        password: values.password,
        name: values.name,
      };
      setLoading(true);
      dispatch(signup(state)).then((result) => {
        if (signup.fulfilled.match(result)) {
          setLoading(false);
          navigate(routes.confirmSignup, { state });
        } else {
          setLoading(false);
        }
      });
    },
    [navigate, dispatch]
  );

  return (
    <Container>
      <div>
        <HeadingTwo text="Register" />
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
                name="name"
                classname="input-text"
                value={values.name}
                touched={touched}
                onChange={(value) => handleChange('name')(value)}
                handleBlur={handleBlur}
                placeholder="Enter your full name"
                error={touched.name && errors.name ? errors.name : ''}
              />
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
                value="Sign up"
                onClick={handleSubmit}
                disabled={
                  !values.name || !values.password || !values.email || loading
                }
              />
              <div className="foot-text">
                <FootText text="Already have an account? " />
                <FootText
                  text="Sign in"
                  onClick={() => navigate(routes.login)}
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

export default Register;
