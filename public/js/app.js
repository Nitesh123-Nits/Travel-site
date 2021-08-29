
const form=document.querySelector('form')
const username=document.querySelector('#username')
const password=document.querySelector('#password')
const password2=document.querySelector('#confirmPassword')
const email=document.querySelector('#email')
const msg=document.querySelector('#error');
const msg2=document.querySelector('#error2');
const msg3=document.querySelector('#error3');
const msg4=document.querySelector('#error4');
const msg5=document.querySelector('#error5');
const button=document.querySelector('#submit')
const address=document.querySelector('#address')
const city=document.querySelector('#city')
const state=document.querySelector('#state')
const li=document.createElement('li')
const li2=document.createElement('li')
const li3=document.createElement('li')
const li4=document.createElement('li')
const li5=document.createElement('li')
 window.onload=fadeout; 
           
         function fadeout() { 
    var fade= document.getElementById("fadeit"); 
      
    var intervalID = setInterval(function () { 
          
        if (!fade.style.opacity) { 
            fade.style.opacity = 1; 
        } 
          
          
        if (fade.style.opacity > 0) { 
            fade.style.opacity -= 0.4; 
        }  
          
        else { 
            clearInterval(intervalID); 
        } 
          
    }, 400); 
} 
 

form.addEventListener('submit',(e)=>{
e.preventDefault();

})




password2.addEventListener('change',()=>{
    
    const passwordvalue=password.value;
    const password2value=password2.value;
    if(passwordvalue!==password2value)
    {
        
        password.classList.add('error')
        password2.classList.add('error')
        
        li.innerText='Password Doesnot Match';
        msg.append(li);
      //  button.disabled=true
        button.classList.add('buttonoff')
    }
    else{
            
           
            
        password.classList.remove('error')
        password2.classList.remove('error')
        li.remove();
       // button.disabled=false;
        button.classList.remove('buttonoff')
            
    }


   
    


})

username.addEventListener('change',()=>{
    const usernamevalue=username.value.trim();
if(usernamevalue==='')
{
    username.classList.add('error');
    li2.innerText='Username Cannot Be Blank';
    msg2.append(li2);
   // button.disabled=true
    button.classList.add('buttonoff2')
}
else{
    username.classList.remove('error');
    li2.remove();
   // button.disabled=false;
        button.classList.remove('buttonoff2')
}

})

//last3

address.addEventListener('change',()=>{
    const addressvalue=address.value.trim();
if(addressvalue==='')
{
    address.classList.add('error');
    li3.innerText='Address Cannot Be Blank';
    msg3.append(li3);
   // button.disabled=true
    button.classList.add('buttonoff3')
}
else{
    address.classList.remove('error');
    li3.remove();
   // button.disabled=false;
        button.classList.remove('buttonoff3')
}

})


city.addEventListener('change',()=>{
    const cityvalue=city.value.trim();
if(cityvalue==='')
{
    city.classList.add('error');
    li4.innerText='City Cannot Be Blank';
    msg4.append(li4);
  //  button.disabled=true
    button.classList.add('buttonoff4')
}
else{
    city.classList.remove('error');
    li4.remove();
   // button.disabled=false;
        button.classList.remove('buttonoff4')
}

})


state.addEventListener('change',()=>{
    const statevalue=state.value.trim();
if(statevalue==='')
{
   state.classList.add('error');
    li5.innerText='State Cannot Be Blank';
    msg5.append(li5);
    //button.disabled=true
    button.classList.add('buttonoff5')
}
else{
    state.classList.remove('error');
    li5.remove();
  //  button.disabled=false;
        button.classList.remove('buttonoff5')
}

})





