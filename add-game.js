// add-game.js

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('gameForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const game = {
            name: document.getElementById('gameName').value,
            image: document.getElementById('gameImage').value,
            bio: document.getElementById('gameBio').value,
            players: document.getElementById('gamePlayers').value
        };

        // Save game to local storage
        let games = JSON.parse(localStorage.getItem('games')) || [];
        games.push(game);
        localStorage.setItem('games', JSON.stringify(games));

        // Redirect back to home
        window.location.href = 'index.html';
    });
});
