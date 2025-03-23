

// const getstart= document.getElementById("getstarted")
// const popup = document.getElementById("poppupcontainer")
// const closeBtn = document.getElementById("close")
// console.log(getstart)

// // 
// getstart.addEventListener('click',function () {
//     popup.style.display =flex;
// })
const getstart = document.getElementById("getstarted");
const popup = document.getElementById("poppupcontainer");
const closeBtn = document.getElementById("close");

console.log(getstart);

getstart.addEventListener("click", function() {
    popup.style.display = "flex"; // Corrected from `direction` to `display`
});

 