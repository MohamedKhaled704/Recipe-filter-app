var selector = document.getElementById("select");
selector.addEventListener('change', function() {
    var veganElements = document.getElementsByClassName('vegan');
    var glutenfreeElements = document.getElementsByClassName('gluten-free');
    var vegeterianElements = document.getElementsByClassName('vegeterian');
    if (selector.value === "vegan") {
        for (var i = 0; i < veganElements.length; i++) {
            glutenfreeElements[i].style.display = "none";
            vegeterianElements[i].style.display = "none";
            veganElements[i].style.display = "flex";
        }
    } else if (selector.value === "gluten-free") {
        for (var i = 0; i < glutenfreeElements.length; i++) {
            veganElements[i].style.display = "none";
            vegeterianElements[i].style.display = "none";
            glutenfreeElements[i].style.display = "flex";
        }
    } else if (selector.value === "vegeterian") {
        for (var i = 0; i < vegeterianElements.length; i++) {
            veganElements[i].style.display = "none";
            vegeterianElements[i].style.display = "flex";
            glutenfreeElements[i].style.display = "none";
        }
    } else if (selector.value === "all") {
        for (var i = 0; i < vegeterianElements.length; i++) {
            veganElements[i].style.display = "flex";
            vegeterianElements[i].style.display = "flex";
            glutenfreeElements[i].style.display = "flex";
        }
    }
});
// var upButton = document.querySelector('.upbutton');
// upButton.addEventListener('click', function() {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
// });
var upButton = document.querySelector('.upbutton');
upButton.style.display = 'none'; // Initially hide the button

upButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', function() {
    if (window.scrollY > window.innerHeight / 2) {
        upButton.style.display = 'block';
    } else {
        upButton.style.display = 'none';
    }
});
cardBackground = document.querySelectorAll('.card');
cardText = document.querySelectorAll('.card-text');
greenButton = document.getElementById('green');
blueButton = document.getElementById('blue');
redButton = document.getElementById('red');
defaultButton = document.getElementById('default');
greenButton.addEventListener('click', function() {
    for (var i = 0; i < cardBackground.length; i++) {
        cardBackground[i].style.backgroundColor = '#48752C';
    }
    for (var i = 0; i < cardText.length; i++) {
        cardText[i].style.color = 'white';
    }
}); 
blueButton.addEventListener('click', function() {
    for (var i = 0; i < cardBackground.length; i++) {
        cardBackground[i].style.backgroundColor = '#A9C3C8';
    }
    for (var i = 0; i < cardText.length; i++) {
        cardText[i].style.color = '#48752C';
    }
}); 
redButton.addEventListener('click', function() {
    for (var i = 0; i < cardBackground.length; i++) {
        cardBackground[i].style.backgroundColor = '#D16D6A';
    }
    for (var i = 0; i < cardText.length; i++) {
        cardText[i].style.color = 'white';
    }
}); 
defaultButton.addEventListener('click', function() {
    for (var i = 0; i < cardBackground.length; i++) {
        cardBackground[i].style.backgroundColor = '#FAFAFA';
    }
    for (var i = 0; i < cardText.length; i++) {
        cardText[i].style.color = 'black';
    }
}); 