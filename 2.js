let sum =0;

function sumN(...numbers){
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i];

    }
    console.log(sum);
}

sumN(10, 50, 6, 7, 8, 11, 6, 3, 9);