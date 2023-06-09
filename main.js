document.addEventListener('DOMContentLoaded', () => {
    const randomId = getRandomInt(0,100)
    fetchPokexmon(randomId)
})

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

const fetchPokexmon = async (id) => {
    try{
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

        const data = await res.json()

        const pokemon = {
            nombre: data.name,
            imagen: data.sprites.other.dream_world.front_default,
            experiencia: data.base_experience,
        }

        pintarCard(pokemon)
    }catch (error) {
        console.log(error)
    }   
}

const pintarCard = (pokemon) => {
    const flex = document.querySelector('.flex')
    const template = document.querySelector('#template-card').content
    const clone = template.cloneNode(true)
    const fragment = document.createDocumentFragment()

    clone.querySelector('.card-img-top').setAttribute('src', pokemon.imagen)
    clone.querySelector('.card-title').textContent = pokemon.nombre
    clone.querySelector('.experience').innerHTML = `Experiencia ${pokemon.experiencia}`
    fragment.appendChild(clone)
    flex.appendChild(fragment)
}


  
