const input =(n)=>{
          var inputId = document.getElementById("inputId");
          inputId.value += n;
}

const clearInput =()=>{
          var inputId = document.getElementById("inputId");
          inputId.value="";
}

const equal=()=>{
          var inputId = document.getElementById("inputId");
          let result = eval(inputId.value);
          inputId.value = result;        
}