<template>
  <div v-if="all.length>0">
    <div class="title-container pa-6 mb-4">
      <div class="row center-xs">
        <div class="col-xs center-xs">
          <h1 class="text-size--h1 text-weight--700 text-color--white">
            The Rick and Morty
          </h1>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div id="infinite-wrapper">
        <div class="row center-xs">
          <div
            v-for="item in all"
            :key="item.id"
            class="col-sm-3 center-xs mb-4"
          >
            <nuxt-link
              :to="{name:'id',params:{id:item.id}}"
              class="text-decoration--none"
            >
              <hero-card
                :item="item"
                link
                hover
              />
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="totalCount"
      class="total-counter pa-2 text-color--white"
    >
      Загружено {{ currentCount }}/{{ totalCount }}
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
import HeroCard from '~/components/HeroCard'

export default {
  name: 'Index',
  components: { HeroCard },
  data: () => ({
    loading: false
  }),
  computed: {
    ...mapState('characters', ['all', 'page', 'totalCount', 'noMore']),
    ...mapGetters({ currentCount: 'characters/currentCount' })
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
    this.getCharacters({ page: this.page })
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    ...mapMutations({ setPage: 'characters/SET_PAGE' }),
    ...mapActions({ getCharacters: 'characters/getCharacters' }),
    async handleScroll () {
      const infiniteWrapper = document.getElementById('infinite-wrapper')

      if (infiniteWrapper.clientHeight - 400 - pageYOffset < 300) {
        if (!this.loading && !this.noMore) {
          try {
            this.loading = true
            await this.getCharacters({ params: { page: this.page } })
          } catch (e) {
            this.loading = false
          } finally {
            this.loading = false
          }
        }
      }
    }
  }
}
</script>

<style lang="scss">
.title-container {
  background-color: #35495e;
}

.total-counter {
  position: fixed;
  border-radius: 6px;
  bottom: 16px;
  right: 16px;
  background-color: rgba(0, 0, 0, .7);
}

.title {

}
</style>
