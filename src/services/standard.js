import styled from "styled-components";

export const StandardContainer = styled.div`
  margin: 3rem 1rem;
  text-align: center;
  .head-text {
    .standard_title {
      font-family: ${({ theme }) => theme.fontNeue};
      font-size: 2.4rem;
      font-weight: 600;
      margin: 0.5rem;
    }
    .standard-para {
      font-family: ${({ theme }) => theme.fontSegoe};
      font-size: 1rem;
    }
  }
  .supporter {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 3rem 0;
    gap: 1rem;

    .support_card {
      box-shadow: ${({ theme }) => theme.shadow};
      border-radius: 1.5rem;
      padding: 1rem;
      height: 160px;
      width: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: 100%;
        width: 90%;
      }
    }
  }
  @media screen and (max-width: 900px) {
    text-align: left;
    .head-text {
        .standard_title {
          font-size: 1.5rem;
        }
        .standard-para {
          font-size: 1rem;
        }
      }
    .supporter {
      justify-content: center;

      .support_card {
        height: 100px;
        width: 130px;
        img {
          height: 80%;
          width: 70%;
        }
      }
    }
  }
`;
