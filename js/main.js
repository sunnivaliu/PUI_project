
function bobaType([name,image,calories,bobaInfo,ingredient,time]) {
    this.name = name;
    this.image = image;
    this.calories = calories;
    this.bobaInfo = bobaInfo;
    this.ingredient = ingredient;
    this.time = time;
  }

function bobaIngredient([ingredient1,ingredient2,ingredient3,ingredient4,description1,description2,description3,description4]){
    this.ingredient1 = ingredient1;
    this.ingredient2 = ingredient2;
    this.ingredient3 = ingredient3;
    this.ingredient4 = ingredient4;
    this.description1 = description1;
    this.description2 = description2;
    this.description3 = description3;
    this.description4 = description4;}

var bobaList = [
    ['Taro Bubble Tea','../pic/TaroBubbleTea.png','Calories:484','- Carbs: 68g - Fat: 23g - Protein: 6g','4 Ingredients','10 Minutes'],
    ['Matcha Bubble Tea','../pic/Matcha.png','Calories:311','- Carbs: 63g - Fat: 17g - Protein:1g','4 Ingredients','18 Minutes'],
    ['Passionfruit Tea','../pic/PassionFruit.png','Calories:80','- Carbs: 23g - Fat: 0g - Protein: 0g','4 Ingredients','15 Minutes'],
    ['Creamy StrawBerry','../pic/StrawberryBubble.png','Calories:480','- Carbs: 83g - Fat: 5g - Protein: 1g','4 Ingredients','14 Minutes'],
    ['Red Bean Memory','../pic/RedBeanMemory.png','Calories:239','- Carbs: 44 - Fat: 9g - Protein: 1g','4 Ingredients','12 Minutes']
]

var ingredientList = [
    ['../pic/taroCup.png',"../pic/Ice.png", "../pic/Taro.png","../pic/Pearl.png",'1/3 cup sweetened milk','1/2 cup ice cubes', '10 tapioca pearls', '1 cup taro pearls'],
    ['../pic/MatchaCup.png',"../pic/Ice.png", "../pic/MatchaSoda.png","../pic/Pearl.png",'1/3 cup sweetened milk','1/3 cup ice cubes', '1 cup matcha powder', '10 tapioca pearls'],
    ['../pic/passionfruitCup.png',"../pic/Ice.png", "../pic/GrassJelly.png","../pic/passionfruitBubble.png",'1/2 cup fruit juice','1/2 cup ice cubes', '10 tapioca pearls', '1 cup passionfruit pearls'],
    ['../pic/strawberryCup.png',"../pic/Ice.png", "../pic/Pearl.png","../pic/Cream.png",'4oz strawberry milk','1/3 cup ice cubes', '1 cup tapioca pearls', '3oz milk cream'],
    ['../pic/RedBeanCup.png',"../pic/GrassJelly.png", "../pic/BakingSoda.png","../pic/RedBean.png",'1/3 cup regular milk','1/3 cup ice cubes', '10 tapioca pearls', '1 cup red beans'],
]

var selected_identity = []

function selectIdentity1(choice){
    sessionStorage.setItem("choice1", JSON.stringify(choice));
    window.location.href = 'setIdentity2.html';
    return false
}

function selectIdentity2(choice){
    sessionStorage.setItem("choice2", JSON.stringify(choice));
    window.location.href = 'setIdentity3.html';
    return false
}

function selectIdentity3(choice){
    sessionStorage.setItem("choice3", JSON.stringify(choice));
    window.location.href = 'findBoba.html';
    return false
}


