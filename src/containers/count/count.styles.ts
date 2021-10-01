import styled from '@emotion/styled';

export const Container = styled.div(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  background: theme.colors.grayLight,
}));

export const Button = styled.button({
  marginTop: 3,
  width: 100,
});
