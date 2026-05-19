let adimg = document.getElementById("adimg");
let left = document.getElementById("left");
let right = document.getElementById("right");
let vmad = document.getElementById("vmad");
let adindex = 0;

if (adindex === 0) {
    vmad.addEventListener("click",()=>{
        product1();
    })
}

right?.addEventListener("click",()=>{
    adindex++;
    if(adindex === 1){
        adimg.src = "Products/product-2.png";
        vmad.addEventListener("click",()=>{
   product2();
  })
    } else if(adindex === 2){
        adimg.src = "Products/product-3.avif";
        vmad.addEventListener("click",()=>{
        product3();
        })
    } else if(adindex === 3){
        adimg.src = "Products/product-4.avif";
         vmad.addEventListener("click",()=>{
         product4();
        })
    } else if(adindex === 4){
        adindex = 0;
        adimg.src = "Products/product-1.avif";
         vmad.addEventListener("click",()=>{
         product1(); 
        })
    } else if(adindex === 0){
        adimg.src = "Products/product-1.avif";
         vmad.addEventListener("click",()=>{
        product1();    
        })
    }
    console.log(adindex);
    adimg?.classList.toggle('active');
})


left?.addEventListener("click",()=>{
    adindex--;
    if(adindex === 1){
        adimg.src = "Products/product-2.png";
        vmad.addEventListener("click",()=>{
            product2();
        })
    } else if(adindex === 2){
        adimg.src = "Products/product-3.avif";
        vmad.addEventListener("click",()=>{
            product3();
        })
    } else if(adindex === 3){
        adimg.src = "Products/product-4.avif";
        vmad.addEventListener("click",()=>{
            product4();
        })
    } else if(adindex === 0){
        adimg.src = "Products/product-1.avif";
        vmad.addEventListener("click",()=>{
            product1();
        })
    } else if(adindex === -1){
        adindex = 0;
        adimg.src = "Products/product-1.avif";
        vmad.addEventListener("click",()=>{
            product1();
        })
    }
    console.log(adindex);
})


/*Modal and description*/

let vm1 = document.getElementById("vm1");
let vm2 = document.getElementById("vm2");
let vm3 = document.getElementById("vm3");
let vm4 = document.getElementById("vm4");
let vm5 = document.getElementById("vm5");
let vm6 = document.getElementById("vm6");
let vm7 = document.getElementById("vm7");
let vm8 = document.getElementById("vm8");
let atc1 = document.getElementById("atc1");
let atc2 = document.getElementById("atc2");
let atc3 = document.getElementById("atc3");
let atc4 = document.getElementById("atc4");
let atc5 = document.getElementById("atc5");
let atc6 = document.getElementById("atc6");
let atc7 = document.getElementById("atc7");
let atc8 = document.getElementById("atc8");
let mod = document.getElementById("mod");
let modimg = document.getElementById("modimg");
let modhead = document.getElementById("modhead");
let price = document.getElementById("price");
let closee = document.getElementById("close");
let des = document.getElementById("des");


vm1?.addEventListener("click",()=>{
  product1();
})

closee?.addEventListener("click",()=>{
    mod.style.display = "none";
})


vm2?.addEventListener("click",()=>{
  product2();
})

vm3?.addEventListener("click",()=>{
product3();
})

vm4?.addEventListener("click",()=>{
product4();
})

vm5?.addEventListener("click",()=>{
  product5();
})

vm6?.addEventListener("click",()=>{
  product6();
})

vm7?.addEventListener("click",()=>{
product7();
})

vm8?.addEventListener("click",()=>{
product8();
})





let product1 = ()=>{
      mod.style.display = "flex";
   modimg.src = "Products/product-1.avif";
   modhead.innerHTML = "OTC printed Hoodie - Roman Reings";
   price.innerHTML = "Price: $400";
   des.innerHTML = "A cozy and stylish hoodie crafted for warmth and comfort. Featuring a soft inner lining, adjustable hood, and relaxed fit, it’s perfect for chilly days, streetwear looks, or just staying comfortable wherever you go.";

}

