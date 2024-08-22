import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
    
    return (
        <HeaderContainer>
            <h3>Header</h3>
            <Link to="/">Home</Link>
            <Link to="/mypage">MyPage</Link>
        </HeaderContainer>
    )
};

export default Header;

const HeaderContainer = styled.div`
    width: 100%;
    height : 50px;
    background-color: ${props => props.theme.colors.main.main1};
`;