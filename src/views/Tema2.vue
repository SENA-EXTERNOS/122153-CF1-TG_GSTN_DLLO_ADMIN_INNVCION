<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-4
      .titulo-principal__numero
        span 2
      h1 Principios del proceso administrativo

    .tarjeta.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-sm-10.col-md-3.col-lg-2
          img(data-aos="fade-up" src="@/assets/curso/temas/texto_destacado/img5.svg")
        .col-sm-12.col-md-8.col-lg-10
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h5 El proceso administrativo se compone de una serie de fases o etapas que permiten llevar a cabo una actividad,
               p con la existencia de diversos criterios acerca de la cantidad de pasos que lo integran, aunque para los autores, los elementos o funciones sean las mismas. Para el caso de este componente formativo, se tomarán como referentes las siguientes etapas:       
    
    .mx-auto.col-md-8.mb-4
      .titulo-sexto.color-acento-contenido
        p.mb-0
          b Figura 2.
          br
          em Etapas del proceso administrativo
      br
      figure
          img(data-aos="flip-left" src='@/assets/curso/temas/figuras/esquemaB.svg')
      br
      br
    
    #t_2_1.titulo-segundo.color-acento-contenido   
      h2 2.1 Planeación
    .tarjeta.p-4.p-md-2.mb-4
      .row.justify-content-around.align-items-center
        .col-8.col-sm-6.col-md-5.mb-4.mb-md-0
          img(data-aos="fade-down" src="@/assets/curso/temas/texto_destacado/img6.png")

        .col-md.col-lg-7
          p.mb-4 La planeación puede tener varias perspectivas, pero, en síntesis, obedece al rumbo hacia el que se dirige algo, bien sea a nivel empresarial o incluso, en la vida personal; es el horizonte proyectado y, para ilustrar un poco mejor el concepto, podría pensarse en los siguientes cuestionamientos: ¿qué se quiere? ¿Quiénes somos? ¿Para dónde vamos? La planeación impulsa para optimizar recursos, prever situaciones, reducir costos e incrementar la productividad, a partir de la concentración y canalización de esfuerzos por un mismo fin, además de ser un escenario base para una posterior evaluación y retroalimentación del proceso y de los logros obtenidos.
    h6 Basados en la estructura organizacional, existen 3 tipos de planeación:
    .row.justify-content-center.mb-4.mt-5
      .col-lg-4
        figure
            img(data-aos="fade-down" src='@/assets/curso/temas/figuras/esquemaC.svg')
      .col-lg-6
        AcordionA(tipo="a" clase-tarjeta="tarjeta color-secundario")
          .row(titulo="Estratégica")
            .col-md-12.mb-4.mb-md-0
              p Hace referencia a la planeación general, desarrollada por los estamentos directivos de la organización. Usualmente es una planeación a mediano o largo plazo y de ahí se desprenden los diferentes planes de la empresa.
          .row(titulo="Táctica")
            .col-md-12.mb-4.mb-md-0
              p Se refiere a los planes desarrollados en cumplimiento de la planeación estratégica y obedecen más al hacer, con un componente bajo de operatividad.
          .row(titulo="Operativa")
            .col-md-12.mb-4.mb-md-0
              p Se diseña con base en los planes tácticos y desarrollada por los estamentos operativos de la organización
    br
    p La planeación organizacional se enmarca, regularmente, en un documento denominado “plan estratégico”, donde confluye la información de base y la que se plantea en un horizonte de tiempo determinado, los propósitos y alcances pretendidos.
    br
    p <strong>El plan estratégico es como un rompecabezas,</strong> compuesto por diferentes piezas las cuales se presentan a continuación:  
    br
    br
    .mx-auto.col-md-10.mb-4
      .tarjeta
        .imgCont.m-auto
          .row.justify-content-center.mb-4
            ImagenInfografica.color-primario.mb-5
              template(v-slot:imagen)
                figure
                  img(data-aos="fade-left" src='@/assets/curso/temas/texto_destacado/img7.svg', alt='rompecabezas')

              .tarjeta.color-acento-botones.p-4(x="11%" y="7%" numero="+" style='border-radius: 10px; background-color: #FFE8C8')
                h5.mb-3.text-center Misión
                p.mb-0.text-center Es un escrito que sintetiza el propósito de una empresa y responde a preguntas como: ¿quién es la empresa? ¿A qué se dedica? ¿Para qué existe?
              
              .tarjeta.color-acento-botones.p-4(x="42%" y="6%" numero="+" style='border-radius: 10px; background-color: #FFE8C8')
                h5.mb-3.text-center Filosofía
                p.mb-0.text-center Compuesta por: 
                p.mb-0.text-center <strong>Valores: </strong> : son concebidos como declaraciones que realizan las empresas como sustento a su forma de ser y de hacer las cosas. Por ejemplo, la calidad, el respeto, el compromiso. 
                p.mb-0.text-center <strong>Principios corporativos: </strong>se refiere al conjunto de creencias y postulados que funcionan como guías orientadoras e inspiradoras en el quehacer de una organización.

              
              .tarjeta.color-acento-botones.p-4(x="71%" y="6%" numero="+" style='border-radius: 10px; background-color: #FFE8C8')
                h5.mb-3.text-center Normas
                p.mb-0.text-center El concepto más apropiado para definir el término, podría ser el que citan Hernández y Rodríguez, S., Palafox de Anda, G. & Aguado Cortés, C. (2020): “son las reglas administrativas de observancia obligatoria para la realización de una operación, procedimiento, programa o presupuesto” (p.256).
              
              .tarjeta.color-acento-botones.p-4(x="26%" y="95%" numero="+" style='border-radius: 10px; background-color: #FFE8C8')
                h5.mb-3.text-center Visión
                p.mb-0.text-center Se refiere al enunciado del estado del futuro deseado, a través de un texto: ¿dónde se visualiza la empresa en un horizonte de tiempo determinado? ¿Cómo producirá los resultados? ¿Cómo se enfrentará al cambio? ¿Cómo conseguirá ser competitiva?
              
              .tarjeta.color-acento-botones.p-4(x="81%" y="95%" numero="+" style='border-radius: 10px; background-color: #FFE8C8')
                h5.mb-3.text-center Objetivos estratégicos
                p.mb-0.text-center Representan los resultados que la empresa desea alcanzar y lograr; se deben establecer para un tiempo específico y ser definidos cuantitativamente. Ayudan a materializar la estrategia, establecen metas y ayudan a su cumplimiento y, además, unifican el lenguaje y alinean la organización. Para la construcción de los objetivos estratégicos es necesario tener presente la misión, la visión y los principios de la organización, de tal manera que se garantice la alineación y la coherencia.

       
    .row.mb-4.justify-content-center
      .col-lg-12
        .cajon.color-acento-botones.p-4
          p.mb-0 Estos temas corresponden a la denominada cultura organizacional, la cual es como el ADN de la empresa: la forma de ser y de hacer empresa, las creencias y todas aquellas variables que hacen que los empleados se identifiquen y busquen, desde su quehacer, aportar a un mismo fin.    
    p En compensación y proporcionando una continuidad con la construcción de la planeación estratégica, encontramos los siguientes elementos:
    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="fade-right")
          .crd_hover_txt--img
            figure
              img(data-aos="fade-up-right" src="@/assets/curso/temas/tarjetas/tarjeta1.svg", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Estrategias organizacionales 
            p.mb-0 Se relaciona con los planteamientos del cómo se pueden llegar a cumplir los objetivos. Pueden darse tantas estrategias como objetivos se planteen y son los vehículos para llevar las acciones al cumplimiento de los objetivos.

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tarjetas/tarjeta2.svg", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Programas o proyectos
            p.mb-0 Se refiere a la secuencia de actividades desplegadas para el desarrollo y materialización de la estrategia; aquí se plasman los tiempos requeridos y los responsables de estos proyectos.

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tarjetas/tarjeta3.svg", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Presupuestos
            p.mb-0 Son aquellas herramientas que permiten plasmar, de manera anticipada, los recursos requeridos (financieros y no financieros) para el cumplimiento de las actividades; por consiguiente, de las estrategias y de los objetivos.    

    br
    p Una vez se cumpla el paso de la planeación con sus respectivas variables y técnicas, se adquiere una claridad de hacia dónde va la empresa, cuáles son sus propósitos y finalidades, y se llega entonces al segundo paso del ciclo denominado <strong>“organización”.</strong>
    br
    #t_2_2.titulo-segundo.color-acento-contenido   
      h2 2.2 Organización

    p Una de las definiciones de organización es la de los autores Hernández y Rodríguez, S., Palafox de Anda, G. & Aguado Cortés, C. (2020), quienes indican que: es la <span style="color:blue">“fase del proceso administrativo en la cual se aplican las técnicas administrativas para estructurar una empresa u organización social; se definen las funciones por áreas sustantivas, departamentos y puestos; se establece la autoridad en materia de toma decisiones y la responsabilidad de los miembros que ocupan dichas unidades, y se definen las líneas de comunicación formal que faciliten la comunicación y la cooperación de los equipos de trabajo, a fin de alcanzar los objetivos y la estrategia” (p.271).</span>
    
    .row.justify-content-around.align-items-center.mb-4
      .col-8.col-sm-6.col-md-5.mb-4.mb-md-0
        img(data-aos="flip-right" src="@/assets/curso/temas/texto_destacado/img8.png")

      .col-md.col-lg-7
          p.mb-4 La organización permite optimizar tiempo y recursos, así como también el aumento de productividad, simplificando el trabajo y evitando los reprocesos y la duplicidad en responsabilidades o actividades. Las dos etapas fundamentales de la organización son:
          ol.lista-ol
            li 
              span.fas.fa-check(style='color: #f85316')
              | La división o asignación de trabajo, de tal manera que se clarifiquen responsabilidades y se delimiten actividades para acercarse, cada vez más, a la máxima eficiencia y eficacia, simplificando trabajos.
            li 
              span.fas.fa-check(style='color: #f85316')
              | La coordinación de las actividades, con el propósito de verificar su correcta ejecución.
    
    p Por otro lado, también se estructura a partir de unos principios que son los que aportan, a la “organización”, el hilo conductor como proceso administrativo. Dentro de estos principios se exponen los siguientes:

    SlyderF.mb-4(columnas="col-lg-12 col-xl-4")
      .tarjeta.color-acento-contenido.p-4(style='height:425px')
        .row.justify-content-center.mb-3
          .col-7.mb-3
            img(data-aos="flip-up" src='@/assets/componentes/avatar1.svg' alt='AvatarTop')
        h2.text-center Objetivo
        p.text-center Es la posibilidad de garantizar que todas las actividades que se pretendan desarrollar, se encuentren alineadas con las apuestas organizacionales.

      .tarjeta.color-acento-contenido.p-4(style='height:425px')
        .row.justify-content-center.mb-6
          .col-7.mb-3
            img(data-aos="zoom-in-up" src='@/assets/componentes/avatar2.svg' alt='AvatarTop')
        h2.text-center Especialización
        p.text-center El trabajo de cada persona debe estar delimitado hasta donde sea posible, asignando actividades y funciones específicas para su concentración y su destreza.

      .tarjeta.color-acento-contenido.p-4(style='height:425px')
        .row.justify-content-center.mb-6
          .col-7.mb-3
            img(data-aos="zoom-out-up" src='@/assets/componentes/avatar3.svg' alt='AvatarTop')
        h2.text-center Jerarquía
        p.text-center Resulta necesario, como parte fundamental de la organización, definir centros de autoridad que canalicen la información y garanticen la alineación de los equipos de trabajo hacia la institucionalidad.

      .tarjeta.color-acento-contenido.p-4(style='height:425px')
        .row.justify-content-center.mb-3
          .col-7.mb-3
            img(data-aos="zoom-out-up" src='@/assets/componentes/avatar4.svg' alt='AvatarTop')
        h2.text-center Unidad de mando
        p.text-center Al definir centros de autoridad, es preciso asignar un solo jefe a cada trabajador.

      .tarjeta.color-acento-contenido.p-4(style='height:425px')
        .row.justify-content-center.mb-3
          .col-7.mb-3
            img(data-aos="zoom-out-up" src='@/assets/componentes/avatar5.svg' alt='AvatarTop')
        h2.text-center Difusión
        p.text-center Se debe difundir, de manera abierta y clara, la información que surja desde los centros de autoridad

      .tarjeta.color-acento-contenido.p-4(style='height:425px')
        .row.justify-content-center.mb-3
          .col-7.mb-3
            img(data-aos="zoom-out-down" src='@/assets/componentes/avatar6.svg' alt='AvatarTop')
        h2.text-center Equilibrio
        p.text-center Debe existir un equilibrio entre la aplicación de las técnicas y los principios, para asegurar la correcta marcha global de la organización. 
  
    p En el ejercicio de la organización como proceso administrativo, también se encuentra la definición de la estructura organizacional, siendo esta la manera de establecer una arquitectura al interior de la empresa, indicando los cargos, las líneas de comunicación y de mando, las dependencias y la relación entre las mismas; esta herramienta debe ser construida y diseñada a la luz de la razón de ser de la empresa, su propósito superior y su actividad económica; por eso es importante realizar un análisis previo a variables, como el que se explica a continuación:
    
    .row.justify-content-around.align-items-center.mb-4
      .col-8.col-sm-6.col-md-5.mb-4
        img(data-aos="zoom-out-left" src="@/assets/curso/temas/texto_destacado/img9.png")

      .col-md.col-lg-7
        ol.lista-ol
          li 
            span.fas.fa-check(style='color: #f85316')
            | La estrategia organizacional: analiza la coherencia entre el mercado, sus cambios y los objetivos organizacionales.
          li 
            span.fas.fa-check(style='color: #f85316')
            | El modelo de estructura organizacional: cada vez es más común ver empresas que le apuestan a un modelo de estructura organizacional más flexible y poco tradicional.
          li 
            span.fas.fa-check(style='color: #f85316')
            | Los perfiles de puesto: validan que los perfiles de cargo correspondan con las necesidades de la estructura organizacional y que la definición de las funciones y las responsabilidades, se encuentren definidas de manera coherente con el cumplimiento de la estrategia organizacional
          li 
            span.fas.fa-check(style='color: #f85316')
            | El recurso humano: se deben tener en cuenta variables como la reubicación y rotación de personal, ante una posible adaptación, debido a una nueva estructura organizacional.

    p Es fundamental aclarar que no todas las estructuras organizacionales son iguales y que todo depende de la actividad económica, de su estilo de dirección y de organización; <strong>a continuación se presentan algunos modelos y tipos de estructuras:</strong>

    TabsC.color-acento-contenido.mb-4
      .py-3.py-md-4(titulo="Organización formal")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Organización formal
            p Funciona con un sistema de tareas concretas, con delegaciones específicas de autoridad y responsabilidad, en función de la rendición de cuentas. La modalidad formal es benéfica en términos de facilidad para determinar las políticas y los objetivos organizacionales; es una representación de organización fija y predecible, lo que posibilita anticipar logros a futuro.
        
          .col-md-6
            figure
              img(data-aos="fade-up" src='@/assets/curso/temas/texto_destacado/img10.svg', alt='Texto que describa la imagen')
      .py-3.py-md-4(titulo="Organización lineal")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Organización lineal
            p Es una organización simple y de estructura piramidal, donde cada líder recibe y comunica lo que sucede en cada estamento. Algunas de sus características son:
            .col-md.col-lg-7
            <ul>
              <li>
              <i style ="color: #f85316" class="fas fa-check "></i> Autoridad única.
              </li>
              br
              <li>
              <i style ="color: #f85316" class="fas fa-check"></i> Formas de comunicación lineales.
              </li>
              br
              <li>
              <i style ="color: #f85316" class="fas fa-check"></i> Decisiones centralizadas.
              </li>
            </ul>
        
          .col-md-6
            figure
              img(data-aos="fade-up" src='@/assets/curso/temas/texto_destacado/img11.svg', alt='Texto que describa la imagen')
      .py-3.py-md-4(titulo="Organización funcional")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Organización funcional
            p Sustituye a la organización lineal; cada colaborador ya no solo rinde cuentas a su jefe inmediato, sino a varios actores o compañeros de la empresa; algunas de sus características son:
            .col-md.col-lg-7
            <ul>
              <li>
              <i style ="color: #f85316" class="fas fa-check "></i> Autoridad dividida (funcional).
              </li>
              br
              <li>
              <i style ="color: #f85316" class="fas fa-check"></i> Línea directa de comunicación.
              </li>
              br
              <li>
              <i style ="color: #f85316" class="fas fa-check"></i> Decisiones descentralizadas.
              </li>
              br
              <li>
              <i style ="color: #f85316" class="fas fa-check"></i> Particular énfasis en la especialización
              </li>
            </ul>
          .col-md-6
            figure
              img(data-aos="fade-left" src='@/assets/curso/temas/texto_destacado/img12.svg', alt='Texto que describa la imagen')
      .py-3.py-md-4(titulo="Staff")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Staff
            p Es una fusión entre la lineal y la funcional; los órganos staff prestan asesoría a servicios especializados. Sus características son:
            .col-md.col-lg-7
            <ul>
              <li>
              <i style ="color: #f85316" class="fas fa-check "></i> Cada órgano reporta a un solo y único jefe, aplicando el principio de autoridad, pero cada órgano recibe asesoría y servicio especializado de los diferentes órganos de staff.
              </li>
              br
              <li>
              <i style ="color: #f85316" class="fas fa-check"></i> Líneas de comunicación más abiertas.
              </li>
              br
              <li>
              <i style ="color: #f85316" class="fas fa-check"></i> Se separan los órganos ejecutivos de los asesores.
              </li>
            </ul>
          .col-md-6
            figure
              img(data-aos="fade-left" src='@/assets/curso/temas/texto_destacado/img13.svg', alt='Texto que describa la imagen')
    separador
    br
    p Una vez definida la estructura organizacional, y teniendo en cuenta que la fase de organización no es más que la continuación de la fase de planeación en relación con los procesos administrativos, es importante reconocer esos tipos de descriptores o facilitadores en la división y asignación del trabajo. Es entonces que surge como herramienta la gestión administrativa, definida como el conjunto de acciones o tareas que buscan maximizar los resultados de la empresa con la búsqueda permanente del uso eficiente de los recursos humanos, financieros y materiales. 
    br
    br
    h3 
      i.fas.fa-square.me-3.cuadrado
      | Manual de funciones.
    br
    br
    .tarjeta.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-sm-10.col-md-3.col-lg-2
          img(data-aos="fade-up" src="@/assets/curso/temas/texto_destacado/img14.svg")
        .col-sm-12.col-md-8.col-lg-10
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
               p El manual de funciones representa la organización y la delimitación de funciones y responsabilidades de los cargos creados en la estructura organizacional; su propósito fundamental es el de definir, de manera clara y concisa, los alcances de los cargos para evitar reprocesos, además de documentar los diferentes puestos de trabajo; controlar y mejorar los sistemas de gestión, posibilitar la valoración de los cargos, integrar las competencias profesionales para la ubicación del correcto perfil profesional o técnico en cada nivel, elaborar planes de formación para los cargos y prevenir los riesgos asociados a los mismos.       
    br
    .col-md-5
      h6 En términos de contenidos, el documento (ficha) de manual de funciones, debe estar conformado de manera básica por:
    .col-md-12
      .row.justify-content-center.mb-4
        .col-lg-4
          figure
              img(data-aos="fade-down-right" src='@/assets/curso/temas/figuras/esquemaD.png')
        .col-lg-6
          AcordionA(tipo="a" clase-tarjeta="tarjeta color-secundario")
            .row(titulo="Propósito o finalidad del cargo ")
              .col-md-12.mb-4.mb-md-0
                p ¿Para qué existe?
                p <strong>Ejemplo:</strong> impulsar, mantener y desarrollar la gestión de la calidad total en la empresa.
            .row(titulo="Área de impacto en resultados")
              .col-md-12.mb-4.mb-md-0
              p ¿En qué ámbito impacta el área para la organización?
              p <strong>Ejemplo:</strong> resultados económicos y financieros o imagen de la empresa.
            .row(titulo="Tareas")
              .col-md-12.mb-4.mb-md-0
              p Hacen referencia al listado de actividades elementales que desarrolla un trabajador para el cumplimiento de su función.
              p <strong>Ejemplo:</strong> archivar documentación, responder llamadas, etc.
            .row(titulo="Funciones")
              .col-md-12.mb-4.mb-md-0
                p Se refiere a la agrupación de tareas de mayor complejidad que pueden ser de ejecución (buscan un fin concreto), directivas (su alcance es más estratégico e institucional), o empresariales (están más asociadas a los departamentos o áreas de la empresa).
                p <strong>Ejemplo:</strong> contratar personal (ejecución), tomar decisiones en materia de inversión (directiva).
            .row(titulo="Decisiones")
              .col-md-12.mb-4.mb-md-0
              p Establecen si el cargo tiene el proceso de toma de decisiones para definir el alcance de estas.
            .row(titulo="Condiciones de trabajo")
              .col-md-12.mb-4.mb-md-0
              p Algunos puestos de trabajo tienen, asociados a ellos, condiciones de trabajo con algunos riesgos de exposición como: humedad, calor extremo, peligrosidad, esfuerzo físico, entre otros; esto amerita que las capacidades físicas del trabajador que ocupe el cargo, sean especiales. Los riesgos plasmados en el manual, también permiten gestión adecuada y seguimiento para condiciones de seguridad y salud en el trabajo.
            row(titulo="Requerimientos del puesto")
              .col-md-12.mb-4.mb-md-0
              p Estos requerimientos hacen alusión al nivel de formación que requiere el cargo: nivel académico, grado de conocimientos técnicos y tecnológicos específicos, grado de experiencia o dominio operativo de la actividad a desarrollar, y conjunto de capacidades intelectuales, aptitudes, habilidades y características de personalidad.  
    br
    p Para mayor ilustración, a continuación se presenta un ejemplo de un manual de funciones:
    br
    .mx-auto.col-md-10
      .titulo-sexto.color-acento-contenido.p <strong>Tabla 1. </strong> Ejemplo manual de funciones
      .tabla-b.color-acento-botones
        .tabla-b__header
          h4.mb-0 MANUAL DE FUNCIONES
        table
          caption(style="text-align:center") IDENTIFICACIÓN DEL CARGO
          
        tr
          th(colspan='1' style="text-align:center") Denominación del cargo.
            p Coordinador operativo de comunicaciones
          th(colspan='2' style="text-align:center;") Categoría laboral
            p Coordinador operativo
        
        tr
          th(style="width: 375px; text-align:center") Departamento
            p Operativo
          th(style="width: 375px; text-align:center") No. Titulares
            p 1
          th(style="width: 375px; text-align:center") Jornada laboral
            p Mañana y tarde
        tr
          th(colspan='3' style="text-align:center;") FINALIDAD
        tr
          td(colspan='3') 
            p(style="text-align:center;") incluye personas cualificadas para ejercer labores de community manager, diseño gráfico y fotografía. Tiene la responsabilidad de asegurar el plan de comunicaciones, a través de campañas, para transmitir los mensajes que la empresa requiera difundir. Debe plantear la propuesta de presupuesto de inversión y, al mismo tiempo, debe hacer seguimiento y dar cumplimiento al presupuesto de operación para su área.  
            br
            p(style="text-align:center;") También tiene como funciones importantes: la comunicación interna asertiva y eficiente, crear campañas comunicativas para divulgar información de interés institucional y la coordinación del área de comunicaciones, así como la gestión de relaciones externas.

        tr
          th(colspan='3' style="text-align:center") ÁREAS DE RESULTADOS
        tr
          td(colspan='3') 
            <ul style="text-align:center"> 
              <li>
              <i style ="color: #f85316" class="fas fa-check "></i> Campañas de comunicación internas. 
              </li>
              br
              <li>
              <i style ="color: #f85316" class="fas fa-check"></i> Presupuestos para inversión en las campañas.
              </li>
              br
              <li>
              <i style ="color: #f85316" class="fas fa-check"></i> Gestión y administración de las relaciones externas de la empresa.
              </li>
              br
              <li>
              <i style ="color: #f85316" class="fas fa-check"></i> Control de presupuestos de operación.
              </li>
            </ul>
        tr
          th(colspan='3' style="text-align:center") ACCIONES
        tr
          td(colspan='3') 
            <ul style="text-align:center"> 
              <li>
              <i style ="color: #f85316" class="fas fa-check "></i> Planificar y proponer la política de comunicaciones para la empresa.
              </li>
              br
              <li>
              <i style ="color: #f85316" class="fas fa-check"></i> Asegurar el correcto desarrollo de campañas de comunicación interna y externa.
              </li>
              br
              <li>
              <i style ="color: #f85316" class="fas fa-check"></i> Planificar y proponer las inversiones financieras en materia de comunicaciones.
              </li>
              br
              <li>
              <i style ="color: #f85316" class="fas fa-check"></i> Junto con el responsable de mercadeo, planear la forma de comunicar y publicitar los servicios de la empresa.
              </li>
            </ul>
        tr
          th(colspan='3' style="text-align:center") EQUIPOS O VALORES A SU CARGO
        tr
          td(colspan='3') 
            <ul style="text-align:center"> 
              <li>
              <i style ="color: #f85316" class="fas fa-check "></i> Información confidencial de la empresa.
              </li>
              br
              <li>
              <i style ="color: #f85316" class="fas fa-check"></i> Equipo de oficina.
              </li>
            </ul>
        tr
          th(colspan='3' style="text-align:center") PERFIL
        tr
          th(style="text-align:center") Competencias
          th(colspan='2' style="text-align:center") Requisitos específicos
          tbody
        tr
          td(style="text-align:center") Educación
          td(colspan='2' style="text-align:center")
            <ul style="text-align:center"> 
              <li>
              <i style ="color: #f85316" class="fas fa-check "></i> Profesional en Comunicación Social - Periodismo
              </li>
              br
              <li>
              <i style ="color: #f85316" class="fas fa-check"></i> Especialista en comunicación corporativa.
              </li>
            </ul>
        tr
          td(style="text-align:center") Experiencia relacionada
          td(colspan='2' style="text-align:center") Mínimo 3 años en cargos similares.
    separador
    br
    .row
      .col-lg-12
        .cajon.color-acento-botones.p-4
          p.mb-0 Luego del planteamiento del manual de funciones, se hace necesario ahondar un poco más en las responsabilidades y en el paso a paso, para cumplir con las responsabilidades del cargo; es por esta razón, que se plantean aspectos relevantes de los procesos, procedimientos y sus consecuencias, como complemento para la correcta organización de la empresa.    
    br
    br
    h3 
      i.fas.fa-square.me-3.cuadrado
      | Manual de procesos y procedimientos
    br
    p El manual de procesos y procedimientos de una empresa u organización, es un documento que contiene información sobre cómo se deben llevar a cabo los procesos; esto permite y facilita el flujo adecuado del trabajo, a partir de la estandarización de los mismos. Es un documento que contiene pautas y reglas sobre cómo deben ser desarrollados ciertos procedimientos y posibilita a las empresas para dirigir sus operaciones, estrategias y flujos de trabajo hacia resultados óptimos.
      .tarjeta.p-4.p-md-2.mb-5
      .row.justify-content-around.align-items-center
        .col-8.col-sm-6.col-md-5.mb-4.mb-md-0
          img(data-aos="flip-right" src="@/assets/curso/temas/texto_destacado/img15.png")
        
        .col-md.col-lg-7
          p Algunas de las ventajas de contar con un manual de procesos y procedimientos son:
          <ul>
            <li>
            <i style ="color: #f85316" class="fas fa-check "></i> Ahorro de tiempo.
            </li>
            <li>
            <i style ="color: #f85316" class="fas fa-check"></i> Posibilita la aplicación de acciones de control interno y mejora continua
            </li>
            <li>
            <i style ="color: #f85316" class="fas fa-check"></i> Optimiza los procesos.
            </li>
            <li>
            <i style ="color: #f85316" class="fas fa-check"></i> Mejora la comunicación. 
            </li>
            <li>
            <i style ="color: #f85316" class="fas fa-check"></i> Delimita las responsabilidades de los cargos. 
            </li>
            <li>
            <i style ="color: #f85316" class="fas fa-check"></i> Mejora la imagen. 
            </li>
            <li>
            <i style ="color: #f85316" class="fas fa-check"></i> Permite establecer expectativas. 
            </li>
            <li>
            <i style ="color: #f85316" class="fas fa-check"></i> Puede ser una herramienta para capacitación. 
            </li>
          </ul>
      br
      p Antes de presentar la estructura del manual de procesos y procedimientos, es importante profundizar un poco sobre los conceptos que se encuentran involucrados en este documento.
      br
      .row
      .col-lg-12
        .cajon.color-primario
        .color-fondo.p-3
          p <strong>Proceso:</strong> se refiere a una serie de entradas que se combina con algunas actividades, para generar unas salidas o un producto. Un ejemplo de esto es el siguiente: para realizar un pastel, se cuenta con los ingredientes, las herramientas y el mecanismo de elaboración, para obtener como resultado el pastel; a esto se le denomina proceso.     
          br
          .col-md.col-lg-7
          p Existen 3 tipos de procesos:
          <ul>
            <li>
            <i style ="color: #f85316" class="fas fa-check "></i><strong> Estratégicos:</strong> son aquellos que están relacionados con la planificación estratégica de la organización. 
            </li>
            br
            <li>
            <i style ="color: #f85316" class="fas fa-check"></i><strong> Operativos:</strong> son los que están relacionados con la operación de la empresa.
            </li>
            br
            <li>
            <i style ="color: #f85316" class="fas fa-check"></i><strong> De apoyo:</strong> son los que dan soporte a la organización.
            </li>
          </ul>
    br
    p Para continuar con el ejemplo de la pastelería, se ilustrará el ejercicio, para conocer el mapa de procesos de la misma empresa.
    br
    .mx-auto.col-md-10
      .titulo-sexto.color-acento-contenido
        p.mb-0
          b Figura 3.
          br
          em Ejemplo mapa de procesos
      br
      figure
          img(data-aos="flip-right" src='@/assets/curso/temas/figuras/esquemaE.svg')
    br
    br
    .tarjeta.p-4.p-md-2.mb-5
      .row.justify-content-around.align-items-center          
        .col-md.col-lg-7
          p En los procesos estratégicos se incluyen la planeación y las finanzas, porque a partir de estas se despliegan los proveedores, productos, y el presupuesto que se requiere para desarrollar el plan. 
          br
          p En los operativos se definen compras, por la adquisición de materia prima, máquinas y productos asociados con la elaboración de los pasteles; producción para la fabricación misma de los pasteles, y ventas para la comercialización de los productos.
          br
          p En los procesos de apoyo se definen administración, mercadeo y contabilidad porque, si bien son muy importantes en el desarrollo del producto en su generalidad, para este caso se presentan como apoyo en el proceso.
          br
          p Una vez que se cuenta con el mapa de procesos, es importante asignar a un responsable o a un líder del desarrollo, quien será el encargado de velar por el cumplimiento, conjuntamente con el equipo que entrenará y guiará para el logro del objetivo.
        .col-8.col-sm-6.col-md-5.mb-4.mb-md-0
          img(data-aos="flip-up" src="@/assets/curso/temas/texto_destacado/img16.png")
    br
    TabsA.color-acento-contenido
      .tarjeta.color-acento-contenido-borde.p-4.color-fondo(titulo="PASO 1")
        
        .row
          .col-xl-3.mb-4
            figure
              img(data-aos="flip-up" src='@/assets/curso/temas/figuras/esquemaF.svg', alt='Texto que describa la imagen')
          .col-xl-6
            h4 PASO 1: Ficha del proceso 
            p Es la que describe las generalidades de cada proceso. El objetivo, entradas, salidas, cómo se medirá, entre otros.

      .tarjeta.color-acento-contenido-borde.p-4.color-fondo(titulo="PASO 2")
        .row
          .col-xl-3.mb-4
            figure
              img(data-aos="zoom-in-up" src='@/assets/curso/temas/figuras/esquemaG.svg', alt='Texto que describa la imagen')
          .col-xl-6
            h4 PASO 2: Flujograma
            p Ilustra, gráficamente, el recorrido que conlleva el proceso desde sus entradas y hasta sus salidas.

      .tarjeta.color-acento-contenido-borde.p-4.color-fondo(titulo="PASO 3")
        .row
          .col-xl-3.mb-4
            figure
              img(data-aos="zoom-in-up" src='@/assets/curso/temas/figuras/esquemaH.svg', alt='Texto que describa la imagen')
          .col-xl-6
            h4 PASO 3: Procedimiento
            p Se refiere al conjunto de actividades que constituyen el proceso, incluyendo un paso a paso de manera descriptiva.

      .tarjeta.color-acento-contenido-borde.p-4.color-fondo(titulo="PASO 4")
        .row
          .col-xl-3.mb-4
            figure
              img(data-aos="zoom-in-up" src='@/assets/curso/temas/figuras/esquemaI.svg', alt='Texto que describa la imagen')
          .col-xl-6
            h4 PASO 4: Actividades
            p Acciones que, en su desarrollo, aportan y generan valor a la organización.
    br
    br
    p Para la construcción de un flujograma, se debe tener en cuenta la representación simbólica que se presenta a continuación: 
    br
    .col-md-7.mx-auto.mb-4
      .tabla-a
        table
          tr
            th.table
              img(data-aos="zoom-in-up" src='@/assets/curso/temas/tarjetas/ElipseT1.svg', alt='')
            td Representa el incio y el fin del proceso
          tr
            th 
              img(data-aos="zoom-in-up" src='@/assets/curso/temas/tarjetas/RectánguloT1.svg', alt='')
            td Actividad o tarea.
          tr
            th 
              img(data-aos="zoom-in-up" src='@/assets/curso/temas/tarjetas/PolígonoT1.svg', alt='')
            td Representa la toma de una decision
          tr
            th 
              img(src='@/assets/curso/temas/tarjetas/LíneaT1.svg', alt='')
            td Indica la dirección secuencial de las actividades.
          tr
            th 
              img(src='@/assets/curso/temas/tarjetas/TrazadoT1.svg', alt='')
            td Indica la entrada y salida de datos. 

    br
    br
    p El flujograma comprende el paso a paso de los procesos, estimando momentos de decisión, de desarrollo de actividades, e indicando el principio y el fin de los procesos.
    br
    p Para el ejemplo de la pastelería, quedaría así:
    br
    .mx-auto.col-md-10
      .titulo-sexto.color-acento-contenido
        p.mb-0 
          b Figura 4.
          br
          em Flujograma ejemplo pastelerías
      br
      figure
          img(data-aos="zoom-out-up" src='@/assets/curso/temas/figuras/diagramaB.svg')
    br
    .row
      .col-lg-12
        .cajon.color-acento-botones.p-3
          p Se puede concluir que, en esta etapa del proceso administrativo, se realiza una identificación, clasificación, agrupación y asignación del trabajo, de los recursos y las responsabilidades, de tal forma que, cada integrante sepa qué se espera de su labor y cómo está aportando al logro del objetivo colectivo.
          p.mb-0 Una vez culminada la etapa de organización, se procede con la etapa de dirección.
    br
    separador
    #t_2_3.titulo-segundo.color-acento-contenido   
      h2 2.3 Dirección
    br
    .bloque-texto-g.color-primario.p-sm-4
      .bloque-texto-g__img(style="position:relative;background-color:#e8e8e8 !important;padding:1.5rem;margin:-1.5rem", data-aos="zoom-out-up")
        img.mx-auto(src='@/assets/curso/temas/WP_04.png' style="max-height:161px; width:171px;")
      .bloque-texto-g__texto.p-5
        p.mb-0 Cuando se habla de dirección, se hace referencia a unos elementos asociados al liderazgo, a la motivación, a los equipos de trabajo y a la comunicación en torno a la ejecución de los planes, de acuerdo con la estructura organizacional.
    br
    br
    p Ahondar en el significado de cada uno de los elementos:
    br
    TabsC.color-acento-contenido
      .py-3.py-md-4(titulo="Liderazgo")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Liderazgo
            p Implica ayudar, desde el rol directivo o líder, a los equipos de trabajo que componen la organización para trabajar con entusiasmo y, conjuntamente, alcanzar el éxito. El líder debe propiciar ambientes de trabajo favorables para que sus equipos aporten lo mejor de sí mismos y se sientan parte fundamental de la empresa.
        
          .col-md-6
            figure
              img(data-aos="zoom-out-up" src='@/assets/curso/temas/texto_destacado/img18.svg', alt='Texto que describa la imagen')
      
      .py-3.py-md-4(titulo="Motivación")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Motivación
            p La buena actitud de los trabajadores o empleados es fundamental para que realicen su trabajo con entusiasmo; por eso es importante que el líder genere ese estímulo permanente de confianza, desde lo individual, para impactar también colectivamente.

          .col-md-6
            figure
              img(data-aos="zoom-out-right" src='@/assets/curso/temas/texto_destacado/img19.svg', alt='Texto que describa la imagen')

      .py-3.py-md-4(titulo="Comunicación")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Comunicación
            p La comunicación es el canal que permite, a la organización, definir un entendimiento y unos mensajes claros; por eso es significativo que exista una comunicación efectiva que invite a los trabajadores a contribuir con el cumplimiento de los objetivos. Claves para esa comunicación asertiva: la empatía, el respeto y la confianza.
            
          .col-md-6
            figure
              img(data-aos="zoom-out-right" src='@/assets/curso/temas/texto_destacado/img20.svg', alt='Texto que describa la imagen')

      .py-3.py-md-4(titulo="Ejecución y supervisión de resultados")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Ejecución y supervisión de resultados
            p El seguimiento y la supervisión, permiten orientar acciones preventivas (antes de que suceda) y correctivas (una vez ya sucedido) a la hora del desarrollo de una actividad, para retomar el rumbo y la orientación hacia el cumplimiento de los objetivos propuestos.
            
            
          .col-md-6
            figure
              img(data-aos="zoom-out-left" src='@/assets/curso/temas/texto_destacado/img21.svg', alt='Texto que describa la imagen')

      .py-3.py-md-4(titulo="Toma de decisiones")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Toma de decisiones
            p Elegir el mejor recorrido para la organización, resulta ser una de las funciones más importantes que realiza el administrador, al analizar varias alternativas, con la finalidad de lograr los propósitos establecidos.
            
          .col-md-6
            figure
              img(data-aos="zoom-out-left" src='@/assets/curso/temas/texto_destacado/img22.svg', alt='Texto que describa la imagen')
    separador
    br
    h3 
      i.fas.fa-square.me-3.cuadrado
      | Tipos de direccion.
    br
    br
    p Las formas de administrar o dirigir, pueden variar de acuerdo con los tipos, formas o estilos de liderazgo; esto varía según la conformación y metodologías para realizar los procedimientos.
    br
    p Los tipos de dirección más conocidos son:
    br
    TabsA.color-acento-contenido
        .tarjeta.color-acento-contenido-borde.p-4(titulo="Coercitivo")
          .row
            .col-xl-7.p-4.color-fondo
              h4 Coercitivo 
              p El estilo de liderazgo coercitivo no tiene en cuenta la flexibilidad, la disciplina prevalece como su valor regente, debido a que impone ritmos de trabajo acelerados sin tener en cuenta elementos humanos de fatiga y bienestar; no hay negociación, no tiene en cuenta las iniciativas de los demás. Normalmente, un líder coercitivo es muy efectivo en momentos de crisis para implementar cambios en situaciones de emergencia, como por ejemplo un temblor o un incendio.
            .col-xl-5.mb-6
              figure
                img(data-aos="fade-up" src='@/assets/curso/temas/figuras/esquemaJ.svg', alt='Texto que describa la imagen')
        .tarjeta.color-acento-contenido-borde.p-4.color-fondo(titulo="Autocrático")
          .row
            .col-xl-12
              h4 Autocrático
              p Es aquel tipo de dirección donde la autoridad impone sus normas, criterios y decisiones, sin realizar consultas a sus colaboradores; motivo por el cual este estilo de liderazgo provoca ambientes de trabajo bajo tensión, en los que la disciplina y la inseguridad pueden ir de la mano. Se concentra el poder de decisión en una sola persona; dos ejemplos claros de este estilo de liderazgo son Adolfo Hitler y Fidel Castro.

        .tarjeta.color-acento-contenido-borde.p-4.color-fondo(titulo="Democrático")
          .row
            .col-xl-12
              h4 Democrático
              p En este modelo, la autoridad se encuentra en el grupo, es decir, se toman decisiones por unanimidad, permitiendo la participación del equipo de colaboradores que conforman la organización. Su conducta va orientada hacia las personas, se preocupa por las relaciones interpersonales dentro del equipo y necesidades ya sean de grupo o individuales. Los empleados sienten que son tenidos en cuenta, sin embargo, este modo de operar puede retrasar bastante la toma de decisiones, mientras se llega a un consenso.

        .tarjeta.color-acento-contenido-borde.p-4.color-fondo(titulo="Consultivo")
          .row
            .col-xl-12
              h4 Consultivo
              p Es un tipo de liderazgo que se encuentra entre el estilo autocrático y el democrático; el jefe intenta persuadir a su equipo de la decisión que se ha tomado y eso hace que el grupo sienta esta decisión como suya; otro escenario puede ser aquel donde el jefe presenta el problema o la necesidad, recoge sugerencias y toma la decisión adecuada. Este modelo se caracteriza por ser el más participativo y democrático.
    br
    .row.justify-content-around.align-items-center 
      .col-lg-11
        .cajon.color-acento-botones.p-3
           p Una vez se tiene el equipo de trabajo comprometido, en busca de la eficiencia, desarrollando actividades claras, con liderazgos y jerarquías definidas y apostando a un mismo fin, aparece el último paso del ciclo del proceso administrativo, que busca evaluar el ejercicio y, a través de esa evaluación, definir procesos de mejora y corrección. Es así como se le da acceso a la cuarta etapa denominada “control”.    
        
    br
    separador
    #t_2_4.titulo-segundo.color-acento-contenido   
      h2 2.4 Control
    .tarjeta.p-4.p-md-4.mb-2
      .row.justify-content-around.align-items-center
        .col-md.col-lg-7
          p.mb-4 El control consiste en evidenciar y evaluar que lo planeado, organizado y dirigido, se encuentre marchando de acuerdo con los objetivos organizacionales y señalando, a partir de este ejercicio de evaluación, las debilidades, los errores, e inclusive las potencialidades y, a partir de las acciones tomadas, el perfeccionamiento del proceso traducido en mayor eficiencia y efectividad. El proceso de control permite tomar decisiones en torno a cuáles son los objetivos por alcanzar, como sistema o como área; cómo va el desempeño de los equipos de trabajo con base en sus responsabilidades y las apuestas generales, identificación de riesgos y oportunidades, incluyendo el cambio de planteamiento del objetivo. Existen diferentes tipos de controles:
        .col-8.col-sm-6.col-md-5.mb-4.mb-md-0
          img( data-aos="fade-up" src="@/assets/curso/temas/texto_destacado/img23.svg")
    
        .col-sm-8.mb-8.mb-sm-0
          
          ol.lista-ol--cuadro
            li 
              .lista-ol--cuadro__vineta.color-acentob-fondo
                span 1
              p <strong>Preliminar y colectivo:</strong> se enfoca en la prevención de las desviaciones en la calidad y en la cantidad de recursos utilizados en la organización.
            li 
              .lista-ol--cuadro__vineta.color-acentob-fondo
                span 2
              p <strong>Concurrente o permanente:</strong> consiste en vigilar las operaciones en funcionamiento; cuando el control se aplica de manera permanente, la directiva puede corregir los problemas oportunamente, antes que se vuelvan irremediables y costosos.
            li 
              .lista-ol--cuadro__vineta.color-acentob-fondo
                span 3
              p <strong>Correctivo o de retroalimentación:</strong> este control se realiza una vez que la actividad ha llegado a su fin. La desventaja de este tipo de control es que cuando se recibe la información, el daño ya está hecho. Los informes financieros son un claro ejemplo de este tipo de control.
           
    br
    p Por otro lado, el control también abarca unas etapas, que pueden ilustrarse de la siguiente manera:
    br
    .mx-auto.col-md-10
      .titulo-sexto.color-acento-contenido
        p.mb-0
          b Figura 5.
          br
          em Etapas del control
      br
      figure
          img(data-aos="flip-up" src='@/assets/curso/temas/figuras/diagramaC.svg')
    
    br
      
    .tarjeta.p-4.p-md-2.mb-5
      .row.justify-content-around.align-items-center
        .col-md.col-lg-7
          p.mb-4 Con los resultados, la retroalimentación y las acciones correctivas, se da el cierre del proceso administrativo obteniendo, como resultado, una aplicación de teorías que indistintamente de su enfoque, muestran los resultados a nivel de logros alcanzados, con estructura científica, con análisis de variables internas y externas, y con equipos de trabajo comprometidos con el logro de sus objetivos tanto individuales, como organizacionales.
          .cajon.color-primario
          .color-fondo.p-3
            p.mb-0 El escenario práctico para la aplicación de la teoría que se ha presentado en este espacio, es precisamente la empresa que, sin haber profundizado en su origen y llegada a la historia, se ha convertido en el escenario propicio para los experimentos de autores, científicos y para el ejercicio de excelentes administradores y gerentes. Por esta razón, en este apartado, se presenta el concepto de “empresa”.     
          
        .col-8.col-sm-6.col-md-5.mb-4.mb-md-0
          img(data-aos="flip-up" src="@/assets/curso/temas/texto_destacado/img24.png")




</template>

<script>
export default {
  name: 'Tema2',
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
