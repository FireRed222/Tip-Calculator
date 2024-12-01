let totalPercent = document.querySelector(".total_percent");
let totalAmount = document.querySelector(".total_amount");
let sum1 = document.querySelector(".sum");
let percent1 = document.querySelector(".percent");

let calc = () => {
    let sum = document.querySelector(".sum").value;
    let percent = document.querySelector(".percent").value;
    
    let resTotalPercent = (sum * percent) / 100;
    
    totalPercent.innerHTML = `Sum % : ${+resTotalPercent}`;
    totalAmount.innerHTML = `Total Amount : ${+resTotalPercent + +sum}`;
    
}

let reset = () => {
    totalPercent.innerHTML = "Sum % :";
    totalAmount.innerHTML = "Total Amount :";
    sum1.value = "";
    percent1.value = "";
}