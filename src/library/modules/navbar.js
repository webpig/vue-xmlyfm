const state = {
  navbars: [
    {'id': 1, 'linkTo': '/main/hot', 'name': '热门'},
    {'id': 2, 'linkTo': '/main/sort', 'name': '分类'},
    {'id': 3, 'linkTo': '/main/fine', 'name': '精品'},
    {'id': 4, 'linkTo': '/main/live', 'name': '直播'},
    {'id': 5, 'linkTo': '/main/broadcast', 'name': '广播'}
  ]
}
const getters = {
  navbars: state => state.navbars
}

export default {
  state,
  getters
}
