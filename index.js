let rock=document.querySelector(".rock");
let paper=document.querySelector(".paper");
let scissor=document.querySelector(".scissor");
let outer=document.querySelector(".outer");
let rock_c="rock.jpeg";
let paper_c="paper.jpeg";
let scissor_c="scissor.jpeg";
let player_img=document.querySelector(".player_img");
let comp_img=document.querySelector(".comp_img");
let loading_video=document.querySelector(".loading_video");
let comp_container=document.querySelector(".comp_container");
let inner=document.querySelector(".inner");
let img2=document.querySelector(".img2");
let show_score=document.querySelector(".score");
let score=0;
rock.addEventListener("mouseenter",()=>{
    rock.style.border="2px solid red";
})
rock.addEventListener("mouseleave",()=>{
    rock.style.border="none";
})
rock.addEventListener("click",()=>{
outer.style.top="0px";
let win=game(rock_c);
winner(win);
})
paper.addEventListener("mouseenter",()=>{
    paper.style.border="2px solid red"
})
paper.addEventListener("mouseleave",()=>{
    paper.style.border="none"
})
paper.addEventListener("click",()=>{
    outer.style.top="0px";
    let win=game(paper_c);
    winner(win);
    })
scissor.addEventListener("mouseenter",()=>{
    scissor.style.border="2px solid red"
})
scissor.addEventListener("mouseleave",()=>{
    scissor.style.border="none"
})
scissor.addEventListener("click",()=>{
    outer.style.top="0px";
    let win=game(scissor_c);
    winner(win);
    })
function comp_chance(){
    return Math.floor(Math.random()*3)
}
function game(player){
    let comp=comp_chance();
    let items=[paper_c,scissor_c,rock_c];
    comp=items[comp];
    player_img.src=player;
    player_img.style.display="block";
    
    // Show loading video
    comp_img.style.display="none";
    loading_video.style.display="block";
    loading_video.currentTime=0;
    loading_video.play().catch(e => console.log("Video play error:", e));
    
    setTimeout(()=>{
        try {
            loading_video.pause();
        } catch(e) {}
        loading_video.style.display="none";
        comp_img.src=comp;
        comp_img.style.display="block";
    },2000);
    
    if(player!=comp){        
        if(player==rock_c && comp==paper_c){return "c"}
        if(player==rock_c && comp==scissor_c){return "p"}
        if(player==paper_c && comp==rock_c){return "p"}
        if(player==paper_c && comp==scissor_c){return "c"}
        if(player==scissor_c && comp==rock_c){return "c"}
        if(player==scissor_c && comp==paper_c){return "p"}
    }

}
function winner(win){
    if(win=="p"){
        setTimeout(()=>{
            inner.style.display="none";
            setTimeout(()=>{img2.style.backgroundImage="url('win.jpeg')"},500)
        },1000)
        score++;
    }
    else if(win=="c"){
        setTimeout(()=>{
            inner.style.display="none";
            setTimeout(()=>{img2.style.backgroundImage="url('loss.jpeg')"},500)
        },1000)
    }
    else{
        setTimeout(()=>{
            inner.style.display="none";
            setTimeout(()=>{img2.style.backgroundImage="url('tie.jpeg')"},500)
        },1000)
    }
    setTimeout(()=>{
        outer.style.top="-800px";
        setTimeout(()=>{img2.style.backgroundImage="url('vs.jpeg')"},800)
        setTimeout(()=>{
            inner.style.display="block";
            comp_img.style.display="none";
            loading_video.style.display="none";
            player_img.style.display="none";
            show_score.innerText=score;
        },500)
    },4000);
}