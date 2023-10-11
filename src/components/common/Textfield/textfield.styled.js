import styled from "styled-components"

export const StyleTextfield = styled.fieldset`
    width: 100%;
    border: none;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 0;

> label {
    color: ${(p) => p.theme.blue900};
    font-family: "Roboto";
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}
`

export const StyledTextArea = styled.textarea`
    width: 100%;
    height: 132px;
    padding: 8px 12px;
    border-radius: 8px;
    background: ${(p) => p.theme.withe50};
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
    resize: none;
`