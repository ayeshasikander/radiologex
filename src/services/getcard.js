import styled from "styled-components";

export const Wrapper=styled.div`
display: flex;
@media screen and (max-width: 900px) {
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
`;

export const StyledCard = styled.div`
  box-shadow: ${({ theme }) => theme.shadow};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  width: 530px;
  height: 165px;
  margin: 1rem;
  border-radius: 1rem;
  border: none;
  outline: none;

  img {
    height: 30px;
    padding: 0.6rem;
    border-radius: 50%;
    background-color: #f9f9f9;
  }
  .desc {
    text-align: left;
    margin-top: 1rem;
    font-family: ${({ theme }) => theme.fontSegoe};
  }
  @media screen and (max-width: 900px) {
    width:100%;
    height: 100%;
  }
`;
