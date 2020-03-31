import { useCallback, useRef, useState } from 'react';

export const useControlled = ({
  controlled,
  default: defaultProp,
}: {
  controlled: any;
  default: any;
}) => {
  const { current: isControlled } = useRef(controlled !== undefined);
  const [valueState, setValue] = useState(defaultProp);
  const value = isControlled ? controlled : valueState;

  const setValueIfUncontrolled = useCallback(
    (newValue) => {
      if (!isControlled) {
        setValue(newValue);
      }
    },
    [isControlled],
  );

  return [value, setValueIfUncontrolled];
};
