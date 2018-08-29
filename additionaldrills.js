'use strict';
//URLify a string

//input example: www.thinkful.com /tauh ida parv een
//expected output: tauhida%20parveen

const URLify = (somestring) =>{
  let newString ='';

  for(let i=0; i < somestring.length; i++){
    if(somestring[i]===' '){
      newString += '%20';
    } else{ 
      newString += somestring[i];
    }
  }
  return newString;

};

console.log(URLify('www.thinkful.com /tauh ida parv een'));

//time complexity : O(n) linear

//Filtering an array

const numArray = [1,2,3,5,6,7,8,9,10];

const filterArray = array =>{
  let filteredArray = [];
  for(let i=0; i < array.length; i++){
    if(array[i] >= 5){
      filteredArray.push(array[i]);
    }
  }

  return filteredArray;

};

//time complexity : O(n) linear

// console.log(filterArray(numArray));

//Max sum in the array

const maxSum = array =>{

  let maxSum = 0;
  let sum = 0;

  for(let i=0; i < array.length; i++){
    sum += array[i];
    if( sum > maxSum){
      maxSum = sum;
    } 

  }

  return maxSum;

};

const testArray = [4,6,-3,5,-2,1];

// console.log(maxSum(testArray));
//linear O(n)



//Merge Arrays

const array1=[1, 3, 6, 8, 11] ;
const array2=[2, 3, 5, 8, 9, 10];

const mergeArray = (array1,array2) =>{
  let newArray = [];
  let index1=0;
  let index2=0;
 

  //for loop
  for(let i=0; i < array1.length + array2.length; i++){
    //console.log('array1', array1[index1], 'array2', array2[index2]);
    
    if(!array1[index1]){
      newArray.push(array2[index2]);
      index2++;
     
    }

    if(!array2[index2]){
      newArray.push(array1[index1]);
      index1++;
    }

    if(array2[index2] || array1[index1]){

      if(array1[index1] <= array2[index2]){
        newArray.push(array1[index1]);
        index1++;
      } else{
        newArray.push(array2[index2]);
        index2++;
      }
    }

  }

  return newArray;

};

//console.log(mergeArray(array1,array2));

//linear time complexity O(n)

const removeCharacters = (string, characters) =>{
  let newString ='';
  for(let i=0; i < string.length; i++){
    if(!characters.includes(string[i])){
      newString += string[i];
    }
  }
  return newString;
};

console.log(removeCharacters('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));

//linear time complexity O(n)



//Products


