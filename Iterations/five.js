const fields=['healthcare','IT','engineering']
// fields.forEach(function(item){
//      console.log(item);
// })

// fields.forEach((item)=>{
//      console.log(item);
// })

function printme(item){
    console.log(item);
    
}
//fields.forEach(printme)//only give reference

 fields.forEach((item,index,arr)=>{
      //console.log(item,index,arr[index]);
})

const laptop=[
    {
        brandname:"hp",
        price:130000
    },
    {
        brandname:"lenovo",
        price:120000
    },
    {
        brandname:"mac",
        price:230000
    }
]
laptop.forEach((element) => {
    console.log(element.brandname);
    console.log(element.price);
    
});
