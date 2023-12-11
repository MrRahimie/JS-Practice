 //save the last time scores
        //using default operator
        let score = JSON.parse(localStorage.getItem('score')) ||
        {
            wins: 0,
            losses: 0,
            ties: 0,
        };

        updateScoreElement();
        
        

        /*
        //AVOID NULL VALUE everytime the score refresh to ZERO
        if(!score){
            score = {
                wins: 0,
                losses: 0,
                ties: 0,
            };
        }
        */

        function playGame(playerMove){
            const computerMove = pickComputerMove();
        
            let result ='';   

            if(playerMove === 'scissors'){
                if(computerMove === playerMove){
                    result = 'You lose';
                }else if(computerMove === 'scissors'){
                    result = 'tie'
                }else{
                    result = 'You win'
                }

            }else if(playerMove === 'paper'){
                if(computerMove === 'rock'){
                    result = 'You win';
                }else if(computerMove === 'scissors'){
                    result = 'You lose'
                }else{
                    result = 'Tie'
                }

            }else{
                if(computerMove === 'rock'){
                    result = 'Tie';
                }else if(computerMove === 'scissors'){
                    result = 'You win'
                }else{
                    result = 'You lose'
                }
            }
            
            //UPDATE SCORE
            if(result === 'You win'){
                score.wins++;
            }else if(result === 'You lose'){
                score.losses++;
            }else{
                score.ties++;
            }

            //save score to local Storage
            localStorage.setItem('score', JSON.stringify(score));

            //Save score to html page
            updateScoreElement();

            document.querySelector('.js-result')
            .innerHTML = result;

            document.querySelector('.js-moves')
            .innerHTML =  `You
        <img src="images/${playerMove}-emoji.png" class="move-icon" alt="">
        <img src="images/${computerMove}-emoji.png" class="move-icon" alt="">
        Computer`;

      
           }

        function updateScoreElement(){
            document.querySelector('.js-score')
            .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Tie: ${score.ties}`;
        }

        //implies SCOPE concept
        function pickComputerMove(){

        const randomNumber = Math.random();

        let computerMove = '';
       
        
        //if-else create SCOPE where limit variables exists
        if(randomNumber >=0 && randomNumber <1/3){
            computerMove = 'rock';
        } else if(randomNumber >=1/3 && randomNumber <2/3){
            computerMove = 'paper';
        }
        else{
            computerMove = 'scissors';
        }

            return computerMove;
        }