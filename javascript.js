function Validateinputs() {
    let flag = true;
    let flag2 = true;

    var elements = document.getElementsByName("inlineRadioOptions");
    var element = document.getElementsByName("callput");

    var strikeprice = document.getElementById("strikePrice").value;
    var buyprice = document.getElementById("buyAbove").value;
    var target = document.getElementById("target1").value;
    var targetmax = document.getElementById("targetmax").value;
   
    
    for (var i = 0, l = elements.length; i < l; i++)
    {
        if (elements[i].checked)
        {
            flag2 = true;
            break;  

        }else{
            flag2 = false;
        }
    }


    for (var j = 0, p = element.length; j < p; j++)
    {
        if (element[j].checked)
        {
            flag = true;
            break;
        }else{
            flag = false
        }
    }
    console.log(flag);
    if(strikeprice =="" || buyprice=="" || target=="" || targetmax ==""){
        flag = false;
    }

    if(flag==false || flag2==false){
        alert("Please Enter all the Fields");
    }else{
        MessageSend();
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
    var stoploss = parseInt(document.getElementById("stoploss").value);
    var targetMessage = target;


    

    for (var i = 0, l = tradeelements.length; i < l; i++)
    { 
        if (tradeelements[i].checked)
        {
            tradeoption = tradeelements[i].value;
            break;
        }
    }

    for (let j = 0, l = callelements.length; j < l; j++)
    {
        if (callelements[j].checked)
        {
            calloption = callelements[j].value;
            break;
        }
    }
    
    for (let x = target+5; x <= targetmax;x=x+5 )
    {
        targetMessage = targetMessage+"-"+ x;
        
    }

    const Message1 = "<b> TODAY'S TRADE %26 It Solutions</b>";
    const Message2 = tradeoption.toUpperCase()+" "+strikeprice+" "+calloption.toUpperCase();
    const Message3 = "BUY ABOVE "+buyprice;
    const Message4 = "TARGET";
    const Message5 = targetMessage.toString(10);

    
     
    const token = "6392067821:AAHQQefzQhw0dUuPoWEM0Sc9AfAC6Ilpl94";
    const chat_id= -4012055072;
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${Message1}%0A${Message2}%0A${Message3}%0A${Message4}%0A${Message5}%2B%2B %0A${"STOPLOSS  "+stoploss}&parse_mode=html `;
    return url;


}

function MessageSend(){

    var url = TextGenration();
    let api = new XMLHttpRequest();
    api.open("GET",url,true);
    api.send();

    console.log("message send successfully");
}
//https://api.telegram.org/bot6392067821:AAHQQefzQhw0dUuPoWEM0Sc9AfAC6Ilpl94/sendMessage?chat_id=-4012055072&text=hello focks/
