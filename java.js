 alert('khufiya ahe sarv sambhalun pahjo')
 let info = document.querySelector('#btn1')
console.log(info)
  
  let typeAns = document.querySelector('#youAns') 
  
  
  info.onclick =() =>{
  let ans = prompt('kay bhagte kahi nahi ty made tuz ans hav ahe te de') 
  typeAns.innerHTML=ans
  }
  
  