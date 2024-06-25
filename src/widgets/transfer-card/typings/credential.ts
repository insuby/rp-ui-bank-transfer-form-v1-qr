export type CredentialType =
  | 'link'
  | 'image'
  | 'value'
  | 'bank_name'
  | 'swift_code'
  | 'owner';

export type Credential = {
  value: any;
  credentialType: `credential.${CredentialType}`;
  paramType: any;
};
