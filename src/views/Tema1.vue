<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fundamentos e introducción a la administración

    .row.justify-content-center.mb-4
      .col-md-5
        figure.mw-sm-350px
          img(src='@/assets/curso/temas/texto_destacado/img2.jpg')
      .col-md-7      
        p Comencemos definiendo qué es la administración. Como palabra, viene del latín ad, que indica dirección, tendencia, proximidad, contacto, y minister, subordinación u obediencia, y en su sentido más amplio y completo, significa cumplimiento de una tarea o función bajo la directriz o mando de otro. Sin embargo, en la historia, este concepto sufrió una transformación significativa que trascendió el hacer, por el interpretar los objetivos trazados por una organización y transformarlos en acción, a través de la planeación, la organización, la dirección y el control, todo con el fin de alcanzar los propósitos de manera adecuada y asertiva. Es entonces cuando surgen los diferentes caminos que han tomado algunos autores para definir el concepto de administración y su impacto en los escenarios de las organizaciones. 

    #t_1_1.titulo-segundo.color-acento-contenido   
      h2 1.1 Orígenes y enfoques

    .col-md-12.mb-4
       p La administración como la conocemos en la actualidad, es el resultado de los hechos históricos de pioneros que aportaron, desde su enfoque, al desarrollo y madurez del concepto, como por ejemplo, filósofos, físicos, economistas, estadistas, entre otros, que fueron grandes empresarios. La historia ha demostrado que las prácticas o iniciativas que tomaron estructuras militares, sociales, políticas y religiosas, siempre tuvieron configuración piramidal y, aunque no fue una forma muy regular, siempre actuaba como estructura jerárquica que focalizaba las decisiones y el poder en su vértice piramidal. Así podría citarse el aporte que, entre muchos otros, hicieron los egipcios, los hebreos, Platón, Maquiavelo y Adam Smith, con sus diferentes maneras de crear y organizar sus operaciones. 

    .row.justify-content-center
      .col-lg-4
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/administradores/PortadaA.svg', alt="alt").img400.m-auto
      .col-lg-8
        p
          b Posteriormente, empezaron a surgir las diferentes teorías que dan paso a la realidad de la administración contemporánea, donde algunas de las más relevantes son:

        SlyderF.custom.mb-5(columnas="col-lg-6 col-xl-4")
          .tarjeta.tarjeta--slyder.fcab15.p-4(style='height:315px')
            .row.justify-content-center.mb-3
              .col
                img(src='@/assets/curso/temas/administradores/A1903.png', alt="alt").img100.m-auto
            p.text-center
              b 1903
            p.text-center.mb-0 Administración científica

          .tarjeta.tarjeta--slyder.fcab15.p-4(style='height:315px')
            .row.justify-content-center.mb-3
              .col
                img(src='@/assets/curso/temas/administradores/A1909.png', alt="alt").img100.m-auto
            p.text-center
              b 1909
            p.text-center.mb-0 Teoría burocrática

          .tarjeta.tarjeta--slyder.fcab15.p-4(style='height:315px')
            .row.justify-content-center.mb-3.tp-4
              .col
                img(src='@/assets/curso/temas/administradores/A1916.png', alt="alt").img100.m-auto
            p.text-center
              b 1916
            p.text-center.mb-0 Teoría clásica

          .tarjeta.tarjeta--slyder.fcab15.p-4(style='height:315px')
            .row.justify-content-center.mb-3
              .col
                img(src='@/assets/curso/temas/administradores/A1932.png', alt="alt").img100.m-auto
            p.text-center
              b 1932
            p.text-center.mb-0 Teoría de las relaciones humanas

          .tarjeta.tarjeta--slyder.fcab15.p-4(style='height:315px')
            .row.justify-content-center.mb-3
              .col
               img(src='@/assets/curso/temas/administradores/A1947.png', alt="alt").img100.m-auto
            p.text-center
              b 1947
            p.text-center.mb-0 Teoría estructuralista

          .tarjeta.tarjeta--slyder.fcab15.p-4(style='height:315px')
            .row.justify-content-center.mb-3
              .col
               img(src='@/assets/curso/temas/administradores/A1954.png', alt="alt").img100.m-auto
            p.text-center
              b 1954
            p.text-center.mb-0 Teoría neoclásica

          .tarjeta.tarjeta--slyder.fcab15.p-4(style='height:315px')
            .row.justify-content-center.mb-3
              .col
               img(src='@/assets/curso/temas/administradores/A1957.png', alt="alt").img100.m-auto
            p.text-center
              b 1957
            p.text-center.mb-0 Teoría del comportamiento

          .tarjeta.tarjeta--slyder.fcab15.p-4(style='height:315px')
            .row.justify-content-center.mb-3
              .col
               img(src='@/assets/curso/temas/administradores/A1962.png', alt="alt").img100.m-auto
            p.text-center
              b 1962
            p.text-center.mb-0 Teoría del desarrollo organizacional

          .tarjeta.tarjeta--slyder.fcab15.p-4(style='height:315px')
            .row.justify-content-center.mb-3
              .col
               img(src='@/assets/curso/temas/administradores/A1972.png', alt="alt").img100.m-auto
            p.text-center
              b 1972
            p.text-center.mb-0 Teoría contingencial

          .tarjeta.tarjeta--slyder.fcab15.p-4(style='height:315px')
            .row.justify-content-center.mb-3
              .col
               img(src='@/assets/curso/temas/administradores/A1990.png', alt="alt").img100.m-auto
            p.text-center
              b 1990
            p.text-center.mb-0 Nuevos enfoques 

          .tarjeta.tarjeta--slyder.fcab15.p-4(style='height:315px')
            .row.justify-content-center.mb-3
              .col
               img(src='@/assets/curso/temas/administradores/A2000.png', alt="alt").img100.m-auto
            p.text-center
              b 2000
            p.text-center.mb-0 Caos y complejidad    

    p.mt-5 Así mismo, las teorías que fueron surgiendo paulatinamente, tenían diferentes enfoques y puntos de vista que presentaban modelos y esquemas de administración, basados en diversos criterios, como se evidencia en el gráfico que se observa a continuación:

    .mx-auto.col-md-5.mb-5
      .titulo-sexto.color-acento-contenido
        p.mb-0
          strong Figura 1.
          br
          em Esquemas de administración

      figure.mb-4
        img(src='@/assets/curso/temas/figuras/esquemaA.svg')

    .cajon.color-secundario.fcs15.p-4.mb-4
      p Para efectos de dar mayor claridad, a continuación, se procede a explicar cada uno de los enfoques y las teorías asociadas, así como también sus autores y motivadores, en el documento Enfoques y teorías administrativas asociadas.
        
      .row
        .col-lg-6
          a.anexo.mb-4(:href="obtenerLink('/downloads/Enfoques y teorías administrativas asociadas_anexo_1.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              h5 Anexo 
              p.mb-0 Enfoques y teorías administrativas asociadas

    .row.justify-content-center.mb-4
      .col-md-5
        figure.mw-sm-350px
          img(src='@/assets/curso/temas/texto_destacado/img3.jpg')
      .col-md-7
        p.mb-0 Luego de realizar el recorrido por los orígenes y enfoques de la administración, resulta importante reconocer, en el concepto, algunos elementos de carácter estratégico que han ido perfilando la administración y que han trazado la estructura basada en procesos. La estrategia no es más que la capacidad de actuar bajo la presión del entorno y sus variables, ser capaces de ir más allá y de orientar las decisiones de manera adaptativa a los cambios que surgen. Esta manera de “hacer” administración, determina una ruta o un ciclo que posibilita no solo idear propuestas sino ejecutarlas y, posteriormente, evaluarlas; para lograrlo es necesario esbozar un poco de qué se trata, a partir de la siguiente línea temática.
        br
    
    #t_1_2.titulo-segundo.color-acento-contenido.mb-4  
      h2 1.2 Administración estratégica

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/texto_destacado/img4.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La administración estratégica se entiende como aquella que apunta a dar lineamiento y orientación desde los estamentos directivos en una empresa u organización, teniendo en cuenta el estado interno y externo de la misma, es decir, diagnosticando lo que sucede, para alinear y asegurar que la toma de decisiones impacte directamente la necesidad o la intención.
          br
          br
          | Para conocer qué es la estrategia de diagnóstico y análisis empresarial,
          b se recomienda ver el siguiente video.

    figure.mb-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/jASywqOHrQM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)      

    .cajon.color-acento-botones.p-4
      p.mb-0 Una vez que se cuenta con el diagnóstico y el análisis empresarial, se procede a realizar una proyección de la empresa desde lo estratégico y, entonces, es este el momento correcto para aplicar los principios del proceso administrativo.    

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
