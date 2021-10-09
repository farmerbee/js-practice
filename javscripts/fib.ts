
function fib(n:number): number{
    /**
     * 递归求斐波那契数
     */
    if(n <= 0)
        return 0;
    if(n <= 2)
        return 1;
    
    return fib(n-1) + fib(n-2);
}


function fibWrappper(): Function{
    /**
     * 使用闭包的形式，将递归的值记录起来，避免重复计算
     */
    let memo: Array<number> = []

    return function(n: number) : number{
        if(n <= 0)
            return 0;

        if(n <= 2){
            memo[n] = 1;
        }else{
            memo[n] = memo[n-1] + memo[n-2];
        }

        return memo[n];
    }
}


function fibNo(n: number) : number{
    /**
     * 非递归的求解斐波那契数
     */
    if(n <= 0)
    return 0;

    let memo = [0, 1, 1]
    for(let i=3; i<=n; i++){
        memo[i] = memo[i-1] + memo[i-2];
    }

    return memo[n];
}


function test(){
    let start  = new Date().getTime();
    let i=0;
    let fibFunc = fibWrappper();
    while(i<=20){
        // console.log(`fib(${i})=${fib(i)}`);
        // console.log(`fib(${i})=${fibFunc(i)}`);
        console.log(`fib(${i})=${fibNo(i)}`);
        i++;
    }

    console.log(`time used ${new Date().getTime()-start} seconds`);
}

test()