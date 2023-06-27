//2 numbers in the array will make up a 
//target number of 23. Array indices 2 & 5
//will add up to the target number

function twoSum(arr, target){
    
    for(let i = 0; i < arr.length - 1; i++ ) {
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j]=== target){
                return[i,j]
            }
        }
    }
}
const myTwoSum = twoSum([4, 8, 17, 21, 3, 6, 12], 23)
console.log(myTwoSum)
