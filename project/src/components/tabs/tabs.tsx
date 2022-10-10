import { TabBtn, TabsContainer } from "./styles";

function Tabs(): JSX.Element {
  return (
    <TabsContainer>
      <TabBtn active>Все</TabBtn>
      <TabBtn>Android</TabBtn>
      <TabBtn>iOS</TabBtn>
      <TabBtn>Дизайн</TabBtn>
      <TabBtn>Менеджмент</TabBtn>
      <TabBtn>QA</TabBtn>
      <TabBtn>Бэк-офис</TabBtn>
      <TabBtn>Frontend</TabBtn>
      <TabBtn>HR</TabBtn>
      <TabBtn>PR</TabBtn>
      <TabBtn>Backend</TabBtn>
      <TabBtn>Техподдержка</TabBtn>
      <TabBtn>Аналитика</TabBtn>
    </TabsContainer>
  );
}

export default Tabs;
