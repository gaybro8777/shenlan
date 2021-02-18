"use strict";
const merge = require("webpack-merge");
const prodEnv = require("./prod.env");

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://localhost:8110"',
  OSS_PATH: '"https://shenlan-file.oss-cn-beijing.aliyuncs.com"'
  // BASE_API: '"https://easy-mock.com/mock/5950a2419adc231f356a6636/vue-admin"'
});
