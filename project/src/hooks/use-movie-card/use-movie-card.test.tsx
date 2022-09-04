import { renderHook} from '@testing-library/react';
import { testUtils } from '../../utilites/mocks/test-utilites';
import { datatype } from 'faker';
import { act } from 'react-dom/test-utilites';
import useFilmCard from './use-movie-card';

const {wrapper} = testUtils();

describe('Hook: useFilmCard', () => {
  it('should return activeFilmId', async () => {
    const {result} = renderHook(() =>
      useFilmCard(), {wrapper}
    );

    expect(result.current.activeFilmId).toBe(null);
  });

  it('should return movie card mouse over handler', () => {
    const {result} = renderHook(() =>
      useFilmCard(), {wrapper}
    );

    const {
      handleFilmMouseOver,
    } = result.current;

    expect(handleFilmMouseOver).toBeInstanceOf(Function);
  });

  it('should set activeFilmId when handleMouseOver is called', async () => {
    const mockActiveFilmId = datatype.number();

    const {result} = renderHook(() =>
      useFilmCard(), {wrapper}
    );

    expect(result.current.activeFilmId).toBe(null);

    act(() => result.current.handleFilmMouseOver(mockActiveFilmId));

    expect(result.current.activeFilmId).toBe(mockActiveFilmId);
  });
});
