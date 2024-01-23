import { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { filterSearch, getSearchQuery } from "../../store/action";
import SearchSvg from "../svg/search-svg";
import { Input, Label, Icon, Form } from "./styles";

function SearchForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const {search} = useAppSelector((state) => state);

  const [formData, setFormData] = useState({
    search: `${search ? search : ""}`,
  });

  const formChangeHandle = (evt: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = evt.target;

    setFormData({...formData, [name]: value});

    setTimeout(() => {
      dispatch(getSearchQuery({searchString: value.trim()}));
      dispatch(filterSearch());
    },3000)

  };

  const onSubmitForm = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
  };

  return (
    <Form onSubmit={onSubmitForm}>
      <Label htmlFor="search">Введи имя, тег, почту</Label>
      <Input id="search" type="text" placeholder="Введи имя, тег, почту..." 
        name="search"
        value={formData.search}
        onChange={formChangeHandle}
      />
      <Icon><SearchSvg /></Icon>
    </Form>
  );
}

export default SearchForm;
