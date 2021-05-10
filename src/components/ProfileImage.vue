<template>
  <article class="profile-image">
    <figure>
      <icon-cloud />
      <img
        alt="Caricatura de Rosto da autora do Portfolio"
        class="picture circle"
        src="https://avatars0.githubusercontent.com/u/20709086?s=460&u=13c9928ea02aa8349e70cac14ea211c40a8f80d9&v=4"
        title="Caricatura de Rosto da autora do Portfolio"
      />
    </figure>
  </article>
</template>

<script>
import IconCloud from '@/icons/Cloud'

export default {
  name: 'ProfileImage',
  components: {
    IconCloud
  }
}
</script>

<style scoped lang="scss">
  .profile-image {
    @extend %flex;
    @extend %flex-direction-row;
    @extend %justify-content-center;
    margin-bottom: 20px;

    figure {
      position: relative;
      img {
        &.circle {
          border-radius: 50%;
        }

        &.picture {
          background-color: $white;
          border: 3px solid $white;
          height: 100px;
          width: 100px;
        }
      }
    }
  }
</style>
