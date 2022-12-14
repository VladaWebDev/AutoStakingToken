import * as React from 'react';
import PropTypes from 'prop-types';
import SelectUnstyled, { selectUnstyledClasses } from '@mui/base/SelectUnstyled';
import OptionUnstyled from '@mui/base/OptionUnstyled';
import { styled } from '@mui/system';
import { PopperUnstyled } from '@mui/base';
import api from "../../core/api";

const StyledButton = styled('button')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  min-height: 38px;
  min-width: 100%;
  background: transparent;
  border: 1px solid white;
  border-radius: 10px;
  padding: 5px 10px;
  text-align: left;
  line-height: 1.5;
  color: white;

  &.${selectUnstyledClasses.expanded} {
    &::after {
      content: '▴';
    }
  }

  &::after {
    content: '▾';
    float: right;
  }

  & img {
    margin-right: 10px;
  }
  `,
);

const StyledListbox = styled('ul')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 5px;
  margin: 10px 0;
  min-width: 106px;
  max-height: 200px;
  background: #2e2f31;
  border-radius: 0.75em;
  color: white;
  overflow: auto;
  outline: 0px;
  `,
);

const StyledOption = styled(OptionUnstyled)(
  ({ theme }) => `
  background: #2e2f31;
  list-style: none;
  padding: 8px;
  border-radius: 0.45em;
  cursor: default;
  &:hover {
    background: #3b3c3e;
  }
  &:last-of-type {
    border-bottom: none;
  }
  & img {
    margin-right: 10px;
  }`,
);

const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
`;

const CustomSelect = React.forwardRef(function CustomSelect(props, ref) {
  const components = {
    Root: StyledButton,
    Listbox: StyledListbox,
    Popper: StyledPopper,
    ...props.components,
  };

  return <SelectUnstyled {...props} ref={ref} components={components} />;
});

CustomSelect.propTypes = {
  /**
   * The components used for each slot inside the Select.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: PropTypes.shape({
    Listbox: PropTypes.elementType,
    Popper: PropTypes.func,
    Root: PropTypes.elementType,
  }),
};

export default function UnstyledSelectRichOptions({ value, onChange, disabled }) {
  return (
    <CustomSelect defaultValue={0} value={value} onChange={onChange} disabled={disabled}>
      {coins.map((c) => (
        <StyledOption key={c.code} value={c.code}>
          <img
            loading="lazy"
            width="20"
            src={api.rootUrl + `/img/icons/${c.label.toLowerCase()}.png`}
            alt={`Coin of ${c.label}`}
          />
          {c.label}
        </StyledOption>
      ))}
    </CustomSelect>
  );
}

// const coins = [
//   { code: 0, label: 'AVAX' },
//   { code: 1, label: 'MATIC' },
//   { code: 2, label: 'BNB' }
// ];

const coins = [
  { code: 0, label: 'BNB' },
  { code: 1, label: 'USDT' }
];