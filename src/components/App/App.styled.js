import styled from "styled-components";

export const Container = styled('div')(()=> {
    return {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 18,
        color: '#010101',
    }
})