let product2 = ()=>{
  mod.style.display = "flex";
   modimg.src = "Products/product-2.png";
   modhead.innerHTML = "Wrestlemania 42 T-shirt - Roman Reings";
   price.innerHTML = "Price: $250";
   des.innerHTML = "A lightweight and breathable T-shirt designed for everyday comfort. Made from soft, high-quality fabric, it offers a perfect fit and effortless style—ideal for casual wear, layering, or staying cool on the go.";
}

let product3 = ()=>{
    mod.style.display = "flex";
   modimg.src = "Products/product-3.avif";
   modhead.innerHTML = "CM Punk best in the world Tshirt";
   price.innerHTML = "Price: $280";
     des.innerHTML = "A lightweight and breathable T-shirt designed for everyday comfort. Made from soft, high-quality fabric, it offers a perfect fit and effortless style—ideal for casual wear, layering, or staying cool on the go.";

}

let product4 = ()=>{
      mod.style.display = "flex";
   modimg.src = "Products/product-4.avif";
   modhead.innerHTML = "Illa Topuria El Metador Tshirt Merch";
   price.innerHTML = "Price: $200";
     des.innerHTML = "A lightweight and breathable T-shirt designed for everyday comfort. Made from soft, high-quality fabric, it offers a perfect fit and effortless style—ideal for casual wear, layering, or staying cool on the go.";    
}

let product5 = ()=>{
      mod.style.display = "flex";
   modimg.src = "Products/product-5.avif";
   modhead.innerHTML = "Austin 3:16 printed tshirt merch";
   price.innerHTML = "Price: $200";
     des.innerHTML = "A lightweight and breathable T-shirt designed for everyday comfort. Made from soft, high-quality fabric, it offers a perfect fit and effortless style—ideal for casual wear, layering, or staying cool on the go.";    
}

let product6 = ()=>{
      mod.style.display = "flex";
   modimg.src = "Products/product-6.avif";
   modhead.innerHTML = "Demon Belor Wrestlemania Tshirt Merch";
   price.innerHTML = "Price: $200";
     des.innerHTML = "A lightweight and breathable T-shirt designed for everyday comfort. Made from soft, high-quality fabric, it offers a perfect fit and effortless style—ideal for casual wear, layering, or staying cool on the go.";    
}

let product7 = ()=>{
      mod.style.display = "flex";
   modimg.src = "Products/product-7.avif";
   modhead.innerHTML = "Rey Mysterio HOF printed Tshirt Merch";
   price.innerHTML = "Price: $200";
     des.innerHTML = "A lightweight and breathable T-shirt designed for everyday comfort. Made from soft, high-quality fabric, it offers a perfect fit and effortless style—ideal for casual wear, layering, or staying cool on the go.";    
}

let product8 = ()=>{
      mod.style.display = "flex";
   modimg.src = "Products/product-8.avif";
   modhead.innerHTML = "AJ Styles HOF printed Tshirt Merch";
   price.innerHTML = "Price: $200";
     des.innerHTML = "A lightweight and breathable T-shirt designed for everyday comfort. Made from soft, high-quality fabric, it offers a perfect fit and effortless style—ideal for casual wear, layering, or staying cool on the go.";    
}


/*Search System*/

let search = document.getElementById("search");
let sbtn = document.getElementById("sbtn");
let clr = document.getElementById("clr");


sbtn.addEventListener("click",()=>{
    if (search.value === "OTC printed Hoodie - Roman Reings") {
        product1();
    } else if(search.value === "Wrestlemania 42 T-shirt - Roman Reings"){
        product2();
    } else if(search.value === "CM Punk best in the world Tshirt"){
        product3();
    } else if(search.value === "Illa Topuria El Metador Tshirt Merch"){
        product4();
    } else if(search.value === "Austin 3:16 printed tshirt merch"){
        product5();
    } else if(search.value === "Demon Belor Wrestlemania Tshirt Merch"){
        product6();
    } else if(search.value === "Rey Mysterio HOF printed Tshirt Merch"){
        product7();
    } else if(search.value === "AJ Styles HOF printed Tshirt Merch"){
        product8();
    } else{
        alert("No Products Found");
    }
})

clr.addEventListener("click",()=>{
    search.value = "";
})





/*Cart System*/

let cartpage = document.getElementById("cartpage");
let cartbtn = document.getElementById("cart");
let homebtn = document.getElementById("home");
let homepage = document.getElementById("homepage");
let cartlist = document.getElementById("cartlist");

