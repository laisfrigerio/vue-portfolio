<template>
  <aside>
    <profile-image />
    <profile-data />
    <profile-social-media />
    <profile-description />
    <profile-skill />
  </aside>
</template>

<script>
import ProfileData from '@/components/ProfileData'
import ProfileDescription from '@/components/ProfileDescription'
import ProfileImage from '@/components/ProfileImage'
import ProfileSkill from '@/components/ProfileSkill'
import ProfileSocialMedia from '@/components/ProfileSocialMedia'

export default {
  name: 'TheAside',
  components: {
    ProfileData,
    ProfileDescription,
    ProfileImage,
    ProfileSkill,
    ProfileSocialMedia
  }
}
</script>

<style scoped lang="scss">
  aside {
    width: 200px;
  }
</style>
