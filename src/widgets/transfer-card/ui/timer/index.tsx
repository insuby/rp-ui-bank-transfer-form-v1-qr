import './style.scss';
import { cx } from '@emotion/css';

import { formatDuration, intervalToDuration, isPast } from 'date-fns';

import { useEffect, useState } from 'react';

const zeroPad = (value?: number, force = false): string => {
  if (value === undefined) {
    return force ? '00' : '';
  }

  return String(value).padStart(2, '0');
};

export const Timer = ({
  deadline,
  onFinish,
}: {
  deadline: Date;

  onFinish?(): void;
}) => {
  const [duration, setDuration] = useState(
    intervalToDuration({
      start: new Date(),
      end: deadline,
    }),
  );

  useEffect(() => {
    const interval = window.setInterval(() => {
      if (isPast(deadline)) {
        onFinish?.();
      } else {
        const newDuration = intervalToDuration({
          start: new Date(),
          end: deadline,
        });

        setDuration(newDuration);
      }
    });

    return () => window.clearInterval(interval);
  }, [deadline, onFinish]);

  if (duration.days) {
    return (
      <span>
        {formatDuration(duration, {
          format: ['days'],
        })}
      </span>
    );
  }

  const items = [
    zeroPad(duration?.hours),
    zeroPad(duration?.minutes, true),
    zeroPad(duration?.seconds, true),
  ];
  const isLastMinute =
    duration.hours === undefined && duration.minutes === undefined;

  return (
    <button
      className={cx('timer', {
        'border-red': isLastMinute,
        'text-red': isLastMinute,
      })}
      type="button"
    >
      {items.filter(Boolean).join(':')}
    </button>
  );
};
