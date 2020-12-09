export const state = () => ({
  all: [],
  character: null,
  page: 1,
  totalCount: 0,
  noMore: false
})
export const getters = {
  currentCount: (state) => {
    return state.all.length
  }
}
export const mutations = {
  SET_PAGE: (state, payload) => {
    state.page = payload
  },
  SET_NO_MORE: (state, payload) => {
    state.noMore = payload
  },
  SET_TOTAL_COUNT: (state, payload) => {
    state.totalCount = payload
  },
  INCREMENT_PAGE: (state, payload) => {
    state.page++
  },
  SET_CHARACTERS_DATA: (state, payload) => {
    state.all = [...state.all, ...payload]
  },
  SET_CHARACTER_DATA: (state, payload) => {
    state.character = payload
  }
}
export const actions = {

  async getCharacter ({ commit }, payload) {
    const data = await this.$services.character.show(payload)
    commit('SET_CHARACTER_DATA', data)
    return data
  },
  async getCharacters ({ state, commit }, payload) {
    const data = await this.$services.character.index(payload)
    commit('SET_CHARACTERS_DATA', data.results)
    commit('SET_TOTAL_COUNT', data.info.count)
    // eslint-disable-next-line no-console
    console.log(state.page)
    if (data.info.pages > state.page) {
      commit('INCREMENT_PAGE')
    } else {
      commit('SET_NO_MORE', true)
    }
    return data
  }
}
