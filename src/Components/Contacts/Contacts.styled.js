import styled from '@emotion/styled'

export const ContactsWrapper = styled.div`
display: block;
`

export const ContactsHeader = styled.h2`
text-align: center;
margin-top: 30px;
font-size: ${p => p.theme.fontSizes.titleSizeMob};

@media screen and (min-width: ${p => p.theme.screens.tabWidth}) {
font-size: ${p => p.theme.fontSizes.titleSizeDesk}
};
`;

export const ContactsList = styled.ul`
list-style: none;
margin-top: 12px;
`

export const ContactsListItem = styled.li`
position: relative;
border: 1px solid black;
border-radius: 5px;
padding: 10px;
&:not(:first-of-type) {
    margin-top: 12px;
};
`;

export const ContactsName = styled.p`
color: ${p => p.theme.colors.secondaryText};
font-weight: ${p => p.theme.fontWaight.max};
&:not(:first-of-type) {
    margin-top: 5px;
};
`;

export const ContactsNameValue = styled.span`
color: ${p => p.theme.colors.primaryText};
font-weight: ${p => p.theme.fontWaight.min};
`;

export const ContactsLink = styled.a`
color: ${p => p.theme.colors.accent};
display: block;
margin-top: 5px;
`;

export const ContactsBtn = styled.button`
position: absolute;
top: -9px;
right: -9px;
border: none;
border-radius: 50%;
color: white;
background-color: red;
`