 var x=document.querySelector('.form-control')
    console.log(x.value)

async function utl(){
    var v=fetch(`https://api.waifu.pics/sfw/${x.value}`)
    var a= await v
    var b=a.json()
    var out=await b
    console.log(out.url)
    console.log(out)
    var body =document.querySelector('.child');
    
    var img=document.createElement('img')
    img.setAttribute('src',out.url)
    body.append(img)
   
}



function clicking(s){
    var body =document.querySelector('.child');
    body.innerText=''
    utl()
    utl()
    utl()
    utl()
    utl()
    utl()

}