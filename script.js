

//// =========== xxxxxxxxxx ============ (ATM) ========== ////



var fun = document.getElementById("screen")

function one(button){
    fun.value += button
}




function dele(button){
fun.value = ""
}

function one1C(button){
    fun.value = fun.value.slice(0,-1)
}


var money = 75000
var pin = 1234



function entersub() {
    if(fun.value == pin){
        fun.value = "Correct select an option below"

    }
    else if(fun.value == ""){
         fun.value = "Pin requird"
    }

    else{
        fun.value = "Incorrect pin"
   }

}

function dep() {
    var plus = Number(fun.value) 

    var depp = plus + money

    
    fun.value = "Deposit succesfully now total balance is $" + depp
    
 }

 
 function withd() {

    var minuss = Number(fun.value) 

  var tot  = money  - minuss
    fun.value =  "Withdraw succesfully now total balance is $" + tot

    
    
 }

 function bal() {

    fun.value =  "Your total balance... $" + money
            
 }








 







 


