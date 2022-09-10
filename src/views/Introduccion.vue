<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .bloque-texto-g.color-principal-fondo.p-3.p-sm-4.p-md-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/texto_destacado/img.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La administración es una herramienta apropiada para dar orden a los diversos obstáculos que se presentan en la cotidianidad; por ende, entenderla y comprender su intención puede convertirse en el valor agregado que empresarialmente puede utilizarse para generar ventajas y capacidad de acción. En el siguiente video conocerá, de forma general, la temática que estudiará a lo largo del componente formativo.
          br
          br
          <span style="color:blue">|¡Muchos éxitos en este proceso de aprendizaje!</span>
      
      br
    figure
         img(src='@/assets/curso/temas/figuras/video2.svg')

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
