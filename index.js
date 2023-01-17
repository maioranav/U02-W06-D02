const collapse = (id) => {
   document.querySelector(id).classList.toggle("collapse")
}

const removeCards = () => {
   let cards = document.querySelectorAll(".card")
   for (let i = 0; i < cards.length; i++) {
      cards[i].parentElement.removeChild(cards[i])
   }
}

const addHot = () => {
   let toBeHot = document.querySelectorAll("#summerContent .card")
   let hotTag = `<span class="badge text-bg-danger position-absolute top-0 end-0 m-2">HOT</span>`
   for (let i = 0; i < toBeHot.length; i++) {
      toBeHot[i].innerHTML += hotTag
   }
}

const travelCount = () => {
   let viaggi = 1 //messo a 1 per contare tutte le card + l'offerta del giorno
   viaggi += document.querySelectorAll(".card").length
   console.log("Il numero totale di viaggi nel sito è di", viaggi)
   return viaggi
}