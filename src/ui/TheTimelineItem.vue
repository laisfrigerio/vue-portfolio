<template>
  <div class="timeline-item">
    <div class="box">
      <div class="header">
        <small>{{ period }} <strong>{{ subtitle }}</strong></small>
        <h4 class="title-04">{{ title }}</h4>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheTimelineItem',
  props: {
    subtitle: {
      default: '',
      required: true,
      type: String
    },
    period: {
      required: true,
      type: String
    },
    title: {
      required: true,
      type: String
    }
  }
}
</script>

<style scoped lang="scss">
  .timeline-item {
    position: relative;
    width: calc(100% - 10px);

    &:before {
      background-color: $secondary;
      border: 2px solid $secondary;
      border-radius: 50%;
      content: "";
      height: 7px;
      left: -15px;
      position: absolute;
      top: 5px;
      width: 7px;
    }

    &:not(:last-child) {
      &:after {
        content: "";
        border-left: 1px dashed $secondary;
        bottom: -25px;
        left: -10px;
        position: absolute;
        top: 5px;
      }
    }

    .box {
      background-color: #222;
      border-radius: 5px;
      color: $tertinary;
      margin: 0 0 10px 10px;
      padding: 10px 10px 10px 15px;
      position: relative;
    }
  }
</style>
