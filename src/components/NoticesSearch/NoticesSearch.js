import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import css from './NoticesSearch.module.css'

import {SearchIcon, CrossSmallIcon} from '../../helpers/icons'




const NoticesSearch = ({ onFormSubmit }) => {
    const [query, setQuery] = useState('');

    useEffect(() => {
    if (!query) onFormSubmit(query);
  }, [onFormSubmit, query]);

  const submitHandler = e => {
    e.preventDefault();
   onFormSubmit(query); 
  };

    const onInputChange = e => {
        const searchQuery = e.target.value;
        setQuery(searchQuery);
    };
    return (
        <form className={css.form} onSubmit={submitHandler}>
            <input
                className={css.input}
                name="query"
                type="text"
                placeholder="Search"
                value={query}
                onChange={onInputChange}
            >
            </input>

            <button className={css.searchBtn} type="submit" query={query} aria-label="Submit">
                <SearchIcon />
            </button>

            <button className={css.clearBtn} type="button"
                onClick={() => setQuery('')}
                query={query}
                aria-label="Discard query">
                <CrossSmallIcon />
            </button>
        </form>
    )
};

NoticesSearch.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};

export default NoticesSearch;