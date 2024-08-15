import React from 'react';
import { Table } from './style';
import { Text } from '../Text';

interface ITableProps {
  data: any[][];
  headers: Array<{ label: string; attribute: string }>;
  actions?: (row: any) => JSX.Element;
}

export const GenericTable: React.FC<ITableProps> = ({
  headers,
  data,
  actions,
}) => {
  return (
    <Table>
      <thead>
        <tr>
          {headers.map((header, i) => (
            <th key={i}>
              <Text text={header.label} />
            </th>
          ))}
          {actions && (
            <th>
              <Text text="Actions" />
            </th>
          )}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i} className="table-row">
            {Object.entries(row).map((cell, j) => {
              if (!headers.find((h) => h.attribute === cell[0])) return null;
              if (cell[0] === 'createdAt' || cell[0] === 'updatedAt') {
                const localizedDate = new Date(cell[1]).toLocaleDateString(
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
                  .format(new Date(cell[1]))
                  .toLowerCase();

                return (
                  <td key={j}>
                    <Text text={`${localizedDate} at ${localizedTime}`} />
                  </td>
                );
              } else {
                return (
                  <td key={j}>
                    <Text text={cell[1]} />
                  </td>
                );
              }
            })}
            {actions && <td>{actions(row)}</td>}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
