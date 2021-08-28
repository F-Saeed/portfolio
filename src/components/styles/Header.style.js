import styled from 'styled-components';

const Navbar = styled.nav`
  background-color: #f9f9fc;
  display: flex;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  height: 100px;
  justify-content: center;
`;

const NavItems = styled.div`
  background-color: #f9f9fc;
  font-family: 'Poppins Regular';
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1280px;
`;

const NavLogo = styled.span`
  background-color: #dc2460;
  border: 1px solid #dc2460;
  border-radius: 50%;
  color: #fff;
  font-size: 1rem;
  margin-right: 7px;
  padding: 6px 14px;
`;

const NavLogoTitle = styled.a`
  color: #dc2460;
  cursor: pointer;
  font-family: 'Poppins SemiBold';
  font-size: 1.25rem;
`;

const NavLinksList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  > li {
    display: inline;
  }
`;

const NavLink = styled.a`
  color: #000;
  cursor: pointer;
  font-size: 1rem;
  padding: 0 30px;
  text-decoration: none;
`;

const NavButton = styled.a`
  background-color: #ea2767;
  border: 1px solid #ea2767;
  border-radius: 30px;
  color: #fff;
  font-family: 'Poppins Medium';
  padding: 10px 20px;

  > svg {
    margin-left: 10px;
  }
`;

export {
  Navbar,
  NavItems,
  NavLogo,
  NavLogoTitle,
  NavLinksList,
  NavLink,
  NavButton,
};
