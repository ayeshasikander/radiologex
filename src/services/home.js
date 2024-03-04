import styled from "styled-components";


export const Container = styled.div`

  .text {
    color: ${({theme})=> theme.greenColor};
    font-size: 25px;
    font-weight: 600;
    font-family: ${({theme})=>theme.fontNeue};
    span {
      font-size: 12px;
      position: absolute;
    }
  }
  .text2 {
    font-weight: 600;
    font-size: 55px;
    font-family: ${({theme})=>theme.fontNeue};
    color: ${({theme})=> theme.primaryColor};
  }
  .text3 {
    font-size: 18px;
    font-family: ${({theme})=>theme.fontSegoe};
    color: ${({theme})=> theme.primaryColor};
    text-align: center;
  }
  .button {
    margin-top: 3rem;
    Button {
      height: 58px;
      width: 311px;
      border-radius: 35px;
      margin: 1rem;
      text-transform: capitalize;
      font-weight: 500;
      font-size: 18px;
    }
  }
  @media screen and (max-width: 786px) {
    .text{
      font-size: 12px;
    }
    .text2 {
      font-size: 20px;
    }
  }

  .bottom-section {
    position: relative;
    margin-top: 3.5rem;
    height:596px;
    .bg {
      position: relative;
      width:60%;
      margin-top:2rem;

    }
    .top {
      position: absolute;
      left: 35%;
      width: 30%;
      height: auto;
      object-fit: cover;
      z-index: 1;
    }
    @media screen and (max-width: 786px) {
      .bg {
        width:100%;
        margin-top:3rem;
      }
      .top{
        width:80%;
        left: 10%;
      }
    }

  }
`;