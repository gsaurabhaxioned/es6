let api='https://jsonplaceholder.typicode.com/posts';

let promiseobj = new Promise(
    (success)=>{
    let result = $.get(api);
    if(result) {
        success(result)
    }
},(fail)=>{
    let result = $.get(api);
    if(!result) {
        fail(result)
    }
});

promiseobj.then((data)=>{
    for(i in data) {
        $('body').append(`<p>${data[i].title}</p>`);
       }
}).catch((err)=>{
    $('body').append(`<p>No data found</p>`);
})