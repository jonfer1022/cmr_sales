import React, { useCallback } from 'react';
import { GenericTable } from '../../basic/GenericTable';
import Pagination from '../../basic/Pagination';
import { FaRegTrashCan } from 'react-icons/fa6';
import { IGenericTableProps } from '../../../utils/interfaces/genericTable.interface';
import { FaRegEdit } from 'react-icons/fa';

const edit = 'edit';
const remove = 'remove';

interface IProductsTableProps extends IGenericTableProps {
  products: any[];
  onEdit?: (row: any) => void;
  onRemove?: (row: any) => void;
}

const ProductsTable: React.FC<IProductsTableProps> = ({
  headers,
  products,
  maximumPage,
  onPageChange,
  nextLabel,
  previousLabel,
  pageRangeDisplayed,
  renderOnZeroPageCount,
  onRemove,
  onEdit,
}) => {
  const handleAction = useCallback(
    (action: string, row: any) => {
      switch (action) {
        case edit:
          onEdit && onEdit(row);
          break;
        case remove:
          onRemove && onRemove(row);
          break;
        default:
          break;
      }
    },
    [onRemove, onEdit]
  );

  return (
    <>
      <GenericTable
        headers={headers}
        data={products}
        actions={(row) => (
          <div className="actions">
            <div onClick={() => handleAction(edit, row)}>
              <FaRegEdit size={25} />
            </div>
            <div onClick={() => handleAction(remove, row)}>
              <FaRegTrashCan size={25} />
            </div>
          </div>
        )}
      />
      {maximumPage > 1 && (
        <Pagination
          pageCount={maximumPage}
          onPageChange={onPageChange}
          nextLabel={nextLabel}
          previousLabel={previousLabel}
          pageRangeDisplayed={pageRangeDisplayed}
          renderOnZeroPageCount={renderOnZeroPageCount}
        />
      )}
    </>
  );
};

export default ProductsTable;
