const drinks_menu=document.getElementById("drinks_menu")
const juice_menu=document.getElementById("juice_menu")
const ice_cream_menu=document.getElementById("ice_cream_menu")
const crisps_menu=document.getElementById("crisps_menu")
const cake_menu=document.getElementById("cake_menu")
function showcoldDrink(){
    juice_menu.style.display='none'
    drinks_menu.style.display='block'
    ice_cream_menu.style.display='none'
    crisps_menu.style.display='none'
    cake_menu.style.display='none'
}
function showjuice(){
    juice_menu.style.display='block'
    drinks_menu.style.display='none'
    ice_cream_menu.style.display='none'
    crisps_menu.style.display='none'
    cake_menu.style.display='none'
}
function showice(){
    juice_menu.style.display='none'
    drinks_menu.style.display='none'
    ice_cream_menu.style.display='block'
    crisps_menu.style.display='none'
    cake_menu.style.display='none'
}
function showcrisps(){
    juice_menu.style.display='none'
    drinks_menu.style.display='none'
    ice_cream_menu.style.display='none'
    crisps_menu.style.display='block'
    cake_menu.style.display='none'
}
function showcake(){
    juice_menu.style.display='none'
    drinks_menu.style.display='none'
    ice_cream_menu.style.display='none'
    crisps_menu.style.display='none'
    cake_menu.style.display='block'
}
const button1=document.getElementById('button1')
const button2=document.getElementById('button2')
const button3=document.getElementById('button3')
const button4=document.getElementById('button4')
const button5=document.getElementById('button5')

button1.onclick=showcoldDrink
button2.onclick=showjuice
button3.onclick=showice
button4.onclick=showcrisps
button5.onclick=showcake