cartbtn.addEventListener("click", () => {
    homepage.style.display = "none";
    cartpage.style.display = "flex";
});

homebtn.addEventListener("click", () => {
    homepage.style.display = "flex";
    cartpage.style.display = "none";
});


/*Add to cart*/

let cart = 0;
let notification = document.getElementById("notification");
let incart1 = false;
let incart2 = false;
let incart3 = false;
let incart4 = false;
let incart5 = false;
let incart6 = false;
let incart7 = false;
let incart8 = false;


atc1.addEventListener("click",()=>{
    if (incart1 === false) {
         let result = confirm("OTC printed Hoodie - Roman Reings -added to the cart !");
    cart++;
    notification.style.display = "flex";
    incart1 = true;
    notification.innerHTML = cart;
    atc1.style.color = "white";
    atc1.style.border = "1px solid red";
    atc1.innerHTML = "Remove";
    
    let c1 = document.createElement("div");
    let img1 = document.createElement("img");
    let ch1 = document.createElement("h1");
    let ch2 = document.createElement("h2");
    let ctext1 = document.createElement("div");


    img1.src = "Products/product-1.avif";
    ch1.textContent = "OTC printed Hoodie - Roman Reings";
    ch2.textContent = "Price: $400";
   
    c1.appendChild(img1);
    ctext1.appendChild(ch1);
    ctext1.appendChild(ch2);
    c1.appendChild(ctext1);
 cartlist.appendChild(c1);
    
    c1.style.margin = "20px";
    c1.style.display = "flex";
    c1.style.flexDirection = "row";
    c1.style.backgroundColor = "white";
    c1.style.border = "2px solid black";
    c1.style.width = "80vw";
    c1.style.color = "black";
    c1.style.padding = "10px";
    c1.style.borderRadius = "10px";
    img1.style.width = "10vw";
    ch1.style.margin = "20px";
    ch2.style.margin = "20px";   
    ctext1.style.display = "flex";
    ctext1.style.flexDirection = "column";
    c1.id = "c1";
} else {
     let result = confirm("OTC printed Hoodie - Roman Reings -removed to the cart !");
    cart--;
    notification.style.display = "flex";
    incart1 = false;
    notification.innerHTML = cart;
      atc1.style.color = "white";
      atc1.style.border = "1px solid black";
      atc1.innerHTML = "Add to cart";
      

   let item = document.getElementById("c1");
  if (item) {
    item.remove();
  }
    }
   
})

atc2.addEventListener("click",()=>{
    if (incart2 === false) {
        let result = confirm("Wrestlemania 42 T-shirt - Roman Reings -added to the cart !");
     cart++;
    notification.style.display = "flex";
    incart2 = true;
    notification.innerHTML = cart;
    atc2.style.color = "white";
    atc2.style.border = "1px solid red";
    atc2.innerHTML = "Remove";


    let c2 = document.createElement("div");
    let img2 = document.createElement("img");
    let ch21 = document.createElement("h1");
    let ch22 = document.createElement("h2");
    let ctext2 = document.createElement("div");

    img2.src = "Products/product-2.png";
    ch21.textContent = "Wrestlemania 42 T-shirt - Roman Reings";
    ch22.textContent = "Price: $250";
   
    c2.appendChild(img2);
    ctext2.appendChild(ch21);
    ctext2.appendChild(ch22);
    c2.appendChild(ctext2);
 cartlist.appendChild(c2);
    c2.id = "c2";   

    c2.style.margin = "20px";
    c2.style.display = "flex";
    c2.style.flexDirection = "row";
    c2.style.backgroundColor = "white";
    c2.style.border = "2px solid black";
    c2.style.width = "80vw";
    c2.style.color = "black";
    c2.style.padding = "10px";
    c2.style.borderRadius = "10px";
    img2.style.width = "10vw";
    ch21.style.margin = "20px";
    ch22.style.margin = "20px";
     
    ctext2.style.display = "flex";
    ctext2.style.flexDirection = "column";

   
    } else {
        let result = confirm("Wrestlemania 42 T-shirt - Roman Reings -removed to the cart !");
     cart--;
    notification.style.display = "flex";
    incart2 = false;
    notification.innerHTML = cart;
    atc2.style.color = "white";
    atc2.style.border = "1px solid black";
    atc2.innerHTML = "Add to cart";

    let item1 = document.getElementById("c2");
    if (item1) {
        item1.remove();
    }
    }
    
})




