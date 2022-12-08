class Vloume{
    constructor(){
        this.audioFile = document.getElementById("audio");
        this.audioFile.volume  = 50/100;
        this.volume_range = document.getElementById("volume_range");
        this.speed_range = document.getElementById("speed_range");
    this.volume_range.addEventListener("change",()=>{
    this.audioFile.volume = this.volume_range.value/100;
    })
    this.audioFile.playbackRate = 1
    this.speed_range.addEventListener("change",()=>{
    this.audioFile.playbackRate = this.speed_range.value/100;
    })
    }
    
    }
    onload = new Vloume()

    class Color{
        constructor(){
this.color1 = document.getElementById("color1");
this.color1.addEventListener("click",()=>{
this.selectColor("color1")
})
this.color2 = document.getElementById("color2")
this.color2.addEventListener("click",()=>{
    this.selectColor("color2")
    })
this.color3 = document.getElementById("color3")
this.color3.addEventListener("click",()=>{
    this.selectColor("color3")
    })
this.color4 = document.getElementById("color4")
this.color4.addEventListener("click",()=>{
    this.selectColor("color4")
    })
    this.header = document.getElementById("header")
    if(localStorage.getItem("color") == null){
        document.body.style.background = "var(--color-primary)"
        this.header.style.background = "#888"
    }
    this.selectColor(localStorage.getItem("color"));
        }
        selectColor(color){
if(color=="color1"){
    document.body.style.background = "var(--color-primary)"
    this.header.style.background = "#888"
}
if(color=="color2"){
    document.body.style.background = "var(--color-dark)"
    this.header.style.background = "#333"
}
if(color=="color3"){
    document.body.style.background = "var(--color-black)"
    this.header.style.background = "#222"
}
if(color=="color4"){
    document.body.style.background = "var(--color-secodary)"
    this.header.style.background = "#888"
}
localStorage.setItem("color",color)
        }
    }
    onload = new Color()