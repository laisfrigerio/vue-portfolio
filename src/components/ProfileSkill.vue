<template>
  <article class="profile-skill">
    <div class="tech-skill">
      <h3 class="title-03">Habilidades</h3>
      <skill-table
        :items="techs"
        :totalItems="5"
      />
    </div>
    <div class="language-skill">
      <h3 class="title-03">Idiomas</h3>
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
  .profile-skill {
    @extend %flex;
    @extend %flex-direction-column;
  }

  @media #{$media-max777} {
    .profile-skill {
      @include flex-direction-row;
      @include justify-content-space-around;
    }
  }

  @media #{$media-max409} {
    .profile-skill {
      @include align-items-center;
      @include flex-direction-column;
    }
  }
</style>
