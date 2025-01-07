function ree()
{
    tt1.innerHTML=null;
    tt2.innerHTML=null;
    tt3.innerHTML=null;
    tt4.innerHTML=null;
    tt5.innerHTML=null;
    tt6.innerHTML=null;
    tt7.innerHTML=null;
    tt8.innerHTML=null;
    tt9.innerHTML=null;
}
var check="F";
function show1(){

if(tt1.innerHTML!="T" && tt1.innerHTML!="F"){
    if(check=='F'){
    tt1.innerHTML="T";
    check='T';
    }
    else{
        tt1.innerHTML="F";
        check='F'; 
    }
    don();
}
}
function show2(){
    if(tt2.innerHTML!="T" && tt2.innerHTML!="F"){
    if(check=='F'){
        tt2.innerHTML="T";
        check='T';
        }
        else{
            tt2.innerHTML="F";
            check='F'; 
        }
        don();
    }
}
function show3(){
    if(tt3.innerHTML!="T" && tt3.innerHTML!="F"){
    if(check=='F'){
        tt3.innerHTML="T";
        check='T';
        }
        else{
            tt3.innerHTML="F";
            check='F'; 
        }
        don();
    }
}
function show4(){
    if(tt4.innerHTML!="T" && tt4.innerHTML!="F"){
    if(check=='F'){
        tt4.innerHTML="T";
        check='T';
        }
        else{
            tt4.innerHTML="F";
            check='F'; 
        }
        don();
    }
}
function show5(){
    if(tt5.innerHTML!="T" && tt5.innerHTML!="F"){
    if(check=='F'){
        tt5.innerHTML="T";
        check='T';
        }
        else{
            tt5.innerHTML="F";
            check='F'; 
        }
        don();
    }
}
function show6(){
    if(tt6.innerHTML!="T" && tt6.innerHTML!="F"){
    if(check=='F'){
        tt6.innerHTML="T";
        check='T';
        }
        else{
            tt6.innerHTML="F";
            check='F'; 
        }
        don();
    }
}
function show7(){
    if(tt7.innerHTML!="T" && tt7.innerHTML!="F"){
    if(check=='F'){
        tt7.innerHTML="T";
        check='T';
        }
        else{
            tt7.innerHTML="F";
            check='F'; 
        }
        don();
    }
}
function show8(){
    if(tt8.innerHTML!="T" && tt8.innerHTML!="F"){
    if(check=='F'){
        tt8.innerHTML="T";
        check='T';
        }
        else{
            tt8.innerHTML="F";
            check='F'; 
        }
        don();
    }
}
function show9(){
    if(tt9.innerHTML!="T" && tt9.innerHTML!="F"){
    if(check=='F'){
        tt9.innerHTML="T";
        check='T';
        }
        else{
            tt9.innerHTML="F";
            check='F'; 
        }
  don();
    }
}
function don(){
    if(document.getElementById("tt1").innerHTML!=null && document.getElementById("tt2").innerHTML!=null && document.getElementById("tt3").innerHTML!=null){
    if(document.getElementById("tt1").innerHTML==="T" && document.getElementById("tt2").innerHTML==="T" && document.getElementById("tt3").innerHTML==="T")
    {
        alert("Win T");
      alert("press Reset to contineou");
      
    }
    
    else if(document.getElementById("tt1").innerHTML==="F" && document.getElementById("tt2").innerHTML==="F" && document.getElementById("tt3").innerHTML==="F"){
        alert("Win F");
        tt1.addEventListener("click",()=>{
            tt1.innerHTML!=check;
        })
    }
}
if(document.getElementById("tt1").innerHTML!=null && document.getElementById("tt4").innerHTML!=null && document.getElementById("tt7").innerHTML!=null){
    if(document.getElementById("tt1").innerHTML==="T" && document.getElementById("tt4").innerHTML==="T" && document.getElementById("tt7").innerHTML==="T"){
        alert("Win T");
    }
    else if(document.getElementById("tt1").innerHTML==="F" && document.getElementById("tt4").innerHTML==="F" && document.getElementById("tt7").innerHTML==="F"){
        alert("Win F");
    }
}
if(document.getElementById("tt1").innerHTML!=null && document.getElementById("tt5").innerHTML!=null && document.getElementById("tt9").innerHTML!=null){
    if(document.getElementById("tt1").innerHTML==="T" && document.getElementById("tt5").innerHTML==="T" && document.getElementById("tt9").innerHTML==="T"){
        alert("Win T");
    }
    else if(document.getElementById("tt1").innerHTML==="F" && document.getElementById("tt5").innerHTML==="F" && document.getElementById("tt9").innerHTML==="F"){
        alert("Win F");
    }
}
if(document.getElementById("tt4").innerHTML!=null && document.getElementById("tt5").innerHTML!=null && document.getElementById("tt6").innerHTML!=null){
    if(document.getElementById("tt4").innerHTML==="T" && document.getElementById("tt5").innerHTML==="T" && document.getElementById("tt6").innerHTML==="T"){
        alert("Win T");
    }
    else if(document.getElementById("tt4").innerHTML==="F" && document.getElementById("tt5").innerHTML==="F" && document.getElementById("tt6").innerHTML==="F"){
        alert("Win F");
    }
}
if(document.getElementById("tt7").innerHTML!=null && document.getElementById("tt8").innerHTML!=null && document.getElementById("tt9").innerHTML!=null){
    if(document.getElementById("tt7").innerHTML==="T" && document.getElementById("tt8").innerHTML==="T" && document.getElementById("tt9").innerHTML==="T"){
        alert("Win T");
    }
    else if(document.getElementById("tt7").innerHTML==="F" && document.getElementById("tt8").innerHTML==="F" && document.getElementById("tt9").innerHTML==="F"){
        alert("Win F");
    }
}
if(document.getElementById("tt2").innerHTML!=null && document.getElementById("tt5").innerHTML!=null && document.getElementById("tt8").innerHTML!=null){
    if(document.getElementById("tt2").innerHTML==="T" && document.getElementById("tt5").innerHTML==="T" && document.getElementById("tt8").innerHTML==="T"){
        alert("Win T");
    }
    else if(document.getElementById("tt2").innerHTML==="F" && document.getElementById("tt5").innerHTML==="F" && document.getElementById("tt8").innerHTML==="F"){
        alert("Win F");
    }
}
if(document.getElementById("tt3").innerHTML!=null && document.getElementById("tt6").innerHTML!=null && document.getElementById("tt9").innerHTML!=null){
    if(document.getElementById("tt3").innerHTML==="T" && document.getElementById("tt6").innerHTML==="T" && document.getElementById("tt9").innerHTML==="T"){
        alert("Win T");
    }
    else if(document.getElementById("tt3").innerHTML==="F" && document.getElementById("tt6").innerHTML==="F" && document.getElementById("tt9").innerHTML==="F"){
        alert("Win F");
    }
}
if(document.getElementById("tt3").innerHTML!=null && document.getElementById("tt5").innerHTML!=null && document.getElementById("tt7").innerHTML!=null){
    if(document.getElementById("tt3").innerHTML==="T" && document.getElementById("tt5").innerHTML==="T" && document.getElementById("tt7").innerHTML==="T"){
        alert("Win T");
    }
    else if(document.getElementById("tt3").innerHTML==="F" && document.getElementById("tt5").innerHTML==="F" && document.getElementById("tt7").innerHTML==="F"){
        alert("Win F");
        
    }
}
}