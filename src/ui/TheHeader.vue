<template>
  <header class="c-header">
    <ul>
      <li class="active"><router-link :to="{ name: 'Home' }">Início</router-link></li>
      <li><router-link :to="{ name: 'Education' }">Educação</router-link></li>
      <li><router-link :to="{ name: 'Projects' }">Projetos</router-link></li>
    </ul>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
  .c-header {
    background-color: transparent;
    height: 60px;
    margin-bottom: $margin-bottom-default;
    width: 100%;

    ul {
      @extend %flex;
      @extend %flex-direction-row;
      @extend %justify-content-flex-end;
      height: inherit;
      margin: 0 auto;
      max-width: 1179px;

      li {
        @extend %align-items-center;
        @extend %inline-flex;
        list-style: none;
        padding: 0 5px;

        a {
          color: $tertinary;
          font-weight: $bold;
          letter-spacing: 1px;
          padding: 8px 10px;
          text-decoration: none;
        }

        &.active {
          a {
            color: $secondary;
          }
        }

        &:hover {
          a {
            color: $white;
          }
        }
      }
    }
  }
</style>
