<template>
  <section id="page" class="education-data">
    <h3 class="title-03">Educação</h3>
    <the-timeline>
      <the-timeline-item
        period="Março/2019 - Dezembro/2020"
        title="Especialização em Engenharia de Software, UFPR"
      >
        <ul class="list">
          <li> Desenvolvimento de software com o foco na linguagem de programação JAVA tanto para web quanto para dispositivos móveis utilizando como metodologia métodos ágeis;</li>
          <li> Curso aberto para a aprendizagem de novas tecnologias, como o framework javascript Angular 8 e Flutter para dispositivos móveis.</li>
        </ul>
      </the-timeline-item>

      <the-timeline-item
        period="Concluído em Dezembro/2017"
        title="Superior em Análise e Desenvolvimento de Sistema, UFPR"
      >
        <ul class="list">
          <li> Análise, definição e documentação de requisitos;</li>
          <li> Avaliando e definindo banco de dados;</li>
          <li> Desenvolver e manter sistemas financeiros e administrativos;</li>
          <li> Desenvolvimento mobile e web.</li>
        </ul>
      </the-timeline-item>

      <the-timeline-item
        period="Concluído em Dezembro/2014"
        title="Ensino Técnico em Informática, Opet"
      >
        <ul class="list">
          <li> Introdução banco de dados utilizando o gerenciador de banco de dados MySQL;</li>
          <li> Introdução ao sistema web (HTML/CSS);</li>
          <li> Introdução à programação funcional em C++ e programação orientada a objetos;</li>
          <li> Desenvolvimento de aplicações desktop em Java.</li>
        </ul>
      </the-timeline-item>
    </the-timeline>
  </section>
</template>

<script>
import { onMounted } from 'vue'

import TheTimeline from '@/ui/TheTimeline'
import TheTimelineItem from '@/ui/TheTimelineItem'

import useHeader from '@/hooks/useHeader'
import { HEADER } from '@/utils/const'

export default {
  name: 'Education',
  components: {
    TheTimeline,
    TheTimelineItem
  },
  setup () {
    const { setActive } = useHeader()

    onMounted(() => {
      setActive(HEADER.education)
    })
  }
}
</script>

<style>

</style>
