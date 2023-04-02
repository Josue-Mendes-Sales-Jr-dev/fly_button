
const btnW=document.getElementById('btnW')
const formWhat=document.getElementById('formWhats')
const main=document.getElementById('main')
const close=document.getElementById('close')


btnW.addEventListener('click', function(){
     if(main.classList.contains('active')){
       main.classList.remove('active')
       formWhat.classList.add('no-active')
       formWhat.classList.remove('container')
     }else{
        formWhat.classList.remove('no-active')
        formWhat.classList.add('container')
        main.classList.add('active')
       
     }
     
     
     
})

close.addEventListener('click',function(){
    if(main.classList.contains('active')){
        main.classList.remove('active')
        formWhat.classList.add('no-active')
        formWhat.classList.remove('container')
      }else{
         formWhat.classList.remove('no-active')
         formWhat.classList.add('container')
         main.classList.add('active')
        
      }
})