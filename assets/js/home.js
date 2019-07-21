// ensuring that calender shows minimun date = today's date
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();
if (dd < 10) {
    dd = '0' + dd
}
if (mm < 10) {
    mm = '0' + mm
}

today = yyyy + '-' + mm + '-' + dd;
document.getElementById("datefield").setAttribute("min", today);

//postpone
var val=document.getElementById('datefield2');
var anchor=document.getElementById("postpone");
val.addEventListener("change",function(){
    console.log(val.value+" vinay yadav");
    anchor.href+="&date="+val.value;
    console.log(anchor.href);
});
function postpone(){
    if(val.value.length==0){
        readOutLoud("please select a date first");
        alert("please select a date first");
        return false
    }
    readOutLoud('Postponed!');
    return true;
}
//ensuring that delete btn only gets clicked when something is selected
function fun(){
    var boxes=document.querySelectorAll(".checkbxinput");
    var c=0;    
    for(let i=0;i<boxes.length;i++){
        if(boxes[i].checked==false){
            c++;
        }
    }
    if(c==boxes.length)
        return false;
    return true;
}

// FORM VALIDATION
function validateMyForm(){
    if(!fun()){
        readOutLoud("select at least one task to delete");
        alert("select at least one task to delete");
        return false;
    }
    readOutLoud("Successfully Deleted!");
    return true;
}

// VOICE MESSAGE
function readOutLoud(msg){
    const speech=new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    speech.volume=1;
    speech.rate=1;
    speech.pitch=1;
    speech.voice = voices[3];
    speech.text=msg;
    window.speechSynthesis.speak(speech);
}