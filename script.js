document.addEventListener('DOMContentLoaded', () => {
    let video = document.getElementById('video')
    let skpbutton = document.getElementById('skp-btn')
    
    skpbutton.addEventListener('click',function(){
        video.currentTime += 5
    })
})

document.addEventListener('DOMContentLoaded', () => {
    let video = document.getElementById('video')
    let bckbutton = document.getElementById('bck-btn')
    
    bckbutton.addEventListener('click',function(){
        video.currentTime -= 5
    })
})

document.addEventListener('DOMContentLoaded', () => {
    let video = document.getElementById('video')
    let playbutton = document.getElementById('pl-btn')
    
    playbutton.addEventListener('click',function(){
        if(video.paused){
            video.play()
        }else{
            video.pause()
        }
    })
})