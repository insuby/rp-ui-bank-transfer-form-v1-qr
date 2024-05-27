import './style.scss';

import { addMinutes } from 'date-fns';

import { Text } from '@eo-locale/react';
import { useState } from 'react';

import { BackButton, InfoItem, Timer } from './ui';

export const TransferCard = () => {
  const [copiedValue, setCopiedValue] = useState('');
  const [isInstructionVisible, setIsInstructionVisible] = useState(false);
  const [isTransferSucceed, setIsTransferSucceed] = useState<
    'succeed' | 'failed' | null
  >(null);

  const onInstructionClick = () => {
    setIsInstructionVisible(!isInstructionVisible);
  };

  const onIveSentClick = () => {
    setIsTransferSucceed('succeed');
  };

  const onTryAgainClick = () => {
    setIsTransferSucceed(null);
  };

  const onTimerFinish = () => {
    setIsTransferSucceed('failed');
  };

  if (isInstructionVisible) {
    return (
      <div className="transfer-card transfer-card_instruction">
        <div className="transfer-card__header">
          <BackButton onClick={onInstructionClick} />
          <h4 className="transfer-card__heading">
            <Text id="card.instruction.title" />
          </h4>
        </div>
        <div className="transfer-card__body">
          <ul className="transfer-card__instruction-list instruction-list">
            {[
              'instruction.first',
              'instruction.second',
              'instruction.third',
              'instruction.fourth',
              'instruction.fifth',
            ].map((item, index) => {
              return (
                <li key={index}>
                  <span className="instruction-list__index">{index + 1}</span>
                  <Text id={item} html />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }

  if (isTransferSucceed === 'succeed') {
    return (
      <div className="transfer-card transfer-card_status transfer-card_status-succeed">
        <div className="transfer-card__header">
          <h2 className="transfer-card__heading">
            <Text id="status.success" html />
          </h2>
          <p className="transfer-card__sub-text">
            <Text id="status.success.sub" />
          </p>
        </div>
        <div className="transfer-card__body info">
          <InfoItem
            className="info-item_inverse"
            copiedValue={copiedValue}
            setCopiedValue={setCopiedValue}
            heading={<Text id="card.invoiceId" />}
            text="123234rw-1233erjf-er2342-234234d-3245234"
          />
        </div>
        <div className="transfer-card__footer">
          <Text id="status.success.footer" />
        </div>
      </div>
    );
  }

  if (isTransferSucceed === 'failed') {
    return (
      <div className="transfer-card transfer-card_status transfer-card_status-failed">
        <div className="transfer-card__header">
          <h2 className="transfer-card__heading">
            <Text id="status.failed" html />
          </h2>
          <p className="transfer-card__sub-text">
            <Text id="status.failed.sub" />
          </p>
        </div>
        <div className="transfer-card__body info">
          <InfoItem
            className="info-item_inverse"
            copiedValue={copiedValue}
            setCopiedValue={setCopiedValue}
            heading={<Text id="card.invoiceId" />}
            text="123234rw-1233erjf-er2342-234234d-3245234"
          />
        </div>
        <div className="transfer-card__footer">
          <button className="transfer-card__button" onClick={onTryAgainClick}>
            <Text id="status.failed.button" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="transfer-card">
      <div className="transfer-card__header">
        <h2 className="transfer-card__heading">
          <Text id="card.heading" />
        </h2>
        <div
          className="transfer-card__instruction"
          onClick={onInstructionClick}
        >
          <Text id="card.instruction" />
        </div>
      </div>
      <div className="transfer-card__body info">
        <InfoItem
          copiedValue={copiedValue}
          setCopiedValue={setCopiedValue}
          heading={<Text id="card.amount" />}
          text={'10 000 USD'}
        />
        <InfoItem
          copiedValue={copiedValue}
          setCopiedValue={setCopiedValue}
          heading={<Text id="card.beneficiaryName" />}
          text={
            'Simple solutions plus Co., Ltd.Office No. 161/51 Moo 10, Chalong Subdistrict, Mueang Phuket District Phuket 83130 '
          }
        />
        <InfoItem
          copiedValue={copiedValue}
          setCopiedValue={setCopiedValue}
          heading={<Text id="card.beneficiaryBankName" />}
          text={
            'Kasikornbank.PCL Ha yeak Chalong Phuket branch 16/41-42 M. 8 T.Chalong A.Muang Phuket 83000'
          }
        />
        <InfoItem
          copiedValue={copiedValue}
          setCopiedValue={setCopiedValue}
          heading={<Text id="card.beneficiaryBankAccount" />}
          text={'Beneficiary’s bank account'}
        />
        <InfoItem
          copiedValue={copiedValue}
          setCopiedValue={setCopiedValue}
          heading={<Text id="card.beneficiaryBankSwift" />}
          text={'KASITHBK'}
        />
        <InfoItem
          copiedValue={copiedValue}
          setCopiedValue={setCopiedValue}
          heading={<Text id="card.paymentPurpose" />}
          text={'Inv.:# D00001-15-0524  '}
        />
      </div>
      <div className="transfer-card__footer">
        <div className="transfer-card__alert alert">
          <div className="alert__icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.4923 14.6874L11.6252 2.81239C11.4607 2.52679 11.224 2.28956 10.9387 2.12461C10.6534 1.95965 10.3297 1.8728 10.0001 1.8728C9.67061 1.8728 9.34689 1.95965 9.06161 2.12461C8.77632 2.28956 8.53955 2.52679 8.37515 2.81239L1.50796 14.6874C1.34114 14.9715 1.25248 15.2948 1.251 15.6243C1.24951 15.9538 1.33524 16.2778 1.49949 16.5635C1.66374 16.8491 1.90065 17.0862 2.18617 17.2507C2.47169 17.4151 2.79565 17.5011 3.12515 17.4999H16.8752C17.2047 17.5011 17.5286 17.4151 17.8141 17.2507C18.0997 17.0862 18.3366 16.8491 18.5008 16.5635C18.6651 16.2778 18.7508 15.9538 18.7493 15.6243C18.7478 15.2948 18.6592 14.9715 18.4923 14.6874ZM9.37515 8.12489C9.37515 7.95913 9.441 7.80016 9.55821 7.68295C9.67542 7.56574 9.83439 7.49989 10.0001 7.49989C10.1659 7.49989 10.3249 7.56574 10.4421 7.68295C10.5593 7.80016 10.6251 7.95913 10.6251 8.12489V11.2499C10.6251 11.4156 10.5593 11.5746 10.4421 11.6918C10.3249 11.809 10.1659 11.8749 10.0001 11.8749C9.83439 11.8749 9.67542 11.809 9.55821 11.6918C9.441 11.5746 9.37515 11.4156 9.37515 11.2499V8.12489ZM10.0001 14.9999C9.81473 14.9999 9.63347 14.9449 9.4793 14.8419C9.32513 14.7389 9.20497 14.5925 9.13401 14.4212C9.06306 14.2498 9.04449 14.0613 9.08066 13.8795C9.11684 13.6976 9.20613 13.5306 9.33724 13.3995C9.46835 13.2684 9.6354 13.1791 9.81725 13.1429C9.99911 13.1067 10.1876 13.1253 10.3589 13.1963C10.5302 13.2672 10.6766 13.3874 10.7797 13.5415C10.8827 13.6957 10.9376 13.877 10.9376 14.0624C10.9376 14.311 10.8389 14.5495 10.6631 14.7253C10.4872 14.9011 10.2488 14.9999 10.0001 14.9999Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="alert__text">
            <Text id="footer.warning" html />
          </div>
        </div>
        <div className="transfer-card__actions">
          <Timer
            deadline={addMinutes(new Date(), 3)}
            onFinish={onTimerFinish}
          />
          <button className="transfer-card__button" onClick={onIveSentClick}>
            <Text id="footer.button" />
          </button>
        </div>
      </div>
    </div>
  );
};
