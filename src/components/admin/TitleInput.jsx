"use client";
export default function TitleInput({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Post Title"
      className="w-full text-3xl font-bold p-4 border-b-2 focus:outline-none focus:ring-0"
    />
  );
}
