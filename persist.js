const util = require("util");
const fs = require('fs');
const ini = require('ini');
const shared_config_file_loc = require('./options').shared_config_file

function persistAWSCredentials(credentialData) {
  var aws_config = {
    "aws_access_key_id": credentialData['AccessKeyId'],
    "aws_secret_access_key": credentialData['SecretAccessKey'],
    "aws_session_token": credentialData['SessionToken']
  };
  util.promisify(fs.writeFile)(shared_config_file_loc, ini.stringify(aws_config, { section: 'saml' }));
  return credentialData;
}

module.exports = { persistAWSCredentials }