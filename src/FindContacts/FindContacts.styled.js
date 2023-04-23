import styled from '@emotion/styled'

export const FindInputWrapper = styled.div`
margin-top: 30px;
`;

export const FindInputLabel = styled.label`
color: ${p => p.theme.colors.primaryText};
`

export const FindInput = styled.input`
width: 200px;
color: ${p => p.theme.colors.primaryText};
margin-right: 10px;
padding: 5px;
border: 1px solid ${p => p.theme.colors.primaryText};
border-radius: 5px;`