function animate(obj,target,callback){
    //console.log(callback); //callback = function(){}
    // 先清除以前的定时器，只保留当前的一个定时器执行
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        //步长值写到定时器里面，每次都会变化
        //把步长值改为整数，不要出现小数问题Math.ceil()
        //var step = Math.ceil((target - obj.offsetLeft) / 10);
        var step = (target - obj.offsetLeft) / 10;
        step = step>0 ? Math.ceil(step) : Math.floor(step);
        if(obj.offsetLeft == target){
            clearInterval(obj.timer);
            //回调函数写到定时器结束里面
            if(callback){
                //调用函数
                callback();
            }
        }else{
            // 把每次加1 这个步长值改为一个慢慢变小的值  步长公式：(目标值 - 现在的位置) / 10
            obj.style.left = obj.offsetLeft + step + 'px';
        }
    },15);
}