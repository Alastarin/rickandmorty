import characterService from '~/api/services/character'

export default $axios => ({
  character: characterService($axios)
})
