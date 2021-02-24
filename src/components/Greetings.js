import React from 'react';


function Greetings(props){

        //function to have the language
function langGreet(props){
    //if isRed = true logic so if statement...or else if...
    //lang props:

    if(props.lang === 'de'){
        return 'Hallo'; //from the example on github
    } else if (props.lang === 'eng'){
        return 'Hello';
    } else if (props.lang === 'es'){
        return 'Hola';
    } else if (props.lang === 'fr'){
        return 'Bonjour';
    }
}
    return (
        <div>
            {langGreet(props)} {props.children}
        </div>
    )
}



export default Greetings;