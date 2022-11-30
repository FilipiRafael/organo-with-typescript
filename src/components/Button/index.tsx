import { ReactElement } from 'react';
import './Button.css';

interface BotaoProps {
    children: ReactElement | string
}

const Button = (props: BotaoProps) => {
    return (
        <button className="button">
            {props.children}
        </button>
    )
}

export default Button;