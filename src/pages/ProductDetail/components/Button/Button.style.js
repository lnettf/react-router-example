import styled from "styled-components";

export const ButtonContainer = styled.button`
    background: ${props => props.color ? props.color : "green"};
    color: white;
    border-radius: 10px;
    border: 1px solid green;
`


