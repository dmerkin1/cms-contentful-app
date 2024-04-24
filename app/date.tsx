import { format } from 'date-fns';
import { DateComponentProps } from '@/lib/types';

export default function DateComponent({ dateString, formatString = "LLLL d, yyyy", showLabel = true }: DateComponentProps) {
  return (
    <time dateTime={dateString} className="text-gray-500">
      {showLabel && <span className="font-bold text-black">Date: </span>}
      {format(new Date(dateString), formatString)}
    </time>
  );
}
