const galaxia = document.getElementById("galaxia")
const boton = document.getElementById("boton")
const card_galaxia = document.getElementById("card_galaxia")

console.log(galaxia)
async function mostrar_galaxia() {
    try {
        const respuesta = await fetch("https://images-api.nasa.gov/search?q=" + galaxia.value)
        const data = await respuesta.json()
      console.log(data)
        for (let imagen of data.collection.items) {
            card_galaxia.innerHTML += `
       <div class="col size">
       <div class="card h-100 ">
         <img src="${imagen.links[0].href}" class="card-img-top imageSize" alt="${galaxia.value}">
         <div class="card-body overflow-auto">
           <h5 class="card-title">${imagen.data[0].title}</h5>
           <p class="card-text"> ${imagen.data[0].description}</p>
         </div>
         <div class="card-footer"> 
           <small class="text-muted">${imagen.data[0].date_created}</small>
         </div>
       </div>
     </div>
     `
        }

    } catch(error){
     console.log(error)
    }  
}

boton.addEventListener("click", (e) => {
    e.preventDefault()
    card_galaxia.innerHTML= ""
    mostrar_galaxia()
})