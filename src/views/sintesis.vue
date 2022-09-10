<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .mx-auto.col-md-4.mb-8.mb-md-8
    .titulo-sexto.color-acento-botones <strong>Gestión del desarrollo administrativo e innovación</strong>
      p Síntesis: Introducción a la administración
    br
    br
    p Para dar cierre a este componente formativo, lo invitamos a dar un recorrido por las temáticas aquí abordadas.
    br
    br
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/figuras/sintesis.svg", alt="alt")

</template>

<script>
export default {
  name: 'Sintesis',
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
