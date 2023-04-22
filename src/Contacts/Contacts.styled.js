import styled from '@emotion/styled'

export const ContactsHeader = styled.h1`
font-size: ${p => p.theme.fontSizes.titleSizeMob};

@media screen and (min-width: ${p => p.theme.screens.tabWidth}) {
font-size: ${p => p.theme.fontSizes.titleSizeDesk}
}
`