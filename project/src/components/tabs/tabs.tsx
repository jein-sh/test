import { Departments } from "../../const";
import { TabBtn, TabsContainer } from "./styles";

function Tabs(): JSX.Element {
  return (
    <TabsContainer>
      {Object.entries(Departments).map(([key, item]) => (
        <TabBtn key={key} active={key === 'all'}>{item}</TabBtn>)
      )}
    </TabsContainer>
  );
}

export default Tabs;
