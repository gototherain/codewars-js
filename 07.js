function isDivisible(n, x, y) {
  
    remainder1 = n%x;
    remainder2 = n%y;
    
    if (remainder1 == 0 && remainder2 == 0) {
      return true;
      
    } else {
      return false;
    }
  }