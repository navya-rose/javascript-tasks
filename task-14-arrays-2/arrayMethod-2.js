

 var array=[12,5,20,8,15,30,7,25,10,18]

// 1.Create a new array by tripling each number.

 var tripling=array.map(n=>n*3)
//  console.log(tripling);

 // 2.Create a new array containing numbers greater than the median value of the array.

  var number =array.length/2
  var median = array.length%2==0
     ?(number+(number+1))/2
     :(array.length+1/2)
  var gtofmedian=array.filter(n=>n>median) 
  console.log(gtofmedian);

  // 3.Find the sum of numbers at even index positions.
  var sum =0
  var evenindex = array.filter(n=>n%2==0)
         evenindex.reduce(sum,value=>sum+value,0)
  console.log(total);
  



  
 