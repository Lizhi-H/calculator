(function(){
    const num=document.getElementsByClassName('num');
    const price=document.getElementsByClassName('total_price');
    const subtotal=document.getElementById("subtotal");
    const shipping=document.getElementById("shipping");
    const estimatedTotal=document.getElementById("estimated_total");
    const remove=document.getElementsByClassName("remove");
    const items=document.getElementsByClassName("items");
    const checkOut=document.getElementById("check_out");

    //go through the array
    function each(array,fn){
	    for (let i=0; i< array.length; i++){
		    fn(i, array[i]);
	    }    
    }

    //decide the shipping fee and calculate estimated price
    function shippingFee(num){
	    if (num>=150) {
		    shipping.innerHTML="Free";
		    estimatedTotal.innerHTML= num + " C$";
	    }else{
		    shipping.innerHTML="15 C$";
		    estimatedTotal.innerHTML= num + parseFloat(shipping.innerHTML) + " C$";
	    }
    }
    //if items are remove
    function removeItems(str){
	    if(str==="0 C$"){
		    checkOut.innerHTML="<div>" + "Your basket is currently empty." + "</div>";
	    }
    }    
    //total price changes
    function totalPrice (array){
	    let total=0;
	    for (let i = 0; i< array.length; i++){
	    	total+=parseFloat(array[i].innerHTML);
	    	console.log(total);
	    } 
	    subtotal.innerHTML= total + " C$";
	    shippingFee(total);
    }

    //add event when the number of items changes
    each(num, function(index, element){
	    const itemPrice=parseFloat(price[index].innerHTML);
        element.addEventListener('change',function(){
		    let newNum=element.selectedIndex + 1;
		    let newPrice=itemPrice*newNum;
	        price[index].innerHTML=newPrice + "C$";
	        //total price changes
	        totalPrice(price);
	    })
    });    

    // add event when users click remove
    each(remove, function(index, element){
	    element.addEventListener('click', function(){
		    items[index].style.display="none";
	        price[index].innerHTML="0";
	        totalPrice(price);
	        removeItems(subtotal.innerHTML);
	    })
    });
})();
