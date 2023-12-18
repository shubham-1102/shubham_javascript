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
    const Message = "<b>TODAY'S TRADE";
    const Message1 = "Anusaya Trading %26 IT Solutions";
    const Message2 = tradeoption.toUpperCase()+"</b> "+strikeprice+" "+calloption.toUpperCase();
    const Message3 = "<b>BUY ABOVE </b>"+buyprice;
    const Message4 = "<b>TARGET</b>";
    const Message5 = targetMessage.toString(10);
    const note = "<b>The Trades given here are for educational purposes only. All the research is conducted by Anusaya Trading and IT Solutions. Please consult your financial advisor before investing.</b>";

    
     
    const token = "6392067821:AAHQQefzQhw0dUuPoWEM0Sc9AfAC6Ilpl94";
    const chat_id= -4012055072;
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${Message}%0A%0A${Message1}%0A%0A${Message2}%0A%0A${Message3}%0A%0A${Message4}%0A%0A${Message5}%2B%2B %0A%0A${"<b>STOPLOSS </b> "+stoploss}%0A%0A${"<b>Note:</b>"}%0A%0A${note}&parse_mode=html `;
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
//https://api.telegram.org/bot6392067821:AAHQQefzQhw0dUuPoWEM0Sc9AfAC6Ilpl94/sendMessage?chat_id=-4012055072&text=%3Cb%3ETODAY%27S%20TRADE%20%26%20It%20Solutions%3C/b%3E%0A%0A%3Cb%3E%20Anusaya%20Trading%20&%20IT%20Solutions%3C/b%3E%0A%0A%3Cb%3EBANK%20NIFTY%3C/b%3E%2012282%20CE%0A%0A%3Cb%3EBUY%20ABOVE%3C/b%3E%20138%0A%0ATARGET%0A%0A40-45-50-55-60-65-70-75-80-85-90-95-100-105-110-115-120-125-130-135-140-145%2B%2B%20%0A%0ASTOPLOSS%20%20110%0A%0A%20%3Cb%3ENote:%3Cb/%3E%20%0A%0A%20The%20Trades%20given%20here%20are%20for%20educational%20purposes%20only.%20All%20the%20research%20is%20conducted%20by%20Anusaya%20Trading%20and%20IT%20Solutions.%20Please%20consult%20your%20financial%20advisor%20before%20investing.&parse_mode=html