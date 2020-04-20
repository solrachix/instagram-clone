import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Text = styled.p`
  margin-top: ${({ top = 10 }) => top}px;
  line-height: 10px;

  color: ${({ color, theme }) => color ? color : theme.colors.text };

  font-size: ${({ size = 14 }) => size}px;
  font-weight: ${({ bold = 0 }) => bold ? 'bold' : bold };
  font-family: 'Open Sans', Roboto, Helvetica, Arial, sans-serif;
`;

export const Header = styled.header`
  width: 100%;
  height: 30px;

  display: flex;
  justify-content: space-between;
  align-items:center;

  div{
    width: 120px;

    display: flex;
    justify-content: space-between;
    align-items:center;
  }
`;

export const Body = styled.div`
  margin-top: 3%;
  display: grid;
  grid-column-gap: 8px;
  grid-row-gap: 8px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 8px;

  .byebye {
    opacity: 0;
  }
  .byebye:hover {
    transform: scale(0.2) !important;
  }

  img {
    max-width: 100%;
    border-radius: 10px;
    box-shadow: 0 0 16px #333;
    transition: all 1.5s ease;
  }
  img:hover {
    box-shadow: 0 0 32px #333;
  }
  .content {
    padding: 4px;
  }
  .gallery-item {
    transition: grid-row-start 300ms linear;
    transition: transform 300ms ease;
    transition: all 0.5s ease;
    cursor: pointer;
  }
  .gallery-item:hover {
    transform: scale(1.025);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  }
  @media (max-width: 400px) {
    grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
  }

  
  @keyframes zoomin {
    0% {
      max-width: 50%;
      transform: rotate(-30deg);
      filter: blur(4px);
    }
    30% {
      filter: blur(4px);
      transform: rotate(-80deg);
    }
    70% {
      max-width: 50%;
      transform: rotate(45deg);
    }
    100% {
      max-width: 100%;
      transform: rotate(0deg);
    }
  }

`;