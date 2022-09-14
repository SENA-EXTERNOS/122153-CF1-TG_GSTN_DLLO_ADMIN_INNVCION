export default {
  global: {
    componenteFormativo: 'Introducción a la administración',
    descripcionCurso:
      'La historia ha demostrado que, en la práctica, pueden aplicarse diversas teorías para resolver o apoyar la solución de problemáticas naturales del devenir empresarial u organizacional. En este componente formativo, se estudiarán las diferentes teorías y conceptos que le han dado origen a la administración como ciencia aplicable',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-img.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Fundamentos e introducción a la administración',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Orígenes y enfoques',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Administración estratégica',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Principios del proceso administrativo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Planeación',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Organización',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Dirección',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Control',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'La empresa como escenario activo de administración',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Control',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022). Proceso Administrativo: fase de control (video). ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=aB34nClq0o0',
    },
    {
      tema: 'La empresa como escenario activo de administración',
      referencia:
        'Bancoldex. (s.f.). Clasificación de empresas en Colombia. Bancoldex.',
      tipo: 'Página web',
      descarga:
        'https://www.bancoldex.com/clasificacion-de-empresas-en-colombia-200',
    },
  ],
  glosario: [
    {
      termino: 'Administración',
      significado:
        'conjunto de acciones que se realizan para administrar una empresa.',
    },
    {
      termino: 'Bienes',
      significado:
        'bienes producidos por la industria y que el consumidor puede comprar.',
    },
    {
      termino: 'Burocracia',
      significado:
        'conjunto de actividades y trámites que se deben seguir para resolver un asunto de carácter administrativo.',
    },
    {
      termino: 'Conductista',
      significado: 'hace referencia al estudio de la conducta de las personas.',
    },
    {
      termino: 'Empresa',
      significado:
        'entidad en la que intervienen el capital y el trabajo como factores de producción de actividades industriales o mercantiles, o para la prestación de servicios.',
    },
    {
      termino: 'Estratégica',
      significado:
        'una decisión o panorama inteligente frente a la situación o contexto de una empresa.',
    },
    {
      termino: 'Organización',
      significado:
        'grupo de personas y medios organizados con un fin determinado.',
    },
    {
      termino: 'Sector productivo',
      significado:
        'es una agrupación de las actividades productivas según sus características, de tal forma que permita hacer una clasificación más ordenada de la producción y facilitar su análisis.',
    },
    {
      termino: 'Servicios',
      significado:
        'actividad que se presta, a nivel empresarial, con relación a productos intangibles',
    },
  ],
  referencias: [
    {
      referencia:
        'Alama Salazar, E. & Martín de Castro, G. (2019). <em>Fundamentos de administración: teoría y práctica en el Perú y Latinoamérica.</em> Pearson',
    },
    {
      referencia:
        'Chiavenato, I. (2019). <em>Introducción a la teoría general de la administración.</em> McGraw-Hill.',
    },
    {
      referencia:
        'Hernández y Rodríguez, S., Palafox de Anda, G. & Aguado Cortés, C. (2020). <em>Administración: pensamiento, procesos estratégicos y administrativos para la era de la inteligencia artificial.</em> McGraw-Hill.',
    },
    {
      referencia:
        'Münch Galindo, L. (2018). <em>Administración: gestión organizacional, enfoques y procesos administrativos.</em> Pearson Educación.',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Innovative Education',
        cargo: 'Líder del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Innovative Education',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Innovative Education',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Innovative Education',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Innovative Education ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Innovative Education',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Innovative Education',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Innovative Education',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Innovative Education',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Innovative Education',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
