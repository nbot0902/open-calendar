import form from '../../styles/form.module.scss'

const TextareaRow = ({
    labelName = "ラベル名",
    defaultValue = "",
    required = false,
    uniqueId = "name",
    placeholder = "",
    type = "text",
}) => {
    return (
        <div className={form.form_row}>
            <label className={form.label} htmlFor={uniqueId}>{labelName}</label>
            <textarea
                className={form.textarea}
                placeholder={placeholder}
                defaultValue={defaultValue}
                type={type}
                id={uniqueId}
                name={uniqueId}
                required={required}
                maxLength={200}
            />
        </div>
    );
};

export default TextareaRow;