alert("welcome our resturant")
var resturant =prompt("enter you meal you want")
if(resturant == "biryani" ){
    var biryaniType =prompt("enter your biryani flavour you want")
    if(biryaniType == "chicken" ){
       
        var chickenBiryaniCountity = prompt("how much chicken biryani plates you want like (1 , 2 ,3)")
        if (chickenBiryaniCountity == "1"){
             alert("your order is ready  \n  your one plate chicken biryani price is 15$")
        }else if (chickenBiryaniCountity =="2"){
            alert("your order is ready  \n  your two plates chicken biryani price is 30$")
        }else if (chickenBiryaniCountity == "3"){
            alert("your order is ready  \n  your three plates chicken biryani price is 45$")
        }else if (chickenBiryaniCountity == "4"){
            alert("your order is ready  \n  your four plates chicken biryani price is 60$")
        }else if (chickenBiryaniCountity == "5"){
            alert("your order is ready  \n  your five plate chicken biryani price is 75$")
        }else{
            alert("sorry sir \n we have only five chicken plates avaible ")
        }
    }else if(biryaniType == "beef" ){
        var beefBiryaniCountity = prompt("how much chicken beef plates you want like (1 , 2 ,3)")
        if (beefBiryaniCountity == "1"){
             alert("your order is ready  \n  your one plate beef biryani price is 20$")
        }else if (beefBiryaniCountity =="2"){
            alert("your order is ready  \n  your two plates beef biryani price is 40$")
        }else if (beefBiryaniCountity == "3"){
            alert("your order is ready  \n  your three plates beef biryani price is 60$")
        }else if (beefBiryaniCountity == "4"){
            alert("your order is ready  \n  your four plates beef biryani price is 80$")
        }else if (beefBiryaniCountity == "5"){
            alert("your order is ready  \n  your five plate beef biryani price is 100$")
        }else{
            alert("sorry sir \n we have only five beef plates avaible ")
        }
    }else if(biryaniType =="mutton"){
        var muttonBiryaniCountity = prompt("how much mutton plates you want like (1 , 2 ,3)")
        if (muttonBiryaniCountity == "1"){
             alert("your order is ready  \n  your one plate mutton biryani price is 25$")
        }else if (muttonBiryaniCountity =="2"){
            alert("your order is ready  \n  your two plates mutton biryani price is 50$")
        }else if (muttonBiryaniCountity == "3"){
            alert("your order is ready  \n  your three plates mutton biryani price is 75$")
        }else if (muttonBiryaniCountity == "4"){
            alert("your order is ready  \n  your four plates mutton biryani price is 100$")
        }else if (muttonBiryaniCountity == "5"){
            alert("your order is ready  \n  your five plate mutton biryani price is 125$")
        }else{
            alert("sorry sir \n we have only five mutton plates avaible")
        }
    }else{
        alert("sorry sir \n we have only chicken and mutton and beef flavour ")
    }
}else if(resturant == "burger" ){
    var burgerType =prompt("enter your burger flavour you want")
    if(burgerType == "chicken" ){
        var chickenBurgerCountity = prompt("how much chicken burger you want like (1 , 2 ,3)")
        if (chickenBurgerCountity == "1"){
             alert("your order is ready  \n  your one chicken burger price is 15$")
        }else if (chickenBurgerCountity =="2"){
            alert("your order is ready  \n  your two  chicken burger price is 20$")
        }else if (chickenBurgerCountity == "3"){
            alert("your order is ready  \n  your three  chicken burger price is 25$")
        }else if (chickenBurgerCountity == "4"){
            alert("your order is ready  \n  your four  chicken burger price is 30$")
        }else if (chickenBurgerCountity == "5"){
            alert("your order is ready  \n  your five chicken burger price is 35$")
        }else{
            alert("sorry sir \n we have only five chicken burger avaible")
        }
    }else if(burgerType == "mutton" ){

        
        var muttonBurgerCountity = prompt("how much mutton burger you want like (1 , 2 ,3)")
        if (muttonBurgerCountity == "1"){
             alert("your order is ready  \n  your one mutton burger price is 20$")
        }else if (muttonBurgerCountity =="2"){
            alert("your order is ready  \n  your two  mutton burger price is 30$")
        }else if (muttonBurgerCountity == "3"){
            alert("your order is ready  \n  your three  mutton burger price is 35$")
        }else if (muttonBurgerCountity == "4"){
            alert("your order is ready  \n  your four  mutton burger price is 40$")
        }else if (muttonBurgerCountity == "5"){
            alert("your order is ready  \n  your five mutton burger price is 45$")
        }else{
            alert("sorry sir \n we have only five mutton burger avaible")
        }   
           }else if(burgerType == "beef"  ){
            var beefBurgerCountity = prompt("how much beef burger you want like (1 , 2 ,3)")
            if (beefBurgerCountity == "1"){
                 alert("your order is ready  \n  your one beef burger price is 30$")
            }else if (beefBurgerCountity =="2"){
                alert("your order is ready  \n  your two beef burger price is 40$")
            }else if (beefBurgerCountity == "3"){
                alert("your order is ready  \n  your three beef burger price is 45$")
            }else if (beefBurgerCountity == "4"){
                alert("your order is ready  \n  your four beef burger price is 50$")
            }else if (beefBurgerCountity == "5"){
                alert("your order is ready  \n  your five beef burger price is 55$")
            }else{
                alert("sorry sir \n we have only five beef burger avaible")
            } 
    }else{
        alert("sorry sir \n we have only chicken and mutton and beef flavour ")
    }
} else if(resturant == "pizza" ){
    var pizzaType =prompt("enter your pizza type you want")
    if(pizzaType == "chicken" ){
        alert("your order is ready  \n  your chicken pizza price is 10$")
    }else if(pizzaType == "beef" ){
        alert("your order is ready  \n  your beef pizza price is 20$")
    }else if(pizzaType == "mutton"  ){
        alert("your order is ready  \n  your mutton pizza price is 40$")
    }else{
        alert("sorry sir \n we have only chicken and mutton and beef flavour ")
    }
}else{
    alert(" sorry sir \n we have only pizza , burger and biryani ")
}