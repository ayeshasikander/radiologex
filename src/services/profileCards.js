import styled from "styled-components";

export const DermaProfileCard = styled.div`
  .derma_profile_card {
    padding: 4rem 1rem;
    width: 36dvw;
    box-shadow: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 2.5rem;
    .name {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .profile {
        display: flex;
        align-items: center;
        gap: 1rem;
        .profile_img {
          width: 100px;
          border-radius: 50%;
          border: 3px solid ${({ theme }) => theme.purpleColor};
        }
        .profile_name_title {
          font-size: 2rem;
          font-weight: 600;
        }
        .profile_title {
          font-size: 2rem;
        }
      }
      .dot_icon {
        color: ${({ theme }) => theme.purpleColor};
        font-size: 2.5rem;
      }
    }
    .auth_card {
      height: 50px;
      display: flex;
      align-items: center;
      gap: 2rem;
      padding: 0.8rem;
      margin-top: 2rem;
      border-radius: 1.2rem;
      color: #ffffff;
      background-color: #411d8a;
      .auth_card_text {
        font-size: 1rem;
      }
      .auth_card_icon {
        font-size: 2.5rem;
        margin-left: 0.5rem;
      }
    }
  }
  @media screen and (max-width: 900px) {
    .derma_profile_card {
      padding: 2rem 1rem;

      .name {
        .profile {
          .profile_img {
            width: 60px;
          }
          .profile_name_title {
            font-size: 0.8rem;
          }
          .profile_title {
            font-size: 0.8rem;
          }
        }
        .dot_icon {
          font-size: 1.5rem;
        }
      }
      .auth_card {
        height: 50px;
        display: flex;
        padding: 0.8rem;
        margin-top: 2rem;
        .auth_card_text {
          font-size: 1rem;
        }
        .auth_card_icon {
          font-size: 2.5rem;
        }
      }
    }
    @media screen and (max-width: 740px) {
      .derma_profile_card {
        padding: 1rem;
        border-radius: 2rem;
        .name {
          .profile {
            .profile_img {
              width: 20px;
            }
            .profile_name_title {
              font-size: 0.8rem;
            }
            .profile_title {
              font-size: 0.8rem;
            }
          }
          .dot_icon {
            font-size: 1.5rem;
          }
        }
        .auth_card {
          height: 20px;
          display: flex;
          padding: 0.8rem;
          margin-top: 2rem;
          .auth_card_text {
            font-size: 0.8rem;
          }
          .auth_card_icon {
            font-size: 2.2rem;
          }
        }
      }
    }
  }
`;
