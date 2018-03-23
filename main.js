 
//Global Variables to calculate sign  (undefined)

var firstName;
var birthdayObj;
var AstroSign;
var blurb;
var character;

//Global variables defined




//text
var headingText = document.getElementById('character');
var outputText = document.getElementById('blurb');




//image stuff
var imgContainer = document.getElementById('result-display');
var images = imgContainer.children;


//help
var help = document.getElementById('help');
var directions = document.getElementById('directions');
var leave = document.getElementById('leave');

function displayDirections() {
    directions.className = 'display-directions';
};

function leaveDirections() {
    directions.className = 'no-display-directions'
};

help.addEventListener('click', displayDirections);
leave.addEventListener('click', leaveDirections);

// Calculate zodiac sign based on input, alert invalid date if date is invalid 



function calSign(){

    if (document.getElementById('bday').value === '') {
        alert('Please fill out all feilds before submitting');
        return false;
    } 

birthdayObj = new Date(document.getElementById('bday').value);
console.log(birthdayObj);

// deal with invalid date here before running the rest of the function

var whichMonth = birthdayObj.getMonth();
var whichDayOfMonth = birthdayObj.getDate();
  
if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 0 && whichDayOfMonth <= 19)) {
    AstroSign = "bojack";
} else if ((whichMonth == 10 && whichDayOfMonth >= 22) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
    AstroSign = "early";
} else if ((whichMonth == 9 && whichDayOfMonth >= 24) || (whichMonth == 10 && whichDayOfMonth <= 21)) {
    AstroSign = "cartman";
} else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 23)) {
    AstroSign = "bender";
} else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
    AstroSign = "fry";
} else if ((whichMonth == 6 && whichDayOfMonth >= 23) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
    AstroSign = "kyle";
} else if ((whichMonth == 5 && whichDayOfMonth >= 22) || (whichMonth == 6 && whichDayOfMonth <= 22)) {
    AstroSign = "frylock";
} else if ((whichMonth == 4 && whichDayOfMonth >= 21) || (whichMonth == 5 && whichDayOfMonth <= 21)) {
    AstroSign = "mastershake";
} else if ((whichMonth == 3 && whichDayOfMonth >= 20) || (whichMonth == 4 && whichDayOfMonth <= 20)) {
    AstroSign = "princessCarolyn";
} else if ((whichMonth == 2 && whichDayOfMonth >= 21) || (whichMonth == 3 && whichDayOfMonth <= 19)) {
    AstroSign = "leela";
} else if ((whichMonth == 1 && whichDayOfMonth >= 19) || (whichMonth == 2 && whichDayOfMonth <= 20)) {
    AstroSign = "meatwad";
} else if ((whichMonth == 0 && whichDayOfMonth >= 20) || (whichMonth == 1 && whichDayOfMonth <= 18)) {
    AstroSign = "rusty";
};

console.log(AstroSign);


displayResult(AstroSign);

};

function imgContDisplay() { imgContainer.className = 'display';}

// replace inner html with correponding character and blurb
        
