import type { TransferCardData } from '../typings';

const mockData: { data: TransferCardData } = {
  data: {
    amount: 100000,
    currency: {
      id: 1,
      name: 'RUB',
      code: 'RUB',
      dimension: 2,
      minValue: 0,
      maxValue: 9,
    },
    invoiceId: '6ee50fb1-455a-4003-b4a0-23f142fbdfea',
    type: 'DEPOSIT',
    expiresIn: '2025-06-24T14:33:42.817575Z',
    timerMinutes: 30,
    successUrl: null,
    cancelUrl: null,
    errorUrl: null,
    paymentMethod: 'BANK_TRANSFER_QR_SBP',
    credentials: [
      {
        value:
          'https://www.istockphoto.com/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/qr-%D0%BA%D0%BE%D0%B4-%D0%B8%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F-gm828088276-134655309',
        credentialType: 'credential.link',
        paramType: 'S',
      },
      {
        value:
          'https://s0.rbk.ru/v6_top_pics/media/img/0/92/756363896441920.png',
        credentialType: 'credential.image',
        paramType: 'S',
      },
    ],
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
