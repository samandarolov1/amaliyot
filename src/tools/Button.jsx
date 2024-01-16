import React from 'react'

export default function Button({ word, inlineStyle, className, wordImg}) {
    return (
        <button style={inlineStyle} className={className}><img src={wordImg} alt="" /><span>{word}</span></button>
    )
}