import './TextField.css';

interface TextFieldProps {
    aoAlterado: (valor: string) => void,
    placeholder: string,
    label: string,
    valor: string,
    obrigatorio: boolean
}

const TextField = (props: TextFieldProps) => {
    const placeholderModificada = `${props.placeholder}...`;

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        props.aoAlterado(evento.target.value);
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input
                onChange={aoDigitado}
                value={props.valor}
                required={props.obrigatorio}
                placeholder={placeholderModificada}
            />
        </div>
    )
}

export default TextField;