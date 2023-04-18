var character = document.getElementById("character");
var enemy = document.getElementById("enemy");
// Variable score
var counter=0;
// Fonction de saut
function jump(){
    // Si la classe de 'character' est déjà animate, retourne immédiatement
    // Sinon, ajoute animate à 'character' pour que Mario saute
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300); // arrête l'animation de saut après 300ms
}

// Appelle fonction toutes les 10ms pour vérifier si Mario est touché
var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let enemyLeft = parseInt(window.getComputedStyle(enemy).getPropertyValue("left"));
    // Si Mario est touché, affiche alerte 'Game Over' et remet le score à 0,
    
    if(enemyLeft<20 && enemyLeft>-20 && characterTop>=130){
        enemy.style.animation = "none";
        alert("Game Over. score: "+Math.floor(counter/100));
        counter=0;
        enemy.style.animation = "enemy-animation 1s infinite linear";
    // sinon, incrémente score à chaque saut et affiche le dans élément HTML avec ID scoreSpan    
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);