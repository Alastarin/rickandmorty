import qs from 'qs'
export default function ({ $axios, redirect }) {
  $axios.defaults.paramsSerializer = (params) => {
    return qs.stringify(params, { arrayFormat: 'comma' })
  }

  $axios.onRequest((config) => {
    // eslint-disable-next-line no-console
    console.log('Making request to ' + config.url)
  })

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
