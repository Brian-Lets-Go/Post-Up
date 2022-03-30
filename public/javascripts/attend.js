async function attendClickHandler(event) {
    event.preventDefault();
  
    // const id = window.location.toString().split('/')[
    //   window.location.toString().split('/').length - 1
    // ];

    //use these const's to pass in the player_id and game_id for the attend method in models/Game.js
    const player = document.getElementById('***').value.trim();
    const game = document.getElementById('***').value.trim();

    const response = await fetch('/api/games/attend', {
      method: 'PUT',
      body: JSON.stringify({
        player_id: player,
        game_id: game
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.attend-btn').addEventListener('click', attendClickHandler);