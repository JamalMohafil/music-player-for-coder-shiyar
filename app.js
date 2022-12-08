class Player{
    constructor(){
var heightMain = document.getElementById("content");
heightMain.style.height = screen.height + "px";
// var widthMain = document.getElementById("content");
// widthMain.style.width = screen.width + "px";
if(screen.width < 620){
heightMain.style.width = screen.width + "px";
}
var heightDiv = document.getElementById("content");
heightDiv.style.height = screen.height + "px";
    }
}
onload = new Player()

// Class Buttons
class AudioPlayer{
    constructor(){
this.audioFile = document.getElementById("audio");
this.titleAudio = document.getElementById("titleAudio");
this.isPlayed;
this.play_pause_button = document.getElementById("play");
this.play_pause_button.addEventListener ('click',()=>{

    this.play_pause();

})

this.names_radio = [];
this.names_radio[0]="اتنسيت"
this.names_radio[1]= "قدام الكل"
this.names_radio[2]= "ما بتهون"
this.source_audio =[];
this.source_audio[0] = "1.mp3"
this.source_audio[1] = "2.mp3"
this.source_audio[2] = "3.mp3"
this.server = 0;

this.setResource();

document.getElementById("next").addEventListener("click",()=>{
    if(this.server<this.source_audio.length-1){
++this.server;
   this.isPlayed = false
}else{
    this.server = 0;
}
localStorage.setItem("next",this.server)
this.setResource() 

})
document.getElementById("back").addEventListener("click",()=>{
    if(this.server>0){
        --this.server
        this.isPlayed = false
    }else{
        this.server = this.source_audio.length-1;
    }
    localStorage.setItem("back",this.server)
    this.setResource()
})

    }
    setResource(){
//         if(localStorage.getItem("next")!=null){
// this.server = localStorage.getItem("next")
//         }
//         if(localStorage.getItem("back")!=null){
// this.server = localStorage.getItem("back")
//         }
        this.audioFile.setAttribute("src",this.source_audio[this.server])
this.titleAudio.innerHTML = this.names_radio[this.server]
this.play_pause();
    }
    play_pause(){
        if(this.isPlayed == false){
            this.play_pause_button.src  = "pause.png"
            this.audioFile.play()
    
            this.isPlayed=true;
          
        }else if (this.isPlayed == true){
            this.audioFile.pause();
this.isPlayed=false;
this.play_pause_button.src  = "play.png"
        }
        
        else {
this.audioFile.pause();
this.isPlayed=false;
this.play_pause_button.src  = "play.png"

        }
    }
}
onload = new AudioPlayer()