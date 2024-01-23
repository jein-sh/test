import { useDispatch } from 'react-redux';
import ErrorBlock from '../../components/error-block/error-block';
import TopAppBar from '../../components/top-app-bar/top-app-bar';
import { useAppSelector } from '../../hooks';
import { store } from '../../store';
import { setError } from '../../store/action';
import { fetchUsersAction } from '../../store/api-action';
import Container from '../../styled/container/container';

function CriticalErrorPage(): JSX.Element | null {
  const dispatch = useDispatch();
  const {error} = useAppSelector((state) => state);

  return (error) 
    ? <>
      <TopAppBar />
      <main >
        <Container>
          <ErrorBlock  
            errorImg="flying-saucer"
            errorTitle="Какой-то сверхразум все сломал"
            errorText="Постараемся быстро починить"
            errorBtnText="Попробовать снова" 
            errorBtnOnClick={() => {store.dispatch(fetchUsersAction()); dispatch(setError(false))}}
          />
        </Container>
      </main>
    </>
    : null;
}

export default CriticalErrorPage;

