// header links clic events start

document.querySelector('body').addEventListener('click' , function () {
    var e= e || window.event;
            e= e.target || e.srcElement;
            
            // console.log("class is "+ e.className);
            if (e.className === "lnk") {
                document.querySelector("#nav").classList.remove("active");
                document.querySelector(".icon").classList.remove("active");
                
            }
            
            if (e.className !== "icon active") {
                // console.log("bye");
                document.querySelector("#nav").classList.remove("active");
                document.querySelector(".icon").classList.remove("active");
            }


         
});

document.querySelector(".icon").onclick=function() {
    document.querySelector("#nav").classList.toggle("active");
    document.querySelector(".icon").classList.toggle("active");

}

// document.querySelector("body").addEventListener("click",(e)=>{
//     e= e || window.event;
//         e= e.target || e.srcElement;
        
//         // console.log("class is "+ e.className);
//         if (e.className === "icon") {
//             console.log(e.src);
//             document.querySelector("#nav").style.display="block";
//         }
//         // else document.querySelector("#nav").style.display="none";
// });



// document.querySelector(".landing").onmouseover =function() {
//     document.querySelector("#nav").style.display="none";
// }




// header links clic events end  
