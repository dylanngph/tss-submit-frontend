import getUserInfo from "./getUserInfo.saga";
import putUserInfo from "./putUserInfo.saga";

const listSaga = [getUserInfo, putUserInfo]
export default listSaga