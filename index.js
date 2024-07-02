
const mytext = document.getElementById("mytext");
const mysubmit = document.getElementById("mysubmit");
const mypara = document.getElementById("mypara");

let age;

mysubmit.onclick = function(){

    age = Number(mytext.value);

    if (age >=100){
        mypara.textContent = `You are too old to enter this site`
    }
    else if (age >=18){
        mypara.textContent = `You are old enough to enter this site`
        mylink.textContent = `Enter here`
    }
    else if (age ==0){
        mypara.textContent = `You are just bornn can't enter`
    }
    else{
        mypara.textContent = `can't enter not old enough`
    }

}
