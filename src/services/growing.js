import styled from "styled-components";

export const GrowingContainer = styled.div`
  padding: 4rem 4rem 0 4rem;
  .growing_stack {
    display: flex;
    align-items: center;
    .growing_text {
      width: 50%;
      .growing_title {
        font-family: ${({ theme }) => theme.fontNeue};
        font-size: 2.5rem;
        font-weight: 600;
      }
      .growing_subtitle {
        font-family: ${({ theme }) => theme.fontNeue};
        font-size: 1.5rem;
        font-weight: 600;
        padding: 1rem 0;
        color: ${({ theme }) => theme.pinkColor};
      }
      .growing_desc {
        font-family: ${({ theme }) => theme.fontSegoe};
      }
      .growing_button {
        margin-top: 1rem;
        padding: 0.5rem 1rem;
        text-transform: capitalize;
        border-radius: 28px;
        color: ${({ theme }) => theme.primaryColor};
        font-family: ${({ theme }) => theme.fontNeue};
        background-color: ${({ theme }) => theme.redColor};
      }
    }
    .growing_image {
      width: 50%;
      overflow: hidden;
      img {
        width: 700px;
      }
    }
  }
  @media screen and (max-width: 900px) {
    .growing_stack {
      .growing_text {
        width: 100%;
        margin: 0;
        text-align: center;
        .growing_title {
          font-size: 2rem;
        }
        .growing_subtitle {
          font-size: 1.2rem;
        }
      }
      .growing_image {
        width: 100%;
        overflow: hidden;
        margin-top: 3rem;
        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
`;
