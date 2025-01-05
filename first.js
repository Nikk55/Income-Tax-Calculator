const form=document.querySelector('form');
const result=document.getElementById('result');

form.addEventListener('submit',(event)=>{

    event.preventDefault();
    const income=document.getElementById('income');
    let tax=0;
    if(income.value<=300000) {
         tax="No Tax";
    }else if(income.value>300000 && income.value<=700000) {
        tax=income.value/20;
    }else if(income.value>700000 && income.value<=1000000) {
        tax=20000+(income.value/10);
    }else if(income.value>1000000 && income.value<=1200000) {
        tax=50000+((income.value*3)/20);
    }else if(income.value>1200000 && income.value<=1500000) {
        tax=80000+(income.value/5);
    }else {
        tax=140000+((income.value*3)/10);
    }

    result.innerHTML=`Your Tax is: ${tax}`;

})