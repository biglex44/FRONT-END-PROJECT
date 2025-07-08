const inputE1 = document.getElementById('input')
const infoTextE1 = document.getElementById('info-text')
const meaningContainerE1 = document.getElementById('meaning-container')
const titleE1 = document.getElementById('title')
const meaningE1 = document.getElementById('meaning')
const audioE1 = document.getElementById('audio')

async function fetchApi(word){
    try {
        infoTextE1.style.display = 'block';
        meaningContainerE1.style.display = 'none';
        infoTextE1.innerText = `Searching for the meaning of "${word}"`;
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        const result = await fetch(url).then((res) => res.json())
        console.log(result);
       
       if(result.title){
            meaningContainerE1.style.display = 'block'
            infoTextE1.style.display = 'none';
            titleE1.innerText = word;
            meaningE1.innerText = 'N/A'
            audioE1.style.display = 'none'
        }else{
            infoTextE1.style.display = 'none'
            meaningContainerE1.style.display = 'block'
            titleE1.innerText = result[0].word;
            meaningE1.innerText = result[0].meanings[0].definitions[0].definition;

            const phonetics = result[0].phonetics;
            first = phonetics[0]?.audio || ' '
            second = phonetics[1]?.audio || ' '

            audioE1.style.display = 'inline-flex';
            audioE1.src = first !== '' ? first : second;
            if(!audioE1.src){
                audioE1.style.display = 'none'
            }
        }

    } catch (error) {
        console.log(error);
        infoTextE1.innerText = `An error occurred, try again later`
    }
}

inputE1.addEventListener('keyup', (e) =>{
    if(e.target.value && e.key === 'Enter'){
        fetchApi(e.target.value)
    }
})