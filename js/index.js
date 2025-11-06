const formTo = document.getElementById("translate-to");
const formFrom = document.getElementById("translate-from");
// TODO læs op :) 
const mapping = {
  a: 'e', b: 'f', c: 'g', d: 'h', e: 'i',
  f: 'j', g: 'k', h: 'l', i: 'm', j: 'n',
  k: 'o', l: 'p', m: 'q', n: 'r', o: 's',
  p: 't', q: 'u', r: 'v', s: 'w', t: 'x',
  u: 'y', v: 'z', w: 'a', x: 'b', y: 'c', z: 'd',
  "æ": '*', "ø": '&', "å": '^'
};

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
