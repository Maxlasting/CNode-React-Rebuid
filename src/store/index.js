import createApi from '../model/create-api.js'

const data = {
  state_requestTopicLoaded: false,
  state_indexTopicsData: [],
  state_topicDetailData: {},

  state_requestLoginLoading: false,
  state_userLoginData: null
}

const mutations = {
  mu_toggleTopicRequestLoaded (state, payload) {
    return { ...state, state_requestTopicLoaded: payload.data }
  },
  mu_setIndexTopicsData (state, payload) {
    return { ...state, state_indexTopicsData: payload.data }
  },
  mu_setTopicDetailData (state, payload) {
    return { ...state, state_topicDetailData: payload.data }
  },

  mu_toggleLoginRequestLoaded (state, payload) {
    return { ...state, state_requestLoginLoading: payload.data }
  },
  mu_setUserLoginData (state, payload) {
    return { ...state, state_userLoginData: payload.data }
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
      type: 'mu_toggleTopicRequestLoaded',
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
      type: 'mu_toggleTopicRequestLoaded',
      data: true
    }
  )
  resolve()
})


export const ac_getTopicDetailData = (id) => dispatch => new Promise(async (resolve) => {
  dispatch(
    {
      type: 'mu_toggleTopicRequestLoaded',
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
      type: 'mu_toggleTopicRequestLoaded',
      data: true
    }
  )
  resolve()
})

export const ac_userLogin = ({ username, password }) => dispatch => new Promise(async (resolve) => {
  dispatch(
    {
      type: 'mu_toggleLoginRequestLoaded',
      data: true
    }
  )

  const res = await createApi.api_userLogin({ username, password })

  dispatch(
    {
      type: 'mu_setUserLoginData',
      data: res.data.data
    }
  )
  dispatch(
    {
      type: 'mu_toggleLoginRequestLoaded',
      data: false
    }
  )
  resolve()
})

export const ac_checkLoginStatus = () => dispatch => new Promise(async (resolve) => {
  const res = await createApi.api_checkLoginStatus()
  dispatch(
    {
      type: 'mu_setUserLoginData',
      data: res.data.data
    }
  )
})

export const ac_userLogout = () => dispatch => new Promise(async (resolve) => {
  await createApi.api_userLogout()
  dispatch(
    {
      type: 'mu_setUserLoginData',
      data: null
    }
  )
})