atc3.addEventListener("click",()=>{
    if (incart3 === false) {
         let result = confirm("CM Punk best in the world Tshirt -added to the cart !");
     cart++;
    notification.style.display = "flex";
    incart3 = true;
    notification.innerHTML = cart;
    atc3.style.color = "white";
    atc3.style.border = "1px solid red";
    atc3.innerHTML = "Remove";

     let c3 = document.createElement("div");
    let img3 = document.createElement("img");
    let ch31 = document.createElement("h1");
    let ch32 = document.createElement("h2");
    let ctext3 = document.createElement("div");


    img3.src = "Products/product-3.avif";
    ch31.textContent = "CM Punk best in the world Tshirt";
    ch32.textContent = "Price: $280";
   
    c3.appendChild(img3);
    ctext3.appendChild(ch31);
    ctext3.appendChild(ch32);
    c3.appendChild(ctext3);
 cartlist.appendChild(c3);
    
    c3.style.margin = "20px";
    c3.style.display = "flex";
    c3.style.flexDirection = "row";
    c3.style.backgroundColor = "white";
    c3.style.border = "2px solid black";
    c3.style.width = "80vw";
    c3.style.color = "black";
    c3.style.padding = "10px";
    c3.style.borderRadius = "10px";
    img3.style.width = "10vw";
    ch31.style.margin = "20px";
    ch32.style.margin = "20px";   
    ctext3.style.display = "flex";
    ctext3.style.flexDirection = "column";
    c3.id = "c3";


    } else {
         let result = confirm("CM Punk best in the world Tshirt -removed to the cart !");
     cart--;
    notification.style.display = "flex";
    incart3 = false;
    notification.innerHTML = cart;
    atc3.style.color = "white";
    atc3.style.border = "1px solid black";
    atc3.innerHTML = "Add to cart";


    let item2 = document.getElementById("c3");
    if (item2) {
        item2.remove();
    }
    }
    
    }
   )







atc4.addEventListener("click",()=>{
    if (incart4 === false) {
          let result = confirm("Illa Topuria El Metador Tshirt Merch -added to the cart !");
     cart++;

    notification.style.display = "flex";
    incart4 = true;
    notification.innerHTML = cart; 
    atc4.style.color = "white";
    atc4.style.border = "1px solid red";
    atc4.innerHTML = "Remove";



    let c4 = document.createElement("div");
    let img4 = document.createElement("img");
    let ch41 = document.createElement("h1");
    let ch42 = document.createElement("h2");
    let ctext4 = document.createElement("div");

    img4.src = "Products/product-4.avif";
    ch41.textContent = "Illa Topuria El Metador Tshirt Merch";
    ch42.textContent = "Price: $200";
   
    c4.appendChild(img4);
    ctext4.appendChild(ch41);
    ctext4.appendChild(ch42);
    c4.appendChild(ctext4);
 cartlist.appendChild(c4);
    c4.id = "c4";   

    c4.style.margin = "20px";
    c4.style.display = "flex";
    c4.style.flexDirection = "row";
    c4.style.backgroundColor = "white";
    c4.style.border = "2px solid black";
    c4.style.width = "80vw";
    c4.style.color = "black";
    c4.style.padding = "10px";
    c4.style.borderRadius = "10px";
    img4.style.width = "10vw";
    ch41.style.margin = "20px";
    ch42.style.margin = "20px";
     
    ctext4.style.display = "flex";
    ctext4.style.flexDirection = "column";
    } else {
         let result = confirm("Illa Topuria El Metador Tshirt Merch -removed to the cart !");
     cart--;

    notification.style.display = "flex";
    incart4 = false;
    notification.innerHTML = cart;
    atc4.style.color = "white";
    atc4.style.border = "1px solid black";
    atc4.innerHTML = "Add to cart";

     let item3 = document.getElementById("c4");
    if (item3) {
        item3.remove();
    }
    }
 
})



