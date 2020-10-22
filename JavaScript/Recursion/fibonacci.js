// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fibonacci(num){
    // add whatever parameters you deem necessary - good luck!  
    if (num === 1 || num == 2) {
        return 1;
    }
    return fibonacci(num - 1) + fibonacci(num - 2); 
  }

  console.log(fibonacci(4))
  console.log(fibonacci(10))
  console.log(fibonacci(28))
  console.log(fibonacci(35))