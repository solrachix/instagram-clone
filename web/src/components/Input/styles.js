import styled from 'styled-components';
import { rgba } from 'polished'

import { FiSearch } from 'react-icons/fi'

export const Container = styled.div`
  width: 280px;
  height: 20px;

  padding: 22px 15px 22px 15px;
  
  background: ${({ theme }) => rgba(theme.colors.primary, 0.4) };
  border-radius: 5px;

  display: flex;
  justify-content: space-between;
  align-items:center;
`;

export const Input = styled.input`
  width: 90%;
  height: inherit;
  margin-left: 15px;
  
  background: transparent;
  color: ${({ theme }) => rgba(theme.colors.text, 0.2) };

  font-weight: 500;
  font-size: 14px;
  letter-spacing: .02rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const Search = styled(FiSearch)`
  /* position: absolute; */
  color: ${({ theme }) => rgba(theme.colors.text, 0.8) };
`;