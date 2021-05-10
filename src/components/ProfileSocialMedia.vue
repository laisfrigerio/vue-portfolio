<template>
  <div class="profile-social-media">
    <a target="_blank" title="Página pessoal do Facebook" href="https://www.facebook.com/lais.frigerio">
      <icon-facebook />
    </a>
    <a target="_blank" title="Repositório no github" href="https://github.com/laisfrigerio">
      <icon-github />
    </a>
    <a target="_blank" title="Página pessoal do Instagram" href="https://www.instagram.com/laisfrigerio/">
      <icon-instagram />
    </a>
    <a target="_blank" title="Página do perfil no Linkedin" href="https://www.linkedin.com/in/laisfrigerio/">
      <icon-linkedin />
    </a>
  </div>
</template>

<script>
import IconFacebook from '@/icons/Facebook'
import IconGithub from '@/icons/Github'
import IconInstagram from '@/icons/Instagram'
import IconLinkedin from '@/icons/Linkedin'

export default {
  name: 'ProfileSocialMedia',
  components: {
    IconFacebook,
    IconGithub,
    IconInstagram,
    IconLinkedin
  }
}
</script>

<style scoped lang="scss">
  .profile-social-media {
    @extend %align-items-center;
    @extend %flex-direction-row;
    @extend %flex;
    @extend %justify-content-center;
    margin-bottom: 20px;

    a {
      text-decoration: none;

      svg {
        height: 20px;
        margin-right: 5px;
        width: 20px;
      }
    }
  }
</style>
