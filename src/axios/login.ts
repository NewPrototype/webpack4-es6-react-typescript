/*
 * @Author: heicao 
 * @Date: 2019-01-04 13:55:37 
 * @Last Modified by: heicao
 * @Last Modified time: 2019-01-04 16:14:16
 * 登陆接口
 */
import ax from './index';

export const login = async (params:{}) => {
    return await ax.get('/getlogin', { params });
}


export default {
    login,
}