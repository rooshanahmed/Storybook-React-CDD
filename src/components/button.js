import React from 'react'

const Button = ({ value, style, className }) => (
    <button style={style} className={className}>
        {value}
    </button>
)