export interface IGenericTableHeader {
  label: string;
  attribute: string;
}

export interface IGenericTableProps {
  headers: IGenericTableHeader[];
  maximumPage: number;
  onPageChange?: (event: any) => void;
  nextLabel?: string;
  previousLabel?: string;
  pageRangeDisplayed?: number;
  renderOnZeroPageCount?: null;
  className?: string;
}
