import React from 'react';
import renderer from 'react-test-renderer';
import Events from '../../components/Events';
import * as useEventsModule from '../../hooks/useEvents';
import * as useCalendarModule from '../../hooks/useCalendar';

jest.mock('../../hooks/useEvents');
jest.mock('../../hooks/useCalendar');

describe('Events', () => {
  it('renders without events', () => {
    useEventsModule.default.mockReturnValue({ events: [] });
    useCalendarModule.default.mockReturnValue({
      selectedDate: new Date(),
      setSelectedDate: jest.fn(),
      displayedEvents: [],
      tileClassName: jest.fn(),
    });

    const tree = renderer.create(<Events />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // the rendering with events test is skipped for now.  Every successive month the snapshot will change, so the test will fail
  xit('renders with events', () => {
    const mockEvents = [
      {
        summary: { value: 'Event 1' },
        description: { value: 'This is event 1.' },
        dtstart: { value: new Date('2023-04-17T18:30:00') },
        location: { value: 'Location 1' },
        uid: { value: '1' },
        url: { value: 'https://example.com/event1' },
      },
    ];

    useEventsModule.default.mockReturnValue({ events: mockEvents });
    useCalendarModule.default.mockReturnValue({
      selectedDate: new Date(),
      setSelectedDate: jest.fn(),
      displayedEvents: mockEvents,
      tileClassName: jest.fn(),
    });

    //2024-07-11: https://github.com/jestjs/jest/issues/15150
    // https://react.dev/warnings/react-test-renderer: "react-test-renderer is deprecated...."
    // this needs to be converted to use  @testing-library/react  or similar
    const tree = renderer.create(<Events />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
