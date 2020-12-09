export default {
  methods: {
    getNested (obj, ...args) {
      const value = args.reduce((obj, level) => obj && obj[level], obj)
      return value || 'Неизвестно'
    }
  }
}
