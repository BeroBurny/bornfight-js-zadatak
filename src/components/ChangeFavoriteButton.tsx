import React from "react";
import styled from "styled-components";

const Button = styled.button<{favorite: boolean}>`
  width: 125px;
  font-family: WorkSans, serif;
  font-size: 10px;
  font-weight: ${({favorite}) => favorite ? 'normal' : 'bold'};
  text-decoration: ${({favorite}) => favorite ? 'underline' : 'none'};
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${({favorite}) => favorite ? '#13d6ea' : 'white'};;
  border-radius: 3px;
  background-color: ${({favorite}) => favorite ? 'white' : '#13d6ea'};;
  padding: 7px 0;
  border: none;
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
