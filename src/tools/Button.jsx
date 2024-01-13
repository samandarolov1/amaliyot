import React from 'react'

export default function Button({ word, inlineStyle, className}) {
    return (
        <button style={inlineStyle} className={className}>{word}</button>
    )
}