import { getSession, SupabaseClient } from '@/app/supabase-server';
// Import Session from Supabase types
import { Session, User } from '@supabase/supabase-js';
import { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import { NavigateFunction } from 'react-router-dom';

// Adjust the import path

interface EventCreatorProps {
  navigate: NavigateFunction;
  session: Session | null;
  supabase: SupabaseClient;
}

const EventCreator: React.FC<EventCreatorProps> = ({
  navigate,
  session,
  supabase
}) => {
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');

  async function createCalendarEvent() {
    console.log('Creating calendar event');
    const event = {
      summary: eventName,
      description: eventDescription,
      start: {
        dateTime: start.toISOString(),
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
      },
      end: {
        dateTime: end.toISOString(),
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
      }
    };

    try {
      const response = await fetch(
        'https://www.googleapis.com/calendar/v3/calendars/primary/events',
        {
          method: 'POST',
          headers: {
            Authorization: 'Bearer ' + session?.provider_token
          },
          body: JSON.stringify(event)
        }
      );

      const data = await response.json();
      console.log(data);
      alert('Event created, check your Google Calendar!');
    } catch (error) {
      console.error('Error creating calendar event:', error);
      alert('Error creating calendar event. Please try again.');
    }
  }

  function signOut() {
    supabase.auth.signOut();
    navigate('/');
  }

  return (
    <div className="App">
      <div style={{ width: '400px', margin: '30px auto' }}>
        {session ? (
          <>
            <h2>Hey there {session.user?.email}</h2>
            <p>Start of your event</p>
            <DateTimePicker onChange={setStart} value={start} />
            <p>End of your event</p>
            <DateTimePicker onChange={setEnd} value={end} />
            <p>Event name</p>
            <input type="text" onChange={(e) => setEventName(e.target.value)} />
            <p>Event description</p>
            <input
              type="text"
              onChange={(e) => setEventDescription(e.target.value)}
            />
            <hr />
            <button onClick={createCalendarEvent}>Create Calendar Event</button>
            <p></p>
            <button onClick={signOut}>Sign Out</button>
          </>
        ) : (
          <p>User not authenticated. Redirecting...</p>
        )}
      </div>
    </div>
  );
};

export default EventCreator;
