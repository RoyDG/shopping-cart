
    //Plus1 quantity button event handler
    const addQtyBtn = document.getElementById("addQty");
      addQtyBtn.addEventListener("click", function(){
         
         const totalQty = getTotalQty("qtyAmount", 1);

    const totalAmount = getTotalAmount("currentAmount", totalQty, 1219);

    const currentSubtotal = document.getElementById("currentSubtotal").innerText;
    const currentSubtotalNumber = parseFloat(currentSubtotal);
    const totalSubtotalAmount = currentSubtotalNumber + 1219;
         if(totalSubtotalAmount >= 1278){
        document.getElementById("currentSubtotal").innerText = totalSubtotalAmount;
    document.getElementById("currentTotal").innerText = totalSubtotalAmount;
 }
});

//minus1 quantity button event handler
const subtractQtyBtn = document.getElementById("subtractQty");
      subtractQty.addEventListener("click", function(){
      
         const totalQty = getTotalQty("qtyAmount", -1);

    const totalAmount = getTotalAmount("currentAmount", totalQty, 1219);

    const currentSubtotal = document.getElementById("currentSubtotal").innerText;
    const currentSubtotalNumber = parseFloat(currentSubtotal);
    const totalSubtotalAmount = (currentSubtotalNumber - 1219);
         if(totalSubtotalAmount >= 1278){
        document.getElementById("currentSubtotal").innerText = totalSubtotalAmount;
    document.getElementById("currentTotal").innerText = totalSubtotalAmount;
 }
});

const removePro1Btn = document.getElementById("removePro1");
         removePro1Btn.addEventListener("click", function(){
            const cartItem = document.getElementById("cartItem1");
    cartItem.style.display = "none";
 });
 document.getElementById("qtyAmount").value = 1;

//plus2 quantity button event handler
const addQtyPro2Btn = document.getElementById("addQtyPro2");
      addQtyPro2Btn.addEventListener("click", function(){
         
         const totalQtyPro2 = getTotalQty("qtyAmountPro2", 1);

    const totalAmountPro2 = getTotalAmount("currentAmountPro2", totalQtyPro2, 59);

    const currentSubtotal = document.getElementById("currentSubtotal").innerText;
    const currentSubtotalNumber = parseFloat(currentSubtotal);
    const totalSubtotalAmount = currentSubtotalNumber + 59;
         if(totalSubtotalAmount >= 1278){
        document.getElementById("currentSubtotal").innerText = totalSubtotalAmount;
    document.getElementById("currentTotal").innerText = totalSubtotalAmount;

 }
});

//minus2 quantity button event handler
const subtractQtyPro2Btn = document.getElementById("subtractQtyPro2");
      subtractQtyPro2Btn.addEventListener("click", function(){

         const totalQtyPro2 = getTotalQty("qtyAmountPro2", -1);

    const totalAmountPro2 = getTotalAmount("currentAmountPro2", totalQtyPro2, 59);

    const currentSubtotal = document.getElementById("currentSubtotal").innerText;
    const currentSubtotalNumber = parseFloat(currentSubtotal);
    const totalSubtotalAmount = (currentSubtotalNumber - 59);
         if(totalSubtotalAmount >= 1278){
        document.getElementById("currentSubtotal").innerText = totalSubtotalAmount;
    document.getElementById("currentTotal").innerText = totalSubtotalAmount;
 }
});

const removePro2Btn = document.getElementById("removePro2");
         removePro2Btn.addEventListener("click", function(){
            const cartItem = document.getElementById("cartItem2");
    cartItem.style.display = "none";
});

document.getElementById("qtyAmountPro2").value = 1;

//add Functions
      function getTotalQty(id, increment){
         const currentQty = document.getElementById(id).value;
    const currentQtyNumber = parseFloat(currentQty);
    const totalQty = currentQtyNumber + increment;
         if(totalQty > 0){
        document.getElementById(id).value = totalQty;
 }
 return totalQty;
}

      function getTotalAmount(id, totalQty, price){
         const currentAmount = document.getElementById(id).innerText;
    const currentAmountNumber = parseFloat(currentAmount);
    const totalAmount = price * totalQty;
         if(totalAmount >= price){
        document.getElementById(id).innerText = totalAmount;
 }
 return totalAmount;
      }