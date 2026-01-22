

// console.log('Hello World');
// console.log('Hello World');
// console.log('Hello World');
// console.log('Hello World');
// console.log('Hello World');


// for(let i=1; i<=5; i++){
//     console.log(i)
//     console.log('Hello World');
// }

let marks = [88, 83, 90, 57, 91, 70, 98, 54, 10, 100];

// marks[0];
// marks[1];
// marks[3];
// marks[4];

// console.log(marks[0]);
// console.log(marks[1]);
// console.log(marks[2]);
// console.log(marks[3]);
// console.log(marks[4]);
// console.log(marks[5]);
// console.log(marks[6]);
// console.log(marks[7]);
// console.log(marks[8]);
// console.log(marks[9]);
// console.log(marks[10]);

for(let i=0; i<=9; i++){
    // console.log(marks[i]);

    if(marks[i]<0 || marks[i]>100){
        console.log('Invalid marks')
    }

    else if(marks[i]>=80){
        console.log(marks[i]+'=The grade is A+')
    }

      else if(marks[i]>=70){
        console.log(marks[i]+'=The grade is A')
    }

      else if(marks[i]>=60){
        console.log(marks[i]+'=The grade is A-')
    }

      else if(marks[i]>=50){
        console.log(marks[i]+'=The grade is B')
    }

      else if(marks[i]>=40){
        console.log(marks[i]+'=The grade is C')
    }

      else if(marks[i]>=33){
        console.log(marks[i]+'=The grade is D')
    }

      else{
        console.log(marks[i]+'=The grade is F');
      }
        
    }
