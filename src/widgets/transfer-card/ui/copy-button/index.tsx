import './styles.scss';
import { cx } from '@emotion/css';

import { useCopyToClipboard } from 'usehooks-ts';

import type { Dispatch, SetStateAction } from 'react';

export const CopyButton = ({
  value,
  copiedValue,
  setCopiedValue,
}: {
  value: string;
  copiedValue: string;
  setCopiedValue: Dispatch<SetStateAction<string>>;
}) => {
  const [copied, copy] = useCopyToClipboard();

  const onClick = () => {
    if (copiedValue !== value) {
      copy(value);
      setCopiedValue(value);
      return;
    }
    copy('');
  };

  return (
    <span
      className={cx('copy-button', {
        'copy-button_copied': copiedValue === copied,
      })}
      onClick={onClick}
    >
      {copiedValue !== copied ? 'copy' : 'copied'}
    </span>
  );
};
