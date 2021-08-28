import {
  Navbar,
  NavItems,
  NavLogo,
  NavLogoTitle,
  NavLinksList,
  NavLink,
  NavButton,
} from './styles/Header.style';
import { ReactComponent as Envelope } from './images/envelope.svg';

const Header = () => {
  return (
    <Navbar>
      <NavItems>
        <NavLogoTitle>
          <NavLogo>F</NavLogo>Faran Saeed
        </NavLogoTitle>
        <NavLinksList>
          <li>
            <NavLink href='#'>HOME</NavLink>
          </li>
          <li>
            <NavLink href='#'>SKILLS</NavLink>
          </li>
          <li>
            <NavLink href='#'>PROJECTS</NavLink>
          </li>
          <li>
            <NavLink href='#'>CONTACT</NavLink>
          </li>
        </NavLinksList>
        <NavButton>
          HIRE ME <Envelope />
        </NavButton>
      </NavItems>
    </Navbar>
  );
};

export default Header;
