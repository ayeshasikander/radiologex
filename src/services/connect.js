import styled from "styled-components";

export const ConnectContainer = styled.div`
  text-align: center;
  .title {
    font-size: 2.4rem;
    font-weight: 600;
    font-family: ${({ theme }) => theme.fontNeue};
    span {
      color: ${({ theme }) => theme.pinkColor};
    }
  }
  .sub-title {
    font-size: 2rem;
    font-weight: 600;
    font-family: ${({ theme }) => theme.fontNeue};
  }

  .sub-line {
    margin: 2.5rem;
    font-family: ${({ theme }) => theme.fontSegoe};
  }

  .center-section {
    display: flex;
    justify-content: center;
    align-items: center;
    .list-items {
      .list {
        width: 270px;
        display: flex;
        align-items: center;
        background-color: #f9f9f9;
        margin: 2rem;
        padding: 0.5rem 0.5rem 0.5rem 0.7rem;
        border-radius: 0.3rem;
        gap: 1rem;
        img {
          background-color: ${({ theme }) => theme.primaryColor};
          width: 20px;
          padding: 0.5rem;
          border-radius: 50%;
        }
        .desc {
          font-family: ${({ theme }) => theme.fontNeue};
          font-size: 1rem;
          font-weight: 600;
          text-align: left;
        }
      }
    }

    .centerImg {
      width: 400px;
      margin: 1rem;
    }
  }

  .tool-items {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .list {
      width: 50%;
      display: flex;
      align-items: center;
      background-color: #f9f9f9;
      margin: 1rem;
      padding: 0.5rem 0.5rem 0.5rem 0.7rem;
      border-radius: 0.3rem;
      gap: 1rem;

      img {
        width: 20px;
        padding: 0.5rem;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.primaryColor};
      }
      .desc {
        text-align: left;
      }
    }
  }

  @media screen and (max-width: 900px) {
    .title {
      font-size: 1.4rem;
    }
    .sub-title {
      font-size: 1.5rem;
    }
    .sub-line {
      margin: 1.5rem;
    }

    .center-section {
      flex-direction: column;
      
      .centerImg {
        width: 80%;
        margin: 1rem;
      }
    }
    .tool-items{
      .list{
        width: 70%;
        align-items: start;
      }
    }
  }
`;
