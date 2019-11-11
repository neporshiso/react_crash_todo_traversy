import React from 'react'

export default function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
        </header>
    )
}

const headerStyle = {
    background: 'gray',
    color: 'black',
    textAlign: 'center',
    padding: '10px'
}