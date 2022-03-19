import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { Url } from "url";

type HTMLButton = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> 

export interface BaseButtonProps extends HTMLButton {
	as?: 'button' | 'a';
	href?: string | Url;
}
