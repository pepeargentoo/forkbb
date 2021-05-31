import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BalanceadorComentariosFacebookService {


  public noticias = {
    "noticia": [
      {
        "cant_comentarios": 8,
        "cant_compartidos": 0,
        "cant_mg": 62,
        "comentarios": [
          {
            "comentario": "Rosario3 Para estas personas que no creen ! Les cuento que la semana pasada perd\u00ed dos amigos . Uno era el due\u00f1o de FM Metropolitana ! LO PUEDEN COMPROBAR  MURI\u00d3 DE COVID19  Y NO TENIA ANTECEDENTES \u00a1  Estoy pasando p\u00e9simos momentos !  ESTO NO ES BROMA  M\u00c1S VALE 2 METROS DE DISTANCIA ! QUE 2 METROS BAJO TIERRA. \ud83d\ude25\ud83d\ude25\ud83d\ude25\ud83d\ude25\ud83d\ude25\ud83d\ude25\ud83d\ude25\ud83d\ude25\ud83d\ude25",
            "id_post": 25,
            "usuario": "Gladys Gobbo"
          },
          {
            "comentario": "Ahora puedo decir que conosco gente que tuvo covic y lo pasaron super mal siendo j\u00f3venes y sanos .. DIOS NOS PROTEJA",
            "id_post": 25,
            "usuario": "Mercedes Lavooy"
          },
          {
            "comentario": "50 millones con la gripe espa\u00f1ola.  Eso es pandemia y no est\u00e1s boludeces q hacen tener miedo a la gente.",
            "id_post": 25,
            "usuario": "Sergio Luciano Andreolli"
          },
          {
            "comentario": "Recuperados no existen?",
            "id_post": 25,
            "usuario": "Mixta Betiana"
          },
          {
            "comentario": "32.000 llegamos con la gripe A",
            "id_post": 25,
            "usuario": "Mixta Betiana"
          },
          {
            "comentario": "Estamos viendo el resultado de la payasada mal hecha de la cuarentena.  Desde marzo haciendo las cosas como el tujes. Con que intenci\u00f3n?",
            "id_post": 25,
            "usuario": "Silvana Massaccesi"
          },
          {
            "comentario": "Y todavia no muestran un hospital por dentro..??se termina la falsa pandemia..cronica donde estassss!!!!",
            "id_post": 25,
            "usuario": "Carlos Robledo"
          },
          {
            "comentario": "A no equivocarse de nuevo al votar pelotudos \ud83d\ude48 por favor \u270c\u270c\ud83d\ude02\ud83d\ude02\ud83d\ude02",
            "id_post": 25,
            "usuario": "Marcelo Cristian Carabajal"
          }
        ],
        "datetime": "Thu, 15 Oct 2020 16:21:30 GMT",
        "descripcion_post": "",
        "id_noticia": 25,
        "pag_noticia": "Rosariotres",
        "url": "https://m.facebook.com/Rosariotres/posts/10160042373922619"
      },
      {
        "cant_comentarios": 25,
        "cant_compartidos": 0,
        "cant_mg": 154,
        "comentarios": [
          {
            "comentario": "Distancia y barbijo, no sean egoistas, piensen en los dem\u00e1s enfermos y viejos, que pueden ser amigos o familiares.",
            "id_post": 26,
            "usuario": "Silvia Marvulli"
          },
          {
            "comentario": "Porqu\u00e9 no hacen un CONTROL verdadero... honesto..a grandes empresas???? Las que son denunciadas por la cantidad de infectados,...y cuando van \" los inspectores\"... Arreglan como que no existen...y siguen obligando a los empleados a presentarse a trabajar y abren al p\u00fablico!!!???",
            "id_post": 26,
            "usuario": "Liliana Chichita Marangoni"
          },
          {
            "comentario": "Ayer lleve al sanatorio a mi made de 83 a\u00f1os hacerle unos estudios y ya  hab\u00eda 14 con covid no es mentira y nosotros no salimos a ning\u00fan lado co\u0144 mi esposo , s\u00f3lo llevamos al m\u00e9dico a nuestros seres queridos y dejen de culpar a los dem\u00e1s",
            "id_post": 26,
            "usuario": "Lorena Fragapane"
          },
          {
            "comentario": "Dios .ten piedad de nosotros .Amen",
            "id_post": 26,
            "usuario": "Dora Finuchi"
          },
          {
            "comentario": "Porque no se dejan de joder con los r\u00e9cord \u00a1\u00a1\u00a1",
            "id_post": 26,
            "usuario": "Sergio Ruben Benavente"
          },
          {
            "comentario": "Es verdad,y los noticieros igual,te deprimen ya,con el tema de las camas,el pico,las muertes,paren ya!!!!!",
            "id_post": 26,
            "usuario": "Gabriela Pendino"
          },
          {
            "comentario": "Bravo!!! un aplauso! al gobierno de cientificos encabezado por alverso... !!! geniaal!!! nos vamos para arriba!!! en la tabla de peores pa\u00edses del mundo en enfrentar la pandemia... !!! Pa\u00eds quebrado, lleno de gente contagiada y en ca\u00edda libre!!! querias la heladera llena?? ah\u00ed la ten\u00e9s!!! llena de cucarachas!!! ",
            "id_post": 26,
            "usuario": "Juancho Taseca"
          },
          {
            "comentario": "Es lo vende parece ..",
            "id_post": 26,
            "usuario": "Fredelinda Irala"
          },
          {
            "comentario": "Nos tienen hartos con este Corona... No hay otra noticia .  Todas son p\u00e1lidas  unos siguen encerrando....",
            "id_post": 26,
            "usuario": "Isabel Clara Costa"
          },
          {
            "comentario": "Que le agan autopcia de que murieron y ahi que digan cuantos fueron por esto y cuanto por otra cosa",
            "id_post": 26,
            "usuario": "Dario Fiore"
          },
          {
            "comentario": "Que triste\ud83d\ude13",
            "id_post": 26,
            "usuario": "Lyliana Facchini"
          },
          {
            "comentario": "U\u00d1AS PINTADA, ? LO PRIMERO QUE SE HACE ES DESPINTAR LAS U\u00d1AS ",
            "id_post": 26,
            "usuario": "Carlonia Bianchi"
          },
          {
            "comentario": "Comorbilidades",
            "id_post": 26,
            "usuario": "Diego Dargoltz"
          },
          {
            "comentario": "Nadie fallece de otra cosa ?",
            "id_post": 26,
            "usuario": "Gladys Soto"
          },
          {
            "comentario": "Hey @rosario3, te apuesto lo que quieras a qu\u00e9 no podes estar mas de un dia sin escribir la palabra \"covid\", \"record\" o \"pico\".   Que onda? Pocas ideas? Falta de material? Redactores de cuarta? Jajajajaja m\u00e9tele un poco m\u00e1s de onda!",
            "id_post": 26,
            "usuario": "Nicolas Donoso"
          },
          {
            "comentario": "Q sigan flexibilizando manga d HDP! Se cagan en los ciudadanos xq no quieren pagar costo pol\u00edtico xq la ambici\u00f3n d poder los pueden!",
            "id_post": 26,
            "usuario": "Marcel Alessandrelli"
          },
          {
            "comentario": "Hay dejen de joder xfavor  al q le toca le toca  y punto. X favor  los  todos en las calles  x favor. Eso  no les  importa. Pol\u00edticos de  muerda  que  venga  los  militares  as\u00ed  terminar con este virus   kkkkkk",
            "id_post": 26,
            "usuario": "Viky Centurion"
          },
          {
            "comentario": "Estamos todos muertos...!!!! \ud83d\udc80",
            "id_post": 26,
            "usuario": "Juan Herrera"
          },
          {
            "comentario": "Jajaja",
            "id_post": 26,
            "usuario": "Jorgelina Huertas"
          },
          {
            "comentario": "Sigamos habilitando cosas boludos !! ",
            "id_post": 26,
            "usuario": "Nahuel Caceres"
          },
          {
            "comentario": "*,,,y nos",
            "id_post": 26,
            "usuario": "Isabel Clara Costa"
          },
          {
            "comentario": "Sigan pelotudiando en la calle \ud83e\udd26\ud83c\udffe\u200d\u2642\ufe0f",
            "id_post": 26,
            "usuario": "Sebastian Perez"
          },
          {
            "comentario": "Perotti y lpqtp, la fase uno era hace un mes.",
            "id_post": 26,
            "usuario": "Feliciano Oviedo"
          },
          {
            "comentario": "N\u00fameros n\u00fameros virus matem\u00e1tico",
            "id_post": 26,
            "usuario": "Jonatan Flores"
          },
          {
            "comentario": "COVID\ud83d\udc99\ud83d\udc99\ud83d\udc99\ud83d\udc99\ud83d\udc99\ud83d\udcaa\ud83d\udcaa",
            "id_post": 26,
            "usuario": "Alberto Dionisio Arce"
          }
        ],
        "datetime": "Thu, 15 Oct 2020 16:22:39 GMT",
        "descripcion_post": "",
        "id_noticia": 26,
        "pag_noticia": "Rosariotres",
        "url": "https://m.facebook.com/Rosariotres/posts/10160065380107619"
      }
    ]
  }
  public url: string;
  public urlScrap: string;
  public urlPost: string;

  constructor(
    private http: HttpClient,
  ) {
    this.url = environment.urlFacebook;
    this.urlScrap = environment.urlFacebookScrap;
    this.urlPost = environment.urlPostComentariosFace;
  }


  getAllNoticias() {
    return this.noticias.noticia;
  }

  postScrappingPost(data) {
    return this.http.post(this.urlScrap + 'scrappingPost', data);
  }

  getListadoNoticias() {
    return this.http.get(this.url + 'Noticias');
  }

  postComentariosBase(data) {
    return this.http.post(this.url + 'Comentarios_base', data);
  }

  getComentariosByTopico(topico: string) {
    return this.http.get(this.url + 'Comentarios_base?id_topico=' + topico);
  }

  getTopicos() {
    return this.http.get(this.url + 'topicos');
  }

  
  postComentarios(data) {
    console.log(data);
    let array = new Array(data);
    console.log(array);
    return this.http.post(this.urlPost + 'AddCommentPost', array);
  }
}