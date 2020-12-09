<template>
  <div class="container">
    <div class="row middle-xs fill-height">
      <div class="col-xs center-xs">
        <hero-card
          v-if="characterInfo"
          :item="characterInfo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import HeroCard from '~/components/HeroCard'

export default {
  name: 'Id',
  components: { HeroCard },
  async asyncData ({ $services, route }) {
    const characterInfo = await $services.character.show(route.params.id)
    return { characterInfo }
  },
  data: () => ({}),
  computed: {},

  mounted () {
  },
  methods: {}
}
</script>

<style scoped>

</style>
