import { HeaderStyled, NavStyled } from "./styled"
import { Link } from "react-router-dom"

const HeaderComponent = () => {
    return(
        <HeaderStyled>
            <NavStyled>
                <Link to="/">Home</Link>
                <Link to="FeedBack">FeebBack</Link>
            </NavStyled>
        </HeaderStyled>
    )
}

export default HeaderComponent