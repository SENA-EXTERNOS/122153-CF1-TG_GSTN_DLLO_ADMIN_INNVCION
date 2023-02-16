<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-4.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/texto_destacado/img.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Apreciado aprendiz, bienvenido a este componente formativo, donde se abordarán generalidades y aspectos claves de la administración, como herramienta apropiada para dar orden a los diversos obstáculos que se presentan en la cotidianidad. La administración, en tanto ciencia estratégica, deberá ser entendida y comprendida desde su intención.  
        br
        br
        p Con el estudio responsable de este componente, el aprendiz puede apropiarse de ella para saber tomar su valor agregado que, empresarialmente, puede utilizarse para generar ventajas y capacidad de acción. 
      
    p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.

    figure
      .video
        <iframe width="560" height="315" src="https://www.youtube.com/embed/M_1OINwWdMA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


</template>

<script>
export default {
  name: 'Introduccion',
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
