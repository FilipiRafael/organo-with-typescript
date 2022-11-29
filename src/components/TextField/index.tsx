import './TextField.css';

interface TextFieldProps {
    aoAlterado: (valor: string) => void,
    placeholder: string,
    label: string,
    valor: string,
    obrigatorio: boolean
}

const TextField = ({ aoAlterado, label, obrigatorio, placeholder, valor }: TextFieldProps) => {
    const placeholderModificada = `${placeholder}...`;

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value);
    }

    return (
        <div className="campo-texto">
            <label>{label}</label>
            <input
                onChange={aoDigitado}
                value={valor}
                required={obrigatorio}
                placeholder={placeholderModificada}
            />
        </div>
    )
}

export default TextField;