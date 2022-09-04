import { fireEvent, render, screen } from '@testing-library/react';
import { ComponentTestID, ComponentText } from '../../../../const/enums';
import PlaybackToggleButton from './play-toggle-button';

const mockHandlePlayButtonToggle = jest.fn();

describe('Component: PlayToggleButton', () => {
  it('should render correctly', () => {
    render(
      <PlayToggleButton handlePlayButtonToggle={mockHandlePlayButtonToggle}/>
    );

    expect(screen.getByTestId(ComponentTestID.PlayToggleButton)).toBeInTheDocument();
  });

  it('should have play text and icon if paused', () => {
    render(
      <PlayToggleButton handlePlayButtonToggle={mockHandlePlayButtonToggle}/>
    );

    expect(screen.getByText(ComponentText.Play)).toBeInTheDocument();
  });

  it('should have pause text and icon if playing', () => {
    render(
      <PlayToggleButton handlePlayButtonToggle={mockHandlePlayButtonToggle} isPlaying/>
    );

    expect(screen.getByText(ComponentText.Pause)).toBeInTheDocument();
  });

  it('should call handlePlayButtonToggle when clicked', () => {
    render(
      <PlayToggleButton handlePlayButtonToggle={mockHandlePlayButtonToggle} isPlaying/>
    );

    fireEvent.click(screen.getByTestId(ComponentTestID.PlaybackToggleButton));

    expect(mockHandlePlayButtonToggle).toBeCalledTimes(1);
  });

});
