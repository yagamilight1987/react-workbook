import numeral from 'numeral';

export default function Numeral({ value, format = '0a' }: { value: string | number; format?: string }) {
  return numeral(value).format(format);
}
