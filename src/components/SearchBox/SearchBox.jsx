import css from "./SearchBox.module.css";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState, useId } from 'react'

    export default function SearchBox({ inputSearch, handleSearch }) {
      return (
        <div className={css.searchBox}>
          <label className={css.label}>
            Find contacts by name :
            <input
              className={css.input}
              type="text"
              value={inputSearch}
              onChange={(e) => handleSearch(e)}
            />
          </label>
        </div>
      );
    }