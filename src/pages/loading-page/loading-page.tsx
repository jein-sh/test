import UsersSkeleton from '../../components/users-skeleton/users-skeleton';
import TopAppBar from '../../components/top-app-bar/top-app-bar';
import Container from '../../styled/container/container';

function LoadingPage(): JSX.Element {
  return (
    <>
      <TopAppBar />
      <main >
        <Container>
          <UsersSkeleton />
        </Container>
      </main>
    </>
  );
}

export default LoadingPage;