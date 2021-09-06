var t = ""
var one = true,
    two = true;
var three = false , 
    four = false , 
    five = false ;


var addnew = () => {
    t = document.getElementById("type").value;
    if(t == ""){
        document.getElementById("type").value = "Please type your TODO"
        setTimeout(()=>{
            document.getElementById("type").value = t;
        } , 1000 )
    }else if (one == true && two == true && three == true && four == true && five == true ){
        document.getElementById("type").value = "You can't add more than 5 todo";
        setTimeout(()=>{
            document.getElementById("type").value = t;
        } , 1000 )
    }else{
        if(one == false){
            document.getElementById("list").querySelector('.one').style.visibility = "visible"
            document.getElementById("one").value = t;
            document.getElementById("type").value = "";
            one = true;
        }else if ( two == false){
            document.getElementById("list").querySelector('.two').style.visibility = "visible"
            document.getElementById("two").value = t;
            document.getElementById("type").value = "";
            two = true;
        }else if ( three == false){
            document.getElementById("list").querySelector('.three').style.visibility = "visible"
            document.getElementById("three").value = t;
            document.getElementById("type").value = "";
            three = true;
        }else if ( four == false){
            document.getElementById("list").querySelector('.four').style.visibility = "visible"
            document.getElementById("four").value = t;
            document.getElementById("type").value = "";
            four = true;
        }else if ( five == false){
            document.getElementById("list").querySelector('.five').style.visibility = "visible"
            document.getElementById("five").value = t;
            document.getElementById("type").value = "";
            five = true;
        }
    }
}


var onedone = () =>{
    document.getElementById("list").querySelector('.one').style.visibility = "hidden"
    one = false;
}
var twodone = () =>{
    document.getElementById("list").querySelector('.two').style.visibility = "hidden"
    two = false;
}
var threedone = () =>{
    document.getElementById("list").querySelector('.three').style.visibility = "hidden"
    three = false;
}
var fourdone = () =>{
    document.getElementById("list").querySelector('.four').style.visibility = "hidden"
    four = false;
}
var fivedone = () =>{
    document.getElementById("list").querySelector('.five').style.visibility = "hidden"
    five = false;
}