import FindContact from "../FindContacts/FindContacts";
import {NavBarWrapper} from './NavBar.styled'

const NavBar = ({onChangeFilter}) => {
    return(
        <NavBarWrapper>
            <h1>Reviews</h1>
            <FindContact onChangeFilter={onChangeFilter}/>
        </NavBarWrapper>
    )
}
export default NavBar;