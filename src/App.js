import { styled, ThemeProvider } from 'styled-components';
import { GlobalStyle } from './style/globalStyle';
import { theme } from './style/theme.js';
import { Outlet } from 'react-router-dom';

const Wrapper = styled.div`
  margin: 0 auto;
  width: 500px;
  @media (max-width: 500px) {
    /* 화면 너비가 500px 이하가 되면 요소 너비를 100%로 고정*/
    width: 100%;
  }
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const AppLayout = () => {
  return (
    <>
      <Wrapper>
        <Outlet />
      </Wrapper>
    </>
  );
};

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppLayout />
      </ThemeProvider>
    </>
  );
}

export default App;
