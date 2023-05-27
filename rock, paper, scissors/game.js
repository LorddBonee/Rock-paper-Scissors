const game = () =>{
    let pScore = 0;
    let cScore = 0;

    function startGame(){
        const play = document.querySelector('.button button');
        const intro = document.querySelector('.container1');
        const match = document.querySelector('.container2')
        
        play.addEventListener('click', (e) =>{
            intro.classList.add('fadeOut');
            match.classList.add('fadeIn');
        })
    };

    function playMatch(){
        const buttons = document.querySelectorAll('.option1');
        const computerHand = document.querySelector('.computer-hand');
        const playerHand = document.querySelector('.player-hand');

        const computerOptions = ['Rock', 'Paper', 'Scissors'];

        buttons.forEach((button) =>{
        button.addEventListener('click', (e) =>{
                const computerNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[computerNumber];
                
                console.log(e.target.textContent)
        //checkWinner
        checkWinner(e.target.textContent, computerChoice);
        //update images
           playerHand.src = `${e.target.textContent}.png`
           computerHand.src = `${computerChoice}.png`     
            });

        });

        function updateScore(){
            const playerScore = document.querySelector('.player-score');
            const computerScore = document.querySelector('.computer-score');
            playerScore.textContent = pScore;
            computerScore.textContent = cScore;
        }

    function checkWinner(playerChoice, computerChoice){
        const text = document.querySelector('.message');
        if(playerChoice === computerChoice){
            text.textContent = 'it is a tie';
            return;
        };
        if(playerChoice === 'Rock'){
            if(computerChoice === 'Scissors'){
                text.textContent = 'Player Wins'
                pScore++;
                updateScore();
                return;
            } else
            {
                text.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }
        };
        if(playerChoice === 'Paper'){
            if(computerChoice === 'Scissors'){
                text.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;

            } else{
                text.textContent = 'Player Wins'
                pScore++;
                updateScore();
                return;
            };

        };
        if(playerChoice === 'Scissors'){
            if(computerChoice === 'Paper'){
                text.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;

            }else{
                text.textContent = 'Computer Wins'
                cScore++;
                updateScore();
                return;
            }
        }
                
    }
    

}

        
    startGame();
    playMatch();
};

//Instantiate the start game function
game();
