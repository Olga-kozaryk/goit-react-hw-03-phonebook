import styled from "styled-components";

export const FormStyled = styled('form')(() =>{
    return {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        border: '1px solid #000',
        padding: '20px',
        borderRadius: '10px',
    }
})