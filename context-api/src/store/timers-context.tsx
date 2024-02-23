import { type ReactNode, createContext, useContext, useReducer } from 'react';

export type Timer = {
  name: string;
  duration: number;
}

type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

const initialState: TimersState = {
  isRunning: true,
  timers: []
};

type TimersContextValue = TimersState & {
  addTimer: (timerData: Timer) => void,
  startTimers: () => void,
  stopTimers: () => void
};

const TimersContext = createContext<TimersContextValue | null>(null);

export function useTimersContext() {
  const timersCtx = useContext(TimersContext);

  if (timersCtx === null) {
    throw new Error('Something went wrong!');
  }

  return timersCtx;
}

type TimersContextProviderProps = {
  children: ReactNode;
};

type AddTimerACtion = {
  type: 'ADD_TIMER';
  payload: Timer;
}

type StartTimersACtion = {
  type: 'START_TIMERS';
}

type StopTimersACtion = {
  type: 'STOP_TIMERS';
}

type Action = AddTimerACtion | StartTimersACtion | StopTimersACtion;

function timersReducer(state: TimersState, action: Action): TimersState {
  switch (action.type) {
    case 'START_TIMERS': {
      return {
        ...state,
        isRunning: true
      }
    }
    case 'STOP_TIMERS': {
      return {
        ...state,
        isRunning: false
      }
    }
    case 'ADD_TIMER': {
      return {
        ...state,
        timers: [
          ...state.timers,
          {
            name: action.payload.name,
            duration: action.payload.duration
          }
        ]
      }
    }
    default: {
      return state;
    }
  }
}

export default function TimersContextProvider({ children }: TimersContextProviderProps) {
  const [timersState, dispatch] = useReducer(timersReducer, initialState);

  const ctx: TimersContextValue = {
    timers: timersState.timers,
    isRunning: timersState.isRunning,
    addTimer(timerData: Timer) {
      dispatch({ type: 'ADD_TIMER', payload: timerData });
    },
    startTimers() {
      dispatch({ type: 'START_TIMERS' });
    },
    stopTimers() {
      dispatch({ type: 'STOP_TIMERS' });
    }
  }

  return (
    <TimersContext.Provider value={ctx}>
      {children}
    </TimersContext.Provider>
  )
}

