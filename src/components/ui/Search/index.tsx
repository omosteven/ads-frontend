import { useCallback } from "react";
import Icon from "../Icon";
import "./Search.scss";
import debounce from "lodash.debounce";

interface SearchProps {
  className?: string;
  placeholder?: string;
  isIconRight?: boolean;
  onChange?: Function;
  value?: string;
  id?: string;
  name?: string;
  invertStyle?: boolean;
  useDebounce?: boolean;
}

const Search = (props: SearchProps) => {
  const {
    isIconRight,
    placeholder,
    className,
    onChange,
    value,
    id,
    name,
    invertStyle,
    useDebounce,
  } = props;

  const debouncedSearch = useCallback(
    debounce((query: string) => onChange?.(query), 500),
    // eslint-disable-next-line
    [onChange]
  );

  const performSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (useDebounce) {
      debouncedSearch(value);
    } else {
      onChange?.(value);
    }
  };

  return (
    <>
      <div
        className={`search-input ${
          invertStyle ? "search-input-invert" : ""
        } ${className}`}
      >
        {!isIconRight && <Icon icon="search" className="icon" />}
        <input
          type="search"
          placeholder={placeholder ? placeholder : "Search..."}
          className={isIconRight ? "input-shift" : ""}
          onChange={performSearch}
          // onChange={(e) => onChange?.(e.target.value)}
          value={value}
          id={id}
          name={name}
        />
        {isIconRight && <Icon icon="search" className="icon" />}
      </div>
    </>
  );
};

export default Search;
