function Validateinputs() {
    let flag = true;

    var elements = document.getElementsByName("inlineRadioOptions");
    var element = document.getElementsByName("callput");

    var strikeprice = document.getElementById("strikePrice").value;
    var buyprice = document.getElementById("buyAbove").value;
    var target = document.getElementById("target1").value;
    var targetmax = document.getElementById("targetmax").value;
   
    
    for (var i = 0, l = elements.length; i < l; i++)
    {
       // alert(elements[i]);
        if (elements[i].checked)
        {
            // flag = elements[i].value;
            flag = true;
            break;  

        }else{
            flag = false;
        }
    }

    if(flag==false){
        alert("Please Enter all the Fields qwqwq");
    }


  
    for (var j = 0, p = element.length; j < p; j++)

    {
        if (element[j].checked)
        {
            // flag = elements[i].value;
            flag = true;
            break;
        }else{
            flag = false
        }
    }


    console.log(flag);
    if(strikeprice=="" || buyprice=="" || target=="" || targetmax ==""){

        flag = false;
       console.log(strikeprice || buyprice || target || targetmax == "");
    }

    console.log(flag);
    if(flag==false ){
        alert("Please Enter all the Fields");
    }else{
        TextGenration();
    }

   
    
  }

function TextGenration(){
    var tradeelements = document.getElementsByName("inlineRadioOptions");
    var callelements = document.getElementsByName("callput");

    var tradeoption = "";
    var calloption = "";
    var strikeprice = document.getElementById("strikePrice").value;
    var buyprice = document.getElementById("buyAbove").value;
    var target = parseInt(document.getElementById("target1").value);
    var targetmax = parseInt(document.getElementById("targetmax").value);
    

    var Message = "";
    var targetMessage = target.toString(10);


    

    for (var i = 0, l = tradeelements.length; i < l; i++)
    {
      
        if (tradeelements[i].checked)
        {
            tradeoption = tradeelements[i].value;
            break;
        }
    }

    for (var j = 0, l = callelements.length; j < l; j++)
    {
        if (callelements[j].checked)
        {
            calloption = callelements[j].value;
            break;
        }
    }
    
    for (var j = target; j <= targetmax; j=j+5)
    {
        targetMessage = targetMessage+"-"+ j.toString(10);
    }
    

    Message = "<b>TODAY'S TRADE</b><br>"+
                tradeoption.toUpperCase()+" "+strikeprice+" "+calloption.toUpperCase()+"<br>"+
                "BUY ABOVE "+buyprice+"<br>"+
                "TARGET <br>"+
                targetMessage+"++";

     document.getElementById("demo").innerHTML = Message;


}

function MessageSend(){

    var my_text ="Hello Dude";
    var token = "6392067821:AAGz3Aoy_fT6fyOeZm2sAJ_esgdhSXmzFNQ";

    var chat_id= -4012055072;
    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}/`

    let api = new XMLHttpRequest();
    api.open("GET",url,true);
    api.send();

    console.log("message send successfully");
}
//https://api.telegram.org/bot6392067821:AAGz3Aoy_fT6fyOeZm2sAJ_esgdhSXmzFNQ/sendMessage?chat_id=-4012055072&text=hello focks/
