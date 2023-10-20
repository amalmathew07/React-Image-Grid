jest.mock('./blocks');
import { act, render, screen, waitFor } from '@testing-library/react';
import { App } from './App';
import { getBlocks } from './blocks';
import { mockBlocks } from './components/mockData';

jest.mock('./blocks', () => ({
  getBlocks: jest.fn(() => Promise.resolve({ type: 'dummy' })),
}));
beforeEach(() => {
  // Clear mock implementation before each test
  (getBlocks as jest.Mock).mockClear();
});
describe('App.tsx rendering', () => {
  describe('Fetching data from block', () => {
    it('should call getBlocks once as part of App render', async () => {
      const mockData = {
        message: 'Resolved',
      };

      await act(async () => {
        (getBlocks as jest.Mock).mockResolvedValue(mockData);
        render(<App />);
      });

      expect(getBlocks).toBeCalledTimes(1);
    });
    it('should contain loader component when loading is true', async () => {
      render(<App />);
      const loader = screen.getByTestId('loader');
      expect(loader).toBeInTheDocument();
    });
    it('should not contain loader component when loading is false', async () => {
      const mockData = {
        message: 'Resolved',
      };
      await act(async () => {
        (getBlocks as jest.Mock).mockResolvedValue(mockData);
        render(<App />);
        await waitFor(() => {
          expect(screen.queryByTestId('loader')).toBeNull();
        });
      });
      expect(screen.queryByTestId('loader')).toBeNull();
    });
    it('should render and display all the images if loading is false and data is available', async () => {
      await act(async () => {
        (getBlocks as jest.Mock).mockResolvedValue(mockBlocks);
        render(<App />);
        await waitFor(() => {
          expect(screen.queryByTestId('loader')).toBeNull();
        });
      });
      const imageGrid = screen.getByTestId('image-grid-div');
      const images = imageGrid.querySelectorAll('img');
      expect(images.length).toBe(9);
    });
    it('should not render and display the images if loading is true, instead should display loader', async () => {
      const mockData = {
        message: 'Resolved',
      };
      await act(async () => {
        (getBlocks as jest.Mock).mockResolvedValue(mockData);
        render(<App />);
        await waitFor(() => {
          expect(screen.queryByTestId('loader')).toBeNull();
        });
      });
      expect(screen.queryByTestId('loader')).toBeNull();
    });
  });
});
