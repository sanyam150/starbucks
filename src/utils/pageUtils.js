export const setBodyOverflow=(isOverflow)=>{
    if(isOverflow) document.body.style.overflow = 'hidden';
    else  document.body.style.overflow = 'auto';
    return;
}