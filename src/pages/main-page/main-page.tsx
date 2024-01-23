import TopAppBar from '../../components/top-app-bar/top-app-bar';
import Users from '../../components/users/users';
import Container from '../../styled/container/container';

function MainPage(): JSX.Element {

  return (
    <>
      <TopAppBar />
      <main >
        <Container>
          <Users />
        </Container>
      </main>
    </>
  );
}

export default MainPage;
