
function addnewWE()
{
    let newNode=document.createElement("textarea")
    newNode.classList.add("form-control");
    newNode.classList.add("wefield");
    newNode.setAttribute("rows",3);
     newNode.classList.add("mt-2");
     newNode.setAttribute("placeholder","enter here");
     let WEok=document.getElementById("WE");
    let addwebtnok=document.getElementById("addwebtn");
   
    WEok.insertBefore(newNode,addwebtnok);
}
function addnewAQ()
{
    let newNode=document.createElement("textarea")
    newNode.classList.add("form-control");
    newNode.classList.add("aqfield");
    newNode.setAttribute("rows",3);
     newNode.classList.add("mt-2");
     newNode.setAttribute("placeholder","enter here");
     let AQok=document.getElementById("AQ");
    let addaqbtnok=document.getElementById("addaqbtn");
   
    AQok.insertBefore(newNode,addaqbtnok);
}



function genresume(){
   let nameField=document.getElementById("name-field").value;
   let nameT1=document.getElementById("nameT1");
   nameT1.innerHTML=nameField;


   document.getElementById("nameT2").innerHTML=nameField;


   document.getElementById("contactT").innerHTML=document.getElementById("contact-field").value;
   document.getElementById("addressT").innerHTML=document.getElementById("address-field").value;
   document.getElementById("fbT").innerHTML=document.getElementById("fb-field").value;
   document.getElementById("igT").innerHTML=document.getElementById("ig-field").value;
   document.getElementById("lnkT").innerHTML=document.getElementById("lnk-field").value;


   document.getElementById("objT").innerHTML=document.getElementById("obj-field").value;
   
   document.getElementById("imgT").src=document.getElementById("output").src;
   
   alert(document.getElementById("backcol").style.color);
  var color= document.getElementById("colorpicker").value;
   var div = document.getElementById("backcol");
   div.style.backgroundColor = color;

   var div = document.getElementById("backcol1");
   div.style.backgroundColor = color;
   var div = document.getElementById("backcol2");
   div.style.backgroundColor = color;
   var div = document.getElementById("backcol3");
   div.style.backgroundColor = color;
   var div = document.getElementById("backcol4");
   div.style.backgroundColor = color;


   let wes=document.getElementsByClassName("wefield");
   let str=''

   for(let e of wes)
   {
    str=str+`<li>${e.value}</li>`;
   }
   document.getElementById("weT").innerHTML=str;

   let aqs=document.getElementsByClassName("aqfield");
   let str1=''

   for(let e of aqs)
   {
    str1=str1+`<li>${e.value}</li>`;
   }
   document.getElementById("aqT").innerHTML=str1;

   document.getElementById("resume").style.display="none";
   document.getElementById("resume-template").style.display="block";
}

function printResume()
{
    window.print();
}
