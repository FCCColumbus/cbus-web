import { renderHook, act } from '@testing-library/react';
import useCalendar from '../../../src/hooks/useCalendar';

describe('useCalendar', () => {
  it('should initialize with today\'s date if events are empty', () => {
    const events = [];
    //const { result } = renderHook(() => useCalendar([]));
    const { result } = renderHook(() => useCalendar(events));

    const today = new Date();
    act(() => {
      expect(result.current.selectedDate.toDateString()).toBe(today.toDateString());
      expect(result.current.displayedEvents).toEqual([]);
    });
  });

  it('should set the nearest future event date as the initial selected date if there are no events today', () => {
    const events = [
      { dtstart: { value: new Date('2023-07-15T10:00:00') } },
      { dtstart: { value: new Date('2023-07-20T10:00:00') } }
    ];

    const { result } = renderHook(() => useCalendar(events));

    expect(result.current.selectedDate.toDateString()).toBe('Thu Jul 20 2023');
    expect(result.current.displayedEvents.length).toBe(1);
  });

  it('should set today\'s date if there is an event today', () => {
    const today = new Date();
    const events = [
      { dtstart: { value: today } }
    ];

    const { result } = renderHook(() => useCalendar(events));

    expect(result.current.selectedDate.toDateString()).toBe(today.toDateString());
    expect(result.current.displayedEvents.length).toBe(1);
  });

  it('should set the last event date if all events are in the past', () => {
    const events = [
      { dtstart: { value: new Date('2022-07-15T10:00:00') } },
      { dtstart: { value: new Date('2022-07-20T10:00:00') } }
    ];

    const { result } = renderHook(() => useCalendar(events));

    expect(result.current.selectedDate.toDateString()).toBe('Wed Jul 20 2022');
    expect(result.current.displayedEvents.length).toBe(1);
  });

  it('should update the selected date and displayed events when setSelectedDate is called', () => {
    const events = [
      { dtstart: { value: new Date('2023-07-15T10:00:00') } },
      { dtstart: { value: new Date('2023-07-20T10:00:00') } }
    ];

    const { result } = renderHook(() => useCalendar(events));

    act(() => {
      result.current.setSelectedDate(new Date('2023-07-20T10:00:00'));
    });

    expect(result.current.selectedDate.toDateString()).toBe('Thu Jul 20 2023');
    expect(result.current.displayedEvents.length).toBe(1);
  });

  it('should return the correct class name for tiles with events', () => {
    const events = [
      { dtstart: { value: new Date('2023-07-15T16:00:00') } }
    ];

    const { result } = renderHook(() => useCalendar(events));
    const dateWithEvent = new Date('2023-07-15T13:00:00');
    const dateWithoutEvent = new Date('2023-07-16T13:00:00');

    act(() => {
      // Force a re-render to ensure memoized values are updated
      result.current.setSelectedDate(new Date('2023-07-15T13:00:00'));
    });

    expect(result.current.tileClassName({ date: dateWithEvent, view: 'month' })).toBe('event-tile');
    expect(result.current.tileClassName({ date: dateWithoutEvent, view: 'month' })).toBe('');
  });

  it('should select nearest future event date if today has no event and future events exist', () => {
    const threeDaysFromNowAt1PM = new Date(new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).setHours(13, 0, 0, 0));
    const aWeekFromNowAt1PM = new Date(new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).setHours(13, 0, 0, 0));

    const events = [
      { dtstart: { value: new Date('2023-07-15T13:00:00Z') } },  //event in the past
      { dtstart: { value: threeDaysFromNowAt1PM } }, // Future event
      { dtstart: { value: aWeekFromNowAt1PM } }// Another future event
    ];

    const { result } = renderHook(() => useCalendar(events));
    
    // Ensure the selectedDate is set to the nearest future event date
    const expectedDate = threeDaysFromNowAt1PM; // This should be the result of nearestFutureEventDate

    act(() => {
      expect(result.current.selectedDate.toLocaleDateString()).toBe(expectedDate.toLocaleDateString());
    });
  });
});
