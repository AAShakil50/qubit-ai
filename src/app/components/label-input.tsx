import { josefin } from "../_lib/fonts";

export default function LabelInput({
  label,
  type,
  name,
  value,
  onChange,
}: {
  label: string;
  type: string;
  name: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <>
      <label htmlFor={name} className="text-2xl my-2 mt-8">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder="No input"
        onChange={(e) => onChange(e)}
        value={value}
        className={`${josefin.className} border-2 border-gray-200 bg-slate-50 w-72 sm:w-96 rounded-md p-4`}
      />
    </>
  );
}
