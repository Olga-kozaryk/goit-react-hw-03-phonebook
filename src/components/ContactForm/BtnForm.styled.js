import styled from "styled-components";

export const BtnForm = styled('button')(() => {
    return {
        fontSize: '18px',
        borderRadius: '10px',
        border: '1px solid #000',
        backgroundColor: 'rgb(135, 155, 240, 1)',
        padding: '5px',
        margin: 'auto',
        cursor: 'pointer',
        '&:hover':{
            background: 'rgb(131, 157, 243, 1)',
        }
    }
})