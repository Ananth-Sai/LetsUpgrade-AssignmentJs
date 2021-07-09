let str = "dad is talking in malayalam with mom and me";
x = "" ;
y = "";
for (t of str) {
    if (t != " ") {
        y = y + t;
        x = t + x;
    }
    else {
        if (x == y){
          console.log(x);
        } 
        x = "";
        y = "";
    }
}