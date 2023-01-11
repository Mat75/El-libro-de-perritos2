var images = ["https://www.doogweb.es/wp-content/uploads/2016/05/El-perro-inteligente-708x1024.jpg",
"https://www.animaroo.com/assets/sites/animaroo.com/img/breeds/img/pug_medium.jpg?1355978488",
 "https://crucesdeperros.com/wp-content/uploads/2020/05/maltipoo-cruce-de-caniche-y-bich%C3%B3n-maltes.jpg" ,
  "https://www.recreoviral.com/wp-content/uploads/2015/01/210.jpg",
   "http://3.bp.blogspot.com/-3LROOhlFifc/ThDUmz8Ca5I/AAAAAAAAE_g/oEZL1ATEjDY/s1600/buba+1m.JPG",
    "https://www.recreoviral.com/wp-content/uploads/2015/01/210.jpg",
    "http://4.bp.blogspot.com/-QEjyOA-FPDw/UOQvgcluBkI/AAAAAAAAOOk/4ExbdaiYwgk/s1600/BIGdaisy-shih-tzu-fb.jpg.jpg"];
var names = ["Libro de los perritos","Morris", "Mickey", "Mimi", "Bu", "Guagua","Chirris"];
var i = 0;
function update()
{
    i++;

    if(i > 7)
      {
          i = 0;
      }
    
    //Depura el código para almacenar la lista de imágenes en updatedImage. Utiliza images[i]
    var updatedImage = images[i];
    //Depura el código para almacenar la lista de nombres en updatedName. Utiliza names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
