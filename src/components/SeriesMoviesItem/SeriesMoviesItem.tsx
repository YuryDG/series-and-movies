import { Movie, Serie } from "../../types"
import './SeriesMoviesItem.css';

type SeriesMoviesItemProps = {
  item: Movie | Serie;
}

export const SeriesMoviesItem: React.FC<SeriesMoviesItemProps> = ({ item }) => {
  return (
    <div className="item-container">
      <div className="image-container">
        <img
          height="250"
          src={item.image.url}
          alt={item.title} />
      </div>
      <div className="content">
        <p className="info">
          <span className="title">{item.title}</span>
          <span className="type">
            {item.programType === 'movie' ? 'Movie' : 'Serie'} - {item.releaseYear}</span>
        </p>
        <p>{item.description}</p>
      </div>
    </div>
  )
}
