import { render } from '@testing-library/react';
import { SeriesMoviesItem } from '../SeriesMoviesItem';
import { mockDataMovies } from '../../../mocks';

describe('SeriesMoviesItem', () => {
  it('should render a movie title', () => {
    const { getByText } = render(<SeriesMoviesItem item={mockDataMovies[0]} />)
    expect(getByText('Billions')).toBeInTheDocument();
  })

  it('type and year should be on the document', () => {
    const { getByText } = render(<SeriesMoviesItem item={mockDataMovies[0]} />)
    expect(getByText('Movie - 2016')).toBeInTheDocument();
  })

  it('should find the item description', () => {
    const { getByText } = render(<SeriesMoviesItem item={mockDataMovies[0]} />)
    expect(getByText('Billions Description')).toBeInTheDocument();
  })
})