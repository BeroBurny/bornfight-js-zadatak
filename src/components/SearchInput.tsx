import styled from "styled-components";
import color from "../enums/color";
import search from '../assets/svg/search.svg';

const Search = styled.input`
  border-radius: 4px;
  margin-top: 35px;
  height: 40px;
  width: 100%;
  max-width: 420px;
  border: none;
  font-size: 14px;

  box-shadow: inset 0 1px 3px 0 ${color.SHADOW_DARK};
  color: ${color.SECONDARY_TEXT};
  
  background-color: ${color.BACKGROUND};
  background-image: url(${search});
  background-position: calc(100% - 15px) 50%;
  background-repeat: no-repeat;
  padding: 5px 40px 5px 20px;
`;

export default Search;
