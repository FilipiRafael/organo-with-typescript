import './TextField.css';

interface TextFieldProps {
    aoAlterado: (valor: string) => void,
    placeholder: string,
    label: string,
    valor: string,
    obrigatorio?: boolean,
    tipo?: 'text' | 'password' | 'email' | 'number' | 'date'
}

const TextField = ({ aoAlterado, label, placeholder, valor, obrigatorio = false, tipo = 'text' }: TextFieldProps) => {
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
                type={tipo}
            />
        </div>
    )
}

export default TextField;