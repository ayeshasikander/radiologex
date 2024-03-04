import styled from "styled-components";

export const RadiologexContainer = styled.div`
  .radiologex_section {
    background-color: ${({ theme }) => theme.blackColor};
    .radiologex_top_section {
      padding-top: 8rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;

      .radio_title {
        color: ${({ theme }) => theme.greenColor};
        font-size: 1.4rem;
        font-weight: 600;
        font-family: ${({ theme }) => theme.fontNeue};
        span {
          font-size: 1rem;
          position: absolute;
        }
      }

      .radio_subtitle {
        font-weight: 600;
        font-size: 3.5rem;
        font-family: ${({ theme }) => theme.fontNeue};
        color: ${({ theme }) => theme.primaryColor};
      }

      .radio_description {
        font-size: 1rem;
        font-family: ${({ theme }) => theme.fontSegoe};
        color: ${({ theme }) => theme.primaryColor};
        text-align: center;
      }

      .radio_button {
        margin-top: 3rem;
        Button {
          height: 58px;
          width: 311px;
          border-radius: 2.5rem;
          margin: 1rem;
          text-transform: capitalize;
          font-size: 1rem;
          font-weight: 600;
          color: ${({ theme }) => theme.primaryColor};
        }
      }
      @media screen and (max-width: 900px) {
        .radio_title {
          font-size: 1rem;
        }
        .radio_subtitle {
          font-size: 2.2rem;
        }
      }
    }
    .radiologex_bottom_section {
      margin-top: 4rem;
      .images_Container {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        position: relative;

        .bgLine {
          position: absolute;
          top: 0rem;
          width: 60%;
          z-index: 1;
        }

        .topImg {
          width: 35%;
          position: relative;
          z-index: 2;
        }
      }
    }
  }
  .radiologex_profile_popup{
    position: absolute;
    top: 250px;
    left: 412;
    z-index: 2;
    @media screen and (max-width: 900px) {
      top: 130px;
    }
    @media screen and (max-width: 740px) {
      top: 100px;
    }
    @media screen and (max-width: 500px) {
      display: none;
    }
  }
`;