atc5.addEventListener("click",()=>{
    if (incart5 === false) {
         let result = confirm("Austin 3:16 printed tshirt merch -added to the cart !");
    cart++;
    notification.style.display = "flex";
    incart5 = true;
    notification.innerHTML = cart;
    atc5.style.color = "white";
    atc5.style.border = "1px solid red";
    atc5.innerHTML = "Remove";

       let c5 = document.createElement("div");
    let img5 = document.createElement("img");
    let ch51 = document.createElement("h1");
    let ch52 = document.createElement("h2");
    let ctext5 = document.createElement("div");

    img5.src = "Products/product-5.avif";
    ch51.textContent = "Austin 3:16 printed tshirt merch";
    ch52.textContent = "Price: $200";
   
    c5.appendChild(img5);
    ctext5.appendChild(ch51);
    ctext5.appendChild(ch52);
    c5.appendChild(ctext5);
 cartlist.appendChild(c5);
    c5.id = "c5";   

    c5.style.margin = "20px";
    c5.style.display = "flex";
    c5.style.flexDirection = "row";
    c5.style.backgroundColor = "white";
    c5.style.border = "2px solid black";
    c5.style.width = "80vw";
    c5.style.color = "black";
    c5.style.padding = "10px";
    c5.style.borderRadius = "10px";
    img5.style.width = "10vw";
    ch51.style.margin = "20px";
    ch52.style.margin = "20px";
     
    ctext5.style.display = "flex";
    ctext5.style.flexDirection = "column";


    } else {
     let result = confirm("Austin 3:16 printed tshirt merch -removed to the cart !");
    cart--;
    notification.style.display = "flex";
    incart1 = false;
    notification.innerHTML = cart;
      atc5.style.color = "white";
      atc5.style.border = "1px solid black";
      atc5.innerHTML = "Add to cart";

        let item4 = document.getElementById("c5");
    if (item4) {
        item4.remove();
    }
    }
   
})





atc6.addEventListener("click",()=>{
    if (incart6 === false) {
         let result = confirm("Demon Belor Wrestlemania Tshirt Merch -added to the cart !");
    cart++;
    notification.style.display = "flex";
    incart6 = true;
    notification.innerHTML = cart;
    atc6.style.color = "white";
    atc6.style.border = "1px solid red";
    atc6.innerHTML = "Remove";

       let c6 = document.createElement("div");
    let img6 = document.createElement("img");
    let ch61 = document.createElement("h1");
    let ch62 = document.createElement("h2");
    let ctext6 = document.createElement("div");

    img6.src = "Products/product-6.avif";
    ch61.textContent = "Demon Belor Wrestlemania Tshirt Merch";
    ch62.textContent = "Price: $200";
   
    c6.appendChild(img6);
    ctext6.appendChild(ch61);
    ctext6.appendChild(ch62);
    c6.appendChild(ctext6);
 cartlist.appendChild(c6);
    c6.id = "c6";   

    c6.style.margin = "20px";
    c6.style.display = "flex";
    c6.style.flexDirection = "row";
    c6.style.backgroundColor = "white";
    c6.style.border = "2px solid black";
    c6.style.width = "80vw";
    c6.style.color = "black";
    c6.style.padding = "10px";
    c6.style.borderRadius = "10px";
    img6.style.width = "10vw";
    ch61.style.margin = "20px";
    ch62.style.margin = "20px";
     
    ctext6.style.display = "flex";
    ctext6.style.flexDirection = "column";

    } else {
     let result = confirm("Demon Belor Wrestlemania Tshirt Merch -removed to the cart !");
    cart--;
    notification.style.display = "flex";
    incart6 = false;
    notification.innerHTML = cart;
      atc6.style.color = "white";
      atc6.style.border = "1px solid black";
      atc6.innerHTML = "Add to cart";

        let item5 = document.getElementById("c6");
    if (item5) {
        item5.remove();
    }
    }
   
})






