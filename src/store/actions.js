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






}
