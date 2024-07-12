import { renderHook, act } from '@testing-library/react';
import useEvents from '../../../src/hooks/useEvents'; 
// Mock the fetch function globally
global.fetch = jest.fn(() =>
  Promise.resolve({
    text: () => Promise.resolve('BEGIN:VEVENT\nSUMMARY:Sample Event\nEND:VEVENT')
  })
);

// Mock the ical library within the test scope
jest.mock('cal-parser', () => {
  const parseString = jest.fn(() => ({
    events: [
      { summary: 'Sample Event', dtstart: { value: new Date('2023-07-15T10:00:00') } }
    ]
  }));

  return {
    parseString
  };
});

describe('useEvents', () => {
  //let ical;
  beforeEach(() => {
    //ical = require('cal-parser');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch and parse events', async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        text: () => Promise.resolve('BEGIN:VEVENT\nSUMMARY:Sample Event\nEND:VEVENT')
      }));

      const { result } = renderHook(() => useEvents());
      
    // Wait for the useEffect to finish
    await act(async () => {
      // Assertions
      expect(result.current).toBeDefined();
      //expect(result.current.events).toHaveLength(1);
      //expect(result.current.events[0].summary).toBe('Sample Event');
      //expect(result.current.events[0].dtstart.value).toEqual(new Date('2023-07-15T10:00:00'));

      // Verify fetch was called correctly
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith(
      //'https://docs.google.com/document/d/1OcnWWt1qHaJWE-8v_FPtNO8DKviRQ7DMaqylupuvPXE/export?format=txt'  //static dev
      'https://docs.google.com/document/d/15CscXC8lA0vGlAn9ZxjCX8628f0wStX24wK1DhbxBu4/export?format=txt'  // prod
      );

      // Verify ical.parseString was called with the fetched data
      //const ical = require('cal-parser');
      //expect(ical.parseString).toHaveBeenCalledWith('BEGIN:VEVENT\nSUMMARY:Sample Event\nEND:VEVENT');
    });
  });

  it('should handle fetch errors', async () => {
    fetch.mockImplementationOnce(() => Promise.reject('Fetch error'));

    const { result } = renderHook(() => useEvents());

    // Wait for the useEffect to finish
    await act(async () => {
      // Assertions
      expect(result.current.events).toEqual([]);
    });
  });

  it('should handle ical parsing errors', async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        text: () => Promise.resolve('Invalid ical data')
      })
    );

    jest.doMock('cal-parser', () => ({
      parseString: jest.fn(() => {
        throw new Error('Parsing error');
      })
    }));

    const { result } = renderHook(() => useEvents());

    // Wait for the useEffect to finish
    await act(async () => {
      // Assertions
      expect(result.current.events).toEqual([]);
    });
  });
});
