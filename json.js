let jasonStr = `{
    "name" : "product 1" ,
    "price" :500,
    " imges" : ("pI_I.jpg","p1_2.jpg","pI_3.jpg")
    "description" : "Lorem Ipsum _"
}`
let obj =JSON.parse(jasonStr)
console.log(obj)