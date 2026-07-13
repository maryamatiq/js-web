const fields=['healthcare','IT','engineering','finance','Law']
// const deg=fields.forEach((items)=>{
// console.log(items);
// })
// console.log(deg);//it return nothing

const nums=[1,2,3,4,5,6,7,8,9]
// console.log(nums.filter((n)=>n>4));
// console.log(nums.filter((n)=>{
// return n<5
// }));

//In -> for each
// const nums2=[]
// nums.forEach((n)=>{
//     if(n>4){
//         nums2.push(n)
//     }
// })
// console.log(nums2);

//Another Example
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
//   console.log(books.filter((bk)=>bk.genre==='Non-Fiction'));
// console.log(books.filter((bk)=>bk.publish<=2000));
// console.log(books.filter((bk)=>bk.publish<=2000 && bk.genre==='History'));