atc7.addEventListener("click",()=>{
    if (incart7 === false) {
         let result = confirm("Rey Mysterio HOF printed Tshirt Merch -added to the cart !");
    cart++;
    notification.style.display = "flex";
    incart7 = true;
    notification.innerHTML = cart;
    atc7.style.color = "white";
    atc7.style.border = "1px solid red";
    atc7.innerHTML = "Remove";

       let c7 = document.createElement("div");
    let img7 = document.createElement("img");
    let ch71 = document.createElement("h1");
    let ch72 = document.createElement("h2");
    let ctext7 = document.createElement("div");

    img7.src = "Products/product-7.avif";
    ch71.textContent = "Rey Mysterio HOF printed Tshirt Merch";
    ch72.textContent = "Price: $200";
   
    c7.appendChild(img7);
    ctext7.appendChild(ch71);
    ctext7.appendChild(ch72);
    c7.appendChild(ctext7);
 cartlist.appendChild(c7);
    c7.id = "c7";   

    c7.style.margin = "20px";
    c7.style.display = "flex";
    c7.style.flexDirection = "row";
    c7.style.backgroundColor = "white";
    c7.style.border = "2px solid black";
    c7.style.width = "80vw";
    c7.style.color = "black";
    c7.style.padding = "10px";
    c7.style.borderRadius = "10px";
    img7.style.width = "10vw";
    ch71.style.margin = "20px";
    ch72.style.margin = "20px";
     
    ctext7.style.display = "flex";
    ctext7.style.flexDirection = "column";

    } else {
     let result = confirm("Rey Mysterio HOF printed Tshirt Merch -removed to the cart !");
    cart--;
    notification.style.display = "flex";
    incart7 = false;
    notification.innerHTML = cart;
      atc7.style.color = "white";
      atc7.style.border = "1px solid black";
      atc7.innerHTML = "Add to cart";

        let item6 = document.getElementById("c7");
    if (item6) {
        item6.remove();
    }
    }
   
})







atc8.addEventListener("click",()=>{
    if (incart8 === false) {
         let result = confirm("AJ Styles HOF printed Tshirt Merch -added to the cart !");
    cart++;
    notification.style.display = "flex";
    incart8 = true;
    notification.innerHTML = cart;
    atc8.style.color = "white";
    atc8.style.border = "1px solid red";
    atc8.innerHTML = "Remove";

       let c8 = document.createElement("div");
    let img8 = document.createElement("img");
    let ch81 = document.createElement("h1");
    let ch82 = document.createElement("h2");
    let ctext8 = document.createElement("div");

    img8.src = "Products/product-8.avif";
    ch81.textContent = "AJ Styles HOF printed Tshirt Merch";
    ch82.textContent = "Price: $200";
   
    c8.appendChild(img8);
    ctext8.appendChild(ch81);
    ctext8.appendChild(ch82);
    c8.appendChild(ctext8);
 cartlist.appendChild(c8);
    c8.id = "c8";   

    c8.style.margin = "20px";
    c8.style.display = "flex";
    c8.style.flexDirection = "row";
    c8.style.backgroundColor = "white";
    c8.style.border = "2px solid black";
    c8.style.width = "80vw";
    c8.style.color = "black";
    c8.style.padding = "10px";
    c8.style.borderRadius = "10px";
    img8.style.width = "10vw";
    ch81.style.margin = "20px";
    ch82.style.margin = "20px";
     
    ctext8.style.display = "flex";
    ctext8.style.flexDirection = "column";

    } else {
     let result = confirm("AJ Styles HOF printed Tshirt Merch -removed to the cart !");
    cart--;
    notification.style.display = "flex";
    incart8 = false;
    notification.innerHTML = cart;
      atc8.style.color = "white";
      atc8.style.border = "1px solid black";
      atc8.innerHTML = "Add to cart";

        let item7 = document.getElementById("c8");
    if (item7) {
        item7.remove();
    }
    }
})





/*Profile System*/

let profile = document.getElementById("profile");
let pmod = document.getElementById("pmod");
let pclose = document.getElementById("pclose");
let pname = document.getElementById("pname");
let pemail = document.getElementById("pemail");
let pword = document.getElementById("pword");
let psubmit = document.getElementById("psubmit");


profile.addEventListener("click",()=>{
    pmod.style.display = "flex";
})

pclose.addEventListener("click",()=>{
    pmod.style.display = "none";
})



psubmit.addEventListener("click", (e) => {
    if (
        pname.value.trim() === "" ||
        pemail.value.trim() === "" ||
        pword.value.trim() === ""
    ) {
        e.preventDefault();
        alert("Fill all the fields properly!");
    }
});