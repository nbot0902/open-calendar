import form from '../../styles/form.module.scss'

const SelectRow = ({
    labelName = "ラベル名",
    defaultValue = "",
    options = [],
    disabled = "",
    uniqueId = "name",
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

            <select
                className={form.input}
                uniqueId={uniqueId}
                onChange={onChange}
                defaultValue={defaultValue}
            >
                {
                    options.map((item, index) => {
                        return (
                            <option key={`${uniqueId}-fo-select-option-${index}`} value={item.value}>{item.label}</option>
                        )
                    })
                }
            </select>
            {caption ? <p className={form.input_caption}>{caption}</p> : null}
            {isError ? <p className={form.input_error}>{errorText}</p> : null}
        </div>
    );
};

export default SelectRow;