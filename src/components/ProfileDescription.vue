<template>
  <article class="profile-description">
    <p>
      Olá, meu nome é Lais, tenho 25 anos e sou formada em Análise e Desenvolvimento de Sistemas
       pela UFPR com <strong>MELHOR</strong>  índice de desempenho acadêmico e pós-graduada em Engenharia de Software pela mesma instituição. Sou apaixonado por
       futebol, tendo o <strong>CORITIBA</strong> como o time do coração.
    </p>
  </article>
</template>

<script>
export default {
  name: 'ProfileDescription'
}
</script>

<style scoped lang="scss">
  p {
    color: $tertinary;
    font-size: 12px;
    line-height: $line-height-large;
    margin: 0 0 20px;
    padding-left: 15px;
    text-align: center;
  }

  strong {
    font-weight: $bold;
  }
</style>
