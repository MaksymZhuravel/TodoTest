import React, {memo} from 'react';

import {StyledButtonPressable, StyledButtonText} from './button.styled.ts';

interface IProps {
  onPress: () => void;
  title: string;
  width?: number | string;
}

export const Button: React.FC<IProps> = memo(({onPress, title, width}) => {
  return (
    <StyledButtonPressable width={width} onPress={onPress}>
      <StyledButtonText>{title}</StyledButtonText>
    </StyledButtonPressable>
  );
});
