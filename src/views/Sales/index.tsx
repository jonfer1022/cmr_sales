import React, { useState, useEffect, useCallback } from 'react';
import { Container } from './style';
import { HeadingTwo } from '../../components/basic/Text';
import SalesTable from '../../components/specific/SalesTable';
import Loading from '../../components/basic/Loading';
import { AppDispatch, RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import {
  getSales,
  setDecrementPage,
  setIncrementPage,
} from '../../redux/slices/sales.slice';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../utils/routes';
import { IGenericTableHeader } from '../../utils/interfaces/genericTable.interface';

const initColumns = [
  { label: 'Reference', attribute: 'reference' },
  { label: 'Status', attribute: 'status' },
  { label: 'Amount', attribute: 'amount' },
  { label: 'Total price', attribute: 'totalPrice' },
  { label: 'Date creation', attribute: 'createdAt' },
  { label: 'Date last update', attribute: 'updatedAt' },
  { label: 'User', attribute: 'user' },
];

const Sales: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [columns] = useState<Array<IGenericTableHeader>>(initColumns);
  const [loading, setLoading] = useState<boolean>(false);
  const { sales, page: currentPage } = useSelector(
    (state: RootState) => state.sales
  );

  const getAllSales = useCallback(async () => {
    setLoading(true);
    dispatch(getSales()).then((result) => {
      if (getSales.fulfilled.match(result)) {
        setLoading(false);
      } else {
        setLoading(false);
      }
    });
  }, [dispatch]);

  const onPageChange = useCallback(
    (page: number) => {
      if (currentPage > page) {
        dispatch(setDecrementPage());
      } else if (currentPage < page) {
        dispatch(setIncrementPage());
      }
    },
    [currentPage, dispatch]
  );

  useEffect(() => {
    getAllSales();
  }, [getAllSales]);

  return (
    <Container>
      <HeadingTwo text="Sales" />
      <div className="table-sales">
        <SalesTable
          headers={columns}
          sales={sales}
          maximumPage={15}
          onPageChange={onPageChange}
          onEdit={(row) => navigate(routes.editSales(row?.id), { state: row })}
        />
      </div>
      {loading && <Loading />}
    </Container>
  );
};

export default Sales;