function selectBoba(){
    choice1 = sessionStorage.getItem("choice1")
    choice2 = sessionStorage.getItem("choice2")
    choice3 = sessionStorage.getItem("choice3")
    console.log(choice1,choice2,choice3)
    if (choice1.includes ('bobaNewbie') == true || choice1.includes ('beginner') == true)
        {var bobaChoice = bobaList[1]; //Matcha
        var selectedBoba = new bobaType(bobaChoice);
        sessionStorage.setItem("myBoba", JSON.stringify(selectedBoba));
        var selectedIngredient = new bobaIngredient (ingredientList[1])
        sessionStorage.setItem("myIngredient", JSON.stringify(selectedIngredient));
        window.location.href = 'showRecipe1.html'; return}
    if (choice1.includes ('bobaHater') == true || choice3.includes ('advanced') == true) 
        {var bobaChoice = bobaList[4]; //Red Bean
        var selectedBoba = new bobaType(bobaChoice);
        sessionStorage.setItem("myBoba", JSON.stringify(selectedBoba));
        var selectedIngredient = new bobaIngredient (ingredientList[4])
        sessionStorage.setItem("myIngredient", JSON.stringify(selectedIngredient));
        window.location.href = 'showRecipe1.html'; return}
    if (choice2.includes ('lowFat') == true || choice2.includes ('vegan') == true || choice2.includes ('ketogenic') == true)
        {var bobaChoice = bobaList[2]; //Passionfruit
        var selectedBoba = new bobaType(bobaChoice);
        sessionStorage.setItem("myBoba", JSON.stringify(selectedBoba));
        var selectedIngredient = new bobaIngredient (ingredientList[2])
        sessionStorage.setItem("myIngredient", JSON.stringify(selectedIngredient));
        window.location.href = 'showRecipe1.html'; return}
    if (choice1.includes ('bobaLover') == true)
        {var bobaChoice = bobaList[3]; //Strawberry
        var selectedBoba = new bobaType(bobaChoice);
        sessionStorage.setItem("myBoba", JSON.stringify(selectedBoba));
        var selectedIngredient = new bobaIngredient (ingredientList[3])
        sessionStorage.setItem("myIngredient", JSON.stringify(selectedIngredient));
        window.location.href = 'showRecipe1.html'; return}
    else
    {var bobaChoice = bobaList[0]; //Taro
    var selectedBoba = new bobaType(bobaChoice);
    sessionStorage.setItem("myBoba", JSON.stringify(selectedBoba))
    var selectedIngredient = new bobaIngredient (ingredientList[0])
    sessionStorage.setItem("myIngredient", JSON.stringify(selectedIngredient));
    window.location.href = 'showRecipe1.html'; return}

} 

console.log (sessionStorage.getItem("myBoba"))

//selectinGallery
function redBeanSelect(){
    var bobaChoice = bobaList[4];
        var selectedBoba = new bobaType(bobaChoice);
        sessionStorage.setItem("myBoba", JSON.stringify(selectedBoba));
        var selectedIngredient = new bobaIngredient (ingredientList[4])
        sessionStorage.setItem("myIngredient", JSON.stringify(selectedIngredient));
        window.location.href = 'showRecipe1.html'; return}

function strawberrySelect(){
    var bobaChoice = bobaList[3];
        var selectedBoba = new bobaType(bobaChoice);
        sessionStorage.setItem("myBoba", JSON.stringify(selectedBoba));
        var selectedIngredient = new bobaIngredient (ingredientList[3])
        sessionStorage.setItem("myIngredient", JSON.stringify(selectedIngredient));
        window.location.href = 'showRecipe1.html'; return}

function taroSelect(){
    var bobaChoice = bobaList[0];
        var selectedBoba = new bobaType(bobaChoice);
        sessionStorage.setItem("myBoba", JSON.stringify(selectedBoba));
        var selectedIngredient = new bobaIngredient (ingredientList[0])
        sessionStorage.setItem("myIngredient", JSON.stringify(selectedIngredient));
        window.location.href = 'showRecipe1.html'; return}

