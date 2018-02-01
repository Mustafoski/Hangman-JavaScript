const secret_word = "emir";

function getTheWord(){
    //var secret_word = document.getElementById("secret").value;
    
    

    for(i=1; i <= secret_word.length;i++){
       
       var sw = '<div id="0"</div>'; 
        sw  = '<div id="'+ i+ '" style="display:inline-block;"> ___ </div>';
        console.log(sw);
    }
        document.getElementById('secret').innerHTML = sw;    
    
}
function getLetter(){
    // var e = document.getElementById("1").innerHTML = 'E';
    // var m = document.getElementById("2").innerHTML = 'M';
    // var i = document.getElementById("3").innerHTML = 'I';
    // var r = document.getElementById("4").innerHTML = 'R';
    // console.log(e);
    // console.log(m);
    var s = document.getElementById("secret1").value;
    console.log(s);
    console.log(value);
}


function GetValue()
{
    var my_array= new Array("head","hand1","hand2","body","leg1","leg2");
    var random_array = my_array[Math.floor(Math.random() * my_array.length)];
        console.log(random_array);
    document.getElementById("message").innerHTML=random_array;
}