const productos = [
    {id: 1  , nombre: 'GUITARRA ACUSTICA EKO RANGER' ,precio: 1.999, stock: 15, 
        fotos: [
        {idfoto: 1 , foto: 'https://productos.mjmusic.com.ar/images/000000RANGER12EQ92498RANGER12EQ.jpg'}
    ]},
    {id: 2  , nombre: 'GUITARRA ACUSTICA EKO RANGER FOLK 12 CUERDAS-COLOR HONEYBURST' , precio: 2.999, stock: 17, fotos : [
        {idfoto: 1 , foto: 'https://productos.mjmusic.com.ar/images/000000RANGER12HB92041RANGER12HB.jpg'}
    ]},
    {id: 3  , nombre: 'GUITARRA ELECTRICA DANELECTRO 59M' , precio: 3.999, stock: 25, fotos : [
        {idfoto: 1 , foto: 'https://productos.mjmusic.com.ar/images/000000059MNOSBLK2043859MNOSBLK.jpg'}
    ]},
    {id: 4  , nombre: 'BAJO ELECTRICO TOKAI' , precio: 3.999, stock: 25, fotos : [
        {idfoto: 1 , foto: 'https://productos.mjmusic.com.ar/images/00000000APB52YSC75944apb52ysc.jpg'}
    ]},
    {id: 5  , nombre: 'BAJO ELECTRICO LEONARD PARA ZURDOS' , precio: 3.999, stock: 25, fotos : [
        {idfoto: 1 , foto: 'https://productos.mjmusic.com.ar/images/00000000LB255MRD29310lb255mrd-1.jpg'}
    ]},
    {id: 6  , nombre: 'BAJO ELECTRICO LEONARD PRECISION' , precio: 3.999, stock: 25, fotos : [
        {idfoto: 1 , foto: 'https://productos.mjmusic.com.ar/images/000000000LB252WH69538lb252wh.jpg'}
    ]},
    {id: 7  , nombre: 'GUITARRA DANELECTRO CONVERTIBLE ACÚSTICA ELÉCTRICA' , precio: 3.999, stock: 25, fotos : [
        {idfoto: 1 , foto: 'https://productos.mjmusic.com.ar/images/000000000CONVCRM20755CONVCRM.jpg'}
    ]},
    {id: 8  , nombre: 'GUITARRA ELÉCTRICA STAGG LES PAUL' , precio: 3.999, stock: 25, fotos : [
        {idfoto: 1 , foto: 'https://productos.mjmusic.com.ar/images/0000000000L400TS15688L400TS.png'}
    ]},
    {id: 9  , nombre: 'GUITARRA ELÉCTRICA STAGG SILVERAY' , precio: 3.999, stock: 25, fotos : [
        {idfoto: 1 , foto: 'https://productos.mjmusic.com.ar/images/00000000SVYCSTBK14790SVYCSTBK.png'}
    ]},
    {id: 10  , nombre: 'GUITARRA ELECTRICA STAGG TELECASTER VINTAGE-COLOR TRANSPARENT YELLOW' , precio: 3.999, stock: 25, fotos : [
        {idfoto: 1 , foto: 'https://productos.mjmusic.com.ar/images/00000000SETCSTYW15336SETCSTYW.png'}
    ]},
    {id: 11 , nombre: 'GUITARRA ELECTRICA TOKAI TIPO 335 ROJO TRASLUCIDO' , precio: 3.999, stock: 25, fotos : [
        {idfoto: 1 , foto: 'https://productos.mjmusic.com.ar/images/0000000000ES73SR08219ES73.jpg'}
    ]},
    {id: 12 , nombre: 'GUITARRA ELECTRICA TOKAI TIPO LES PAUL VIOLIN SUNBURST' , precio: 3.999, stock: 25, fotos : [
        {idfoto: 1 , foto: 'https://productos.mjmusic.com.ar/images/00000000ALS55PVF49420als55pvf.jpg'}
    ]}
]
 

const GetPage = new Promise( (resolve, reject) => {
  let url = 'instrumentalsantafe.com'
  
    if (url === 'instrumentalsantafe.com'){
        setTimeout(() => {
            resolve(productos)
        }, )
    }else{
        reject('404 not found')
    }
}
)

export default GetPage;