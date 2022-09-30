<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-4
      .titulo-principal__numero
        span 3
      h1 La empresa como escenario activo de administración
    
    <strong style="color:blue">Las teorías y corrientes administrativas han surgido de la práctica y la experiencia de los autores y sus grupos de trabajo; todo esto se ha dado a través de la creación de escenarios para atender necesidades del ser humano, del mercado y del mundo. Es, en este espacio, donde se consolidan los aprendizajes y donde se va dando también estructura al concepto de empresa.</strong>
    p
    
    .tarjeta.p-4.p-md-0.mb-4
        .row.justify-content-around 
          .col-md.col-lg-7
            p La existencia de las empresas ha permitido generar escenarios transaccionales que le dan al ser humano posibilidad de percibir ingresos para su sustento; he aquí la importancia de trabajar por la consolidación de empresas sostenibles y con valor agregado para la economía de los países y del mundo. Para conocer un poco el origen del concepto, lo invitamos a ver el video <a href="https://www.youtube.com/watch?v=dzyn4eofi6c">La empresa y la gestión de la información.</a>  
          
            p Todas las empresas tienen diferentes características y estructuras, y por eso se va a profundizar un poco acerca de esas clasificaciones.
           
            p Münch Galindo (2018), define la empresa como: <strong style="color:blue"> “la unidad económico-social en la cual, a través del capital, el trabajo y la coordinación de recursos se producen bienes y servicios para satisfacer las necesidades de la sociedad” </strong>(p.64). Ahora bien, no todas las empresas son iguales, existen características y disposiciones que las hacen diferentes, y hay tantas formas de clasificar empresas como variables para hacerlo. Sin embargo, el interés está en conocer cómo se pueden distinguir los tipos de empresas y, por supuesto, las características que se definan deben ser de utilidad para los análisis económicos en diferentes ámbitos.
          .col-8.col-sm-6.col-md-5.mb-4.mb-md-0
            img(data-aos="zoom-in" src="@/assets/curso/temas/texto_destacado/img25.png" , alt='imagen relacionada')
    
    p.mb-4 Es importante distinguir algunas de las diferentes clasificaciones y modelos de empresas, como se observa a continuación:
    
    .mx-auto.col-md-10
        ImagenInfograficaB.color-primario
          template(v-slot:imagen)
            figure
                img(data-aos="zoom-in" src='@/assets/curso/temas/texto_destacado/img26.svg', alt='diagrama')
              
          div(x="12%" y="18%" tooltip=" Ver más|")
            .tarjeta.white-card.p-5
                .row.align-items-center
                  .col-lg-12
                    h5.mb-2 Por su tamaño
                    p Cada país determina la clasificación de las empresas y la disposición actual para Colombia está determinada por:
                    ul.lista-ul
                      li 
                        i.lista-ul__vineta
                        | Número de empleados.
                      li
                        i.lista-ul__vineta
                        | Cantidad de activos.
                      li 
                        i.lista-ul__vineta
                        | Facturación (ingresos).

          div(x="6%" y="55%" tooltip=" Ver más|")
           .tarjeta.white-card.p-5
                .row.align-items-center
                  .col-lg-12
                    h5.mb-2 Por la titularidad de la empresa
                    ul.lista-ul
                      li 
                        i.lista-ul__vineta
                        | <strong>Pública:</strong> <span></span>su capital está conformado por dinero del Estado.
                      li
                        i.lista-ul__vineta
                        |<strong>Privada:</strong> <span></span>su capital es de origen particular, no tiene nada que ver con el Estado
                      li 
                        i.lista-ul__vineta
                        |<strong>Mixta:</strong> <span></span>parte de su capital es público y parte es privado.

          div(x="83%" y="18%" tooltip=" Ver más|")
            .tarjeta.white-card.p-5
                .row.align-items-center
                  .col-lg-12
                    .h5.mb-2 Por su estructura jurídica
                    p Depende de cada país y las normativas para su constitución. En Colombia se clasifican de esta manera:
                    ul.lista-ul
                      li 
                        i.lista-ul__vineta
                        | Empresa unipersonal: se describe como la persona física que realiza, en nombre propio y por medio de una empresa, una actividad comercial, industrial o profesional.
                      li
                        i.lista-ul__vineta
                        | Sociedad de personas o colectivas: varios individuos se asocian y, en nombre de una empresa u organización jurídica, se representan para actuar y participar en el mercado con un mismo fin.
                      li 
                        i.lista-ul__vineta
                        | Sociedad anónima: el capital aportado por dos o más personas se divide en acciones y los accionistas son anónimos.

          div(x="90%" y="55%" tooltip=" Ver más|")
            .tarjeta.white-card.p-5
                .row.align-items-center
                  .col-lg-12
                    .h5.mb-2 Por la actividad que realiza
                    p Cada país determina la clasificación de las empresas y la disposición actual para Colombia está determinada por:
                    ul.lista-ul
                      li 
                        i.lista-ul__vineta
                        | <strong>Industrial:</strong> <span></span>: indica empresas que manufacturan o transforman productos o materias primas
                      li
                        i.lista-ul__vineta
                        | <strong>Comercial:</strong> <span></span>describe empresas que se dedican a la compra y venta de productos, un servicio de transaccionalidad.
                      li 
                        i.lista-ul__vineta
                        | <strong>De_servicio:</strong> <span></span>se refiere a empresas que son creadas con el propósito de proveer al cliente un servicio (producto intangible, es decir, que no tiene forma definida).

          div(x="12%" y="91%" tooltip=" Ver más|")
            .tarjeta.white-card.p-5
                .row.align-items-center
                  .col-lg-12
                    h5.mb-2 Por el sector económico al que pertenece
                    p Cada país determina la clasificación de las empresas y la disposición actual para Colombia está determinada por:
                    ul.lista-ul
                      li 
                        i.lista-ul__vineta
                        | Sector primario: hace referencia a las actividades relacionadas con la explotación de recursos naturales como agricultura, caza, pesca y silvicultura.
                      li
                        i.lista-ul__vineta
                        | Sector secundario: industrial que incluye actividades que transforman productos, generalmente del sector primario o del mismo sector.
                      li 
                        i.lista-ul__vineta
                        | Sector terciario: servicios que producen bienes intangibles y, por lo general, estas actividades sirven como soporte a los sectores primario y secundario (comercio, el transporte, la salud, la educación, el sector financiero, entre otros).
                      li 
                        i.lista-ul__vineta
                        | Sector cuaternario: relacionado con la creación de conocimiento, es decir, investigación y desarrollo.
                      li 
                        i.lista-ul__vineta
                        | Sector quinario: es el que agrupa empresas con actividades sin ánimo de lucro.

          div(x="83%" y="91%" tooltip=" Ver más|")
            .tarjeta.white-card.p-5
                .row.align-items-center
                  .col-lg-12
                    h5.mb-2 Por su ubicación
                    p Cada país determina la clasificación de las empresas y la disposición actual para Colombia está determinada por:
                    ul.lista-ul
                      li 
                        i.lista-ul__vineta
                        | <strong>Local:</strong> <span></span> su alcance está determinado al municipio o ciudad donde se encuentra ubicada.
                      li
                        i.lista-ul__vineta
                        | <strong>Regional:</strong> <span></span> su área de influencia trasciende lo municipal y le es posible llegar a departamentos vecinos. 
                      li 
                        i.lista-ul__vineta
                        | <strong>Nacional:</strong> <span></span> desarrolla sus actividades en el contexto del país, esto es a nivel nacional.
                      li 
                        i.lista-ul__vineta
                        | <strong>Multinacional:</strong> <span></span> trasciende su operación las fronteras nacionales, es decir, tiene presencia en varios países.
    br
    .row.mb-4
       .col-lg-12
         .cajon.color-acento-botones.color-fondo-secundario.p-3
           p Estas clasificaciones permiten orientaciones en aras de su funcionamiento, debido a que algunas de esas características son netamente explícitas; sin embargo, existen unas particularidades implícitas, que están asociadas con la cultura organizacional y con las reglas de juego para cada una. Por esto, las características superficiales de una organización no lo son todo y se tiene que reconocer la composición de ellas a partir de la participación de un grupo de personas que ejercen diferentes funciones para dirigir el desarrollo de la empresa hacia un futuro prometedor.
    
    h3.mb-4
      i.fas.fa-square.me-3.cuadrado
      | Sentido de pertenencia, trabajo en equipo y toma de decisiones.
    
    .row.justify-content-around.align-items-center.mb-4  
      .bloque-texto-g.color-primario.col-sm-12.mb-8.p-md-4
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/texto_destacado/img27.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 El sentido de pertenencia puede expresarse como la satisfacción que experimenta una persona por sentirse parte de un grupo o de una comunidad, a partir de la identificación con sus ideales; el fútbol es un claro ejemplo de sentido de pertenencia, donde se defiende la afición por un equipo, inclusive hasta escenarios extremos, que sobrepasan los límites imaginados.<strong>Ahora bien, este concepto toma relevancia a nivel empresarial, porque cuanto más comprometidos se encuentren los empleados y colaboradores, más facilidad para impulsar objetivos organizacionales. </strong>      
    
    .tarjeta.p-4.p-md-0.mb-4
        .row.justify-content-around.align-items-center          
          .col-md.col-lg-7
            p Otro de los conceptos empresariales que aportan a ese dinamismo es el trabajo en equipo, concebido como la capacidad que tiene un grupo de personas con diferentes cargos, lugares, culturas, para unir sus ideas y articular su ejercicio laboral, en busca del logro de un propósito organizacional.   

            p Claramente, un líder al tener la competencia para articular su equipo a la luz de una buena comunicación, del impulso de aptitudes individuales para convertirlas en capacidad empresarial, al incitar a la participación empoderada de los colaboradores, estará generando ambientes propicios y herramientas de información adecuadas para llegar al paso definitivo que da un administrador, y es la toma de decisiones donde se debe elegir, entre varias alternativas y bajo las situaciones del contexto, la más apropiada para el bien organizacional. Existen diferentes tipos de decisiones: de dirección, estratégicas, individuales, operativas, rutinarias, programadas o de riesgo. 
          .col-8.col-sm-6.col-md-5.mb-4.mb-md-0
            img(data-aos="zoom-in-right" src="@/assets/curso/temas/texto_destacado/img28.png", alt='imagen relacionada')
        
        .tarjeta.p-4.p-md-0.mb-2
          .row.justify-content-center          
            .col-md.col-lg-3.col-sm-2.col-md-3.mb-4.mb-md-8
                img(data-aos="zoom-in-right" src="@/assets/curso/temas/texto_destacado/img29.png", alt='imagen descriptiva')
            .col-md.col-lg-6
              b La toma de decisiones se desarrolla en 4 etapas
              p
              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro__vineta.color-acentob-fondo
                    span 1
                  p Realización de diagnósticos precisos.
                li 
                  .lista-ol--cuadro__vineta.color-acentob-fondo
                    span 2
                  p Identificación del problema, la dificultad o la necesidad.
                li 
                  .lista-ol--cuadro__vineta.color-acentob-fondo
                    span 3
                  p Establecimiento de los criterios o alternativas de decisión.
                li 
                  .lista-ol--cuadro__vineta.color-acentob-fondo
                    span 3
                  p Definición de momentos de evaluación y cumplimiento de metas.
          
        .row.justify-content-center.mb-4
          .col-lg-10
            .cajon.color-primario
            .color-fondo.p-3
              p De esta manera, se reconocen como elementos de una adecuada administración, la identificación y optimización de los recursos, la configuración de los diferentes momentos que vive el proceso administrativo y, por último, la correcta alineación organizacional en pro del alcance de los objetivos estratégicos de la empresa. Una visión integradora de lo que se ha analizado, puede observarse de manera resumida, en el video 
                b Componentes de la organización.
        p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo, para ello diríjase al menú principal en donde encontrará la síntesis, una actividad didáctica, material complementario, entre otros.
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
