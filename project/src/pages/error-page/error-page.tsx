import ErrorBlock from '../../components/error-block/error-block';
import TopAppBar from '../../components/top-app-bar/top-app-bar';
import Container from '../../styled/container/container';

function ErrorPage(): JSX.Element {
  return (
    <>
      <TopAppBar />
      <main >
        <Container>
          <ErrorBlock />
        </Container>
      </main>
    </>
  );
}

export default ErrorPage;