let display = document.querySelector(".show")
let butt = document.querySelectorAll(".button")


Array.from(butt).forEach((butt)=>{
   butt.addEventListener("click", (e)=>{
      switch(e.target.innerText){
         case 'C':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            default:
                display.innerText += e.target.innerText;
               }
   })

})