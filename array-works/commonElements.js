
var arr1=[10,11,12,20,30]
var arr2=[7,8,11,15,20,25]
//common Elements in arr1 and arr2

for(let n of arr1){
    for(let m of arr2){
        if(n==m){
            console.log(`common elements in arrays==> n=${n}and m=${m}`);
            
        }
    }
}
