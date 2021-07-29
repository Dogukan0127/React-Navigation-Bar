import Logo from "./Logo/logo"
import Menu from "./Menu/menu"

export default function NavBar() {
    return (
        <div className="Nav-container">
            <div className="Nav-Items">

                <Logo />

                <Menu />

            </div>
        </div>
    )
}
