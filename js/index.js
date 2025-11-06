const formTo = document.getElementById("translate-to");
const formFrom = document.getElementById("translate-from");

const mapping = {
  a: 'e', b: 'i', c: 'o', d: 'u', e: 'a',
  f: 'b', g: 'c', h: 'd', i: 'f', j: 'g',
  k: 'h', l: 'j', m: 'k', n: 'l', o: 'm',
  p: 'n', q: 'o', r: 'p', s: 'q', t: 'r',
  u: 's', v: 't', w: 'u', x: 'v', y: 'w', z: 'x'
}

const reverseMapping = Object.fromEntries(
    Object.entries(mapping).map(([key, value]) => [value, key])
);


function translateToLeFun(text){
    let translatedTo = "";
    for (let char of text.toLowerCase()) {
        if (mapping[char]) {
            translatedTo += mapping[char];
        }
        else {
            translatedTo += char;
        }
    }
    return translatedTo;
}



function translateFromLeFun(text) {
    let translatedFrom = "";
    for (let char of text.toLowerCase()) {
        if (reverseMapping[char]) {
            translatedFrom += reverseMapping[char];
        } else {
            translatedFrom += char; 
        }
    }
    return translatedFrom;
}



formTo.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputValue = formTo.querySelector("#txtAuthorTo").value;
    const output = formTo.querySelector("#outputTextTo");
    output.innerText = translateToLeFun(inputValue);
    // console.log("TO-submitted");
    // console.log(output.innerText);
    
});

formFrom.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputValue = formFrom.querySelector("#txtAuthorFrom").value;
    const output = formFrom.querySelector("#outputTextFrom");
    output.innerText = translateFromLeFun(inputValue);
    console.log("FROM-submitted!");
    console.log(output.innerText);
    
});
