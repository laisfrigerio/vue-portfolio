<template>
  <table class="content">
    <tbody>
      <tr
        v-for="(item, indexItem) in items"
        :key="indexItem"
      >
        <th>{{ item.name }}</th>
        <td class="level">
          <div>
            <span
              v-for="count in totalItems"
              :key="count"
              :class="[
                count <= item.level ? 'fill' : ''
              ]"
            ></span>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'SkillTable',
  props: {
    items: {
      required: true,
      type: Array
    },
    totalItems: {
      required: true,
      type: Number
    }
  }
}
</script>

<style scoped lang="scss">
  table {
    &.content {
      margin-bottom: $margin-bottom-default;
    }

    th {
      color: $tertinary;
      font-size: 12px;
      text-align: left;
    }

    td {
      height: 20px;

      &.level {
        div {
          @extend %flex;
          margin: 0 0 0 20px;

          span {
            background-color: $tertinary;
            border-radius: 50%;
            height: 10px;
            width: 10px;

            &.fill {
              background-color: $secondary;
            }
            &:not(:last-child) {
              margin-right: 5px;
            }
          }
        }
      }
    }
  }
</style>
