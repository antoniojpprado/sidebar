import React, { FC, useState } from 'react';
import { IconContext } from 'react-icons';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import Submenu from './Submenu';
import LogoImg from '../assets/logo.png';
import { 
	Nav, 
	SidebarNav, 
	SidebarWrap, 
	Logo, 
	NavIcon,
	ExitIcon,
} from './styles';

const Sidebar: FC = () => {
	const [sidebar, setSidebar] = useState(true);
	const showSidebar = () => setSidebar(!sidebar);

	return (
		<IconContext.Provider value={{ color: '#005FA2' }}>

			<Nav>
				<NavIcon to="#" onClick={showSidebar}>
					<AiOutlineMenu />
				</NavIcon>
				<Logo src={LogoImg} alt={'Btg Pactual'} />
				<ExitIcon/>
			</Nav>


			<SidebarNav sidebar={sidebar}>
				<SidebarWrap>

					<NavIcon to="#" onClick={showSidebar}>
						<AiOutlineClose />
						<Logo src={LogoImg} alt={'Btg Pactual'} />
					</NavIcon>

					{SidebarData.map((item, index) => {
						return <Submenu item={item} key={index} />;			
					})}
					
				</SidebarWrap>
			</SidebarNav>

		</IconContext.Provider>
	);
};

export default Sidebar;
