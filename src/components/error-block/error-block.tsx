import {Title, ErrorWrapper, ErrorImage, Button, ErrorText } from "./styles";

type ErrorBlockProps = {
  errorImg: string,
  errorTitle: string,
  errorText?: string,
  errorBtnText?: string,
  errorBtnOnClick?: () => void
}

function ErrorBlock(props:ErrorBlockProps): JSX.Element {
  const {errorImg, errorTitle, errorText, errorBtnText, errorBtnOnClick} = props
  return (
    <ErrorWrapper>
      <ErrorImage>
        <picture>
          <source type="image/webp" srcSet={`img/${errorImg}.webp, img/${errorImg}@2x.webp 2x`} /><img src={`img/${errorImg}.png`} srcSet={`img/${errorImg}@2x.png 2x`} width="56" height="56" alt="НЛО" />
        </picture>
      </ErrorImage>
      <Title>{errorTitle}</Title>
      <ErrorText>{errorText}</ErrorText>
      <Button type="button" onClick={errorBtnOnClick}>{errorBtnText}</Button>
    </ErrorWrapper>
  );
}

export default ErrorBlock;