
var restaurent_name = document.querySelector("#title");
var disc = document.querySelector(".description");
var add_to_cart = document.querySelector("#add_to_cart"); 
var checkout = document.querySelector("#checkout")
var dom_total = document.querySelector("#total")
var reset_button = document.querySelector("#reset")
var display_text = document.querySelector("#user_selected_text");
var display_value = document.querySelector("#user_selected_value")
var notification = document.querySelector("#notification")

var total_item = 0
var total = 0

add_to_cart.classList.add("hidden");
 
disc.innerHTML = "Place your order";

var food_list = [
    {name:'Changu fish', price: 5.00} ,
    {name:"Ugali", price: 2.00}, 
    {name:"equsi soup", price: 5.00},
    {name:"eba", price: 2.00}, 
    {name:"mesir wet", price: 3.00},
    {name:"gomen", price:4.50}]

for(var i = 0; i < food_list.length; i++){
    var newOption = document.createElement("option");
    newOption.value = food_list[i].price;
    newOption.innerHTML = food_list[i].name;
    foods.appendChild(newOption)
}

    user_selection = {value:"", text: ""}
    foods.addEventListener("change", function(){
        var selected_option = document.querySelector("#foods option:checked")
        
        user_selection.value = selected_option.value
        user_selection.text = selected_option.text

        if(Number(user_selection.value)>0){
            add_to_cart.classList.remove("hidden")
            notification.innerHTML = "You have selected: "
            display_text.innerHTML = user_selection.text
            display_value.innerHTML = Number(user_selection.value).toFixed(2);
        }
        else{
            add_to_cart.classList.add("hidden")
            notification.innerHTML = ""
            display_text.innerHTML = null
            display_value.innerHTML = null
        }
    });

  
            
    add_to_cart.addEventListener("click", function(){
            if(total_item < 4){
            var checkout_item = document.createElement("div");
            checkout_item.innerHTML = user_selection.text + " " + Number(user_selection.value).toFixed(2)
            checkout.appendChild(checkout_item)

            total+= Number(user_selection.value)   
            dom_total.innerHTML = total.toFixed(2)
            total_item++
        }
        else{
            alert("You have reached maximum order")
        }
    })
    reset_button.addEventListener("click", function(){
        total = 0
        total_item = 0
        ckeckout.innerHTML = "";
        notification.innerHTML = "";
        display_text.innerHTML = null;
        display_value.innerHTML = null
        add_to_cart.classList.add("hidden");
    });