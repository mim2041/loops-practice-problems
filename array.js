var arr=['pen','laptop','mobile','monitor','keyboard'];
var n=0;
while(n<arr.length){
    // console.log(arr[n]);
    n++;
}

var i=30;
while(i<=86){
    if(i>50){
        break;
    }
    // console.log(i);
    i++;
}

var a=[100, 200, 120, 220, 330, 122, 150, 300];
for(var i=0; i<a.length; i++){
    number = a[i];
    if(number > 300){
        continue;
    }
    console.log(number);
}