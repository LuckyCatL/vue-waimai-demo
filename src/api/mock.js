import Mock from 'mockjs'
import homeApi from './mickData/homeApi'
import storeApi from './mickData/storeApi'

Mock.mock('/home/getHomeData',homeApi.getHomeData)
Mock.mock('/home/getStoreData',storeApi.getStoreData)