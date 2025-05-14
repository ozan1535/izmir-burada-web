export const getFilteredNames = (items, query) => {
  return items.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
};

export const handleSelect = (setSelected, setQuery, setIsOpen, item) => {
  setSelected(item);
  setQuery(item.name);
  setIsOpen(false);
};

export const handleRemove = (setSelected, setQuery, setIsOpen) => {
  setSelected(null);
  setQuery("");
  setIsOpen(false);
};
