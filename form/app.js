// //  function focusFunction(){
// //     document.getElementById("fname").style.backgroundColor="green"
// //     document.getElementById("fname").style.color='white'
// //  }

// let testdiv = document.getElementById("test")
// let fname = document.getElementById("fnema")

// function focusFunction(element) {
//     element.style.backgroundColor = "green"
//     element.style.color = 'white'
// }

// function blurFunction(element) {
//     element.style.backgroundColor = "orange"
//     element.style.color = 'white'
// }

// function inputFunction(element) {
//     let x = element.value
//     testdiv.innerText = x
// }
// function changeFunction(element) {
//     let x = element.value
//     testdiv.innerText = x
// }


let x = document.getElementById("fname")
let b = document.getElementById("lname")
x.addEventListener("input",function(){
    b.value = x.value
    console.log(x.value)
})

let btn = document.getElementById("btn")

var mywindow
 
//  function openWindow(){
//     window.open("https://new.hnhcrm.xyz/","_blank")
// }

//  function openWindow(){
//     mywindow =  window.open("https://new.hnhcrm.xyz/"," ","width=500px height= 500px ,left=500px ,top=300px")
// }
 function openWindow(){
    mywindow =  window.open(""," ","width=500px height= 500px ,left=500px ,top=300px")
    mywindow.document.write("<p>This new window</p>")
}
 function moveWindow(){
    // mywindow.moveTo(200,200) 
    mywindow.moveBy(200,200) 

}
function closeWindow(){
  mywindow.close()
}


