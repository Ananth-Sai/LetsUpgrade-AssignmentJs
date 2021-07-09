 let i, x, y, z, n=15;
 for(i=1;i<=n;i++){
     x=i;
     y=i;
     z=i;

     while(x>=15) {
       x-=15;
     } 
     while(y>=15) {
       y-=5;
     } 
     while(z>=3) {
       z-=3;
     }
   
     if(x==0) {
       console.log("FizzBuzz");
     }
     else if(y==0) {
       console.log("Buzz");
     }
     else if(z==0) {
       console.log("Fizz");
     }
     else {
       console.log(i);
     }
 }