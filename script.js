function goDown(){

window.scrollTo({

top:window.innerHeight,

behavior:"smooth"

})

}

function showMember(name,desc){

popup.style.display="block"

popupName.innerText=name

popupDesc.innerText=desc

}

function closePopup(){

popup.style.display="none"

}

function sendMessage(){

let text=msg.value

if(text==="") return

let div=document.createElement("div")

div.innerText=text

messages.prepend(div)

msg.value=""

}