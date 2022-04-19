let api='https://jsonplaceholder.typicode.com/posts';

let promiseobj = new Promise((resolve,reject)=>{
    let result = $.get(api);
    console.log(result);
    if(result) {
        resolve(result)
    }else {
        reject("api is not fetched");
    }
});

promiseobj.then((data)=>{
    for(i in data) {
        $('body').append(`<p>${data[i].title}</p>`);
       }
}).catch((err)=>{
    $('body').append(`<p>No data found</p>`);
})