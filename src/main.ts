import './style.css'
import secuencia from './secuencia.jpg'
import secuencia2 from './secuencia2.jpg'
import mvmm from './mvmm.jpg'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<audio id="miAudio" loop autoplay controls>
<source src="src/juanes.mp3" type="audio/mpeg">
</audio>

  <div class="letter">
  <h1>Mi Amada Princesa María</h1>
  <p>
  Muchas veces me pregunto qué es el tiempo. ¿Realmente existe o no? Sin embargo, hay una forma de 
  explicarlo. El tiempo no es más que una sucesión de imágenes, al igual que en una película, 
  donde transcurre una imagen después de otra. La diferencia es que no notamos la transición, 
  porque estas imágenes pasan muy rápido. Por ejemplo cuando:
  <strong>1</strong> <em>llegas a tu casa</em> 
    <strong>2</strong> <em> Tus mascotas preparan unos globos con agua para lanzarte</em> 
    <strong>3</strong> <em>esperan a que abras la puerta</em> 
    <strong>4</strong> <em>luego te los lanzan</em> 
    <strong>5</strong> <em>se ríen.</em>
  </p>
  
  <img src="${secuencia}" alt="secuencia 1" style="max-width: 100%;" />
  <!-- <img src="https://picsum.photos/200/300" alt="random image" /> -->
  <p>
  Pero el tiempo sigue reglas universales; ordena todas las imágenes de nuestras vidas, una tras otra. 
  No podrías estar comiendo en el sillón y, de repente, estar corriendo en una maratón, 
  ni mucho menos cambiar el orden de las cosas. Si las ordenamos de manera diferente, 
  sentiríamos que algo anda mal con esta secuencia.
  </p>
  <img src="${secuencia2}" alt="secuencia 2" style="max-width: 100%;" />
  <p>
  <strong>¿Ves que es extraño?</strong> <hr/> 
  De esta forma, quiero explicarte, mi dulce princesa <em>María Victoria Merel Mendoza</em>, 
  que si entendemos la vida como una película, todas las imágenes (los momentos de nuestras vidas) 
  deben estar creadas con anterioridad para que exista una secuencia de acontecimientos 
  (nuestro tiempo de vida). Por eso, algunos no entienden por qué se dice que tenemos 
  libre albedrío al mismo tiempo que Dios conoce nuestro inicio y nuestro fin. 
  Esa es la razón por la que todos los momentos de nuestras vidas ya están creados y solo 
  estamos recorriendo uno tras otro, como en una película. 
  </p>
  <p>
  Y te preguntarás a qué se debe toda esta explicación. Si leíste con atención, podrás entender 
  que si llevamos 3 años juntos, no es porque tú o yo lo hayamos decidido. Ya Dios vio el hoy y 
  todas las escenas de nuestra película. Por eso no me preocupa el futuro, porque gracias a Dios 
  estoy contigo hoy. Hoy te puedo abrazar, hoy te puedo amar, hoy puedo ser feliz al verte sonreír,
   y mañana tendré el mismo privilegio.
  </p>
  <p>
  Y volviendo al punto principal, si todo esto ya está escrito por Dios, 
  entonces desde el primer día que te vi, tú siempre fuiste mía y yo siempre fui tuyo, 
  aunque tú y yo no lo sabíamos. Y así será cuando nos casemos y hasta el último día de 
  nuestras vidas.
  </p>
  <h2>Te amo,</h2>
  <h3>Att: DADB</h3>
  
  <img src="${mvmm}" alt="secuencia 2" style="max-width: 100%;" />
</div>
`

