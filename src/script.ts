const searchResult = ()=>{
    let input = (document.querySelector("#searchBar") as HTMLInputElement)
    
    let value = input.value

    console.log(value)
    
    window.location.href = `https://www.google.com/search?q=` + encodeURI(value)
    
    return false
}


let frame1 = (document.querySelector(".iframe1") as HTMLIFrameElement)
let music = document.querySelector("#music")!;
music.addEventListener("click",()=>{
    frame1.classList.toggle("visible");
});

let frame2 = (document.querySelector(".iframe2") as HTMLIFrameElement)
let music2 = document.querySelector("#music2")!
music.addEventListener("click",()=>{
    frame2.classList.toggle("visible")
})