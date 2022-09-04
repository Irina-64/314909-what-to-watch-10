import { render, screen } from '@testing-library/react';
import React from 'react';
import { ElementTestID } from '../../const/enums';
import { makeFakePlayerState } from '../../utilites/mocks/mocks';
import { testUtils } from '../../utilites/mocks/test-utilites';
import VideoItem from './video-item';

const {mockCurrentFilm} = testUtils();

const mockVideoRef = React.createRef<HTMLVideoElement>();

const mockPlayerState = makeFakePlayerState();

describe('Component: VideoElement', () => {
  it('should render correctly', () => {
    render(
      <VideoElement
        ref={mockVideoRef}
        movie={mockCurrentFilm}
        {...mockPlayerState}
      />
    );

    expect(screen.getByTestId(ElementTestID.Video)).toBeInTheDocument();
    expect(screen.getByTestId(ElementTestID.Video)).toHaveAttribute('poster', mockCurrentFilm.backgroundImage);
  });
});
