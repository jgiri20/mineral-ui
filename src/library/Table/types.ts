/* @flow */
import { COLUMN_ALIGN, DENSITY, TITLE_ELEMENT } from './constants';

import {
  ComponentTheme,
  ComponentThemeFn,
  ThemeValue
} from '../themes/types';

type ColumnAlign = keyof typeof COLUMN_ALIGN;
type Density = keyof typeof DENSITY;
type TitleElement = keyof typeof TITLE_ELEMENT;

export type TableProps = {
  columns?: Columns,
  data: Rows,
  defaultSelectedRows?: Rows,
  defaultSort?: Sort,
  density?: Density,
  hideHeader?: boolean,
  hideTitle?: boolean,
  highContrast?: boolean,
  messages?: Messages,
  onSort?: (sort: Sort) => void,
  onToggleAllRows?: (rows: Rows, selected: boolean) => void,
  onToggleRow?: (row: Row, selected: boolean) => void,
  rowKey?: string,
  scrollable?: boolean,
  selectable?: boolean,
  selectedRows?: Rows,
  sort?: Sort,
  sortable?: boolean,
  sortComparator?: (a: object, b: object, key: string) => -1 | 0 | 1,
  striped?: boolean,
  title: React.ReactNode,
  titleAppearance?: TitleElement,
  titleAs?: TitleElement
};

export type TableDefaultProps = {
  density: Density,
  messages: Messages,
  titleAs: TitleElement
};

export type SelectableTableProps = any; // TODO

export type SortableTableProps = any; // TODO

export type SelectableSortableTableProps = any; // TODO

export type TableBaseProps = {
  columns: Columns,
  data: Rows,
  hideHeader?: boolean,
  hideTitle?: boolean,
  id?: string,
  isSortable?: boolean,
  messages: Messages,
  rowKey?: string,
  scrollable?: boolean,
  selectable?: SelectableType,
  sortable?: SortableType,
  title: React.ReactNode,
  titleAppearance?: TitleElement,
  titleAs?: TitleElement
} & TableContextType;

export type TableBaseDefaultProps = {
  density: Density,
  scrollable: boolean,
  titleAs: TitleElement
};

export type TableBaseState = {
  scrollable: boolean
};

export type TableContextType = {
  density?: Density,
  highContrast?: boolean,
  striped?: boolean
};

export type Column = {
  cell?: RenderFn,
  content: React.ReactNode,
  headerCell?: RenderFn,
  key: string,
  label?: string,
  maxWidth?: number | string,
  minWidth?: number | string,
  primary?: boolean,
  sortable?: boolean,
  sortComparator?: SortComparator,
  textAlign?: ColumnAlign,
  width?: number | string
};

export type Columns = Array<Column>;

export type Messages = {
  deselectAllRows: string,
  deselectRow: string,
  selectAllRows: string,
  selectRow: string,
  selectedRows: string,
  sortColumnAscending: string,
  sortColumnDescending: string
};

export type Row = object;

export type Rows = Array<Row>;

export type RenderFn = (props: RenderProps) => React.ReactNode;

export type RenderProps = {
  props: object,
  state?: object,
  helpers?: object
};

export type SortComparator = (a: object, b: object, key: string) => -1 | 0 | 1;

export type Comparators = { [column: string]: SortComparator };

export type SelectableProps = {
  children: (props: object) => React.ReactNode,
  data: SelectableData,
  defaultSelected?: SelectableData,
  onToggle?: (item: SelectableItem, selected: boolean) => void,
  onToggleAll?: (items: SelectableData, selected: boolean) => void,
  selected?: SelectableData
};

export type SelectableState = {
  selected: SelectableData
};

type SelectableData = Array<SelectableItem>;

export type SelectableItem = {
  disabled?: boolean
};

export type SelectableType = {
  all: boolean,
  some: boolean,
  isSelected: (item: SelectableItem) => boolean,
  toggle: SelectableToggle,
  toggleAll: SelectableToggleAll
};

export type SelectableToggle = (item: SelectableItem) => void;

export type SelectableToggleAll = () => void;

export type SortableProps = {
  children: (props: object) => React.ReactNode,
  comparators?: Comparators,
  data: SortableData,
  defaultSort?: Sort,
  onSort?: (sort: Sort) => void,
  sort?: Sort,
  sortComparator: SortComparator
};

export type SortableState = {
  sort: Sort | null | undefined
};

export type SortableData = Array<object>;

export type Sort = {
  key: string,
  descending?: boolean
};

export type SortFn = (Sort) => void;

export type SortableType = {
  data: SortableData,
  sort: Sort | null | undefined,
  sortFn: SortFn
};

export type TableThemeFn = ComponentThemeFn<TableTheme>;
export type TableTheme = ComponentTheme<TableThemeKeys>;
type TableThemeKeys = {
  Table_outline_focus: ThemeValue
};

export type TableCellProps = {
  as?: string,
  children?: React.ReactNode,
  columnKey?: string,
  noPadding?: boolean,
  primary?: boolean,
  rowIndex?: number,
  render?: RenderFn,
  textAlign?: ColumnAlign
};

