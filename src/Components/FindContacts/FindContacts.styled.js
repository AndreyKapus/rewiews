import styled from '@emotion/styled'

export const FindInputWrapper = styled.div`

`;

export const FindInputLabel = styled.label`
color: ${p => p.theme.colors.primaryText};
`

export const FindInput = styled.input`
width: 80px;
color: ${p => p.theme.colors.primaryText};
padding: 5px;
border: 1px solid ${p => p.theme.colors.primaryText};
border-radius: 5px;

@media screen and (min-width: ${p => p.theme.screens.tabWidth}) {
    width: 200px;
};

@media screen and (min-width: ${p => p.theme.screens.deskWidth}) {
    width: 250px;
};
`