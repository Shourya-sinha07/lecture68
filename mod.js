function average(arr){
    let sum=0;
    
    arr.forEach(element => {
        sum+=element;
    });
    return sum/arr.length 
}
console.log("this is mod.js")
module.exports=average;
//if we pass the object
// module.exports={
//     avg:average,
//     name:"shourya",
//     repo:"github"

// }
//module.exports funtion is use to export the function information to other file