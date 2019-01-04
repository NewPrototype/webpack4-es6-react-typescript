/*
 * @Author: heicao 
 * @Date: 2019-01-04 13:55:07 
 * @Last Modified by: heicao
 * @Last Modified time: 2019-01-04 13:56:20
 * 初始化接口
 */
import axios from './index';
/**
 * 
 * @param params  参数
 */
export const login = async (params:{}) => {
    return await axios.get('/login', { params });
}
