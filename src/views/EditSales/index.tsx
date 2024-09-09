import React, { useCallback, useEffect, useState } from 'react';
import { Formik, FormikProps, Form } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import { InputTextLabel } from '../../components/basic/Inputs';
import { ButtonAction, ButtonSecondary } from '../../components/basic/Buttons';
import { Container } from './style';
import ProductsTable from '../../components/specific/ProductsTable';
import { IGenericTableHeader } from '../../utils/interfaces/genericTable.interface';
import { HeadingTwo } from '../../components/basic/Text';
import { routes } from '../../utils/routes';
import Loading from '../../components/basic/Loading';
import { getSaleDetails } from '../../redux/slices/sales.slice';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { ISales } from '../../utils/interfaces/sales.interface';

const initColumns = [
  { label: 'Reference', attribute: 'reference' },
  { label: 'Amount', attribute: 'amount' },
  { label: 'Unit price', attribute: 'price' },
  { label: 'Total price', attribute: 'totalPrice' },
  { label: 'Category', attribute: 'category' },
  { label: 'Size', attribute: 'size' },
  { label: 'Date last update', attribute: 'updatedAt' },
  { label: 'Added by User', attribute: 'userName' },
];

const EditSales: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const [columns] = useState<IGenericTableHeader[]>(initColumns);
  const { purchasedProducts, saleDetails } = useAppSelector(
    (state) => state.sales
  );

  const getSale = useCallback(async () => {
    try {
      setLoading(true);
      if (id) {
        dispatch(getSaleDetails(id)).then((result) => {
          if (getSaleDetails.fulfilled.match(result)) {
            setLoading(false);
          } else {
            setLoading(false);
          }
        });
      }
    } catch (error) {
      setLoading(false);
    }
  }, [dispatch, id]);

  useEffect(() => {
    getSale();
  }, [getSale]);

  const convertDate = (date: string | undefined) => {
    const localizedDate = new Date(date || Date.now()).toLocaleDateString(
      'en-CA',
      {
        weekday: 'long',
        month: 'short',
        day: 'numeric',
      }
    );

    const localizedTime = new Intl.DateTimeFormat('en-US', {
      timeStyle: 'short',
    })
      .format(new Date(date || Date.now()))
      .toLowerCase();

    return `${localizedDate} at ${localizedTime}`;
  };

  return (
    <Container>
      <HeadingTwo text={`Editing the number reference ${id}`} />
      <Formik
        initialValues={saleDetails}
        onSubmit={() => {}}
        enableReinitialize={true}
      >
        {({ values, handleSubmit }: FormikProps<ISales>) => (
          <Form>
            <InputTextLabel
              label="Reference"
              name="referencia"
              classname="input-text"
              value={`${values.reference}`}
              disabled={true}
              // touched={touched}
              // onChange={(value) => handleChange('email')(value)}
              // handleBlur={handleBlur}
              // placeholder=""
              // error={touched.email && errors.email ? errors.email : ''}
            />
            <div>
              <InputTextLabel
                label="Status"
                name="status"
                classname="input-text"
                value={values.status}
                onChange={() => {}}
                disabled={true}
                // touched={touched}
                // onChange={(value) => handleChange('email')(value)}
                // handleBlur={handleBlur}
                // placeholder=""
                // error={touched.email && errors.email ? errors.email : ''}
              />
              <InputTextLabel
                label="Amount"
                name="Amount"
                classname="input-text"
                value={`${values.amount}`}
                onChange={() => {}}
                disabled={true}
                type="number"
                // touched={touched}
                // onChange={(value) => handleChange('email')(value)}
                // handleBlur={handleBlur}
                // placeholder=""
                // error={touched.email && errors.email ? errors.email : ''}
              />
              <InputTextLabel
                label="Total price"
                name="totalPrice"
                classname="input-text"
                value={`${values.totalPrice}`}
                onChange={() => {}}
                disabled={true}
                type="text"
                // touched={touched}
                // onChange={(value) => handleChange('email')(value)}
                // handleBlur={handleBlur}
                // placeholder=""
                // error={touched.email && errors.email ? errors.email : ''}
              />
            </div>
            <div>
              <InputTextLabel
                label="Date creation"
                name="createdAt"
                classname="input-text"
                value={convertDate(values.createdAt)}
                onChange={() => {}}
                disabled={true}
                type="text"
                // touched={touched}
                // onChange={(value) => handleChange('email')(value)}
                // handleBlur={handleBlur}
                // placeholder=""
                // error={touched.email && errors.email ? errors.email : ''}
              />
              <InputTextLabel
                label="Date last update"
                name="updatedAt"
                classname="input-text"
                value={convertDate(values.updatedAt)}
                onChange={() => {}}
                disabled={true}
                type="text"
                // touched={touched}
                // onChange={(value) => handleChange('email')(value)}
                // handleBlur={handleBlur}
                // placeholder=""
                // error={touched.email && errors.email ? errors.email : ''}
              />
            </div>
            <InputTextLabel
              label="User"
              name="user"
              classname="input-text"
              value={values.user.name}
              onChange={() => {}}
              disabled={true}
              type="text"
              // touched={touched}
              // onChange={(value) => handleChange('email')(value)}
              // handleBlur={handleBlur}
              // placeholder=""
              // error={touched.email && errors.email ? errors.email : ''}
            />
            <ProductsTable
              headers={columns}
              products={purchasedProducts}
              maximumPage={1}
            />
            <div className="btn-container">
              <ButtonSecondary
                classname="btn-action"
                type="button"
                value="Return"
                onClick={() => navigate(routes.sales)}
                disabled={loading}
              />
              <ButtonAction
                classname="btn-action"
                type="submit"
                value="Edit"
                onClick={handleSubmit}
                disabled={loading}
              />
            </div>
          </Form>
        )}
      </Formik>
      {loading && <Loading />}
    </Container>
  );
};

export default EditSales;
