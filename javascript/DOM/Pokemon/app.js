// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
const container = document.querySelector("#container");
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

{/* 
<div>
    <img />
        <span>num</span>
</div> 
*/}

for (let i = 1; i <= 150; i++) {
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');
    const label = document.createElement('span');
    label.innerText = `#${i}`;
    const img = document.createElement("img");
    img.src = `${baseURL}${i}.png`;

    // 이미 DOM에 존재하는 요소.appendChild(새 요소)
    pokemon.appendChild(img);
    pokemon.appendChild(label);
    container.appendChild(pokemon);
}

