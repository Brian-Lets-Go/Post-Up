async function attendClickHandler(event) {
    event.preventDefault();
  
    // console.log(event.target.innerHTML)
    // // const id = window.location.toString().split('/')[
    // //   window.location.toString().split('/').length - 1
    // ];

    //use these const's to pass in the player_id and game_id for the attend method in models/Game.js
    const gameString = event.target.querySelector('.id-span').innerHTML;
    const game = parseInt(gameString);

    // console.log("game", game)

    //let params = new URLSearchParams(document.location.search)
    //const player = session.player_id;
    
    // console.log(player, game);
      
    const response = await fetch('/api/games/attend', {
      method: 'PUT',
      body: JSON.stringify({
        game
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
  
  // document.querySelector('.attend-btn').addEventListener('click', attendClickHandler);