import styled from "styled-components";

export const PressContainer = styled.div`
  padding: 3rem 3rem;
  .press_header {
    display: flex;
    justify-content: space-between;
    .press_title {
      font-size: 1.8rem;
      font-weight: 600;
      font-family: ${({ theme }) => theme.fontNeue};
    }
    .press_button {
      background-color: ${({ theme }) => theme.redColor};
      color: ${({ theme }) => theme.primaryColor};
      font-family: ${({ theme }) => theme.fontNeue};
      text-transform: capitalize;
      border-radius: 2rem;
      padding: 0.5rem 1.8rem;
      font-weight: 600;
      font-size: 0.8em;
    }
  }

  .press_cards_container {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    .card_info {
      padding-top: 3%;
      .press_card_title {
        font-size: 1.5rem;
        font-weight: 600;
        font-family: ${({ theme }) => theme.fontNeue};
      }
      .press_card_desc {
        font-family: ${({ theme }) => theme.fontSegoe};
      }
      .press_card_link {
        font-family: ${({ theme }) => theme.fontNeue};
        display: flex;
        align-items: center;
        gap:.5rem;
        text-decoration: none;
        margin-top:.5rem;
      }
    }

    .press_card-1 {
      cursor: pointer;
      width: 500px;
      height: 240px;
      padding: 0.8em;
      border-radius: 1rem;
      background: ${({ theme }) => theme.primaryColor};
      position: relative;
      overflow: visible;
      box-shadow: ${({ theme }) => theme.shadow};
      .card_img {
        height: 40%;
        width: 100%;
        border-radius: 0.5rem;
        transition: 0.3s ease;
        img {
          width: 100%;
          height: 100%;
          border-radius: .5rem;
        }
      }
    }

    .press_card-2 {
      cursor: pointer;
      width: 500px;
      height: 240px;
      padding: 0.8em;
      border-radius: 1rem;
      background: ${({ theme }) => theme.primaryColor};
      position: relative;
      overflow: visible;
      box-shadow: ${({ theme }) => theme.shadow};
      .card_img {
        height: 40%;
        width: 100%;
        border-radius: 0.5rem;
        transition: 0.3s ease;
        img {
          width: 100%;
          height: 100%;
          border-radius: .5rem;
        }
      }
     
    }

    .press_card-3 {
      cursor: pointer;
      width: 315px;
      height: 240px;
      padding: 0.8em;
      border-radius: 1rem;
      background: ${({ theme }) => theme.primaryColor};
      position: relative;
      overflow: visible;
      box-shadow: ${({ theme }) => theme.shadow};
      .card_img {
        height: 40%;
        width: 100%;
        border-radius: 0.5rem;
        transition: 0.3s ease;
        img {
          width: 100%;
          height: 100%;
          border-radius: .5rem;
        }
      }
      
    }

    .press_card-4 {
      cursor: pointer;
      width: 315px;
      height: 240px;
      padding: 0.8em;
      border-radius: 1rem;
      background: ${({ theme }) => theme.primaryColor};
      position: relative;
      overflow: visible;
      box-shadow: ${({ theme }) => theme.shadow};
      .card_img {
        height: 40%;
        width: 100%;
        border-radius: 0.5rem;
        transition: 0.3s ease;
        img {
          width: 100%;
          height: 100%;
          border-radius: .5rem;
        }
      }
     
    }

    .press_card-5 {
      cursor: pointer;
      width: 315px;
      height: 240px;
      padding: 0.8em;
      border-radius: 1rem;
      background: ${({ theme }) => theme.primaryColor};
      position: relative;
      overflow: visible;
      box-shadow: ${({ theme }) => theme.shadow};
      .card_img {
        height: 40%;
        width: 100%;
        transition: 0.3s ease;
        img {
          width: 100%;
          height: 100%;
          border-radius: .5rem;
        }
      }
      
    }
  }
`;
