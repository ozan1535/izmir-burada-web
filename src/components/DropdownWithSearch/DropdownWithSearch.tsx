"use client";
import { useState, useRef, useEffect } from "react";
import { getFilteredNames, handleRemove, handleSelect } from "./helpers";

export default function DropdownWithSearch({
  items,
  selected,
  setSelected,
  placeholder,
}) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);
  const filteredNames = getFilteredNames(items, query);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full my-4" ref={wrapperRef}>
      <div
        className={`flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow-sm transition ring-1 ring-blue-300 hover:ring-blue-500 cursor-text`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
            setSelected(null);
          }}
          placeholder={placeholder}
          className="flex-1 bg-transparent focus:outline-none text-sm placeholder-gray-400"
        />
        {selected && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleRemove(setSelected, setQuery, setIsOpen);
            }}
            className="text-blue-500 hover:text-red-500 transition"
          >
            &times;
          </button>
        )}
      </div>

      {isOpen && (
        <ul className="absolute mt-1 z-10 bg-white w-full max-h-60 overflow-auto rounded-lg shadow-lg ring-1 ring-blue-300">
          {filteredNames.length > 0 ? (
            filteredNames.map((item, index) => (
              <li
                key={index}
                onClick={() =>
                  handleSelect(setSelected, setQuery, setIsOpen, item)
                }
                className={`px-4 py-2 text-sm cursor-pointer transition ${
                  selected?.id === item.id
                    ? "bg-blue-100 text-blue-700 font-semibold"
                    : "hover:bg-blue-50"
                }`}
              >
                {item.name}
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-sm text-gray-400">Bulunamadi...</li>
          )}
        </ul>
      )}
    </div>
  );
}
