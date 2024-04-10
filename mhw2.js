function toggle(event){
    event.preventDefault();
    const accedi=document.querySelector('.details');

    
    if(accedi.classList.contains('hidden'))
    {
        accedi.classList.remove('hidden');        
    }
    else
    {
        accedi.classList.add('hidden');      
    }
}

const detailToggle = document.querySelector('.n3');
detailToggle.addEventListener('click', toggle);