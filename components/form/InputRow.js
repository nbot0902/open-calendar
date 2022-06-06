import form from '../../styles/form.module.scss'

const InputRow = ({
    labelName = "ラベル名",
    required = false,
    uniqueId = "name",
    placeholder = "",
    type = "text",
}) => {
    return (
        <div className={form.form_row}>
            <label className={form.label} htmlFor={uniqueId}>{labelName}</label>
            <input className={form.input} placeholder={placeholder} type={type} id={uniqueId} name={uniqueId} required={required}
                maxLength={100} />
        </div>
    );
};

export default InputRow;