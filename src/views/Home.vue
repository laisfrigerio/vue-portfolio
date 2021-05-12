<template>
  <section id="page" class="experience-data">
    <h3 class="title-03">Experiência Profissional</h3>
    <the-timeline>
      <the-timeline-item
        subtitle="Editora Gazeta do Povo,"
        period="Dezembro/2018 - Atualmente"
        title="Analista de Sistemas Júnior"
      >
        <ul class="list">
          <li> Desenvolvimento e manutenção do portal Gazeta do Povo e de seus verticais (viver-bem, haus, bom-gourmet, sempre família) com foco no front-end;</li>
          <li> Desenvolvimento da nova identidade visual do portal com foco no SEO, UX (User Experience) e implementação das páginas AMP (Accelerated Mobile Pages);</li>
          <li> Desenvolvimento e manutenção de sistemas internos, como backoffice's (CMS - Publicador de matérias, Festival Bom Gourmet).</li>
          <li> Desenvolvimento e manutentação do Mód. Financeiro integrando ao Gateway de Pagamento Ebanx (fintech Curitibana que processa pagamentos).</li>
        </ul>
      </the-timeline-item>

      <the-timeline-item
        subtitle="Agência Polvo"
        period="Janeiro/2018 - Novembro/2018,"
        title="Desenvolvedora Júnior / PHP Backend"
      >
        <ul class="list">
          <li> Promovida à desenvolvedora junior responsável por conceber API’s com o framework Laravel e integrar com aplicações desenvolvidas com o framework React JS;</li>
          <li> Líder do projeto denominado “PreviNEO” atuando junto com o gerente da equipe na análise e definição de requisitos, estimativas de horas e alocação de recursos.</li>
        </ul>
      </the-timeline-item>

      <the-timeline-item
        subtitle="Agência Polvo"
        period="Outubro/2017 - Dezembro/2017, "
        title="Estágiária / PHP Backend"
      >
        <ul class="list">
          <li> Manutenção de aplicações web desenvolvidas com o framework Polvo.</li>
        </ul>
      </the-timeline-item>

      <the-timeline-item
        subtitle="C3SL - Centro de Computação Científica e Software Livre"
        period="Setembro/2016 - Outubro/2017, "
        title="Pesquisadora"
      >
        <ul class="list">
          <li> Manutenção de aplicações web desenvolvidas com o framework Polvo.</li>
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
  name: 'Home',
  components: {
    TheTimeline,
    TheTimelineItem
  },
  setup () {
    const { setActive } = useHeader()

    onMounted(() => {
      setActive(HEADER.home)
    })
  }
}
</script>
