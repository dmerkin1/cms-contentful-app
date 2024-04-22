import { format } from "date-fns";

export default function DateComponent({ dateString }: { dateString: string }) {
  return (
    <time dateTime={dateString} className="text-gray-500">
      <span className="font-bold text-black">Date:</span> {format(new Date(dateString), "LLLL	d, yyyy")}
    </time>
  );
}
