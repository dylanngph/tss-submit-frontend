let envRelease = 'sandbox'; // sandbox / staging / beta / production
const vesionApi = '/v1'; // v1 / v2

const tssAccount = {
    sandbox: 'https://sabxac.tss.vn',
    staging: 'https://stagac.tss.vn',
    beta: 'https://betaac.tss.vn',
    production: 'https://prodac.tss.vn'
}
export const API_ACCOUNT = tssAccount[envRelease]
export const API_ACCOUNT_VERSION = vesionApi;

const tssUser = {
    sandbox: 'https://sabxus.tss.vn',
    staging: 'https://stagus.tss.vn',
    beta: 'https://betaus.tss.vn',
    production: 'https://produs.tss.vn'
}
export const API_USER = tssUser[envRelease]
export const API_USER_VERSION = vesionApi;