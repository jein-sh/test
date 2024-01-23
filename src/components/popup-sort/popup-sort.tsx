import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { sortTypeChoice, sortUsers } from "../../store/action";
import CloseSvg from "../svg/close-svg";
import { BtnClose, Container, Form, Label, Popup, RadioBtn, Title } from "./styles";

type PopupSortProps = {
  active: boolean,
  onClose: () => void
}

function PopupSort({active, onClose}:PopupSortProps): JSX.Element {
  const dispatch = useAppDispatch();
  const {sortType} = useAppSelector((state) => state);

  const keydownHandler = ({key} : KeyboardEvent ) => {
    switch (key) {
      case 'Escape':
        onClose();
        break;
      default:
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', keydownHandler);
    return () => document.removeEventListener('keydown', keydownHandler);
  });

  return (
    <Popup isOpened={active} onClick={onClose}>
      <Container onClick={(e: { stopPropagation: () => void; }) => e.stopPropagation()}>
        <BtnClose onClick={onClose}>
          <CloseSvg />
        </BtnClose>
        <Title>Сортировка</Title>
        <Form>
          <RadioBtn 
            type="radio" 
            id="sort-abc" 
            name="sort" 
            checked={sortType === 'sort-abc'} 
            onChange={()=> {
              dispatch(sortTypeChoice({currentSortType: 'sort-abc'}));
              dispatch(sortUsers());
              onClose();
            }}
          />
          <Label htmlFor="sort-abc">По алфавиту</Label>

          <RadioBtn 
            type="radio" 
            id="sort-date" 
            name="sort" 
            checked={sortType === 'sort-date'} 
            onChange={()=> {
              dispatch(sortTypeChoice({currentSortType: 'sort-date'}));
              dispatch(sortUsers());
              onClose(); 
            }}
          />
          <Label htmlFor="sort-date">По дню рождения</Label>
        </Form>
      </Container>
    </Popup>
  );
}

export default PopupSort;
