<template>
  <aside>
    <profile-image />
    <profile-data />
    <profile-social-media />
    <article class="profile-description"></article>
    <article class="profile-skill"></article>
  </aside>
</template>

<script>
import ProfileData from '@/components/ProfileData'
import ProfileImage from '@/components/ProfileImage'
import ProfileSocialMedia from '@/components/ProfileSocialMedia'

export default {
  name: 'TheAside',
  components: {
    ProfileData,
    ProfileImage,
    ProfileSocialMedia
  }
}
</script>

<style scoped lang="scss">
  aside {
    width: 200px;
  }
</style>
