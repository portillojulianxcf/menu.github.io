const productos = [
    {
      n:"King Burger",
      p:"$26.000",
      d:"Hamburguesa premium a la parrilla con 2 carnes jugosas artesanales ,queso, pan artesanal ,sasonado con especias naturales,aros de cebolla apanados ",
      img:"img/king.jpg"
    },
    {
            n:"Salchipapas Latina",
            p:"personal $22.000, Mediana $33.000, Familiar $55.000 Familiar extra grande 70.000",
            d:"carne tipo costilla ahumada,pollo desmechado,carne desmechada,maicitos.queso,salchicas res,salchica pollo,papas a la francesa",
            img:"img/latina.jpg"
          },
       
      {
      n:"Costillas BBQ",
      p:"$30.000",
      d:"Costillas de cerdo precocidas ,marinadas con vino tinto,especias,sal marina,terminadas en parrila de cabon,baño de salsa artesanal BBQ ,porcion de papas rusticas",
      img:"img/costilla.jpg"
    },
    {
        n:"King junior",
        p:"$17.000",
        d:"Hamburguesa premium a la parrilla con carne jugosa artesanal , marinada con especias naturales queso, aros de ceboola apanados",
        img:"img/junior.jpg"
      },
    {
      n:"perro Big-King",
      p:"$27.000",
      d:"Perro tipo gurmet con pollo,carne,tocineta,queso,salsas especiales, ",
      img:"img/perroking.jpg"
   
    },
    {
      n:"Sandwich House",
      p:"carne$20.000,pollo$20.000,mixto$25.000",
      d:"pan aliñado con especias pollo,carne,jamon,mortadela,queso,tomate rojo,lechuga risada,salsas especiales",
      img:"img/house.jpg"
      },
      {
        n:"Maduro Canoa",
        p:"$17.000",
        d:"platano maduro asado,pollo,carne,queso blanco gratinado,jamon,tocineta",
        img:"img/maduro.jpg"
      },
      {
        n:"Churrasco rés",
        p:"$35.000",
        d:"200g de corte churrasco a la parrila , cabon natural,papas cocidas.chimichurri",
        img:"img/rrasco.jpg"
      },
      {
        n:"Punta de Anca",
        p:"$35.000",
        d:"200g de carne de res corte punta de anca, carbon natural ,papas cocidas,chimichurri",
        img:"img/anca.jpg"
      },
      {
        n:"pinchos de cerdo",
        p:"$16.500",
        d:"bloques de carne de cerdo empalados en brocheta de madera , a la parrila, carbon natural,chichurri,papas cocidas",
        img:"img/pinchos.jpg"
      },
      {
        n:"perro caliente clasico",
        p:"$12.500",
        d:"perro caliente 1 salchicha de res ,pan perro,queso,fosforito(ripio de papas ),cebolla caramelisada,salsas de la casa ",
        img:"img/clasico.jpg"
      },
      {
        n:"burguer Madam",
        p:"$12.000",
        d:"hamburguesa sencila con carne burguer,queso,pan especial,tomate rojo,lechuga,salsas de la casa ,tocineta de cerdo, ripio de papas",
        img:"img/madam.jpg"
      },
      {
        n:"burguer Madam mini",
        p:"$8.500",
        d:"hamburguesa pequeña pan,lechuga,carne burguer,tomate,cebolla,queso,ripio",
        img:"img/mini.jpg"
      },
      {
        n:"salchipapa especial",
        p:"personal $15.000 mediana $25.000 familiar$37.000",
        d:"salchicha res , papa a la francesa , queso ,mais,ripio,salsas",
        img:"img/especial.jpg"
      },
      {
        n:"arroz chino .a la valenciana",
        p:"porcion personal $22.000 mediano $30.000 familiar $45.000",
        d:"arroz,salsa de soja,especias naturales,camarones,costilla cerdo,carne res,pollo,rais china,verduras,",
        img:"img/chino.jpg"
      },
      {
        n:"Sushi tempura",
        p:" orden de 4 trosos $29.900  ",
        d:"Sushi envuelto ,salmon,ajonjoli,arroz,aguacate,zanaoria,salsa ajo especial,todo cubierto por miga de pan , freido",
        img:"img/tempura.jpg"
      },
      {
        n:"Ramen tipo miso",
        p:"tazon $20.000",
        d:"caldo de pollo ,loncha de cerdo agridulce ,cebollin,huevo cocido,soja,especias,fideos,",
        img:"img/miso.jpg"
      },
      {
        n:"pastas",
        p:"plato $28.000",
        d:"pastas especiales preparaciones segun a escoger los platos varian desde los 25.000cop entre otros ,",
        img:"img/pasta1.jpg"
      },
      {
        n:"Birria de res ",
        p:"porcion de 2 $20.000",
        d:"carne de rés desmechada en caldo de res con vegetales debajo una lamina de platano patacon ,",
        img:"img/birria.jpg"
      },
      {
        n:"Arepas",
        p:"sensilla queso $6.000 con carne o pollo $18.000 con todo o mixta $20.000",
        d:"arepa sencilla con queso , arepa con pollo o carne , arepa con todo o mixta , maduros tocineta , queso ,cebolla  ,",
        img:"img/arepas.jpg"
      },
      
      
      {
        n:"Almuerzo ejecutivo",
        p:"$18.000",
        d:"platos tipicos dependiendo el dia se recomienda preguntar en el numero  ,",
        img:"img/almuerzo.jpg"
      },
      {
        n:"jugos naturales agua",
        p:"vaso $8.000",
        d:"mora,piña,fresa,maracuya,naranja,",
        img:"img/jugos.jpg"
      },

      {
        n:"jugos naturales leche",
        p:"vaso $11.000",
        d:"mora,maracuya,fresa,milo,banano ,",
        img:"img/leche.jpg"
      },
      {
        n:"limonada de coco",
        p:"tazon $13.500",
        d:"limonada de coco refrescante ,",
        img:"img/coco.jpg"
      },
      
      {
        n:"limonada natural",
        p:"vaso 5.000",
        d:"limonada natural refrescante con limon  ,",
        img:"img/limonadan.jpg"
      },
      {
        n:"limonada cerezada",
        p:"tazon $14.000",
        d:"limonada de cereza  ,",
        img:"img/cerezada.jpg"
      },
      {
        n:"fritos surtidos",
        p:"empanada carne $2.000 empanada papa aborrajada $2.500 aborrajado $6.000 pastel de carne $4.500 ",
        d:"pastas especiales preparaciones segun a escoger los platos varian desde los 25.000cop entre otros ,",
        img:"img/fritos.jpg"
      },

  ];
  
  const menu = document.getElementById("menu");
  const detalle = document.getElementById("detalle");
  
  function render(lista){
    menu.innerHTML="";
    lista.forEach(p=>{
      const card=document.createElement("div");
      card.className="card";
      card.innerHTML=`
        <img src="${p.img}" alt="${p.n}">
        <h3>${p.n}</h3>
      `;
      card.onclick=()=>ver(p);
      menu.appendChild(card);
    });
  }
  
  function ver(p){
    menu.style.display="none";
    detalle.style.display="block";
    document.getElementById("detalle-img").src=p.img;
    document.getElementById("detalle-nombre").innerText=p.n;
    document.getElementById("detalle-precio").innerText=p.p;
    document.getElementById("detalle-desc").innerText=p.d;
    document.getElementById("ordenar").href =
      `https://wa.me/57TU_NUMERO?text=Hola,%20quiero%20ordenar%20${p.n}`;
  }
  
  document.getElementById("cerrar").onclick=()=>{
    detalle.style.display="none";
    menu.style.display="grid";
  };
  
  document.getElementById("search").addEventListener("input",e=>{
    const v=e.target.value.toLowerCase();
    render(productos.filter(p=>p.n.toLowerCase().includes(v)));
  });
  
  render(productos);

  
