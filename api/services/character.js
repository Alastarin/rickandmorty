const resource = '/character'
export default $axios => ({
  index (payload = null) {
    return $axios.$get(`${resource}`, payload)
  },

  show (id) {
    return $axios.$get(`${resource}/${id}`)
  },

  create (payload) {
    return $axios.$post(`${resource}`, payload)
  },

  update (id, payload) {
    return $axios.$post(`${resource}/${id}`, payload)
  },

  delete (id) {
    return $axios.$delete(`${resource}/${id}`)
  }
})
