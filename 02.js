function evenOrOdd(number) {
  
    remainder = number % 2;
      
    if (remainder <0) {
      remainder *= -1;
    }  
      
    if (remainder == 1) {
      return "Odd";
      
      } else  {
        
        return "Even";
        
        }
    }