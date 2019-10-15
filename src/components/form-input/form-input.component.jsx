import React from 'react'

import './form-input.styles.scss'

const FormInput=({handleChange,lable,...otherprops})=>(
    <div className="group">
        <input 
        className='form-input'
        onChange={handleChange}
        {...otherprops}/>
        {
            lable?
            <label className={`${otherprops.value.length?'shrink':''} form-input-label`}>{lable}</label>
            :null
        }
        
    </div>
)

export default FormInput;