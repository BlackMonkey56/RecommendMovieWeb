import api from '../../api'

// initial state
const state = {
  // shape: [{ id, title, genres, viewCnt, rating }]
  movieSearchList: [],
}

// actions
const actions = {
  async recommendSVD({commit},params){
    await api.recommendSVD(params)
  },
  async recommendKNN({commit},params){
    await api.recommendKNN(params)
  },
  async signup({ commit },params){
    await api.signup(params)
  },
  async searchMovies({ commit }, params) {
    const resp = await api.searchMovies(params)
    const movies = resp.data.map(d => ({
      id: d.id,
      title: d.title,
      genres: d.genres_array,
      viewCnt: d.view_cnt,
      rating: d.rrating,
      mcount : d.rgender,
      img : d.poster_path,
      overview : d.overview,
      year : d.year,
      count : d.occupationvalue,
      agecount : d.agevalue,

    }))

    commit('setMovieSearchList', movies)
  },
}

// mutations
const mutations = {
  setMovieSearchList(state, movies) {
    state.movieSearchList = movies.map(m => m)
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}