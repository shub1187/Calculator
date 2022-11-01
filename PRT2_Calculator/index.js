let display = document.getElementById("display")
buttons = document.querySelectorAll("button");
let displayValue=""
for(item of buttons){
    item.addEventListener("click",(e)=>{
        button_text = e.target.innerText;
        console.log(button_text)
        if(button_text=="*"){
            display.value +=button_text
        }
        else if(button_text=="C"){
           display.value=""
        }
        else if(button_text=="="){
            display.value = eval(displayValue)
        }
        else{
            display.value +=button_text;
            displayValue = display.value;
        }
    })
}