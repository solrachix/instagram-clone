import styled from 'styled-components';

export const Text = styled.p`
  margin-top: ${({ top = 10 }) => top}px;
  margin-bottom: ${({ bottom = 0 }) => bottom}px;
  margin-left: ${({ left = 0 }) => left}px;
  margin-right: ${({ right = 0 }) => right}px;
  line-height: 10px;

  color: ${({ color, theme }) => color ? color : theme.colors.text };

  font-size: ${({ size = 0.8 }) => size}em;
  font-weight: ${({ bold = 0 }) => bold ? 'bold' : bold };
  font-family: 'Open Sans', Roboto, Helvetica, Arial, sans-serif;

  opacity: ${({ opacity = 1 }) => opacity };
`;