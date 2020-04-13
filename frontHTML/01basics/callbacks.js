function sleep(millis)
{
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while(curDate-date < millis);
}

function synch(){
    console.log('do some sync functinality');
    sleep(5000)
    return "success"
}
// console.log('starting...')
// var result = synch();
// console.log(result)
// console.log('finished...')

function asynch(callback){
    setTimeout(()=>{
        console.log('do some sync functinality');
        sleep(5000)
        callback("success")
        // return "success"
    }, 0)   
}

// function callback(result){
//     console.log(result)
// }
// var result = asynch(callback);

var result = asynch((result)=> console.log(result));

console.log(result)
console.log('finished...')