export type TableCellThemeFn = ComponentThemeFn<TableCellTheme>;
export type TableCellTheme = ComponentTheme<TableCellThemeKeys>;
type TableCellThemeKeys = {
  TableCell_borderVertical: ThemeValue,
  TableCell_borderVertical_highContrast: ThemeValue,
  TableCell_fontSize: ThemeValue,
  TableCell_paddingHorizontal: ThemeValue,
  TableCell_paddingVertical: ThemeValue,
  TableCell_paddingVertical_spacious: ThemeValue,
  TableCell_verticalAlign: ThemeValue
};

export type TableDataRowProps = {
  checked?: boolean,
  columns: Columns,
  data: Row,
  messages: Messages,
  rowIndex: number,
  toggle?: SelectableToggle
};

export type TableHeaderProps = {
  children: React.ReactNode,
  hide?: boolean
};

export type TableHeaderThemeFn = ComponentThemeFn<TableHeaderTheme>;
export type TableHeaderTheme = ComponentTheme<TableHeaderThemeKeys>;
type TableHeaderThemeKeys = {
  TableHeader_borderBottom: ThemeValue,
  TableHeader_borderBottom_highContrast: ThemeValue,
  TableHeader_borderTop: ThemeValue,
  TableHeader_borderTop_highContrast: ThemeValue
};

export type TableHeaderCellProps = {
  children?: React.ReactNode,
  label?: string,
  minWidth?: number | string,
  maxWidth?: number | string,
  render?: RenderFn,
  textAlign?: ColumnAlign,
  width?: number | string
};

export type TableHeaderCellDefaultProps = {
  textAlign: ColumnAlign
};

export type TableHeaderCellThemeFn = ComponentThemeFn<TableHeaderCellTheme>;
export type TableHeaderCellTheme = ComponentTheme<TableHeaderCellThemeKeys>;
type TableHeaderCellThemeKeys = {
  TableHeaderCell_fontSize: ThemeValue,
  TableHeaderCell_borderVertical: ThemeValue,
  TableHeaderCell_borderVertical_highContrast: ThemeValue,
  TableHeaderCell_fontWeight: ThemeValue,
  TableHeaderCell_paddingHorizontal: ThemeValue,
  TableHeaderCell_paddingVertical: ThemeValue,
  TableHeaderCell_paddingVertical_spacious: ThemeValue,
  TableHeaderCell_verticalAlign: ThemeValue
};

export type TableHeaderRowProps = {
  checked?: boolean,
  columns: Columns,
  indeterminate?: boolean,
  isSortable?: boolean,
  messages: Messages,
  sortable?: SortableType,
  toggle?: SelectableToggleAll
};

export type TableRowProps = {
  children: React.ReactNode,
  isSelected?: boolean,
  isSelectable?: boolean,
  render?: RenderFn,
  rowIndex?: number
};

export type TableRowThemeFn = ComponentThemeFn<TableRowTheme>;
export type TableRowTheme = ComponentTheme<TableRowThemeKeys>;
type TableRowThemeKeys = {
  TableRow_backgroundColor_highContrast_selected: ThemeValue,
  TableRow_backgroundColor_highContrast_selectedHover: ThemeValue,
  TableRow_backgroundColor_hover: ThemeValue,
  TableRow_backgroundColor_selected: ThemeValue,
  TableRow_backgroundColor_selectedHover: ThemeValue,
  TableRow_backgroundColor_striped: ThemeValue,
  TableRow_borderHorizontal: ThemeValue,
  TableRow_borderHorizontal_highContrast: ThemeValue
};

export type TableSelectableCellProps = {
  checked?: boolean,
  disabled?: boolean,
  indeterminate?: boolean,
  isHeader?: boolean,
  label: string,
  onChange: () => void
};

export type TableSortableHeaderCellProps = {
  children: React.ReactNode,
  label?: string,
  messages: Messages,
  name: string,
  render?: RenderFn,
  sortable: SortableType
};

export type TableSortableHeaderCellThemeFn = ComponentThemeFn<TableSortableHeaderCellTheme>;
export type TableSortableHeaderCellTheme = ComponentTheme<TableSortableHeaderCellThemeKeys>;
type TableSortableHeaderCellThemeKeys = {
  TableSortableHeaderCell_border_focus: ThemeValue,
  TableSortableHeaderCell_color_focus: ThemeValue,
  TableSortableHeaderCell_color_hover: ThemeValue,
  TableSortableHeaderCellIcon_size: ThemeValue
};

export type TableTitleProps = {
  appearance?: TitleElement,
  as?: TitleElement,
  children: React.ReactNode,
  hide?: boolean,
  id: string,
  theme: object
};

export type TableTitleThemeFn = ComponentThemeFn<TableTitleTheme>;
export type TableTitleTheme = ComponentTheme<TableTitleThemeKeys>;
type TableTitleThemeKeys = {
  TableTitle_color: ThemeValue,
  TableTitle_fontSize: ThemeValue,
  TableTitle_fontWeight: ThemeValue,
  TableTitle_marginBottom: ThemeValue
};
