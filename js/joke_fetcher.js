

function fetch_joke() {

    let joketype=document.getElementById('joketype').value;
    
    //setting joke type
    switch (joketype) {
        case '1':
            joketype='Programming'
            break;
        case '2':
            joketype='Pun'
            break;
        case '3':
            joketype='Misc'
             break;
        default:
            joketype='Any'
            break;
    }

    //Fetching the result
    let res=fetch(`https://v2.jokeapi.dev/joke/${joketype}?type=single`);
    
    res.then(r=>r.json()).then(d=>{

        document
        .getElementById("joke_display")
        .innerHTML=`<p>${d.joke} </p>`//displaying the joke

    })
    
}

