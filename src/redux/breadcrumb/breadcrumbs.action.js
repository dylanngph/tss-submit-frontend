import * as constants from "./breadcrumbs.contant";

export const postBreadcrumb = (payload, callback) => ({
    type: constants.BREADCRUMBS,
    payload,
    callback,
  });