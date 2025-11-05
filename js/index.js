const formTo = document.getElementById("translate-to");
const formFrom = document.getElementById("translate-from");

const mapping = {
  a: 'e', b: 'i', c: 'o', d: 'u', e: 'a',
  f: 'b', g: 'c', h: 'd', i: 'f', j: 'g',
  k: 'h', l: 'j', m: 'k', n: 'l', o: 'm',
  p: 'n', q: 'o', r: 'p', s: 'q', t: 'r',
  u: 's', v: 't', w: 'u', x: 'v', y: 'w', z: 'x'
}


function translateToLeFun(text){
    let translated = "";
    for (let char of text.toLowerCae()) {
        if (mapping[char]) {
            translated += mapping[char];
        }
        else {
            translated += char;
        }
    }
    return translated;
}


function translateFromLeFun(text){

} 



formTo.addEventListener("submit", (event) => {
    event.preventDefault();
    // const inputValue = event.target.querySelector(".textInput").value;
    // const output = event.target.querySelector("#outputText");
    // output.innerText = translateToLeFun(inputValue);
    console.log("TO-submitted");
});

formFrom.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("FROM-submitted!");
});
