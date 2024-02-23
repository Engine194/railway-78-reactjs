import React from 'react'

const InputName = (props) => {
const {name, changeInputName} = props || {};

const handleChangeInput = (event) => {
    changeInputName(event.target.value);
}
  return (
    <div>
        <label>
            Name:
            <input type='tex' value={name} onChange={handleChangeInput} />
        </label>
    </div>
  )
}

export default InputName