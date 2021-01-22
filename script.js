const dino = document.querySelector(".dino");
const game = document.querySelector(".game");
let position = 0;
let isJumping = false;

console.log(dino);

function tecla_pressionada(event) {
    if (event.key === " "){
        if (!isJumping){
            console.log("espaço pressionado");
            jump();
    }}
}

function jump(event) {
    isJumping = true;

    let upInterval = setInterval(() => {
    
    if (position == 150) {
        clearInterval(upInterval);
        
        let downInterval = setInterval(() => {

            if (position == 0){
                clearInterval(downInterval);
                isJumping = false;
            } else {

                //descendo
                position -= 5;
                dino.style.bottom = position + 'px';
            }

        }, 20);
        
    } else{
    
        // subindo
        position += 10;
        dino.style.bottom = position +'px';

    }
    }, 20); 
}


function createCactus(event){
    const cactus = document.createElement('div');
    let cactusPosition = 1500;
    let randomTime = Math.random() * 6000;
    
    console.log(randomTime);
    
    cactus.classList.add('cactus');
    cactus.style.left = cactusPosition + 'px';
    game.appendChild(cactus);

    let leftInterval = setInterval(() => {
        if (cactusPosition < -60){
            clearInterval(leftInterval);
            game.removeChild(cactus);
        } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60){
            //Game over

            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
        } else {
            cactusPosition -= 5;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);

    setTimeout(createCactus, randomTime);
}

createCactus();
document.addEventListener('keyup', tecla_pressionada);