function displayResult (AstroSign) {


//SWITCH

switch (AstroSign) {
    case 'early':
        images[0].className = 'display';
        character = 'Early from Squidbillies';
        blurb = 'Maybe your heart is occasionally in the right place, but people often decribe you as careless, tactless, over confident, and reckless with emotions, even those closest to you.'
        break;

    case 'rusty':
        images[1].className = 'display';
        character = 'Rusty from Squidbillies';
        blurb = 'Both intense and aloof you have an incredible ability to find yourself in dangerous situations, without quite knowing how you got there.'
        break;

    case 'meatwad':
        images[2].className = 'display';
        character = 'Meatwad from Aqua Teen Hunger Force';
        blurb = ' Imagination abounds with you, as does kindness and sensitivity. Others both appreciate this about you and take advantage of your selfless nature. Like Meatwad, you also have a tendency to blame everything on bad luck, rather than your own poor decisions.'
        break;

    case 'mastershake':
        images[3].className = 'display';
        character = 'Mastershake from Aqua Teen Hunger Force';
        blurb = ' Your wit and intellect define you, as does your generally superficial nature. Like shake, you are full of intelligence but lack direction and application, often putting your sharp mind to use in harmful ways due to boredom.'
        break;

    case 'frylock':
        images[4].className = 'display';
        character = 'Frylock from Aqua Teen Hunger Force';
        blurb = 'Your faithfulness, and ability to care about others is the cornerstone of your relationships in life. Be careful not to let other walk all over you though, and fight against your inclination to demand the world from people who you know won’t deliver.'
        break;

    case 'fry':
        images[5].className = 'display';
        character = 'Fry from Futurama';
        blurb = 'Watchful, practical, analytical, and good natured, Virgo’s are most like Fry. Like Fry you can be overly critical, often striving for perfection, and believing yourself unworthy.'
        break;

    case 'bender':
        images[6].className = 'display';
        character = 'Bender from Futurama';
        blurb = 'Romantic and charming to a tee, this can also lead to a manipulative and superficial way of navigating life and relationships.'
        break;

    case 'leela':
        images[7].className = 'display';
        character = 'Leela from Futurama';
        blurb = 'You share more than a few similarities to Leela. Like all Aries adventure and courage are never in short supply when it comes to either of you, but neither is stubbornness, impulsivity or aggression.'

        break;

    case 'cartman':
        images[8].className = 'display';
        character = 'Cartman from Southpark';
        blurb = 'You are envious by nature and often destructive as a result. You use your intelligence and hyperfocus can aid you in being quite manipulative, and secretive.'
        break;

    case 'kyle':
        images[9].className = 'display';
        character = 'Kyle from Southpark';
        blurb = 'Everyone describes you as kind, and you have a natural ability to empathize.Like Kyle, this can sometimes lead to arrogance, impatience, and stubbornness.'
        break;

    case 'bojack':
        images[10].className = 'display';
        character = 'Bojack from Bojack Horseman';
        blurb = ' You are ambitious, and practical, with wisdom beyond your years. However if life does not go smoothy, you have the ability to become a raging pessimist, with an extremely bleak view of reality.'
        break;

    case 'princessCarolyn':
        images[11].className = 'display';
        character = 'Princess Carolyn from Bojack Horseman';
        blurb = 'People depend on you, and you deliver, its who you are. However, these traits often contrast with your unparalleled ability to be completely absorbed in your own personal drama, and remain ignorant to others needs despite your natural inclination to give.'
        break; };

        headingText.innerHTML = 'You are' + ' ' + character;
        outputText.innerHTML = blurb;};

    
    var form = document.getElementById('form');

   // form.addEventListener('onSubmit', concatinate);
form.addEventListener('submit', function (evt) { evt.preventDefault(); });
form.addEventListener('submit', calSign);
form.addEventListener('submit', imgContDisplay);



// BUTTONS


var buttonCont = document.getElementById('icon-container');
var btns = buttonCont.children;


// container display on click
for (i = 0; i < btns.length; i++)
{btns[i].addEventListener('click', imgContDisplay);};

//proper image/ text display on click 
btns[0].addEventListener('click', function () {
    displayResult('leela');
}, false);

btns[1].addEventListener('click', function () {
    displayResult('princessCarolyn');
}, false);

btns[2].addEventListener('click', function () {
    displayResult('mastershake');
}, false);

btns[3].addEventListener('click', function () {
    displayResult('frylock');
}, false);

btns[4].addEventListener('click', function () {
    displayResult('kyle');
}, false);

btns[5].addEventListener('click', function () {
    displayResult('fry');
}, false);

btns[6].addEventListener('click', function () {
    displayResult('bender');
}, false);

btns[7].addEventListener('click', function () {
    displayResult('cartman');
}, false);


btns[8].addEventListener('click', function () {
    displayResult('early');
}, false);

btns[9].addEventListener('click', function () {
    displayResult('bojack');
}, false);

btns[10].addEventListener('click', function () {
    displayResult('rusty');
}, false);

btns[11].addEventListener('click', function () {
    displayResult('meatwad');
}, false);


// exit result

var exit = document.getElementById('exit');

function xOut(){
imgContainer.className = 'no-display';
};


exit.addEventListener('click', xOut);








