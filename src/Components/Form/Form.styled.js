import styled from '@emotion/styled'

export const AdForm = styled.form`
display: flex;
flex-direction: column;
margin-top: 30px;
`;

export const FormLabel = styled.label`
display: flex;
flex-direction: column;
max-width: 300px;
&:not(first-of-type) {
    margin-top: 12px;
}
`;

export const FormInput = styled.input`
@media screen and (min-width: ${p => p.theme.screens.mobWidth}) {
    height: 24px;
    border: 1px solid black;
    border-radius: 5px;
    margin-top: 4px;
};

@media screen and (min-width: ${p => p.theme.screens.deskWidth}) {
    width: 400px;
}
`
export const FormButton = styled.button`
@media screen and (min-width: ${p => p.theme.screens.mobWidth}) {
    max-width: 300px;
    height: 30px;
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accent};
    margin-top: 24px;
    border-radius: 5px;
    border: 1px solid ${p => p.theme.colors.accent};
}

@media screen and (min-width: ${p => p.theme.screens.deskWidth}) {
    max-width: 400px;
}

`