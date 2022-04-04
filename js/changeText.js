console.log("START");
currentButton = document.getElementById("satchet");


baseButtonColor = '#E55E1C';
selectedButtonColor = '#762700';

let optionText = ["Loose Leaf - Tea leaves are not kept in a prepackaged tea bag. This method is best for maintaining flavor and aroma. Leaves must be measured before hand and be steeped using a tool such as a infuser or strainer.", 
              "Satchet - Tea leaves come in prepackaged tea bags for a single serving. This method is perfect for busy individuals who value flavor and aroma. This style requires a tool to steep the tea leaves.",
              "Tea Bag - Tea leaves come in prepackaged tea bags for a single serving. This method is perfect for busy individuals who value convience. This style does not require a tool to steep the tea leaves."
            ]

let prev = "none";

function looseText(){
    console.log("Loose clicked");
    document.getElementById("option-description").innerHTML = optionText[0];
    
    changeButtonColor("loose", prev);
    prev = "loose"

}

function satchetText(){
    console.log("Satchet clicked");
    document.getElementById("option-description").innerHTML = optionText[1];
    
    changeButtonColor("satchet", prev);
    prev = "satchet"

}

function bagText(){
    console.log("Bag clicked");
    document.getElementById("option-description").innerHTML = optionText[2];
    
    changeButtonColor("bag", prev);
    prev = "bag";
}

function bagText(){
    console.log("Bag clicked");
    document.getElementById("option-description").innerHTML = optionText[2];
    
    changeButtonColor("bag", prev);
    prev = "bag";
}

function addCart(){
    console.log("ADD BUTTON PRESSED"); 

    // Subscription 
    var subSelect = document.getElementById('subscription');
    var subscription = subSelect.options[subSelect.selectedIndex].value;
    

    //Quantity
    var quanSlider = document.getElementById('quantity');
    var quantity = quanSlider.value;

    //Name
    var name = document.getElementById('name').textContent;

    // Unit Price 
    var price = document.getElementById('price').textContent;
    price = String(price).substring(1, price.length);

    //Image
    var img = document.getElementById("product-img").src;

    //Add - check if user has selected a tea leaf type
    if (prev == "none"){
        alert("Please select a tea leaf type");
    }else{
        let newItem = new Item(name, subscription, quantity, prev, price, img);
        // console.log(newItem);

        let cart = JSON.parse(localStorage.getItem('cart'));
        cart.push(newItem);
        localStorage.setItem("cart", JSON.stringify(cart));

        console.log(cart);
        showCartStatus()
    }

}

function changeButtonColor(next, prev){
    if (prev == "none"){
        document.getElementById(next).style.backgroundColor = selectedButtonColor;
    }else{
        document.getElementById(prev).style.backgroundColor = baseButtonColor;
        document.getElementById(next).style.backgroundColor = selectedButtonColor;
    }
}

