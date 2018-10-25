import {
  reqData,
  reqBanner,
  reqHome,
  reqShiwu,
  reqTypes
} from '../api'
import {
  Data,
  Banner,
  Home,
  Types,
  Shiwu,
  LoginWay
} from './mutation-type'


export default {

  // 异步获取data信息
  async getData ({commit} ,cb) {
    const result = await reqData()
    commit(Data, {data:result.data})
    cb && cb()
  },
  // 获取首页banner信息
  async getBanner ({commit}, cb) {
    const result = await reqBanner()
    commit(Banner, {banner:result.focusList})
    cb && cb()
  },
  // 获取home信息
  async getHome ({commit}, cb) {
    const result = await reqHome()
    commit(Home, {result})
    cb && cb()
  },

  // 获取shiwu信息
  async getShiwu ({commit}, cb) {
    const result = await reqShiwu()
    commit(Shiwu, {result})
    cb && cb()
  },

  // 获取types信息
  async getTypes ({commit}, cb) {
    const result = await reqTypes()
    commit(Types, {result})
    cb && cb()
  },

  // 设置loginWay
  setLoginWay({commit},phoneLogoin) {
    commit(LoginWay,{phoneLogoin})
  }



}
