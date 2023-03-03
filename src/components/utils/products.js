

const products =[
    {id:1 ,nombre:"camiseta Boca",detalle:"camiseta titular de Boca Juniors",img:"https://www.digitalsport.com.ar/files/products/616d7c8b743a7-565172-500x500.jpg", precio: 30000 },

    {id:2,nombre:"camiseta River",detalle:"camiseta titular de River Plate",img:"https://www.digitalsport.com.ar/files/products/60ae42ff15840-543390-500x500.jpg", precio: 30000 },

    {id:3,nombre:"camiseta Argentina",detalle:"camiseta titular de Argentina",img:"https://i.pinimg.com/originals/35/7a/79/357a7919626f366518c28dd2ccebf17f.jpg", precio: 35000 },

    {id:4,nombre:"camiseta Brasil",detalle:"camiseta titular de Brasil",img:"https://static.netshoes.com.br/produtos/camisa-selecao-brasil-i-2021-sn-torcedor-nike-masculina/46/HZM-3813-046/HZM-3813-046_zoom1.jpg?ts=1597330695&ims=544x", precio: 32000 }
  ]

const getList = () => {     
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products)
      }, 3000);
    })
    
  }

  export default getList