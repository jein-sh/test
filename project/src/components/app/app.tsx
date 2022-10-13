import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import CriticalErrorPage from '../../pages/critical-error-page/critical-error-page';
import ErrorPage from '../../pages/error-page/error-page';
import LoadingPage from '../../pages/loading-page/loading-page';
import MainPage from '../../pages/main-page/main-page';
import ProfilePage from '../../pages/profile-page/profile-page';
import { GlobalStyle } from './styles';

function App(): JSX.Element {

  const {isDataLoaded, error} = useAppSelector((store)=> store);

  if (error) {
    return (
      <>
        <GlobalStyle />
        <CriticalErrorPage />
      </>
    );
  }

  if (isDataLoaded) {
    return (
      <>
        <GlobalStyle />
        <LoadingPage />
      </>
    );
  }

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage />}
          />
          <Route
            path={AppRoute.Profile}
            element={<ProfilePage />}
          />
          <Route
            path="*"
            element={<ErrorPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
