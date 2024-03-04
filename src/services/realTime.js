import styled from "styled-components";

export const RealtimeContainer = styled.div`
  .text {
    margin: 0;
    background-color: ${({ theme }) => theme.purpleColor};
    font-family: ${({ theme }) => theme.fontNeue};
    text-align: center;
    font-size: 40px;
    font-weight: 800;
    -webkit-text-stroke: 2px white;
    color: transparent;
    letter-spacing: 2px;
    padding: 0.5rem;
    @media screen and (max-width: 900px) {
      font-size: 22px;
      letter-spacing: 1px;
      -webkit-text-stroke: 2px white;
      padding: 1rem;
    }
  }
  .card-wrapper {
    margin-top: 2.5rem;
    display: flex;
    justify-content: center;
    text-align: center;
    .card {
      height: 120px;
      width: 320px;
      padding: 1rem;
      margin: 0.5rem;
      border-radius: 0.8rem;
      box-shadow: ${({ theme }) => theme.shadow};
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        padding: 1rem;
        border-radius: 50%;
        background-color: #f9f9f9;
        height: 26px;
      }
      .title {
        margin: 0.8rem;
        font-size: 17px;
        font-weight: 600;
        font-family: ${({ theme }) => theme.fontNeue};
      }
    }
    @media screen and (max-width: 900px) and (min-width: 600px) {
      .card {
        width: 100%;
      }
    }
  }
`;

// launch module styling

export const ModuleContainer = styled.div`
  .module {
    margin: 5rem 4rem;
    text-align: center;
    .m-title {
      font-family: ${({ theme }) => theme.fontNeue};
      font-size: 2.4rem;
      font-weight: 600;
    }
    .h-title {
      font-family: ${({ theme }) => theme.fontNeue};
      color: ${({ theme }) => theme.greenColor};
      font-size: 2.4rem;
      font-weight: 600;
    }
    .stack-container {
      margin-top: 3rem;
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      .desc-container {
        width: 450px;
        text-align: left;
        .title {
          font-size: 1.8rem;
          font-weight: 600;
          font-family: ${({ theme }) => theme.fontNeue};
          &::after {
            content: "Connect";
            color: ${({ theme }) => theme.pinkColor};
          }
        }
        .sub-title {
          font-size: 1.8rem;
          font-weight: 600;
          font-family: ${({ theme }) => theme.fontNeue};
        }
        .h-desc {
          font-family: ${({ theme }) => theme.fontSegoe};
        }

        @media screen and (max-width: 900px) {
          width: 250px;
        }
      }

      img {
        height: 400px;

        @media screen and (max-width: 900px) {
          height: 100%;
          width: 100%;
        }
      }
    }

    .stack-container-2 {
      margin-top: 3rem;
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      .desc-container-2 {
        width: 450px;
        text-align: left;
        .title {
          font-size: 1.8rem;
          font-weight: 600;
          font-family: ${({ theme }) => theme.fontNeue};
          &::after {
            content: "Go";
            color: #00d1ff;
          }
        }
        .sub-title {
          font-size: 1.8rem;
          font-weight: 600;
          font-family: ${({ theme }) => theme.fontNeue};
        }
        .h-desc {
          font-family: ${({ theme }) => theme.fontSegoe};
        }
        @media screen and (max-width: 900px) {
          width: 250px;
        }
      }

      img {
        height: 400px;

        @media screen and (max-width: 900px) {
          height: 100%;
          width: 100%;
        }
      }
    }

    @media screen and (max-width: 900px) {
      margin: 2rem 1rem;
      .m-title {
        font-size: 1.4rem;
      }
      .h-title {
        font-size: 1.4rem;
      }
      .stack-container {
        flex-direction: column;
        .desc-container {
          width: 100%;
        }
      }

      .stack-container-2 {
        flex-direction: column-reverse;
        .desc-container-2 {
          width: 100%;
        }
      }
    }
  }
`;
