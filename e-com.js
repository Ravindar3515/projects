let url=fetch("https://fakestoreapi.com/products")

url.then(res=>res.json()).then(data=>{
        console.log(data)
        data.map((x)=>{
            let a=document.getElementById("div-1");
            a.innerHTML +=` <div class="subdivs">
            <img class="images" src=${x.image}>
            <h5 class="titles">${x.title}</h5>
            <p class="description">${x.description.substr(0,50)}<p>
            <h3 class="rating">${'<i class="fa-regular fa-star"></i>'}${x.rating.rate}</h3>
            <h2 class="price">${'$$'}${x.price}</h2></div> `
        })
    })