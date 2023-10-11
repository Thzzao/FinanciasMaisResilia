import Input from "../Input/Input";
// import styled from "styled-components";
import { StyleTextfield, StyledTextArea } from "./textfield.styled";

const Textfield = ({
    label,
    name,
    type,
    required,
    placeholder,
    value,
    onChange,
    hasError,
}) => {
    return (
        <StyleTextfield>
            <label htmlFor={name}>{label}</label>

            {type === "textarea" ? (
                <StyledTextArea
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    name={name}
                    required={required}
                />
            ) : (
                <Input
                    hasError={hasError}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    name={name}
                    type={type}
                    required={required}
                />
            )}
        </StyleTextfield>
    );
};

export default Textfield;
