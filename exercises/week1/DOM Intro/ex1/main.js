
// Reservations exercise    (first ex -ball game- is in DOM on desktop)


const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
}
  


const sendInfo = function() {
    const name = document.getElementById("input").value;

    if(name in reservations) {
        if (!reservations[name]["claimed"]) { 
            alert(`Welcome, ${name}`);
        }
        else {
            alert("Hmm, someone already claimed this reservation")
        }
    }
    else {
        alert("You have no reservation");
        // newRes[name] = { claimed: true }
    }
};


// const newRes = Object.fromEntries(
//     Object.entries(reservations).map(([k, v]) => [k.toLowerCase(), v])
// );




