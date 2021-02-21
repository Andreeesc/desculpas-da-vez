import React from 'react'

function NovaFrase(){
    function changePhrase(){
        console.log('Trocar a frase')
    }

    return (
        <button onClick={changePhrase}>Já usou essa? Tente outra!</button>
    )
}

export default NovaFrase