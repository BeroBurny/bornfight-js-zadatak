import styled from "styled-components";

const Content = styled.div`
  max-width: 1080px;
  margin: auto;
  padding-left: calc(100vw - 100% + 10px);
  padding-right: 10px;

  @media screen and (max-width: 1150px) {
    padding-left: 10px;
  }
`;

export default Content;
