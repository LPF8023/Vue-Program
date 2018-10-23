/* api请求模块 */
import ajax from './ajax'

// 获取data数组
export const reqData = () => ajax('/data')

// 获取banner对象
export const reqBanner = () => ajax('/banner')

// 获取home对象
export const reqHome = () => ajax('/home')

// 获取shiwu对象
export const reqShiwu = () => ajax('/shiwu')

// 获取types对象
export const reqTypes = () => ajax('/types')



