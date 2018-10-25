
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
  [Home](state, {result}) {
    const {home} = result
    state.home = home
  },
  [Shiwu](state, {result}) {
    const {detail} = result
    state.shiwu = detail
  },
  [Types](state, {result}) {
    const {nav} = result
    state.types = nav
  },
  [LoginWay](state, {phoneLogoin}) {
    state.loginWay = phoneLogoin
  },

}
