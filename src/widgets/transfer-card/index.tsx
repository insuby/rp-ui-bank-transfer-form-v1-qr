import './style.scss';

import { Numeric, Text } from '@eo-locale/react';
import { useState } from 'react';

import { SpbSvg } from 'widgets/transfer-card/spb-svg';

import { normalizeAmount } from './lib';
import image from './photo.png';
import type { TransferCardData } from './typings';
import { BackButton, InfoItem } from './ui';

type TransferCardProps = {
  data: TransferCardData;
  formId: string;
};

export const TransferCard = ({ data, formId }: TransferCardProps) => {
  const [copiedValue, setCopiedValue] = useState('');
  const [isInstructionVisible, setIsInstructionVisible] = useState(false);
  const [transferStatus, setTransferStatus] = useState<
    'succeed' | 'failed' | null
  >(null);

  const onInstructionClick = () => {
    setIsInstructionVisible(!isInstructionVisible);
  };

  const onIveSentClick = () => {
    setTransferStatus('succeed');
  };

  const onTryAgainClick = () => {
    setTransferStatus(null);
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

  if (transferStatus === 'succeed') {
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
            text={formId}
          />
        </div>
        <div className="transfer-card__footer">
          <Text id="status.success.footer" />
        </div>
      </div>
    );
  }

  if (transferStatus === 'failed') {
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
            text={formId}
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

  const normalizedAmount = normalizeAmount(data.amount, data.currency);

  return (
    <div className="transfer-card">
      <div className="transfer-card__header transfer-card__header_sbp">
        <SpbSvg />
      </div>
      <div className="transfer-card__body info">
        <InfoItem
          className="info-item_inverse"
          copiedValue={copiedValue}
          setCopiedValue={setCopiedValue}
          heading={<Text id="cardSBP.invoiceId" />}
          text={`Inv.:# ${data.invoiceId}`}
        />
        <InfoItem
          className="info-item_inverse"
          copiedValue={copiedValue}
          setCopiedValue={setCopiedValue}
          heading={<Text id="cardSBP.amount" />}
          textToCopy={String(normalizedAmount)}
          // @ts-expect-error
          text={
            <Numeric
              currency={data.currency.code}
              currencyDisplay="symbol"
              maximumFractionDigits={data.currency.dimension ?? 0}
              minimumFractionDigits={data.currency.dimension ?? 0}
              style="currency"
              value={normalizedAmount}
            />
          }
        />

        <div className="info-item">
          <h5 className="info-item__heading">
            <Text id="cardSBP.paymentMethod" html />
          </h5>
          <div className="info-item__text">
            <p className="info-item__text-sub">
              <span>-</span>
              <span style={{ whiteSpace: 'pre-line' }}>
                <a
                  className="info-item__text-link"
                  href="https://qr.nspk.ru/AS1A000TASPF08GG9E9RECI5QGHQHFDM?type=01&bank=100000000111&crc=923C"
                  target="_blank"
                >
                  <Text id="cardSBP.paymentMethod.tap" html />
                  &nbsp;
                </a>
                <Text id="cardSBP.paymentMethod.first" html />
              </span>
            </p>
            <p className="info-item__text-sub">
              <span>-</span>
              <span style={{ whiteSpace: 'pre-line' }}>
                <Text id="cardSBP.paymentMethod.second" html />
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="transfer-card__qr">
        <a
          className="info-item__text-link"
          href="https://qr.nspk.ru/AS1A000TASPF08GG9E9RECI5QGHQHFDM?type=01&bank=100000000111&crc=923C"
          target="_blank"
        >
          <img src={image} alt="qr-photo" />
        </a>
      </div>
      <div className="transfer-card__footer">
        <div className="transfer-card__alert alert">
          <div className="alert__text alert__text_sbp">
            <Text id="cardSBP.footer.warning" />
          </div>
        </div>
        <div className="transfer-card__actions">
          <button className="transfer-card__button" onClick={onIveSentClick}>
            <Text id="cardSBP.footer.button" />
          </button>
        </div>
      </div>
    </div>
  );
};
