
  const historie = document.getElementById("historie");
  const s1 = document.getElementById("s1");
  const savnet = document.getElementById("savnet");
  const monstre = document.getElementById("monstre");
  const s3 = document.getElementById("s3");
  const lapp1 = document.getElementById("lapp1");
  const lapp2 = document.getElementById("lapp2");
  const lapp3 = document.getElementById("lapp3");
 

  onscroll = function() {

    console.log(scrollY);
    if(scrollY > 400) {
        historie.className = "historie fader";
    } else {
        historie.className = "historie ikkeFader";
    }

    if(scrollY > 550) {
        s1.className = "s1 fader";
    } else {
        s1.className = "s1 ikkeFader";
    } 

    if(scrollY > 1200) {
       savnet.className = "savnet fader";
    } else {
        savnet.className = "savnet ikkeFader";
    } 

    if(scrollY > 3700) {
        monstre.className = "monstre fader";
     } else {
         monstre.className = "monstre ikkeFader";
     } 

     if(scrollY > 4300) {
        s3.className = "s3 fader";
     } else {
         s3.className = "s3 ikkeFader";
     } 


     if(scrollY > 1900) {
        lapp1.className = "lapp1 fader";
     } else {
         lapp1.className = "lapp1 ikkeFader";
     }


     if(scrollY > 2700) {
        lapp2.className = "lapp2 fader";
     } else {
         lapp2.className = "lapp2 ikkeFader";
     } 

     if(scrollY > 3400) {
        lapp3.className = "lapp3 fader";
     } else {
         lapp3.className = "lapp3 ikkeFader";
     } 

    
     

  }



  

  

