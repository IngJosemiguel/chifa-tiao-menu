import { memo } from 'react';

const SearchBar = memo(function SearchBar({ search, setSearch }) {
    return (
        <div className="search-bar">
            <div className="search-bar__inner">
                <span className="search-bar__icon">🔍</span>
                <input
                    className="search-bar__input"
                    type="text"
                    placeholder="Buscar platos..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    inputMode="search"
                    autoComplete="off"
                />
            </div>
        </div>
    );
});

export default SearchBar;
