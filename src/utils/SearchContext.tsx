import { createContext, useState, ReactNode } from "react";

interface SearchContextType {
  readonly search: string;
  updateSearch: (text: string) => void;
  emptySearch: () => void;
}

export const SearchContext = createContext<SearchContextType>({
  search: "",
  updateSearch: () => null,
  emptySearch: () => null,
});
const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState<string>("");

  const updateSearch = (text: string) => {
    setSearch(text);
  };

  const emptySearch = () => {
    setSearch("");
  };

  const contextValue: SearchContextType = {
    search,
    updateSearch,
    emptySearch,
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
