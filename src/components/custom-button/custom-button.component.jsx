import React from 'react'

import './custom-button.styles.scss';

const CustomButton =({children,googleButton,inverted,...otherprops})=>(
    <button className={`${googleButton?'google-sign-in':''}
    ${inverted?'inverted':''} 
    custom-button`} {...otherprops}>
        {children}
    </button>
)

export default CustomButton;