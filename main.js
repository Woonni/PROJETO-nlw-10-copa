
function createGame(player1, hour, player2) {

    return `
    
    <li>
        <img src="assets/icon-${player1}.svg" alt="Bandeira  ${player1}">
        <strong>${hour}</strong>
        <img src="assets/icon-${player2}.svg" alt="Bandeira  ${player2}">

    </li> `
}


    let delay = 0;
function createCard (date, day, games) {
    delay= delay + 0.3;

    return`

    <div class="card" style="animation-delay: ${delay}s" >

    <h2> ${date} <span> ${day} </span></h2>

    <ul>  ${games} </ul>

</div> `
}


document.querySelector('#app').innerHTML = 

`<header> <img src="./assets/logo.svg" alt="Logo da nlw"></header>

<main id="cards">

${createCard("24/11", "Quinta", createGame("brazil", "16:00", "serbia"))}


${createCard("28/11", "Segunda", createGame ("southkorea", "10:00", "ghana") + createGame("portugal", "16:00", "uruguay") + createGame("switzerland", "13:00", "brazil"))}


${createCard("02/12", "Sexta", createGame("brazil", "16:00", "cameroon"))}

</main>`