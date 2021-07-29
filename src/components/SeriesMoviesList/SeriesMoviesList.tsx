import InfiniteScroll from "react-infinite-scroller";
import { Movie, Pagination, Serie, SeriesAndMoviesState } from "../../types";
import { SeriesMoviesItem } from "../SeriesMoviesItem";
import './SeriesMoviesList.css';

type SeriesMoviesListProps = {
  data: (Movie | Serie)[],
  pagination: Pagination,
  hasMoreData: boolean;
  dataStatus: SeriesAndMoviesState['status']
  loadMore: (page: number) => void
}

export const SeriesMoviesList: React.FC<SeriesMoviesListProps> = (props) => {
  const { data, hasMoreData, dataStatus, pagination, loadMore } = props;

  if (dataStatus === 'LOADING') {
    return <div className="text-center">
      Loading...
    </div>
  }

  if (dataStatus === 'ERROR') {
    return <div className="text-center">
      Something went wrong.
    </div>
  }

  if (!data.length && dataStatus === 'LOADED') {
    return (
      <div className="text-center">
        <p> No data were found</p>
      </div>
    )
  }

  return (
    <div id="infinite-scroll-container">
      <InfiniteScroll
        pageStart={pagination.currentPage}
        loadMore={loadMore}
        hasMore={hasMoreData}
        loader={<div className="loader" key={0}>Loading ...</div>}
        useWindow={true}
      >
        {data.map((item) => <SeriesMoviesItem key={item.title} item={item} />)}
      </InfiniteScroll>
    </div>
  )
}