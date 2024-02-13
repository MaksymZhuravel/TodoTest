import React, {useCallback} from 'react';
import styled from 'styled-components/native';

import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {getCounter} from '../redux/counter/counter.selector';
import {decrement, increment} from '../redux/counter/counter.slice';
import {Button, Text} from '../components';

const Main = () => {
  const counter = useAppSelector(getCounter);
  const dispatch = useAppDispatch();

  const increase = useCallback(() => {
    dispatch(increment());
  }, [dispatch]);

  const decrease = useCallback(() => {
    dispatch(decrement());
  }, [dispatch]);

  return (
    <MainContainer>
      <Button width={'30%'} onPress={decrease} title={'-1'} />
      <Text>{counter}</Text>
      <Button width={'30%'} onPress={increase} title={'+1'} />
    </MainContainer>
  );
};

const MainContainer = styled.SafeAreaView`
  flex: 1;
  background: ${props => props.theme.colors.background};
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

export default Main;