function passionfruitSelect(){
    var bobaChoice = bobaList[2];
        var selectedBoba = new bobaType(bobaChoice);
        sessionStorage.setItem("myBoba", JSON.stringify(selectedBoba));
        var selectedIngredient = new bobaIngredient (ingredientList[2])
        sessionStorage.setItem("myIngredient", JSON.stringify(selectedIngredient));
        window.location.href = 'showRecipe1.html'; return}

function matchaSelect(){
    var bobaChoice = bobaList[1];
        var selectedBoba = new bobaType(bobaChoice);
        sessionStorage.setItem("myBoba", JSON.stringify(selectedBoba));
        var selectedIngredient = new bobaIngredient (ingredientList[1])
        sessionStorage.setItem("myIngredient", JSON.stringify(selectedIngredient));
        window.location.href = 'showRecipe1.html'; return}


//scrollIngredients
$( document ).ready(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var scroll_y = Math.round(scroll);
        if (scroll_y <= 662){
        $("#ingredientLeft").css({ "margin-top" : scroll_y*1.45+"px","margin-bottom": -scroll_y*1.45+"px"});
        $("#ingredientLeft").css({ "margin-left" : scroll_y/4.5+"px","margin-right": -scroll_y/4.5+"px"});
        $("#ingredientMid").css({ "margin-top" : scroll_y*1.3+"px","margin-bottom": -scroll_y*1.3+"px"});
        $("#ingredientRight").css({ "margin-top" : scroll_y*1.45+"px","margin-bottom": -scroll_y*1.45+"px"});
        $("#ingredientRight").css({ "margin-right" : scroll_y/5+"px","margin-left": -scroll_y/5+"px"});
        $('#ingredientCup').css({'position':'fixed'})
        $('#ingredientCup').css({'left':'','top':''})
        // $('#ingredients').css({'position':'fixed'});
      }
        else {
        // $('#ingredientLeft').css({'animation': 'fadeOut 4s'});
        // $('#ingredientMid').css({'animation': 'fadeOut 4s'});
        // $('#ingredientRight').css({'animation': 'fadeOut 4s'});
        $('#ingredientCup').css({'position':'relative','left':'95px','top':'630px'});
        $('#ingredients').css({'position':'relative'});
        }
    })})


//Shake
$( document ).ready(function() {
    $(window).scroll(function() {
        $('#bobaImage1').css({'animation': 'shake 3s', 'animation-iteration-count': 'infinite'});
        })})



//rotateBobaonHomePage      
$( document ).ready(function(){
    $(document).mousemove(function(e) {
        var p = $( ".homePageBoba1" ).last();
        var offset = p.offset();
        var bobaWidth = $( ".homePageBoba1" ).width();
        var bobaHeight = $( ".homePageBoba1" ).height();
        centerX = offset.left + bobaWidth/2 - window.pageXOffset,
        centerY = offset.top + bobaHeight/2 - window.pageYOffset;
        var radians = Math.atan2(e.pageX - centerX, e.pageY - centerY);
        var degree = 180+((radians * (180 / Math.PI) * -1) + 180); 
        $('.homePageBoba1').css('transform', 'rotate(' + degree + 'deg)');
      });
})

//randomBoba

function randomBoba(){
    var bobaNum = Math.floor(Math.random() * 5);
    var bobaChoice = bobaList[bobaNum];
        var selectedBoba = new bobaType(bobaChoice);
        sessionStorage.setItem("myBoba", JSON.stringify(selectedBoba));
        var selectedIngredient = new bobaIngredient (ingredientList[bobaNum])
        sessionStorage.setItem("myIngredient", JSON.stringify(selectedIngredient));
        window.location.href = 'randomGenerate.html';
        //window.location.href = 'showRecipe1.html';//
        return}

$( document ).ready(function() {
        $('#randomCup').css({'animation': 'waitBoba 1.3s linear', 'animation-iteration-count': 'infinite'});
        })


//cursorStyle
$(window).mousemove(function(e) { 
  
    $('.cursor').css({
      left: e.pageX,
       top: e.pageY
    })
    
  })