import form from '../../styles/form.module.scss'

const InputRow = ({
    labelName = "ラベル名",
    disabled = "",
    type = "text",
    defaultValue = "",
    uniqueId = "name",
    placeholder = "",
    errorText = "",
    caption = "",
    required = false,
    isError = false,
    onChange = () => { }
}) => {
    return (
        <div className={form.form_row}>
            <label
                className={form.label}
                htmlFor={uniqueId}
            >
                {labelName}
            </label>
            <input
                disabled={disabled}
                onChange={onChange}
                defaultValue={defaultValue}
                className={form.input}
                placeholder={placeholder}
                type={type}
                id={uniqueId}
                name={uniqueId}
                required={required}
                maxLength={50}
            />
            {caption ? <p className={form.input_caption}>{caption}</p> : null}
            {isError ? <p className={form.input_error}>{errorText}</p> : null}
        </div>
    );
};

export default InputRow;