import { useState } from "react";
import Container from "../../styled/container/container";
import PopupSort from "../popup-sort/popup-sort";
import SearchForm from "../search-form/search-form";
import ListSvg from "../svg/list-svg";
import Tabs from "../tabs/tabs";
import { TopBar, Title, Search, SortBtn } from "./styles";

function TopAppBar(): JSX.Element {

  const [popupShow, setPopupShow] = useState<boolean>(false);

  return (
    <>
      <TopBar>
        <Container>
          <Title>Поиск</Title>
          <Search>
            <SearchForm />
            <SortBtn aria-label="Выбрать сортировку" onClick={() => setPopupShow(true)}><ListSvg /></SortBtn>
          </Search>

          <Tabs />

        </Container>
      </TopBar>
      <PopupSort active={popupShow} onClose={() => setPopupShow(false)}/>
    </>
  );
}

export default TopAppBar;
