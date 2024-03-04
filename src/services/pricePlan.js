import styled from "styled-components";

export const PlanContainer = styled.div`
  background-color: #F9F9F9;
  .main {
    padding: 4rem;
    .heading{
      width:55%;
      .plan_title{
        font-size: 2.4rem;
        font-weight: 600;
        font-family: ${({ theme }) => theme.fontNeue};
        span{
          color: ${({ theme }) => theme.pinkColor};
        }
      }
      .plan_subtitle{
        padding:1rem 0;
        font-family: ${({ theme }) => theme.fontSegoe};
      }
    }

    .price_cards {
      display: flex;
      margin-top:.5rem;
      gap: 1rem;
     .price_card{
       padding: 1rem;
       border-radius: .8rem;
       height: 400px;
       width:300px;
       box-shadow:${({ theme }) => theme.shadow};
       
        .mini_title-1{
          font-size: 1.1rem;
          color: ${({ theme }) => theme.purpleColor};
          font-family: ${({ theme }) => theme.fontNeue};
        }
        .mini_title-2{
          font-size: 1.1rem;
          color: ${({ theme }) => theme.redColor};
          font-family: ${({ theme }) => theme.fontNeue};
        }
        .mini_title-3{
          font-size: 1.1rem;
          color: ${({ theme }) => theme.greenColor};
          font-family: ${({ theme }) => theme.fontNeue};
        }
        .mini_title-4{
          font-size: 1.1rem;
          color: ${({ theme }) => theme.darkBlueColor};
          font-family: ${({ theme }) => theme.fontNeue};
        }

        .main_title{
          font-size: 1.6rem;
          font-weight: 600;
          font-family: ${({ theme }) => theme.fontNeue};
        }

        .sub_title{
          font-family: ${({ theme }) => theme.fontSegoe};
        }

       .price_feature {
        display: flex;
        align-items: center;
        .feature-list-1 {
          margin: 1rem; 
          padding: 1rem;
          li {
            &::marker {
              color: ${({ theme }) => theme.purpleColor};
              font-family: ${({ theme }) => theme.fontSegoe};
              font-size: 1.5rem;
            }
          }
        }

        .feature-list-2 {
          margin: 1rem; 
          padding: 1rem;
          li {
            &::marker {
              color: ${({ theme }) => theme.redColor};
              font-size: 1.5rem;
              font-family: ${({ theme }) => theme.fontSegoe};
            }
          }
        }

        .feature-list-3 {
          margin: 1rem; 
          padding: 1rem;
          li {
            &::marker {
              color: ${({ theme }) => theme.greenColor};
              font-size: 1.5rem;
              font-family: ${({ theme }) => theme.fontSegoe};
            }
          }
        }

        .feature-list-4 {
          margin: 1rem; 
          padding: 1rem;
          li {
            &::marker {
              color: ${({ theme }) => theme.darkBlueColor};
              font-size: 1.5rem;
              font-family: ${({ theme }) => theme.fontSegoe};   
            }
          }
        }
        
      }
     
    } 
    @media screen and (max-width: 900px) {
      justify-content: center;
      align-items: center;
        flex-direction: column;.
        .heading{
          width: 100%;
        }
       
    }

  }
  @media screen and (max-width: 900px) {
    // justify-content: center;
    // align-items: center;
    //   flex-direction: column;.
      .heading{
        width: 100%;
        text-align: center;
      }
      .price_cards {
          .price_card{
            width: 230px;
          }
        }
  }
`;

export const ProPlanContainer = styled.div`
  padding: 4rem;
  .heading{
    width:40%;
    @media screen and (max-width: 900px) {
      width: 100%;
      text-align: center;
    }
    .plan_title{
      font-size: 2.4rem;
      font-weight: 600;
      font-family: ${({ theme }) => theme.fontNeue};
      span{
        color: ${({ theme }) => theme.lightBlueColor};
      }
    }
    .plan_subtitle{
      padding:1rem 0;
      font-family: ${({ theme }) => theme.fontSegoe};
    }
  }

  .price_cards {
    display: flex;
    gap: 1rem;
    margin-top:.5rem;
    flex-wrap: wrap;
    justify-content: center;
   .price_card{
     padding: 1rem;
     border-radius: .8rem;
     height: 400px;
     width:350px;
     box-shadow: ${({ theme }) => theme.shadow};
     
      .mini_title-1{
        font-size: 1.1rem;
        color: ${({ theme }) => theme.purpleColor};
        font-family: ${({ theme }) => theme.fontNeue};
      }
      .mini_title-2{
        font-size: 1.1rem;
        color: ${({ theme }) => theme.greenColor};
        font-family: ${({ theme }) => theme.fontNeue};
      }
      .mini_title-3{
        font-size: 1.1rem;
        color: ${({ theme }) => theme.darkBlueColor};
        font-family: ${({ theme }) => theme.fontNeue};
      }
     

      .main_title{
        font-size: 1.6rem;
        font-weight: 600;
        font-family: ${({ theme }) => theme.fontNeue};
      }

      .sub_title{
        font-family: ${({ theme }) => theme.fontSegoe};
      }

     .price_feature {
      display: flex;
      align-items: center;
      .feature-list-1 {
        margin: 1rem; 
        padding: 1rem;
        li {
          &::marker {
            color: ${({ theme }) => theme.purpleColor};
            font-family: ${({ theme }) => theme.fontSegoe};
            font-size: 1.5rem;
          }
        }
      }

      .feature-list-2 {
        margin: 1rem; 
        padding: 1rem;
        li {
          &::marker {
            color: ${({ theme }) => theme.greenColor};
            font-size: 1.5rem;
            font-family: ${({ theme }) => theme.fontSegoe};
          }
        }
      }

      .feature-list-3 {
        margin: 1rem; 
        padding: 1rem;
        li {
          &::marker {
            color: ${({ theme }) => theme.darkBlueColor};
            font-size: 1.5rem;
            font-family: ${({ theme }) => theme.fontSegoe};
          }
        }
      }

      .feature-list-4 {
        margin: 1rem; 
        padding: 1rem;
        li {
          &::marker {
            color: ${({ theme }) => theme.darkBlueColor};
            font-size: 1.5rem;
            font-family: ${({ theme }) => theme.fontSegoe};   
          }
        }
      }
    }
  }
`;
