/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setProgramFilter, setSearchTermFilter, setSortFilter, setYearFilter } from "../../features/filters/actions";
import { selectYears } from "../../selectors";
import { ProgramType, SortFilter } from "../../types";
import './FilterForm.css';

const FilterForm: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const years = useAppSelector(selectYears);
  const dispatch = useAppDispatch()

  const onSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  }

  useEffect(() => {
    dispatch(setSearchTermFilter(searchTerm));
  }, [searchTerm])

  return (
    <div className="flex-container">
      <div className="flex-item">
        <label>Filter by year</label>
        <select
          className="rounded p-1"
          name="year"
          id="year"
          onChange={(event: ChangeEvent<HTMLSelectElement>) => {
            dispatch(setYearFilter(+event.target.value));
          }}>
          <option value="0"> Select year </option>
          {
            years.map(item => {
              return <option key={item} value={item}>{item} </option>
            })
          }
        </select>
      </div>

      <div className="flex-item">
        <label>Filter by Program</label>
        <select
          className="rounded p-1"
          name="program"
          id="program"
          onChange={(event: ChangeEvent<HTMLSelectElement>) => {
            dispatch(setProgramFilter(event.target.value as ProgramType));
          }}>
          <option value=""> Select program </option>
          <option value="series"> Serie </option>
          <option value="movie"> Movie </option>
        </select>
      </div>

      <div className="flex-item">
        <label>Sort by </label>
        <select
          className="rounded p-1"
          name="order"
          id="order"
          onChange={(event: ChangeEvent<HTMLSelectElement>) => {
            dispatch(setSortFilter(event.target.value as SortFilter))
          }}>
          <option value="title"> Title </option>
          <option value="year"> Year </option>
        </select>
      </div>

      <div className="flex-item">
        <label>Filter by Program</label>
        <input className=""
          type="text"
          placeholder="Type Program title"
          name="searchTerm"
          value={searchTerm}
          onChange={onSearch} />
      </div>
    </div>
  )
}

export default FilterForm;