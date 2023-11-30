import Axios from '@/common/api/interceptor';


export const callGetEmoji = <T>(postData:T) => Axios('get', '/v1/emoji', postData);