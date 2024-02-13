import styled from 'styled-components/native';

export const StyledButtonPressable = styled.Pressable<{
  width?: number | string;
}>`
  border-radius: 15px;
  background-color: ${props => props.theme.colors.button};
  justify-content: center;
  align-items: center;
  padding: 15px;
  width: ${props => props.width || '100%'};
`;

export const StyledButtonText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${props => props.theme.colors.buttonText};
`;
