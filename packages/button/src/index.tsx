import { ReactNode } from "react";

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    children: ReactNode;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
}

const Button = ({ children, onClick, type }: ButtonProps) => {
    return (
        <button type={type} onClick={onClick}>{children}</button>
    )
};

export default Button;