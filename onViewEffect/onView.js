let sections = document.querySelectorAll('.on-view');
let scroll_height = sections[0].scrollHeight||1;

let current_view = 0;
window.onscroll = ()=>{
    let idx = Math.floor(window.scrollY/(scroll_height*.95));
    for(let i = 0;i<sections.length;i++){
        if(i!= idx)
        sections[i].classList.remove('on-view-effect');
    }
    sections.length && sections[idx].classList.add('on-view-effect');
    
}