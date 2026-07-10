let array=[1,2,3,4,5]
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    //console.log(" ",element);
}

for (let j = 0; j <= 10; j++) {
    const element = j;
    if(element==5){
       // console.log("5 is the best no.");
    }
    //console.log(element);
    
}

//NESTED loop
for (let i = 1; i <=10; i++) {
   // console.log(`Table of ${i}`);
    
    for (let j = 1; j <=10; j++) {
        
       // console.log(i+"*"+j+"="+i*j);
        
    }
    
}
//break & continue
//'keywords'
for (let i = 1; i <= 20; i++) {
    
    if(i>10){
        console.log(`${i} is greater`);
        break
    }
    console.log(i);
}

//continue
