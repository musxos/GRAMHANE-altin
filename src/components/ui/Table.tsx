import React from 'react';
import clsx from 'clsx';

interface TableProps {
  columns: {
    key: string;
    title: string;
    render?: (item: any) => React.ReactNode;
  }[];
  data: any[];
  className?: string;
  emptyMessage?: string;
  isLoading?: boolean;
  hoverable?: boolean;
  compact?: boolean;
}

export const Table: React.FC<TableProps> = ({
  columns,
  data,
  className,
  emptyMessage = 'Veri bulunamadı',
  isLoading = false,
  hoverable = true,
  compact = false,
}) => {
  return (
    <div className={clsx('overflow-x-auto', className)}>
      <table className="min-w-full divide-y divide-secondary-200">
        <thead className="bg-secondary-50">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                className={clsx(
                  'text-left text-sm font-medium text-secondary-700',
                  compact ? 'px-4 py-2' : 'px-6 py-3'
                )}
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-secondary-200">
          {isLoading ? (
            <tr>
              <td
                colSpan={columns.length}
                className={clsx(
                  'text-center text-secondary-500',
                  compact ? 'px-4 py-2' : 'px-6 py-4'
                )}
              >
                Yükleniyor...
              </td>
            </tr>
          ) : data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className={clsx(
                  'text-center text-secondary-500',
                  compact ? 'px-4 py-2' : 'px-6 py-4'
                )}
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((item, index) => (
              <tr
                key={index}
                className={clsx(
                  hoverable && 'hover:bg-secondary-50',
                  'transition-colors duration-150'
                )}
              >
                {columns.map((column) => (
                  <td
                    key={`${index}-${column.key}`}
                    className={clsx(
                      'text-sm text-secondary-700',
                      compact ? 'px-4 py-2' : 'px-6 py-4'
                    )}
                  >
                    {column.render
                      ? column.render(item)
                      : item[column.key] !== undefined
                      ? String(item[column.key])
                      : ''}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};