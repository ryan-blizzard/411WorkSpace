import React from 'react'


const Header = (props) => {
    return (
        <div> 
            <h1>Kool Kitty</h1>
            <h5>{props.stuff}</h5>
        </div>
    )
}

export default Header