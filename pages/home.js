

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
const form =document.getElementById("formcontainer")

console.log(getstart);

getstart.addEventListener("click", function() {
    popup.style.display = "flex"; // Corrected from `direction` to `display`
});
 closeBtn.addEventListener('click', function() {
    popup.style.display="none"
 })
   

 form.addEventListener('submit', function() {
    const password = document.getElementById('password').value
    // console.log(" this is my password").value
    const confirmPassword=document.getElementById('confirm-password').value
    if(password !==confirmPassword){
        alert("password does not match")
        return
    }

    
 })