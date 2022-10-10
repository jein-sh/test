import { BtnClose, Container, Form, Label, Popup, RadioBtn, Title } from "./styles";

function PopupSort(): JSX.Element {
  return (
    <Popup>
      <Container>
        <BtnClose>
          <svg width="16" height="16">
            <use xlinkHref="#close"></use>
          </svg>
        </BtnClose>
        <Title>Сортировка</Title>
        <Form>
          <RadioBtn type="radio" id="sort-abc" name="sort" checked />
          <Label htmlFor="sort-abc">По алфавиту</Label>

          <RadioBtn type="radio" id="sort-date" name="sort" />
          <Label htmlFor="sort-date">По дню рождения</Label>
        </Form>
      </Container>
    </Popup>
  );
}

export default PopupSort;
