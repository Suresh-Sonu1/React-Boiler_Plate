import React, { Profiler, StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

function profilerCallback(
  id, // the "id" prop of the Profiler tree that has just committed
  phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
  actualDuration, // time spent rendering the committed update
  baseDuration, // estimated time to render the entire subtree without memoization
  startTime, // when React began rendering this update
  commitTime, // when React committed this update
  interactions // the Set of interactions belonging to this update
) {
  console.table({
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions: interactions.size,
  });
}

const contentElement = (
  <StrictMode>
    <BrowserRouter>
      <Profiler id="rootProfiler" onRender={profilerCallback}>
        <App />
      </Profiler>
    </BrowserRouter>
  </StrictMode>
);
const targetElement = document.getElementById('root');

ReactDOM.render(contentElement, targetElement);
