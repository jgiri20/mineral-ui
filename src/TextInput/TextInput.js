/**
 * Copyright 2017 CA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow */
import React from 'react';
import { createStyledComponent } from '../styles';
import { mapComponentThemes } from '../themes';
import FauxControl, {
  componentTheme as fauxControlComponentTheme
} from '../FauxControl/FauxControl';
import FauxControlItems, {
  componentTheme as fauxControlItemsComponentTheme
} from '../FauxControl/FauxControlItems';

type Props = {
  /** @Private CSS className */
  className?: string,
  /** Initial value of the input. Primarily for use with uncontrolled components */
  defaultValue?: string,
  /** Disables the input */
  disabled?: boolean,
  /** Icon located at the start of the input */
  iconStart?: React$Element<*>,
  /** Icon located at the end of the input */
  iconEnd?: React$Element<*>,
  /** ref for the input */
  inputRef?: (node: ?React$Component<*, *>) => void,
  /** Props to be applied directly to the root element, rather than the input */
  rootProps?: Object,
  /** Indicates that the value of the element is invalid */
  invalid?: boolean,
  /** Function called when input value changes */
  onChange?: (event: SyntheticEvent<>) => void,
  /** Text to display before input value */
  prefix?: string | React$Element<*>,
  /** Indicates that the user cannot modify the value of the input */
  readOnly?: boolean,
  /** Indicates that the user must fill in a value before submitting a form */
  required?: boolean,
  /** Available sizes */
  size?: 'small' | 'medium' | 'large' | 'jumbo',
  /** Text to display after input value */
  suffix?: string | React$Element<*>,
  /** Type of input. Not all types are equally supported across browsers. */
  type?:
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'month'
    | 'number'
    | 'password'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week',
  /** The initial value of the input. Primarily for use with controlled components.  If this prop is specified, an onChange handler must also be specified.  Also see `defaultValue`. */
  value?: string,
  /** Available variants */
  variant?: 'success' | 'warning' | 'danger'
};

const fromFauxControlItemsComponentTheme = (baseTheme: Object) => ({
  ...mapComponentThemes(
    {
      name: 'FauxControlItems',
      theme: fauxControlItemsComponentTheme(baseTheme)
    },
    {
      name: 'TextInput',
      theme: {}
    },
    baseTheme
  )
});

export const componentTheme = (baseTheme: Object) => ({
  ...mapComponentThemes(
    {
      name: 'FauxControl',
      theme: fauxControlComponentTheme(baseTheme)
    },
    {
      name: 'TextInput',
      theme: {
        TextInput_color_placeholder: baseTheme.color_gray_60,

        TextInputIcon_fill: baseTheme.color_gray_40
      }
    },
    {
      ...fromFauxControlItemsComponentTheme(baseTheme),
      ...baseTheme
    }
  )
});

const styles = {
  input: {
    backgroundColor: 'transparent',
    border: 0,
    boxShadow: 'none',
    flex: '1 1 auto',
    fontFamily: 'inherit',
    minWidth: 0,
    width: '100%'
  },
  root: ({ theme: baseTheme, variant }) => {
    const theme = componentTheme(baseTheme);

    return {
      alignItems: 'center',
      cursor: 'text',
      display: 'flex',
      width: '100%',

      '& [role="img"]': {
        display: 'block',
        fill: theme.TextInputIcon_fill,
        flex: '0 0 auto',
        margin: `0 ${theme.TextInputIcon_marginHorizontal}`,

        '&:last-of-type': {
          fill: variant
            ? theme[`color_text_${variant}`]
            : theme.TextInputIcon_fill
        }
      }
    };
  }
};

const Root = createStyledComponent(FauxControl, styles.root, {
  displayName: 'TextInput'
});
const Input = createStyledComponent('input', styles.input, {
  dispayName: 'Input',
  rootEl: 'input'
});

/**
 * TextInput allows your app to accept a text value from the user. It supports
 * any of the text-based input types, such as `text`, `number` or `email`.
 */
export default function TextInput({
  className,
  disabled,
  iconEnd,
  iconStart,
  inputRef,
  invalid,
  prefix,
  readOnly,
  required,
  rootProps: otherRootProps,
  size = 'large',
  suffix,
  type = 'text',
  variant,
  ...restProps
}: Props) {
  const rootProps = {
    className,
    disabled,
    readOnly,
    variant,
    ...otherRootProps
  };

  const inputProps = {
    'aria-invalid': invalid,
    'aria-required': required,
    controlRef: inputRef,
    disabled,
    readOnly,
    required,
    type,
    ...restProps // Note: Props are spread to Input rather than Root
  };

  const fauxControlItemsProps = {
    control: Input,
    controlProps: inputProps,
    disabled,
    iconEnd,
    iconStart,
    prefix,
    readOnly,
    size,
    suffix,
    variant
  };

  return (
    <Root {...rootProps}>
      <FauxControlItems {...fauxControlItemsProps} />
    </Root>
  );
}
