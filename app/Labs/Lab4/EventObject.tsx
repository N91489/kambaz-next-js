"use client";
import { useState } from "react";
import React from "react";

interface SerializedEvent {
  target: string;
  type: string;
  timeStamp: number;
  bubbles: boolean;
  cancelable: boolean;
  defaultPrevented: boolean;
  eventPhase: number;
  isTrusted: boolean;
  [key: string]: unknown;
}

export default function EventObject() {
  const [event, setEvent] = useState<SerializedEvent | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const serializedEvent: SerializedEvent = {
      target: e.currentTarget.outerHTML,
      type: e.type,
      timeStamp: e.timeStamp,
      bubbles: e.bubbles,
      cancelable: e.cancelable,
      defaultPrevented: e.defaultPrevented,
      eventPhase: e.eventPhase,
      isTrusted: e.isTrusted,
    };
    setEvent(serializedEvent);
  };

  return (
    <div id="wd-event-object">
      <h2>Event Object</h2>
      <button
        onClick={handleClick}
        className="btn btn-primary"
        id="wd-display-event-obj-click"
      >
        Display Event Object
      </button>
      <pre>{JSON.stringify(event, null, 2)}</pre>
      <hr />
    </div>
  );
}
