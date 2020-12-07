# Grupo 8 "WebGame"
### PUC IIC2513 - Tecnologías y Aplicaciones Web - Repositorio de Proyecto de Curso
## Integrantes

| Nombre                | Email       | Usuario de Github |
|:--------------------- |:-------------|:-------------|
| Alex Apt | aapt@uc.cl | [@alexaptib](https://www.github.com/alexaptib) |
| Constanza Olate | clolate@uc.cl | [@clolate](https://www.github.com/clolate) |
| Matías Soto | masoto2@uc.cl | [@Seld0nn](https://www.github.com/Seld0nn) |

## Descripción de la distribución del repositorio

En /documents esta el pdf con el informe para la primera entrega

## Descripción del juego

En las duras Tierras de Santiaguelot, escasea la comida y los recursos para sobrevivir. La llegada del invierno amenaza la débil paz entre las razas. En estos tiempos difíciles renace la leyenda del Tesoro perdido del pirata Hernán Barbanegra. Cada raza ha designado a un héroe para buscar el legendario tesoro, el héroe ha reclutado para su búsqueda a valerosos compañeros que lo acompañarán en su aventura por las inexploradas tierras de Santiaguelot. La búsqueda comienza …

## Tecnologías empleadas
heroku
koa
jquery

## ¿Cómo ejecutar la aplicación?

front se encuentra en:
https://santiaguelot.tk/

Se usó Vercel, Freenom y LetsEncrypt. 
## Archivo indice
index.html


## Reglas generales

El objetivo final del juego es encontrar el tesoro perdido de Barbanegra y poder abrirlo. Para abrirlo un jugador necesita recolectar 3 fragmentos de llaves para crear la llave que abre el tesoro.

Cada jugador debe elegir una raza y definir su personaje extra (guerrero, tanque, sanador o mago).
La base inicial de cada participante se asigna al azar en alguna de las casillas designadas para base.
Cada jugador sólo observa las casillas base de los jugadores y la casilla central, en la cual está el tesoro
Cada jugador comienza con sus 6 personajes de cada clase: Un héroe, un guerrero, un tanque, un curador, un mago y uno adicional (este personaje debe ser elegido entre guerrero/tanque/sanador/mago).



## Preparación

Cada jugador debe elegir una raza y definir su personaje extra (guerrero, tanque, sanador o mago).
La base inicial de cada participante se asigna al azar en alguna de las casillas designadas para base.
Cada jugador sólo observa las casillas base de los jugadores y la casilla central, en la cual está el tesoro
Cada jugador comienza con sus 6 personajes de cada clase: Un héroe, un guerrero, un tanque, un curador, un mago y uno adicional (este personaje debe ser elegido entre guerrero/tanque/sanador/mago)

## Como jugar

¿Qué puedo hacer en cada ronda?

1. Ver el resultado del turno anterior. Tal vez encontraste algún recurso o ganaste una batalla.
2. Si es que lo quieres, utiliza algún recurso que tienes guardado.
3. Elegir las acciones del turno
4. Para terminar tu turno, elige a dónde te quieres mover (una casilla a los lados), si es que deseas hacerlo.

## Tipos de casillas

Existen 11 tipos de casillas:

1. Base: cada jugador tiene una base, en esta casilla sólo puede ingresar el equipo correspondiente. Estar en la base cura a tus unidades 40 ptos al comienzo de la ronda siguiente.
2. Buff Ataque: Al estar en esta casilla, tú guerreros recibirán una cantidad entre 1-3 de ataque al comienzo de la siguiente ronda.
3. Buff Defensa: Al estar en esta casilla, tú guerreros recibirán una cantidad entre 1-3 de bloqueo al comienzo de la siguiente ronda.
4. Buff Vida: en esta casilla tu Héroe recibe una cantidad entre 1-3 de vida adicional al comienzo de la siguiente ronda.
5. Buff Experiencia: Al estar estar en esta casilla uno de tus personajes a elección recibe 1 de experiencia al comenzar la siguiente ronda.
6. Curación: en esta casilla el Héroe recibe una curación de vida de una cantidad entre 1-5 al comienzo de la siguiente ronda.
7. Vacío: Esta casilla no tiene ningún efecto.
8. Llave: En esta casilla se encuentra un fragmento de llave, es necesario para poder abrir el tesoro. Al estar en esta casilla, recibes un fragmento de llave al comenzar la siguiente ronda. Luego de recolectar este fragmento de llave, esta casilla pasa a estar vacía
9. Amenaza: En esta casilla tus guerreros se deben enfrentar con alguna amenaza del mapa, si logras triunfar obtienes un objeto. Luego de completar la amenaza la casilla pasa a estar vacía.
10. Objeto: El primer jugador en llegar satisfactoriamente a esta casilla obtiene un objeto al comenzar la siguiente ronda. Luego pasa a ser una casilla vacía.
11. Tesoro: El primer jugador en completar 3 rondas completas en esta casilla con 3 fragmentos de llaves, gana el juego.

## Acciones

En cada ronda del juego tu equipo cuenta con 3 acciones a elección, estas acciones se ejecutan además de las básicas que ocurren y dependen de la clase del personaje. Pueden repetirse (guerrero+guerrero+tanque / sanador-sanador-sanador / etc)

- Guerrero: gastar una acción en el guerrero generará un ataque adicional de este.
- Sanador: gastar una acción en el sanador generará un heleo adicional al Héroe.
- Tanque: gastar una acción en el tanque aumenta tu armadura

El orden de las acciones se definen a continuación:

1. se calcula el stun del mago
2. se helea el héroe
3. se calcula el daño del guerrero
4. se calcula el daño mitigado por el tanque
5. se calcula el HP del héroe

## Razas

- Humano: Comienza con +10 de curación
- Elfo: Comienza con +3 de experiencia
- Enano: Comienza con +20 de vida
- Ogro: Comienza con +20 de ataque
- Gnomo: Comienza con +20 de bloqueo

## Clases

Cada clase tiene una acción única. Además, cada clase comienza en nivel 1, al recibir 3 de experiencia avanzará a nivel 2 y al recibir 6 más de experiencia avanzará a nivel 3. A mayor nivel, más poderosos será cada clase.

- Héroe (tiene HP): Con su acción indica en qué dirección hay una llave. El héroe tiene 100/150/200 HP de vida. Si la vida del héroe llega a 0 HP debe volver a su base.
- Guerrero: Con su acción puede atacar 30/60/100 a los enemigos.
- Sanador (da HP): Con su acción puede restablecer 10/20/35 vida del héroe
- Tanque (defensa): Con su acción puede bloquear 30/60/90% de daño que hubiese recibido un héroe.
- Mago (afecta a las otras clases): Con su acción puede con 25%/50%/75% de probabilidad inhabilitar por una ronda a un enemigo con el cual se enfrente

## Objetos

Los recursos los obtienen a medida que descubres/ exploras nuevas casillas

- Clarividencia: Hace que en el mapa aparezca la posición de una llave.
- + Experiencia: Entrega +2 de experiencia a un personaje.
- Poción de vida: Entrega +50 de vida al héroe.
- Espada: Entrega +10 de ataque a un Guerrero.
- Escudo: Entrega +10 de Bloqueo a un Tanque.

## Amenazas y enemigos

En el mapa existen casillas con enemigos que presentan una amenaza para tu equipo. Debes enfrentarte a ellas y triunfar para obtener una recompensa o fracasar y volver derrotado a la base uwu. Si salen triunfantes ganan experiencia (Exp) y puedes encontrar algún tesoro (espada, poción, llaves, etc)

enemigo hp/dmg/def/stun aún sin definir
- Dragon ??/??/??/??
- Ladrones ??/??/??/??
- Bruja ??/??/??/??
- Troll ??/??/??/??
- Lobos ??/??/??/??

## Reglas de enfrentamiento

Al encontrarse dos o más equipos en una casilla hay un enfrentamiento. Este enfrentamiento es hasta la muerte, con el equipo perdedor retornando a recuperarse a su base. El daño que inflige cada equipo es dependiente de su ataque, mientras que su capacidad de defenderse depende de su bloqueo. El equipo que queda con vida gana el enfrentamiento y el control de la casilla, además de un bono de +5 experiencia.

El daño que el equipo A le hace al equipo B es calculado de la siguiente manera: El daño base es de 20, y por cada 10 pts de stats que el ataque de A tiene sobre bloqueo de B, recibe un daño adicional de 10%, si no es mayor entonces recibe un castigo de 10% por cada 10 pts.

En caso de que un mago anule a un guerrero o defensor, entonces se pierde sus atributos para esa ronda. Los equipos se toman turnos realizando su set de acciones (ataque,defensa,sanación) hasta que solo uno quede con hp.

<!-- ##
## Mejoras para la entrega 3
  1. Mejorar css de tal manera que haya un formato que este presente en toda la app web, ademas de una mayor personalización de cada view. Detalles como por ejemplo cambio de color del fondo de un input box si es que este es seleccionado.
  2. En local storage se alamcena informacion de registro de usuarios para que estos puedan hacer login. Se muestra un mensaje si el login es exitoso.
  3. Se creo un tablero que utiliza js para entregarle mas posibilidades de accion y diseño.
  4. En detalle, a la parte visual se le agregó marcos a los scrolls, ademas de agregar scrolls a todos los views para facilitar la lectura de estros. Se cambio el tipoi de letra, ademas de personalizar cada view. Los encabezados de las secciones tienen una barra roja con letras amarillas. Otra personalizacion por ejemplo es que en el view de contacto el lugar para ingresar un mensaje es mas grande para acomodar a este. Otro cambio fue que algunos botones se centraron para que se vea mejor. Por ultimo se cambio los nombres que aparecen en las pestañas para no dejar los por default.
  5. Requests&response estan en carpeta documents como pdf.
## Otros

-->
