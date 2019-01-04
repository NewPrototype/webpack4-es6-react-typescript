import { message } from 'antd'
/**
 * 消息封装
 * @param {消息类型} type  success | loading | error
 * @param {提示文本} text
 * @param {显示时间} time
 */
export const messageUtil = (type: string, text: string, time: number=3) => {
    message.destroy();
    if (!type || !text || type == 'hide') {
        return
    }
    switch (type) {
        case "success":
        case "error":
        case "loading":
            message[type](text, time);
            return `${type}${text}${time}`
            break;
        default:
            return null
            break;
    }
};


export default messageUtil