import React, {memo} from 'react';
import styled from 'styled-components/native';

interface IProps {
  onPress: () => void;
  title: string;
}

const Button: React.FC<IProps> = ({onPress, title}) => {
  return (
    <StyledPressable onPress={onPress}>
      <StyledText>{title}</StyledText>
    </StyledPressable>
  );
};


const StyledPressable = styled.Pressable`
  border-radius: 15px;
  background-color: white;
  justify-content: center;
  align-items: center;
  padding: 15px;
`;

const StyledText = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export default memo(Button);
