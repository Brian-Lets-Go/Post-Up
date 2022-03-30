async function newFormHandler(event) {
    event.preventDefault();

    // const title = document.querySelector('input[name="game-title"]').value;
    const type = document.querySelector('input[name="game-type"]').value;
    const date = document.querySelector('input[name="game-date"]').value;
    const time = document.querySelector('input[name="game-time"]').value;
    const venue = document.querySelector('input[name="game-venue"]').value;

    const response = await fetch(`/api/game-routes`, {
        method: 'POST',
        body: JSON.stringify({
            //   title,
            type,
            date,
            time,
            venue
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.new-game-form').addEventListener('submit', newFormHandler);
