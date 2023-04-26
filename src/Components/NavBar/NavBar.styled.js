import styled from '@emotion/styled'

export const NavBarWrapper = styled.div`
min-width: 320px;
display: flex;
justify-content: space-between;
align-items: center;
background-color: ${p => p.theme.colors.accent};
padding-top: 10px;
padding-bottom: 10px;
padding-left: 20px;
padding-right: 20px;

@media screen and (min-width: ${p => p.theme.screens.tabWidth}) {
    min-width: 768px;
}
`;

export const AppTitle = styled.h1`
color: ${p => p.theme.colors.white};
font-size: ${p => p.theme.fontSizes.titleSizeMob};

@media screen and (min-width: ${p => p.theme.screens.deskWidth}) {
    font-size: ${p => p.theme.fontSizes.titleSizeDesk};
}
`