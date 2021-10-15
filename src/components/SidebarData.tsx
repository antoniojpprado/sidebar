import {
	AiOutlineHome,
	AiOutlineFile,
	AiOutlineFund,
	AiOutlineForm,
} from 'react-icons/ai';
import { SidebarItem } from '../models/SidebarItem';

export const SidebarData: SidebarItem[] = [
	{
		title: 'Home',
		path: '/home',
		icon: <AiOutlineHome />,
	},
	{
		title: 'Apresentação',
		path: '/presentation',
		icon: <AiOutlineFile />
	},
	{
		title: 'Demonstrativo',
		path: '/demonstrative',
		icon: <AiOutlineFund />
	},
	{
		title: 'Informes',
		path: '/informe',
		icon: <AiOutlineForm />
	},
];
