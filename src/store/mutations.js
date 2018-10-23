
import {
  Data,
  Banner,
  Home,
  Types,
  Shiwu,
  LoginWay
} from './mutation-type'


export default {

  [Data](state, {data}) {
    state.data = data
  },
  [Banner](state, {banner}) {
    state.banner = banner
  },

}
