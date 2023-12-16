import styled from "styled-components";

const ListStyled = styled('ul')(() => {
    return {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        border: '3px solid #000',
        padding: '20px',
        borderRadius: '10px',
        li:{
            backgroundColor: '#fff',
            border: '2px solid #000',
            padding:' 10px',
            borderRadius:' 10px',
            marginBottom:' 10px',
            display: 'flex',
            justifyContent: 'space-between',
            p:{
                marginRight: '20px',
            }
          }
    }
})
export default ListStyled