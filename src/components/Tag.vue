<script>
export default {
  name: 'Tag',
  props: {
    tagname: {
      type: String,
    },
    props: {
      type: Object,
    },
    children: {
      type: [Array, String],
    }
  },
  render (createElement) {
    let tagname = this.tagname || 'a'
    return createElement(tagname, this.props, this.children);
  },

}
</script>
