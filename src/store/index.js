import createApi from '../model/create-api.js'

const data = {
  state_requestLoaded: false,
  state_indexTopicsData: [],
  state_topicDetailData: {}
}

const mutations = {
  mu_toggleRequestLoaded (state, payload) {
    return { ...state, state_requestLoaded: payload.data }
  },
  mu_setIndexTopicsData (state, payload) {
    return { ...state, state_indexTopicsData: payload.data }
  },
  mu_setTopicDetailData (state, payload) {
    return { ...state, state_topicDetailData: payload.data }
  }
}

export default function reducer (state = data, payload) {
  const { type } = payload

  if (mutations[type]) state = mutations[type](state, payload)

  return state
}

export const ac_getIndexTopicsData = (params) => dispatch => new Promise(async (resolve) => {
  dispatch(
    {
      type: 'mu_toggleRequestLoaded',
      data: false
    }
  )
  const res = await createApi.api_getIndexTopicsData(params)
  dispatch(
    {
      type: 'mu_setIndexTopicsData',
      data: res.data.data
    }
  )
  dispatch(
    {
      type: 'mu_toggleRequestLoaded',
      data: true
    }
  )
  resolve()
})


export const ac_getTopicDetailData = (id) => dispatch => new Promise(async (resolve) => {
  dispatch(
    {
      type: 'mu_toggleRequestLoaded',
      data: false
    }
  )
  const res = await createApi.api_getTopicDetailById(id)
  dispatch(
    {
      type: 'mu_setTopicDetailData',
      data: res.data.data
    }
  )
  dispatch(
    {
      type: 'mu_toggleRequestLoaded',
      data: true
    }
  )
  resolve()
})
