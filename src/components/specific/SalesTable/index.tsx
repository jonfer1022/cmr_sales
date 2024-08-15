import React, { useCallback } from 'react';
import { GenericTable } from '../../basic/GenericTable';
import Pagination from '../../basic/Pagination';
import { FaRegEdit } from 'react-icons/fa';
import { FaRegTrashCan } from 'react-icons/fa6';
import { IGenericTableProps } from '../../../utils/interfaces/genericTable.interface';

const edit = 'edit';
const remove = 'remove';

interface ISalesTableProps extends IGenericTableProps {
  sales: any[];
  onEdit?: (row: any) => void;
  onRemove?: (row: any) => void;
}

const SalesTable: React.FC<ISalesTableProps> = ({
  headers,
  sales,
  maximumPage,
  onPageChange,
  nextLabel,
  previousLabel,
  pageRangeDisplayed,
  renderOnZeroPageCount,
  onEdit,
  onRemove,
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
    [onEdit, onRemove]
  );

  return (
    <>
      <GenericTable
        headers={headers}
        data={sales}
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
      <Pagination
        pageCount={maximumPage}
        onPageChange={onPageChange}
        nextLabel={nextLabel}
        previousLabel={previousLabel}
        pageRangeDisplayed={pageRangeDisplayed}
        renderOnZeroPageCount={renderOnZeroPageCount}
      />
    </>
  );
};

export default SalesTable;
