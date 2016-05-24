'use strict';

function fibonacci_series(n) {
      var arr = [];
      arr[0] = 0;
      arr[1] = 1;
      if(n >1)
      {
      	for(var i=2; i<n+1; i++)
      		arr[i]=arr[i-1]+arr[i-2];
      }
      return arr;
}

module.exports = fibonacci_series;
