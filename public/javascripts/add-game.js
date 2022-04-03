async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#game-title').value;
    const type = document.querySelector('#game-type').value;
    const date = document.querySelector('#game-date').value;
    const time = document.querySelector('#game-time').value;
    const venue = document.querySelector('#game-venue').value;

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
