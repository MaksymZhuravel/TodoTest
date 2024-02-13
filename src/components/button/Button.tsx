import React, {memo} from 'react';

import {StyledButtonPressable, StyledButtonText} from './button.styled.ts';

interface IProps {
  onPress: () => void;
  title: string;
}

const Button: React.FC<IProps> = ({onPress, title}) => {
  return (
    <StyledButtonPressable onPress={onPress}>
      <StyledButtonText>{title}</StyledButtonText>
    </StyledButtonPressable>
  );
};

export default memo(Button);
