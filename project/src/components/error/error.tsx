import Container from "../../styled/container/container";
import {Title, ErrorWrapper, ErrorImage, Button, ErrorText } from "./styles";

function Error(): JSX.Element {
  return (
    <Container>
        <ErrorWrapper>
          <ErrorImage>
            <picture>
              <source type="image/webp" srcSet="img/flying-saucer.webp, img/flying-saucer@2x.webp 2x" /><img src="img/flying-saucer.png" srcSet="img/flying-saucer@2x.png 2x" width="56" height="56" alt="НЛО" />
            </picture>
        </ErrorImage>
        <Title>Какой-то сверхразум все сломал</Title>
        <ErrorText>Постараемся быстро починить</ErrorText>
        <Button type="button">Попробовать снова</Button>
      </ErrorWrapper>
    </Container>
  );
}

export default Error;