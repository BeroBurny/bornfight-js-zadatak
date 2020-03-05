import React from "react";
import styled from "styled-components";
import color from "../enums/color";

const Button = styled.button<{favorite: boolean}>`
  grid-area: favorite;
  width: 125px;
  font-size: 10px;
  font-weight: ${({favorite}) => favorite ? 'normal' : 'bold'};
  text-decoration: ${({favorite}) => favorite ? 'underline' : 'none'};
  color: ${({favorite}) => favorite ? color.PRIMARY : color.BACKGROUND};;
  border-radius: 3px;
  background-color: ${({favorite}) => favorite ? color.BACKGROUND : color.PRIMARY};;
  padding: 7px 0;
  border: none;
  
  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

interface Props {
  favorite: boolean;
  onClick?: () => void;
  className?: string;
}

const ChangeFavoriteButton: React.FC<Props> = ({favorite, ...props}) => (
  <Button favorite={favorite} {...props}>{favorite ? 'Remove favorite' : 'MARK AS FAVORITE' }</Button>
);

export default ChangeFavoriteButton;
