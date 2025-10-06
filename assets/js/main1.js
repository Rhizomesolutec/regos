window.addEventListener('load',()=>{
    const ideaId = document.getElementById('textone')
    const realityId = document.getElementById('textwo')

    let flag = true

    if(ideaId && realityId){
      setInterval(()=>{
        if(flag==true){
          ideaId.style.transform = 'perspective(500px) scaleZ(2) rotateX(90deg)';
          ideaId.style.marginTop = '-15px'
      realityId.style.transform = 'perspective(500px) scaleZ(1) rotateX(0deg)';
      realityId.style.marginTop = '0px'
      flag = false
        }else{
          ideaId.style.transform = 'perspective(500px) scaleZ(0.5) rotateX(0deg)';
          ideaId.style.marginTop = '0px'
          realityId.style.transform = 'perspective(500px) scaleZ(2) rotateX(-90deg)';
          realityId.style.marginTop = '15px'
      flag = true
        }
      
      },2000)
    }

   

})
