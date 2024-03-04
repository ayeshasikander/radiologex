import styled from "styled-components";

export const FooterContainer = styled.div`
  background: #111114;
  margin-top: 2rem;
  color: white;
  .footer_header {
    .curve {
      display: block;
    }
    .device {
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: space-evenly;
      .mobileImg {
        width: 38%;
        margin-left: 5rem;
      }

      .store {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: left;
        .store_title {
          margin-left: 2rem;
          font-size: 4rem;
          font-weight: 600;
          width: 80%;
          font-family: ${({ theme }) => theme.fontNeue};
        }

        .cards {
          display: flex;
          margin: 1rem;
          .store_card {
            background-color: ${({ theme }) => theme.secondaryColor};
            color: ${({ theme }) => theme.primaryColor};
            display: flex;
            align-items: center;
            gap: 0.5rem;
            width: 160px;
            height: 50px;
            margin: 0.5rem;
            padding: 0.2rem;
            border-radius: 0.7rem;
            border: 1px solid #ffffff;

            .icon-style {
              font-size: 40px;
            }
            .icon {
              width: 30px;
            }

            .store_card_text {
              font-size: 12px;
              span {
                font-size: 22px;
              }
            }
          }
          
        }
        @media screen and (max-width: 1000px) {
         .store_title{
             font-size:2rem;
         }
         .cards{
             flex-wrap: wrap;
         }
        }
      }

      @media screen and (max-width: 900px) {
        flex-direction: column-reverse;
        .mobileImg {
          width: 60%;
          margin: 0;
        }

        .store {
            .store_title{
                font-size: 2rem;
                width: 80%;
            }
            .cards {
                flex-wrap: wrap;
              .store_card {
                width:150px;
                height:60px;
                margin:.2rem;
    
                .icon-style{
                    font-size: 40px;
                }
                .icon{
                    width: 30px;
                }
    
                .store_card_text{
                    font-size: .7rem;
                    span{
                        font-size: 1rem;
                        font-weight: 600;
                    }
                }
              }
            }
      }
    }
  }

`;

export const FooterBottom = styled.div`
  background-color: ${({ theme }) => theme.blackColor};
  padding: 3rem 4rem;
  text-align: center;
  .footerlogo {
    width: 150px;
  }
  .stack_container {
    display: flex;
    justify-content: space-between;
    margin: 3rem 0;
    .stack_box {
      text-align: left;
      display: flex;
      flex-direction: column;
      .footer_title {
        color: ${({ theme }) => theme.primaryColor};
        font-family: ${({ theme }) => theme.fontNeue};
        font-size: 1.2rem;
        font-weight: 600;
      }
      .title_items {
        font-family: ${({ theme }) => theme.fontNeue};
        color: #ffffffe3;
        padding: 0.3rem 0;
      }
      @media screen and (max-width: 600px) {
        text-align: center;
      }
    }
  }
  .reserved_text {
    margin-top: 1rem;
    text-align: center;
    font-size: 16px;
    color: ${({ theme }) => theme.greenColor};
    font-family: ${({ theme }) => theme.fontNeue};
  }

  .reserved_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid white;
    .social_icon {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      .icon-root {
        color: ${({ theme }) => theme.greenColor};
        background-color: #ffffff2f;
        border-radius: 50%;
        padding: 0.6rem;
        margin: 0.4rem;
        display: flex;
        justify-content: center;
      }
    }
    .reserved_sitemap {
      font-family: ${({ theme }) => theme.fontNeue};
    }
  }

  @media screen and (max-width: 900px) {
    padding: 1rem;
    .stack_container {
      flex-wrap: wrap;
    }
    .reserved_container {
      flex-direction: column;
    }
  }
`;
