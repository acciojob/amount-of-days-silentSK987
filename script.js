//your JS code here. If required.
let x=prompt();
daysOfAYear(x);

function daysOfAYear(y){
    if(y%4==0 && y%100 != 0)
    return 366;
else
    return 
    365;
}