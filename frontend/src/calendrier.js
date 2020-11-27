import React from 'react';
import Calendrier from 'react-calendar';
import './calendrier.css';

import {useState} from 'react';

function Calendar() {
    const [dateState, setDateState] = useState (new Date())
          const changeDate = (e) => {
              setDateState(e)
          }
          return (
                  <Calendrier
                  value = {dateState}
                  onChange = {changeDate}
                  />
          )
      }

export default Calendar;