import styled from "styled-components";

export const AdvantageContainer = styled.div`
  margin-top: 5rem;
`;

export const Web3Section = styled.div`
  background-color: ${({ theme }) => theme.blackColor};
  padding: 3rem;
  color: white;
  .web3_stack {
    .advantage_stack {
      width: 50%;
      .advantage_title {
        font-family: ${({ theme }) => theme.fontNeue};
        font-size: 2.8rem;
        font-weight: 600;
      }
      .advantage_desc {
        font-family: ${({ theme }) => theme.fontSegoe};
        font-size: 1.2rem;
        margin: 1rem 0;
        color: #ffffffdc;
      }
      .advantage_subtitle {
        font-family: ${({ theme }) => theme.fontNeue};
        font-size: 1.2rem;
        color: ${({ theme }) => theme.greenColor};
      }
      .advantage_button {
        background-color: ${({ theme }) => theme.redColor};
        color: ${({ theme }) => theme.primaryColor};
        font-family: ${({ theme }) => theme.fontNeue};
        font-weight: 400;
        text-transform: capitalize;
        padding: 0.5rem 1.5rem;
        border-radius: 1.5rem;
        margin: 0.8rem 0;
      }
      @media screen and (max-width: 800px) {
        width: 100%;
        .advantage_title {
          font-size: 1.5rem;
        }
      }
    }

    .cards_stack {
      width: 50%;

      .advantage_card_title {
        font-size: 1rem;
        font-weight: 600;
        font-family: ${({ theme }) => theme.fontNeue};
      }
      .advantage_card_desc {
        font-family: ${({ theme }) => theme.fontSegoe};
        font-size: 0.9rem;
      }
      .advantage_card-1 {
        width: 260px;
        padding: 1rem;
        background-color: ${({ theme }) => theme.blackColor};
        color: ${({ theme }) => theme.primaryColor};
        border-radius: 1rem;
        border-top: 1px solid #4aea879a;
        border-left: 1px solid #4aea879a;
        border-right: 1px solid #4aea879a;
        outline: none;
        box-shadow: none;
        cursor: pointer;
        .web_icon-1 {
          background-color: ${({ theme }) => theme.greenColor};
          border-radius: 50%;
          height: 20px;
          padding: 0.5rem;
          margin: 0.2rem;
        }
      }

      .advantage_card-2 {
        width: 260px;
        padding: 1rem;
        background-color: ${({ theme }) => theme.blackColor};
        color: ${({ theme }) => theme.primaryColor};
        border-radius: 1rem;
        border-top: 1px solid #fd4b4b73;
        border-left: 1px solid #fd4b4b73;
        border-right: 1px solid #fd4b4b73;
        outline: none;
        box-shadow: none;
        cursor: pointer;
        .web_icon-2 {
          background-color: ${({ theme }) => theme.redColor};
          border-radius: 50%;
          height: 20px;
          padding: 0.5rem;
          margin: 0.2rem;
        }
      }

      .advantage_card-3 {
        padding: 1rem;
        background-color: ${({ theme }) => theme.blackColor};
        color: ${({ theme }) => theme.primaryColor};
        border-radius: 1rem;
        border-bottom: 1px solid #7936ff59;
        border-left: 1px solid #7936ff59;
        border-right: 1px solid #7936ff59;
        outline: none;
        box-shadow: none;
        cursor: pointer;
        .web_icon-3 {
          background-color: ${({ theme }) => theme.purpleColor};
          border-radius: 50%;
          height: 20px;
          padding: 0.5rem;
          margin: 0.2rem;
        }
      }
      @media screen and (max-width: 800px) {
        width: 100%;
        .advantage_card-1 {
          width: 100%;
        }
        .advantage_card-2 {
          width: 100%;
        }
        .advantage_card-3 {
          width: 100%;
        }
      }
    }
  }
  @media screen and (max-width: 800px) {
    padding: 1rem;
  }
`;

export const RDeeGoContainer = styled.div`
  .rectangle {
    position: absolute;
    top: 889%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -2;
    width: 98.7vw;

    @media screen and (max-width: 1180px) {
      display: none;
    }
  }

  .header_section {
    text-align: center;
    position: relative;
    z-index: 1;

    margin: 8rem 0;
    .rdeego_title {
      font-family: ${({ theme }) => theme.fontNeue};
      color: ${({ theme }) => theme.redColor};
      font-size: 1.4rem;
      font-weight: 600;
    }
    .rdeego_subtitle {
      font-family: ${({ theme }) => theme.fontNeue};
      font-size: 2.4rem;
      font-weight: 600;
      span {
        color: ${({ theme }) => theme.lightBlueColor};
      }
    }
    .rdeego_desc {
      font-family: ${({ theme }) => theme.fontSegoe};
    }
  }

  .bottom_section {
    padding: 0 4rem;
    .rdeego_stack {
      display: flex;
      align-items: center;

      .rdeego_cards_stack {
        width: 55%;

        .rdeego_card-1 {
          height: 200px;
          width: 285px;
          padding: 1rem;
          background-color: ${({ theme }) => theme.primaryColor};
          color: ${({ theme }) => theme.blackColor};
          border-radius: 1rem;
          outline: none;
          box-shadow: ${({ theme }) => theme.shadow};
          cursor: pointer;
          .rdeego_use_icon-1 {
            background-color: ${({ theme }) => theme.greenColor};
            border-radius: 50%;
            height: 20px;
            padding: 0.5rem;
            margin: 0.2rem;
          }
        }

        .rdeego_card-2 {
          width: 285px;
          height: 200px;
          padding: 1rem;
          background-color: ${({ theme }) => theme.primaryColor};
          color: ${({ theme }) => theme.blackColor};
          border-radius: 1rem;
          outline: none;
          box-shadow: ${({ theme }) => theme.shadow};
          cursor: pointer;
          .rdeego_use_icon-2 {
            background-color: ${({ theme }) => theme.greenColor};
            border-radius: 50%;
            height: 20px;
            padding: 0.5rem;
            margin: 0.2rem;
          }
        }

        .rdeego_card-3 {
          height: 180px;
          padding: 1rem;
          background-color: ${({ theme }) => theme.primaryColor};
          color: ${({ theme }) => theme.blackColor};
          border-radius: 1rem;
          outline: none;
          box-shadow: ${({ theme }) => theme.shadow};
          cursor: pointer;
          .rdeego_use_icon-3 {
            background-color: ${({ theme }) => theme.purpleColor};
            border-radius: 50%;
            height: 20px;
            padding: 0.5rem;
            margin: 0.2rem;
          }
        }
      }

      .rdeedo_image_stack {
        width: 45%;
        .rdeego_image {
          width: 90%;
          height: 100%;
        }
      }
    }

    @media screen and (max-width: 900px) {
      .rdeego_stack {
        flex-direction: column-reverse;
        .rdeego_cards_stack {
          width: 100%;
          .rdeego_card-1 {
            width: 100%;
          }
          .rdeego_card-2 {
            width: 100%;
          }
          .rdeego_card-3 {
            width: 100%;
          }
          .rdeedo_image_stack {
            width: 100%;
            .rdeego_image {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
`;
