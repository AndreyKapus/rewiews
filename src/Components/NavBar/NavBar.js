import FindContact from "../FindContacts/FindContacts";
import {NavBarWrapper} from './NavBar.styled';
import {AppTitle} from './NavBar.styled'

const NavBar = ({onChangeFilter}) => {
    return(
        <NavBarWrapper>
            <AppTitle>Reviews</AppTitle>
            <FindContact onChangeFilter={onChangeFilter}/>
        </NavBarWrapper>
    )
}
export default NavBar;