import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type HTMLButton = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> 

export interface BaseButtonProps extends HTMLButton {
	as?: 'button' | 'a';
	href?: string | URL;
}
