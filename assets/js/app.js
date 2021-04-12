fetch('http://time.jsontest.com')
.then(res => res.json())
.then((data) => {

    console.log(data);
}).catch(err => console.error(err));