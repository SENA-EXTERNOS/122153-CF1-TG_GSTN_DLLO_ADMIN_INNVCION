<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-4
      .titulo-principal__numero
        span 3
      h1 La empresa como escenario activo de administración
    
    p Las teorías y corrientes administrativas han surgido de la práctica y la experiencia de los autores y sus grupos de trabajo; todo esto se ha dado a través de la creación de escenarios para atender necesidades del ser humano, del mercado y del mundo. Es, en este espacio, donde se consolidan los aprendizajes y donde se va dando también estructura al concepto de empresa.
    p
    
    .tarjeta.p-4.p-md-0.mb-4
        .row.justify-content-around 
          .col-md.col-lg-7
            p La existencia de las empresas ha permitido generar escenarios transaccionales que le dan al ser humano posibilidad de percibir ingresos para su sustento; he aquí la importancia de trabajar por la consolidación de empresas sostenibles y con valor agregado para la economía de los países y del mundo. Para conocer un poco el origen del concepto, lo invitamos a ver el video <strong>La empresa y la gestión de la información.</strong>  
            a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=dzyn4eofi6c" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                span(style="color: blue") Enlace web. 
                | La empresa y la gestión de la información.
          
            p Todas las empresas tienen diferentes características y estructuras, y por eso se va a profundizar un poco acerca de esas clasificaciones.
           
            p Münch Galindo (2018), define la empresa como: <strong> “la unidad económico-social en la cual, a través del capital, el trabajo y la coordinación de recursos se producen bienes y servicios para satisfacer las necesidades de la sociedad” </strong>(p.64). Ahora bien, no todas las empresas son iguales, existen características y disposiciones que las hacen diferentes, y hay tantas formas de clasificar empresas como variables para hacerlo. Sin embargo, el interés está en conocer cómo se pueden distinguir los tipos de empresas y, por supuesto, las características que se definan deben ser de utilidad para los análisis económicos en diferentes ámbitos.
          .col-8.col-sm-6.col-md-5.mb-4.mb-md-0
            img(data-aos="zoom-in" src="@/assets/curso/temas/texto_destacado/img25.png" , alt='imagen relacionada')
    
    p.mb-4 Es importante distinguir algunas de las diferentes clasificaciones y modelos de empresas, como se observa a continuación:
    
    .mx-auto.col-md-10
        ImagenInfograficaB.color-primario
          template(v-slot:imagen)
            figure
                img(data-aos="zoom-in" src='@/assets/curso/temas/texto_destacado/img26.svg', alt='diagrama')
              
          div(x="12%" y="18%" tooltip=" Ver más")
            .tarjeta.white-card.p-5
              .row.justify-content-around.align-items-center
                .col-md-6.col-sm-8.col-md-6.col-lg-3
                  img(data-aos="fade-up" src="@/assets/curso/temas/texto_destacado/img35.svg", alt='imagen relacionada')
                .col-md-6.col-sm-12.col-md-6.col-lg-9  
                    p.mt-4 Cada país determina la clasificación de las empresas y la disposición actual para Colombia está determinada por:
                    ul.lista-ul
                      li 
                        i.lista-ul__vineta(style='color: #f85316')
                        | Número de empleados.
                      li
                        i.lista-ul__vineta(style='color: #f85316')
                        | Cantidad de activos.
                      li 
                        i.lista-ul__vineta(style='color: #f85316')
                        | Facturación (ingresos).

          div(x="6%" y="55%" tooltip=" Ver más")
           .tarjeta.white-card.p-5
              .row.justify-content-around.align-items-center
                .col-md-6.col-sm-8.col-lg-3
                  img(data-aos="fade-up" src="@/assets/curso/temas/texto_destacado/img34.svg", alt='imagen relacionada')
                .col-md-6.col-sm-12.col-lg-9  
                    ul.lista-ul.mt-4
                      li 
                        i.lista-ul__vineta(style='color: #f85316')
                        | <strong style='color: #f85316'>Pública:</strong>&nbspsu capital está conformado por dinero del Estado.
                      li
                        i.lista-ul__vineta(style='color: #f85316')
                        |<strong style='color: #f85316'>Privada:</strong>&nbspsu capital es de origen particular, no tiene nada que ver con el Estado
                      li 
                        i.lista-ul__vineta(style='color: #f85316')
                        |<strong style='color: #f85316'>Mixta:</strong>&nbspparte de su capital es público y parte es privado.
                         
          
          div(x="83%" y="18%" tooltip=" Ver más")
            .tarjeta.white-card.p-5
              .row.justify-content-around.align-items-center
                .col-md-6.col-sm-8.col-lg-2
                  img(data-aos="fade-up" src="@/assets/curso/temas/texto_destacado/img30.svg", alt='imagen relacionada')
                .col-md-6.col-sm-12.col-lg-10  
                    p.mt-4 Depende de cada país y las normativas para su constitución. En Colombia se clasifican de esta manera:
                    ul.lista-ul
                      li 
                      i.lista-ul__vineta(style='color: #f85316')
                      | <strong style='color: #f85316'>Empresa unipersonal:</strong>&nbspsu capital está conformado por dinero del Estado.
                      li
                      i.lista-ul__vineta(style='color: #f85316')
                      |<strong style='color: #f85316'>Sociedad de personas o colectivas:</strong>&nbspsu capital es de origen particular, no tiene nada que ver con el Estado
                      li 
                      i.lista-ul__vineta(style='color: #f85316')
                      |<strong style='color: #f85316'>Sociedad anónima:</strong>&nbspparte de su capital es público y parte es privado.

          div(x="90%" y="55%" tooltip=" Ver más")
            .tarjeta.white-card.p-5
              .row.justify-content-around.align-items-center
                .col-md-6.col-sm-8.col-lg-2
                  img(data-aos="fade-up" src="@/assets/curso/temas/texto_destacado/img31.svg", alt='imagen relacionada')
                .col-md-6.col-sm-12.col-lg-10  
                    p Cada país determina la clasificación de las empresas y la disposición actual para Colombia está determinada por:
                    ul.lista-ul
                      li 
                      i.lista-ul__vineta(style='color: #f85316')
                      | <strong style='color: #f85316'>Industrial:</strong> indica empresas que manufacturan o transforman productos o materias primas
                      li
                      i.lista-ul__vineta(style='color: #f85316')
                      | <strong style='color: #f85316'>Comercial:</strong> describe empresas que se dedican a la compra y venta de productos, un servicio de transaccionalidad.
                      li 
                      i.lista-ul__vineta(style='color: #f85316')
                      | <strong style='color: #f85316'>De servicio:</strong> <span></span>se refiere a empresas que son creadas con el propósito de proveer al cliente un servicio (producto intangible, es decir, que no tiene forma definida).

          
          div(x="12%" y="91%" tooltip=" Ver más")
            .tarjeta.white-card.p-5
              .row.justify-content-around.align-items-center
                .col-md-6.col-sm-8.col-lg-2
                  img(data-aos="fade-up" src="@/assets/curso/temas/texto_destacado/img33.svg", alt='imagen relacionada')
                .col-md-6.col-sm-12.col-lg-10  
                  p Cada país determina la clasificación de las empresas y la disposición actual para Colombia está determinada por:
                  ul.lista-ul
                    li 
                    i.lista-ul__vineta(style='color: #f85316')
                    | <strong style='color: #f85316'>Sector primario:&nbsp</strong>hace referencia a las actividades relacionadas con la explotación de recursos naturales como agricultura, caza, pesca y silvicultura.
                    li 
                    i.lista-ul__vineta
                    | <strong style='color: #f85316'>Sector secundario:&nbsp</strong>industrial que incluye actividades que transforman productos, generalmente del sector primario o del mismo sector.
                    li 
                    i.lista-ul__vineta
                    | <strong style='color: #f85316'>Sector terciario:&nbsp</strong>servicios que producen bienes intangibles y, por lo general,  estas actividades sirven como soporte a los sectores primario y 
                    |secundario  (comercio, el transporte, la salud, la educación, el sector financiero, entre otros). 
                    li  
                    i.lista-ul__vineta(style='color: #f85316')
                    |  <strong style='color: #f85316'>Sector cuaternario:&nbsp</strong>relacionado con la creación de conocimiento, es decir, investigación y desarrollo.
                    li 
                    i.lista-ul__vineta(style='color: #f85316')
                    | <strong style='color: #f85316'>Sector quinario:</strong> es el que agrupa empresas con actividades sin ánimo de lucro.
        

          div(x="83%" y="91%" tooltip=" Ver más")
            .tarjeta.white-card.p-5
              .row.justify-content-around.align-items-center
                .col-md-6.col-sm-8.col-lg-3
                  img(data-aos="fade-up" src="@/assets/curso/temas/texto_destacado/img32.svg", alt='imagen relacionada')
                .col-md-6.col-sm-12.col-lg-9  
                    p Cada país determina la clasificación de las empresas y la disposición actual para Colombia está determinada por:
                    ul.lista-ul
                      li
                      i.lista-ul__vineta(style='color: #f85316')
                      | <strong style='color: #f85316'>Local:</strong> <span></span> su alcance está determinado al municipio o ciudad donde se encuentra ubicada.
                      li
                      i.lista-ul__vineta(style='color: #f85316')
                      | <strong style='color: #f85316'>Regional:</strong> <span></span> su área de influencia trasciende lo municipal y le es posible llegar a departamentos vecinos. 
                      li 
                      i.lista-ul__vineta(style='color: #f85316')
                      | <strong style='color: #f85316'>Nacional:</strong> <span></span> desarrolla sus actividades en el contexto del país, esto es a nivel nacional.
                      li 
                      i.lista-ul__vineta(style='color: #f85316')
                      | <strong style='color: #f85316'>Multinacional:</strong> <span></span> trasciende su operación las fronteras nacionales, es decir, tiene presencia en varios países.
    br
    .row.mb-4
       .col-lg-12
         .cajon.color-acento-botones.color-fondo-secundario.p-3
           p Estas clasificaciones permiten orientaciones en aras de su funcionamiento, debido a que algunas de esas características son netamente explícitas; sin embargo, existen unas particularidades implícitas, que están asociadas con la cultura organizacional y con las reglas de juego para cada una. Por esto, las características superficiales de una organización no lo son todo y se tiene que reconocer la composición de ellas a partir de la participación de un grupo de personas que ejercen diferentes funciones para dirigir el desarrollo de la empresa hacia un futuro prometedor.
    
    h3.mb-4
      i.fas.fa-square.me-3.cuadrado
      | Sentido de pertenencia, trabajo en equipo y toma de decisiones
    
    .row.justify-content-around.align-items-center.mb-4  
      .bloque-texto-g.color-primario.col-lg-10.col-sm-12.mb-8.p-md-4
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
              p De esta manera, se reconocen como elementos de una adecuada administración, la identificación y optimización de los recursos, la configuración de los diferentes momentos que vive el proceso administrativo y, por último, la correcta alineación organizacional en pro del alcance de los objetivos estratégicos de la empresa. Una visión integradora de lo que se ha analizado, puede observarse de manera resumida, en el video <b>Componentes de la organización.</b>
              .row.justify-content-center.izq
                .col-lg-12
                  a.boton.color-acento-contenido.izq.me-3(href="https://www.youtube.com/watch?v=qnyD2OYF33c" target="_blank" type="application/pdf")
                    span Ver video
                    i.fas.fa-play
        p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.

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
