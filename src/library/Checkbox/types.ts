/* @flow */
import { SIZE, LABEL_POSITION } from './constants';

import {
  ComponentTheme,
  ComponentThemeFn,
  ThemeValue
} from '../themes/types';

type LabelPosition = keyof typeof LABEL_POSITION;
type Size = keyof typeof SIZE;

export type CheckboxProps = {
  checked?: boolean,
  className?: string,
  defaultChecked?: boolean,
  defaultIndeterminate?: boolean,
  disabled?: boolean,
  hideLabel?: boolean,
  indeterminate?: boolean,
  inputRef?: (node: HTMLInputElement | null | undefined) => void,
  invalid?: boolean,
  justify?: boolean,
  label: string | React.ReactElement<any>,
  labelPosition?: LabelPosition,
  name?: string,
  onChange?: (event: React.SyntheticEvent) => void,
  onClick?: (event: React.SyntheticEvent) => void,
  required?: boolean,
  rootProps?: object,
  size?: Size,
  value?: string
};

export type CheckboxDefaultProps = {
  labelPosition: LabelPosition,
  size: Size
};

export type CheckboxGroupProps = {
  checked?: Array<string>,
  children?: React.ReactNode,
  data?: Array<{ label: string | React.ReactElement<any>, value: string }>,
  defaultChecked?: Array<string>,
  inline?: boolean,
  name: string,
  onChange?: (event: React.SyntheticEvent) => void,
  rootProps?: object
};

export type CheckboxThemeFn = ComponentThemeFn<CheckboxTheme>;
export type CheckboxTheme = ComponentTheme<CheckboxThemeKeys>;
type CheckboxThemeKeys = {
  CheckboxControl_backgroundColor: ThemeValue,
  CheckboxControl_backgroundColor_checked: ThemeValue,
  CheckboxControl_backgroundColor_checkedHover: ThemeValue,
  CheckboxControl_borderColor: ThemeValue,
  CheckboxControl_borderColor_hover: ThemeValue,
  CheckboxControl_borderColor_checked: ThemeValue,
  CheckboxControl_borderColor_checkedHover: ThemeValue,
  CheckboxControl_borderRadius: ThemeValue,
  CheckboxControl_boxShadow_focus: ThemeValue,
  CheckboxControl_size: ThemeValue,
  CheckboxControl_size_jumbo: ThemeValue,
  CheckboxText_color: ThemeValue,
  CheckboxText_fontSize: ThemeValue,
  CheckboxText_fontSize_small: ThemeValue,
  CheckboxText_marginHorizontal: ThemeValue
};

export type CheckboxGroupThemeFn = ComponentThemeFn<CheckboxGroupTheme>;
export type CheckboxGroupTheme = ComponentTheme<CheckboxGroupThemeKeys>;
type CheckboxGroupThemeKeys = {
  CheckboxGroupControl_marginHorizontal_inline: ThemeValue,
  CheckboxGroupControl_marginVertical_stacked: ThemeValue,
  CheckboxGroupControl_marginVertical_stackedJumbo: ThemeValue
};