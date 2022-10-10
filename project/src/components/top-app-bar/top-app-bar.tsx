import Container from "../../styled/container/container";
import ListSvg from "../svg/list-svg";
import SearchSvg from "../svg/search-svg";
import Tabs from "../tabs/tabs";
import { TopBar, Title, Search, SortBtn, Input, Label, Icon, Form } from "./styles";

function TopAppBar(): JSX.Element {
  return (
    <TopBar>
      <Container>
        <Title>Поиск</Title>
        <Search>
          <Form>
            <Label>Введи имя, тег, почту</Label>
            <Input placeholder="Введи имя, тег, почту..."/>
            <Icon><SearchSvg /></Icon>
          </Form>
          <SortBtn aria-label="Выбрать сортировку"><ListSvg /></SortBtn>
        </Search>

        <Tabs />

      </Container>
    </TopBar>
  );
}

export default TopAppBar;
