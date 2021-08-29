const ham=document.querySelector(".ham-burger");
const close=document.querySelector(".nav-bar-mobile");
   // loader .............................................
         window.onload=fadeout;     
         function fadeout() { 
    var fade= document.getElementById("fadeit");  
    var intervalID = setInterval(function () { 
          
        if (!fade.style.opacity) { 
            fade.style.opacity = 1; 
        }     
        if (fade.style.opacity > 0) { 
            fade.style.opacity -= 0.3; 
        }   
        else { 
            clearInterval(intervalID); 
        } 
          
    }, 400); 
} 
 


   // const styleElem = document.body.appendChild(document.createElement("style"));
		ham.addEventListener("click",()=>{
			close.style.top="0%";
			close.style.opacity="1";

		})



   close.addEventListener("click",()=>{
   		close.style.top="-150%";
			close.style.opacity="0";
		
		})

		
	// digital clock..........................................................
	function showTime(){
    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes(); 
    var s = date.getSeconds(); 
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();
// clock..................................................
// aos initialization..........................
  AOS.init();
  //..................................................
// ..................log-in.....
const loginUsername=document.querySelector('.loginUsername')
const loginButton=document.querySelector('#loginButton');
const msg=document.querySelector('#msg');
const li=document.createElement('li');

loginUsername.addEventListener('change',()=>{
    const loginUsernamevalue=loginUsername.value.trim();
   if(loginUsernamevalue==='')
   {
        loginUsername.classList.add('error')
        li.innerText="Username cannot be Blank"
        msg.append(li)
        loginButton.classList.add('loginbuttonoff')
   }
   else{
    loginUsername.classList.remove('error')
    li.remove();
    loginButton.classList.remove('loginbuttonoff')
   }

})
// dark-mode toggler................
   const darkmode=document.querySelector('.dark-mode-toggle');
   const loginsec=document.querySelector('#loginformcontainer');
   const infoP=document.querySelector('p.info-text');
   const bannerimg=document.querySelector('.banner-bg');
   const carSec=document.querySelector('.card-sec');
   const card=document.querySelectorAll(".card");
   const contactSec=document.querySelector(".contact-container");
   const navbar=document.querySelector(".nav-bar");
   const cardTitle=document.querySelectorAll('.card_title');
   const footer=document.querySelector('footer');
   const logsec=document.querySelector('.log-in');
   const logintext=document.querySelector('.login-text p');
   const footerp=document.querySelector('footer p');
   const footerH1=document.querySelector('footer h1');
   const cardH1=document.querySelector('.card-sec h1');
   const bg=document.querySelector('body');
   let darkMode = true;

darkmode.addEventListener("click", () => {
    if (darkMode) {
      bg.style.backgroundColor="#efe";
      infoP.style.color="#111100";
      loginsec.style.backgroundColor="#272343";
      footerH1.style.color="#272343";
      for(let c of card){
         c.style.backgroundColor="#f25f4c";
      }
     
      for(let ct of cardTitle){
         ct.style.color="#030B2C";
      }
       footer.style.backgroundColor="#bae8e8";
    
       footerp.style.color="#030B2C";
       carSec.style.background="#aa99ee";
       // logsec.style.backgroundColor="#185438";
       cardH1.style.color="#030B2C";
       navbar.style.backgroundColor="#004643";
       contactSec.style.backgroundColor="#123456";
       bannerimg.style.filter="grayscale(0%)";
       logintext.style.color="#030B2C";

  }
    else {
      bannerimg.style.filter="grayscale(100%)";
      bg.style.backgroundColor="#131312";
      infoP.style.color="#999999";
      navbar.style.backgroundColor="#111";
      logintext.style.color="#ffe";
      loginsec.style.backgroundColor="#030B2C";
      footerH1.style.color="#ffe";
      // logsec.style.backgroundColor="#112211";
      cardH1.style.color="#00FF99";
      contactSec.style.backgroundColor="#080808";
        for(let c of card){
        c.style.backgroundColor="#16171D"; 
      }
       carSec.style.background="#080808";
      for(let ct of cardTitle){
         ct.style.color="#eb5e0b";
      }
      footer.style.background="rgb(16 16 16)";
      footerp.style.color="#ffe";
    }

    darkMode=!darkMode;
});
// .......................................//