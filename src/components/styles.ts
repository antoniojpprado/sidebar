import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { IoExitOutline }  from 'react-icons/io5';

export const Nav = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 5rem;
  background-color: #F3FAFF;
  position: sticky;
  top: 0
  `;

export const SidebarNav = styled.div<{ sidebar: boolean }>`
  position: fixed;
  display: flex;
  width: 225px;
  height: 100vh;
  background-color: #F3FAFF;
  top: 60;
  transition: 350ms;
  
  @media (max-width: 768px) {
      display: flex;
      top: 0;
      left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  }
`;

export const SidebarLabel = styled.span`
    margin-left: 1rem;
`;

export const SidebarWrap = styled.div``;

export const Logo = styled.img`
  margin: 10px 10px 10px 35px;
  margin-top: 10;
  height: 42px;
  
  @media (max-width: 768px) {
    margin: 10px 0px 10px 5%;
    height: 32px;
  }
`

export const ExitIcon = styled(IoExitOutline)`
  transform: scale(2.5);
  position: absolute;
  top: 30px;
  right: 40px;
`

export const NavIcon = styled(NavLink)`
	display: none;
	justify-content: flex-start;
	align-items: center;
	height: 5rem;
	font-size: 2rem;
	margin-left: 1rem;

  &.active {
    color: teal;
  }

	@media (max-width: 768px) {
	  display: flex;
	}
`;

export const SidebarLink = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.75rem;
  font-size: 1.125rem;
  padding: 2rem;
  text-decoration: none;
  color: #334A52;

  &.active {
    color: teal;
  }

  &:hover {
    color: #F9F871;
    background-color: #0077BD;
    border-left: 4px solid #F9F871;
  }
`;

export const DropdownLink = styled(NavLink)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 3.75rem;
  font-size: 1.125rem;
  padding-left: 3rem;
  text-decoration: none;
  color: #F9F871;

  &.active {
    color: teal;
  }

  &:hover {
      background-color: #6d44dc;
  }
`;
