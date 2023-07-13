let containerCardDetails = document.getElementById("details")
let events = data.events
let parameter = location.search
let parameters = new URLSearchParams(parameter)
let idparameters = parameters.get("parameter")
let objectEvents = events.find(idcards => idcards._id === idparameters)

function createCardDetails(htmlElemnt, objectCard) {
    htmlElemnt.innerHTML += `
            <div class="card d-flex col-md-2 float-md-end mb-3 ms-md-3 shadow-lg p-3 rounded w-75">
             <img src="${objectCard.image}" class="card-details object-fit-cover rounded shadow border border-black w-50"
                 alt="cinema">
             <div class="card-body d-flex flex-column justify-content-evenly border border-black ms-3 shadow rounded">
                 <h3 class="card-title align-self-center">${objectCard.name}</h3>
                 <h4>2023-10-15</h4>
                 <h5 class="card-text">${objectCard.description}</h5>
                 <h5>${objectCard.place}</h5>
                    <div class="d-flex justify-content-between align-items-center">
                        <h5>US$${objectCard.price}</h5>
                    </div>
             </div>
          </div>
`
}

createCardDetails(containerCardDetails, objectEvents)