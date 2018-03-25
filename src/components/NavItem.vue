<template>
  <li
  :class="[item.class, {dropdown: hasChildren(item), open: hasChildren(item) && active }]"
  @mouseenter="active=true"
  @mouseleave="active=false">
    <div class="item">
      <tag
      v-for="(sub, subIndex) in item.items"
      :key="subIndex"
      :tagname="sub.href ? 'a' : 'span'"
      :props="{class: sub.class, attrs: {href: sub.href}}"
      :children="sub.text"></tag>
      <i class="iconfont" v-if="hasChildren(item)">&#xe615;</i>
    </div>
    <ul class="dropdown-menu" v-if="hasChildren(item)">
      <nav-item 
      v-for="(child, childIndex) in item.children"
      :key="childIndex"
      class="part"
      :item="child"></nav-item>
    </ul>
  </li>
</template>

<script>
import Tag from "./Tag.vue";
export default {
  name: 'NavItem',
  props: ['item'],
  components: { Tag },
  data () {
    return {
      active: false,
    }
  },
  methods: {
    hasChildren (item) {
      return item.children && item.children.length;
    }
  }
}
</script>

<style>

</style>
