var p1Name=localStorage.getItem("player1")
var p2Name=localStorage.getItem("player2")
document.getElementById("p1Name").innerHTML=p1Name+" : "
document.getElementById("p2Name").innerHTML=p2Name+" : " 
var p1Score=0
document.getElementById("p1Score").innerHTML=p1Score
var p2Score=0
document.getElementById("p2Score").innerHTML=p2Score
QTurn="p1"
Aturn="p2"
document.getElementById("QuestionTurn").innerHTML="Question Turn: "+ p1Name
document.getElementById("AnswerTurn").innerHTML="Answer Turn: "+p2Name

function send(){
var getWord= document.getElementById("input").value
QWord= getWord.toLowerCase()
console.log(QWord)
//Code for replacing the first letter
letter1=QWord.charAt(1)
console.log(letter1)
Replace1 = QWord.replace(letter1," _ ")
console.log(Replace1)
//Code for replacing the second letter
x=QWord.length-1
letter2=QWord.charAt(x)
console.log(letter2)
Replace2=Replace1.replace(letter2," _ ")
console.log(Replace2)
//Code for replacing the third letter
y=Math.floor(QWord.length/2)
letter3=QWord.charAt(y)
console.log(letter3)
Replace3 = Replace2.replace(letter3, " _ ")
console.log(Replace3)
//Code for creating tagss
Qtag=`<h4> Word: &nbsp; <span id="word_display">${Replace3}</span></h4> <br>`
Atag=`Answer: <input type="text" id="AnsInput"><br><br><br><br>`
ButtonTag=`<button class="btn btn-success" onclick="Check()">Submit Answer</button>`
document.getElementById("output").innerHTML=Qtag+Atag+ButtonTag
document.getElementById("input").value=""
}
QTurn= "Player1"
ATurn="Player2"
function Check(){
 var getAnswer=document.getElementById("AnsInput").value
 var Answer=getAnswer.toLowerCase()
     
if (Answer==QWord) {
 if (ATurn=="Player1") {
  p1Score=p1Score+1 
  document.getElementById("p1Score").innerHTML=p1Score
 } else {
     p2Score=p2Score+1
     document.getElementById("p2Score").innerHTML=p2Score
 }   
}
if (QTurn=="Player1") {
  QTurn="Player2"  
document.getElementById("QuestionTurn").innerHTML="Question Turn: "+ p2Name
} else {
    QTurn="Player1"
    document.getElementById("QuestionTurn").innerHTML="Question Turn: "+ p1Name 
}
if (ATurn=="Player1") {
    ATurn="Player2"
    document.getElementById("AnswerTurn").innerHTML="Answer Turn: "+ p2Name
} else {
  ATurn="Player1"
  document.getElementById("AnswerTurn").innerHTML="Answer Turn: "+ p1Name  
}
document.getElementById("output").innerHTML=""
}
