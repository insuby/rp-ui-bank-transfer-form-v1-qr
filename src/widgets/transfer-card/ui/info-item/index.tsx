import './style.scss';
import { cx } from '@emotion/css';

import type {
  Dispatch,
  HTMLAttributes,
  ReactNode,
  SetStateAction,
} from 'react';

import { CopyButton } from '../../ui';

type InfoItemProps = {
  heading: ReactNode;
  text: string;
  copiedValue: string;
  setCopiedValue: Dispatch<SetStateAction<string>>;
} & HTMLAttributes<HTMLDivElement>;

export const InfoItem = ({
  heading,
  text,
  copiedValue,
  setCopiedValue,
  className,
}: InfoItemProps) => {
  return (
    <div className={cx('info-item', className)}>
      <h5 className="info-item__heading">{heading}</h5>
      <p className="info-item__text">{text}</p>
      <div className="info-item__copy">
        <CopyButton
          value={text}
          copiedValue={copiedValue}
          setCopiedValue={setCopiedValue}
        />
      </div>
    </div>
  );
};
