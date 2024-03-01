const input =(n)=>{
          let inputId = document.getElementById("inputId");
          inputId.value += n;
}

const clearInput =()=>{
          let textId = document.getElementById("inputId");
          textId.value= "";
}

const equal=()=>{ 
          let inpId = document.getElementById("inputId");
          if(!inpId.value==""){
                    let result = eval(inpId.value);
                    inpId.value = result;  
          }
    
}