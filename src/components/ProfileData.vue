<template>
    <div class="profile-data">
      <h1 class="author-name">
        <icon-glass />
        Lais Frigério
      </h1>
      <h2 class="career">Software Developer</h2>
      <h2 class="email">
        <icon-email />
        laaisfrigerio@gmail.com
      </h2>
    </div>
</template>

<script>
import IconEmail from '@/icons/Email'
import IconGlass from '@/icons/Glass'

export default {
  name: 'ProfileData',
  components: {
    IconEmail,
    IconGlass
  }
}
</script>

<style scoped lang="scss">
  .profile-data {
    @extend %align-items-center;
    @extend %flex-direction-column;
    @extend %flex;
    @extend %justify-content-center;
    margin-bottom: 20px;

    .author-name {
      @extend %align-items-center;
      @extend %flex-direction-column;
      @extend %flex;
      color: $white;
      font-size: 20px;
      margin-bottom: 5px
    }

    .career {
      color: $tertinary;
      font-size: 12px;
    }

    .email {
        @extend %align-items-center;
        @extend %flex;
        color: $secondary;
        font-size: 10px;
        margin-top: 5px;
    }
  }
</style>
