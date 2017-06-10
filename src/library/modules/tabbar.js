const state = {
  tabbars: [
    {'id': 1, 'className': 'fa fa-globe', 'name': '首页', 'linkTo': '/main'},
    {'id': 2, 'className': 'fa fa-star-o', 'name': '订阅', 'linkTo': '/subscribe'},
    {'id': 3, 'className': 'fa fa-globe', 'name': '', 'linkTo': '/play'},
    {'id': 4, 'className': 'fa fa-search', 'name': '发现', 'linkTo': '/find'},
    {'id': 5, 'className': 'fa fa-user-o', 'name': '我的', 'linkTo': '/my'}
  ]
}

const getters = {
  tabbars: state => state.tabbars
}

export default {
  state,
  getters
}
