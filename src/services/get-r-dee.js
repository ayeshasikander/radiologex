import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const ContentContainer = styled.div`
  margin: 2rem;
  margin-top: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  .get_rdee_main {
    .getredd_stack {
      @media screen and (max-width: 900px) {
        align-items: center;
        width: 100%;
        justify-content: center;
      }
     

      .getrdee_left {
        width: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .paragraph {
        width: 100%;
        height: auto;
        padding: 0 1.2rem;
        text-align: left;
        .title {
          color: ${({ theme }) => theme.purpleColor};
          font-weight: 600;
          font-family: ${({ theme }) => theme.fontNeue};
        }
        .text1 {
          font-family: ${({ theme }) => theme.fontSegoe};
          font-size: 1.1rem;
        }
      }
    }
  }
`;
