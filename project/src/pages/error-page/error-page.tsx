import { useNavigate } from 'react-router-dom';
import ErrorBlock from '../../components/error-block/error-block';
import TopAppBar from '../../components/top-app-bar/top-app-bar';
import { AppRoute } from '../../const';
import Container from '../../styled/container/container';

function ErrorPage(): JSX.Element {
  const navigate = useNavigate();

  return (
    <>
      <TopAppBar />
      <main >
        <Container>
          <ErrorBlock  
            errorImg="glass"
            errorTitle="Такой страницы мы не нашли"
            errorBtnText="Перейти на главную страницу" 
            errorBtnOnClick={() =>navigate(AppRoute.Main)}
          />
        </Container>
      </main>
    </>
  );
}

export default ErrorPage;