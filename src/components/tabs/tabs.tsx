import { Departments } from "../../const";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { departmentChoice, filterSearch, sortUsers } from "../../store/action";
import { fetchDepartmentUsersAction } from "../../store/api-action";
import { TabBtn, TabsContainer } from "./styles";

function Tabs(): JSX.Element {
  const dispatch = useAppDispatch();
  const {department} = useAppSelector((state) => state);

  return (
    <TabsContainer>
      {Object.entries(Departments).map(([key, item]) => (
        <TabBtn 
          key={key} 
          active={key === department} 
          onClick={() => {
            dispatch(departmentChoice({currentDepartment: key})); 
            dispatch(fetchDepartmentUsersAction(key));
            dispatch(sortUsers());
            dispatch(filterSearch());
          }}
        >{item}</TabBtn>)
      )}
    </TabsContainer>
  );
}

export default Tabs;
