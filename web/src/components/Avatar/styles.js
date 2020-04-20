import styled from 'styled-components';

// export const Svg = styled.div`
//   /* width: ${({ width }) => width}!important;
//   height: ${({ width }) => width}!important; */
//   width: 80px;
//   height: 80px;
//   border: double 4px transparent;
//   border-radius: 50px;
//   background-image: linear-gradient(${({ theme }) => theme.colors.primary+','+theme.colors.primary}), 
//                     linear-gradient(to right, green, gold);
//   background-origin: border-box;
//   background-clip: content-box, border-box;

// `;

export const Story = styled.button`
  width: ${({ width }) => width}px;
  height: ${({ width }) => width}px;
  overflow:hidden;
  z-index: 5;

  background: transparent;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: ${({ width }) => ((width/ 100) * 70)}px;
    height: ${({ width }) => ((width/ 100) * 70)}px;
    
    border-radius:100%;

    margin-top: 100%;
  }
  svg {
    /* position: absolute; */
    width: ${({ width }) => width}px;
    height: ${({ width }) => width}px;
    
    /* margin-top: -60%; */
    transform: translateY(-85%);

    fill:none;
    /* stroke:#8a3ab8; */
    stroke-width: ${({ borderWidth }) => borderWidth}px;
    stroke-dasharray:1;
    stroke-dashoffset:0;
    stroke-linecap:round;
    animation: ${({ loading }) => loading ? `loading 4500ms ease-in-out infinite alternate`: null};
  }
  @keyframes loading {
    100% {
        /* stroke:#cd476b; */
        stroke-dasharray:10;
        transform:rotate(200deg);
    }
  }

`;