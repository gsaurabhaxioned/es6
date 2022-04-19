let api='https://jsonplaceholder.typcode.com/posts';
function callapi(callback){
    callback();
}

function fetchapi(){
    $.get(api,(data)=>{
            for(i in data) {
        $('body').append(`<p>${data[i].title}</p>`);
       }
    })
    .error(()=>{$('body').append(`<p>no data found</p>`);})
}

callapi(fetchapi);