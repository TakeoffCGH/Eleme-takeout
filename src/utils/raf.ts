export const rAF = 
    requestAnimationFrame ||  //那个函数一秒刷新1000次
    function(callback){
        setTimeout(callback,1000/60)
    }

export const cancelRAf = 
    cancelAnimationFrame ||
    function(id:number){
        clearTimeout(id)
    }

// export const doubleRaf = 
