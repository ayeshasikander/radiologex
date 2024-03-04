import styled from "styled-components";
import { Box } from "@mui/material";


export const Wrapper = styled.div`
.css-hyum1k-MuiToolbar-root{
    padding: 1rem 4rem 0 4rem;
}
.logo{
    width: 18dvw;
    @media screen and (max-width: 600px){
        width:25dvw;
    }
}

`;

export const DesktopMenu = styled(Box)`
    display: flex;
    align-items: center;
    gap: 2rem;
  
    .item {
        text-transform: capitalize;
        color: ${({ theme }) => theme.primaryColor};
        font-weight: 500;
        font-size: 18px;
        display: flex;
        align-items: center;
        font-family:${({ theme }) => theme.fontNeue};
    }
    
    .button {
        border-radius: 28px;
        width: 148px;
        height: 50px;
        background-color: ${({ theme }) => theme.redColor};
        text-transform: capitalize;
        font-size: 16px;
        font-weight: 600;
        &:hover{
            background-color: ${({ theme }) => theme.redColor};
        }
    }
    
    // .css-1w1rijm-MuiButtonBase-root-MuiButton-root:hover {
    //     background-color: ${({ theme }) => theme.redColor};
    // }
   
`;

export const MobileMenu = styled.div`

.menu {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.item {
    text-transform: capitalize;
    color: ${({ theme }) => theme.secondaryColor};
    font-weight: 500;
    font-size: 18px;
    display: flex;
    align-items: center;
    margin: 10px 0;
}

.button {
    border-radius: 28px;
    width: 148px;
    height: 50px;
    background-color: ${({ theme }) => theme.redColor};
    text-transform: capitalize;
    font-size: 16px;
    font-weight: 600;
    margin-top: 20px;
    &:hover{
        background-color: ${({ theme }) => theme.redColor};
    }
}


`;
