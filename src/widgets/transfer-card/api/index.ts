import type { TransferCardData } from '../typings';

const mockData: { data: TransferCardData } = {
  data: {
    amount: 50000,
    currency: {
      id: 4,
      name: 'USD',
      code: 'USD',
      dimension: 2,
      minValue: 0,
      maxValue: 10000000,
    },
    nameAndAddress:
      'Simple solutions plus Co., Ltd.Office No. 161/51 Moo 10, Chalong Subdistrict, Mueang Phuket District Phuket 83130 ',
    bankName:
      'Kasikornbank.PCL Ha yeak Chalong Phuket branch 16/41-42 M. 8 T.Chalong A.Muang Phuket 83000',
    account: '561123412241223',
    swiftCode: 'KASITHBK',
    invoiceId: '00004-30-0524',
    type: 'DEPOSIT',
    expiresIn: '2024-05-30T13:56:06.077797Z',
    timerMinutes: 30,
    successUrl: null,
    cancelUrl: null,
    errorUrl: null,
  },
};

const isTest = true;

export class TransferApi {
  static readonly KEY = 'transfer';

  static async init(formId: string): Promise<{ data: TransferCardData }> {
    if (isTest) {
      return mockData;
    }

    return fetch(`/api/bank_transfer/v1/form/${formId}/init`, {
      method: 'POST',
    }).then((r) => r.json());
  }

  static async complete(formId: string): Promise<unknown> {
    return await fetch(`/api/bank_transfer/v1/form/${formId}/complete`, {
      method: 'POST',
    });
  }
}
