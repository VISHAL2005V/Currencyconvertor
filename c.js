fetch('https://api.frankfurter.app/currencies')
.then(res=>res.json())
.then(res=>ddd(res))
let btn=document.getElementById("btn")
let select=document.querySelectorAll('.currency')
let inp=document.getElementById("input")
let res=document.getElementById("result")
function ddd(res){
    curr=Object.entries(res)
    for (let i = 0; i <curr.length; i++) {
        let opt=` <option value="${curr[i][0]}">${curr[i][0]}</option>`
        select[0].innerHTML+=opt
        select[1].innerHTML+=opt
    }
}
btn.addEventListener('click',()=>{
     let curr1=select[0].value 
     let curr2=select[1].value 
     let inputval=inp.value 
     if(curr1==curr2){
        alert("choose different currency")
     }
     else
     convert(curr1,curr2,inputval)
})
function convert(curr1,curr2,inputval){
    const host = 'api.frankfurter.app';
fetch(`https://${host}/latest?amount=${inputval}&from=${curr1}&to=${curr2}`)
  .then(resp => resp.json())
  .then((data) => {
    console.log(Object.values(data.rates)[0])
    res.value=Object.values(data.rates)[0]
  });
}