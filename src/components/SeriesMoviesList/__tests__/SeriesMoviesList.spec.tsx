import { render } from '@testing-library/react';
import { SeriesMoviesList } from '../SeriesMoviesList';
import { mockDataSeries, mockEmptyState } from '../../../mocks';

describe('SeriesMoviesList', () => {
  it('Should be loading', () => {
    const { container } = render(
      <SeriesMoviesList
        data={[]}
        dataStatus="LOADING"
        pagination={mockEmptyState.filters.pagination}
        hasMoreData={false}
        loadMore={jest.fn()}
      />)
    expect(container).toMatchSnapshot()
  })

  it('should show no data message', () => {
    const { container } = render(
      <SeriesMoviesList
        data={[]}
        dataStatus="LOADED"
        pagination={mockEmptyState.filters.pagination}
        hasMoreData={false}
        loadMore={jest.fn()}
      />)
    expect(container).toMatchSnapshot()
  })

  it('should show error message when error', () => {
    const { container } = render(
      <SeriesMoviesList
        data={[]}
        dataStatus="ERROR"
        pagination={mockEmptyState.filters.pagination}
        hasMoreData={false}
        loadMore={jest.fn()}
      />)
    expect(container).toMatchSnapshot()
  })

  it('should show data when everything is ok', () => {
    const { container } = render(
      <SeriesMoviesList
        data={mockDataSeries}
        dataStatus="LOADED"
        pagination={mockEmptyState.filters.pagination}
        hasMoreData={false}
        loadMore={jest.fn()}
      />)
    expect(container).toMatchSnapshot()
  })
})