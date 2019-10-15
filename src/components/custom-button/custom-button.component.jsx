import React from 'react'

import './custom-button.styles.scss';

const CustomButton =({children,googleButton,...otherprops})=>(
    <button className={`${googleButton?'google-sign-in':''} custom-button`} {...otherprops}>
        {children}
    </button>
)

export default CustomButton;