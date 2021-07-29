import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setCurrentPage } from "../../features/filters/actions";
import { loadSeriesAndMovies } from "../../features/seriesAndMovies/actions";
import { selectDataPaginated, selectDataStatus, selectorHasMoreData, selectPagination } from "../../selectors";
import FilterForm from "../FilterForm";
import { SeriesMoviesList } from "../SeriesMoviesList/SeriesMoviesList";
import './HomePage.css';

export const HomePage: React.FC = () => {
  const { isAuthenticated } = useAuth0();
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectDataPaginated);
  const hasMoreData = useAppSelector(selectorHasMoreData);
  const pagination = useAppSelector(selectPagination);
  const dataStatus = useAppSelector(selectDataStatus);

  useEffect(() => {
    dispatch(loadSeriesAndMovies())
  }, []);

  const loadMore = (page: number) => {
    dispatch(setCurrentPage(page))
  }

  if (!isAuthenticated) {
    return <Redirect to="/" />
  } else {
    return (
      <section className="home-page">
        <header>
          <FilterForm />
        </header>
        <div>
          <SeriesMoviesList
            pagination={pagination}
            loadMore={loadMore}
            dataStatus={dataStatus}
            hasMoreData={hasMoreData}
            data={data} />
        </div>
      </section>
    )
  }
}