var a
function showJava(){
    if(a==1){
         document.getElementById("JavaTable").style.display = "block";
         return a=0;
    }
   else{
       document.getElementById("JavaTable").style.display = "none";
       return a=1;
   }
}

var b
function showPython(){
    if(b==1){
         document.getElementById("PythonTable").style.display = "block";
         return b=0;
    }
   else{
       document.getElementById("PythonTable").style.display = "none";
       return b=1;
   }
}

var c
function showWeb(){
    if(c==1){
         document.getElementById("WebDevTable").style.display = "block";
         return c=0;
    }
   else{
       document.getElementById("WebDevTable").style.display = "none";
       return c=1;
   }
}