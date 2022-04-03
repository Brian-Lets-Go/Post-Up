async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#game-title').value;
    const type = document.querySelector('#game-type').value;
    const date = document.querySelector('#game-date').value;
    const time = document.querySelector('#game-time').value;
    const venue = document.querySelector('#game-venue').value;


// CODE TO CHANGE THE DATE FORMAT, STILL WORK IN PROGRESS

    // document.querySelector("#game-date").value.addEventListener("change", function() {
    //     this.setAttribute(
    //         "data-date",
    //         moment(this.value, "YYYY-MM-DD")
    //         .format( this.getAttribute("data-date-format") )
    //     )
    // })
    // const date = document.getAttribute('data-date');
    // console.log(date);
    
    const response = await fetch(`/api/games`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            type,
            date,
            time,
            venue
        }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        const json = await response.json()
        console.log("zebra", json);


        console.log("lion");
        document.location.replace(`/profile`);
        
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.new-game-form').addEventListener('submit', newFormHandler);
