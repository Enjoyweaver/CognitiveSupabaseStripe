'use client';

import { getSession } from '@/app/supabase-server';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import React, { useState } from 'react';

dotenv.config(); // Load environment variables from .env.local

interface EventFormData {
  title: string;
  description: string;
  startTime: string;
  endTime: string;
}

interface Props {
  session: Session;
}

const Event: React.FC = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const supabase = createClient(supabaseUrl || '', supabaseKey || '');
  const [formData, setFormData] = useState<EventFormData>({
    title: '',
    description: '',
    startTime: '',
    endTime: ''
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const createCalendarEvent = async (session: Session | undefined) => {
    console.log('Creating calendar event');
    const { title, description, startTime, endTime } = formData;

    const event = {
      summary: title,
      description: description,
      start: {
        dateTime: new Date(startTime).toISOString(),
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
      },
      end: {
        dateTime: new Date(endTime).toISOString(),
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
      }
    };

    // Check if there's a valid session before making the API call
    if (session && session.provider_token) {
      try {
        const response = await fetch(
          'https://www.googleapis.com/calendar/v3/calendars/primary/events',
          {
            method: 'POST',
            headers: {
              Authorization: 'Bearer ' + session.provider_token,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(event)
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          alert('Event created, check your Google Calendar!');
        } else {
          console.error('Error creating event:', response.statusText);
          // Handle errors...
        }
      } catch (error) {
        console.error('Error creating event:', error);
        // Handle other errors...
      }
    } else {
      console.error('No valid session available.');
      // Handle the case where there's no valid session (user not authenticated)
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      // Call your function to create the Google Calendar event and pass the session
      await createCalendarEvent(session);
    } catch (error) {
      console.error('Error creating event:', error);
      // Handle other errors...
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="startTime">Start Time:</label>
        <input
          type="datetime-local"
          id="startTime"
          name="startTime"
          value={formData.startTime}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="endTime">End Time:</label>
        <input
          type="datetime-local"
          id="endTime"
          name="endTime"
          value={formData.endTime}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Create Event</button>
    </form>
  );
};

export default Event;
