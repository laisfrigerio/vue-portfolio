<template>
  <article class="profile-skill">
    <div class="tech-skill">
      <h3>Habilidades</h3>
      <skill-table
        :items="techs"
        :totalItems="5"
      />
    </div>
    <div class="language-skill">
      <h3>Idiomas</h3>
      <skill-table
        :items="languages"
        :totalItems="5"
      />
    </div>
  </article>
</template>

<script>
import SkillTable from '@/components/SkillTable'

export default {
  name: 'ProfileSkills',
  components: {
    SkillTable
  },
  setup () {
    const languages = [
      { name: 'Português', level: 5 },
      { name: 'Inglês', level: 3 },
      { name: 'Alemão', level: 1 },
      { name: 'Espanhol', level: 1 }
    ]

    const techs = [
      { name: 'HTML', level: 5 },
      { name: 'CSS', level: 4 },
      { name: 'Javascript', level: 4 },
      { name: 'PHP', level: 4 },
      { name: 'SQL', level: 4 }
    ]

    return {
      languages,
      techs
    }
  }
}
</script>

<style scoped lang="scss">
  h3 {
    color: $white;
    font-family: $font-secondary;
    font-size: 11px;
    letter-spacing: 2px;
    line-height: 150%;
    margin-bottom: 10px;
    padding: 5px 0;
    position: relative;

    &:after {
      border-bottom: 4px solid $secondary;
      bottom: 0;
      content: '';
      left: 0;
      position: absolute;
      width: 35px;
    }
  }
</style>
