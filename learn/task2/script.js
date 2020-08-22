function matrixRotate(rotate, direction, matrix) {

}
//долго работает!!!!
// function fib(n){
//     if (n===1||n===2) return 1;
//     else return fib(n-2)+fib(n-1);		
//     }

function fib(x){
    let a = 1, b = 1;
    let c = a + b;
    for (let i = 3; i <=x; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

let arr = [];
function matrix(n,m) {
let a = 1; 
let b = 1; 
let c = a + b;
    for (i = 0; i < n; i++) {
            arr[i] = [];
    for (j = 0; j < m; j++) {
        let c = a + b;
        a = b;
        b = c;
        arr[i][j] = j;
        }
        return b;
    }
    console.log(arr)
}



