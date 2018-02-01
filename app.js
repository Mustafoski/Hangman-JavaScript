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
    var e,m,i,r;
    

    var s = document.getElementById("secret1").value;
    console.log(s);

    if(document.getElementById("secret1")!== e || m || i || r){
        GetValue();
    }else{
        if(e){
            document.getElementById("1").innerHTML = 'E';
        }
        else if(m){
            document.getElementById("2").innerHTML = 'M';
        }
        else if(i){
            document.getElementById("3").innerHTML = 'I';
        }
        else if (r){
            document.getElementById("4").innerHTML = 'R';
        }
    }

}


function GetValue()
{
    var my_array= new Array("head","hand1","hand2","body","leg1","leg2");
    var random_array = my_array[Math.floor(Math.random() * my_array.length)];
        console.log(random_array);
    document.getElementById("message").innerHTML=random_array;
}