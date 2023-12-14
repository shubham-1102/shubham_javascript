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
        alert("Please Enter all the Fields");
    }

   
    for (var j = 0, l = element.length; j < l; j++)
    {
        if (element[j].checked)
        {
            // flag = elements[i].value;
            flag = true;
            break;
        }else{
            
        }
    }

    if(strikeprice || buyprice || target || targetmax == ""){
        flag = false;
    }

    


    if(flag==false ){
        alert("Please Enter all the Fields");
    }

  }