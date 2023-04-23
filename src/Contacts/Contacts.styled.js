import styled from '@emotion/styled'

export const ContactsHeader = styled.h1`
text-align: center;
margin-top: 30px;
font-size: ${p => p.theme.fontSizes.titleSizeMob};

@media screen and (min-width: ${p => p.theme.screens.tabWidth}) {
font-size: ${p => p.theme.fontSizes.titleSizeDesk}
};
`;

export const ContactsList = styled.ol`
margin-top: 12px;
`

export const ContactsListItem = styled.li`
border: 1px solid black;
border-radius: 5px;
padding: 10px;
&:not(first-of-type) {
    margin-top: 10px;
}
`