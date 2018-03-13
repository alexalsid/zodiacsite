 
//Global Variables to calculate sign  (undefined)

var firstName;
var birthdayObj;
var AstroSign;
var blurb;
var character;

//Global variables defined

//container 
var imgContainer = document.getElementById('result-display');


//text
var outputText = document.getElementById('blurb');


// Button Variables

var earlyBtn = document.getElementById('early-btn');
var rustyBtn = document.getElementById('rusty-btn');
var meatwadBtn = document.getElementById('mastershake-btn');
var frylockBtn = document.getElementById('frylock-btn');
var fryBtn = document.getElementById('fry-btn');
var benderBtn = document.getElementById('bender-btn');
var leelaBtn = document.getElementById('leela-btn');
var cartmanBtn = document.getElementById('cartman-btn');
var kyleBtn = document.getElementById('kyle-btn');
var bojackBtn = document.getElementById('bojack-btn');
var princessCarolynBtn = document.getElementById('princess-carolyn-btn');

// image array 
var images = imgContainer.children;





// Calculate zodiac sign based on input, alert invalid date if date is invalid 



function calSign() {

    birthdayObj = new Date(document.getElementById('bday').value);

    // deal with invalid date here before running the rest of the function

    var whichMonth = birthdayObj.getMonth();
    var whichDayOfMonth = birthdayObj.getDate();

    
    
if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
    AstroSign = "bojack";
} else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
    AstroSign = "early";
} else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
    AstroSign = "cartman";
} else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
    AstroSign = "bender";
} else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
    AstroSign = "fry";
} else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
    AstroSign = "kyle";
} else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
    AstroSign = "frylock";
} else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
    AstroSign = "mastershake";
} else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
    AstroSign = "princessCarolyn";
} else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
    AstroSign = "leela";
} else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
    AstroSign = "meatwad";
} else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
    AstroSign = "rusty";
};

displayResult();

};

// replace inner html with correponding character and blurb
        
function displayResult (AstroSign) {



//SWITCH

switch (AstroSign) {
    case 'early':
        images[0].className = 'display';
        character = 'Early from Squidbillies';
        break;

    case 'rusty':
        images[1].classList.add('display');
        character = 'Rusty from Squidbillies';
        break;

    case 'meatwad':
        images[2].classList.add('display');
        character = 'Meatwad from Aqua Teen Hunger Force';
        break;

    case 'mastershake':
        images[3].classList.add('display');
        character = 'Mastershake from Aqua Teen Hunger Force';
        break;

    case 'frylock':
        images[4].classList.add('display');
        character = 'Frylock from Aqua Teen Hunger Force';
        break;

    case 'fry':
        images[5].classList.add('display');
        character = 'Fry from Futurama';
        break;

    case 'bender':
        images[6].classList.add('display');
        character = 'Bender from Futurama';
        break;

    case 'leela':
        images[7].className = 'display';
        character = 'Leela from Futurama';
        break;

    case 'cartman':
        images[8].classList.add('display');
        character = 'Cartman from Southpark';
        break;

    case 'kyle':
        images[9].classList.add('display');
        character = 'Kyle from Southpark';
        break;

    case 'bojack':
        images[10].classList.add('display');
        character = 'Bojack from Bojack Horseman';
        break;

    case 'princessCarolyn':
        images[11].classList.add('display');
        character = 'Princess Carolyn from Bojack Horseman';
        break; }

        function concatinate(){ outputText.innerHTML = 'You are' + character + '!' + '' + blurb;}
    };

    var form = document.getElementById('form');
    form.addEventListener('onSubmit', calSign);

