// src/lib/navData.ts

export interface NavLink {
	href: string;
	label: string;
	id?: string;
}

export interface SubMenuColumn {
	links: NavLink[]
}

export interface SubMenu {
	title: string
	columns: SubMenuColumn[]
}

export interface NavigationItem {
	href: string
	label: string
	submenu?: SubMenu
}