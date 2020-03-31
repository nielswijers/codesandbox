import React, { ChangeEvent, CSSProperties, FC, useCallback } from 'react';
import { useToggle } from 'react-use';
import { useControlled } from './utils/useControled';

type BaseProps = {
  style?: CSSProperties;
  className?: string;
  ref?: any;
};

type CheckboxProps = {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (event: ChangeEvent, checked: boolean) => void;
} & BaseProps;

const Checkbox: FC<CheckboxProps> = (props) => {
  const { checked: checkedProp, defaultChecked = false, onChange } = props;
  const [checked, setCheckedState] = useControlled({
    controlled: checkedProp,
    default: defaultChecked,
  });

  const handleChange = useCallback((event) => {
    setCheckedState(!checked);

    if (onChange) {
      onChange(event, !checked);
    }
  }, [checked, onChange, setCheckedState]);

  return <input type="checkbox" checked={checked} onChange={handleChange} />;
};

export const App: FC = () => {
  const [checked, toggle] = useToggle(true);
  return (
    <div>
      <Checkbox defaultChecked/>
      <Checkbox defaultChecked/>
      <Checkbox defaultChecked/>
      <Checkbox defaultChecked/>
      <Checkbox checked={checked} onChange={() => toggle()} />
      <Checkbox checked={checked} onChange={() => toggle()} />
      <Checkbox checked={checked} onChange={() => toggle()} />
    </div>
  );
};
