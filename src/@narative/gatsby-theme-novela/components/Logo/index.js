import React from 'react';

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 * Logo comes with a property value called `fill`. `fill` is useful
 * when you want to change your logo depending on the theme you are on.
 */
export default function Logo({ fill }) {
  return (
    // <svg viewBox='0 0 106 28' height='30px'>
    //   <path d='M62.9 12h2.8v10....' />
    //   <path fill={fill} d='M25 14h-...' />
    //   <path d='M14 0C6.3...' fill='#639' />
    // </svg>
    <svg viewBox='0 0 1100 800' height='25px'>
      <g>
        <path
          fill={fill}
          d='M657.76,372.17c0-22.42,7.88-41.45,23.57-57.15c15.64-15.7,34.36-23.51,56.18-23.51c22.36,0,41.39,7.82,57.09,23.51
		c15.7,15.7,23.57,34.73,23.57,57.15c0,22.42-7.88,41.27-23.57,56.66c-15.7,15.33-34.73,23.03-57.09,23.03
		c-21.82,0-40.54-7.7-56.18-23.03C665.64,413.44,657.76,394.59,657.76,372.17z M908.42,39.88c9.58-0.61,18.48-1.09,26.73-1.45
		c8.3-0.3,17.33-0.42,27.21-0.42c9.88,0,20.24,0,31.03,0h85.03c-0.67,124.78-0.97,237.81-0.97,338.95
		c0,43.57-0.18,86.42-0.48,128.66c-0.3,42.3-0.48,81.03-0.48,116.24c0,35.21,0,64.97,0,89.27c0,24.36,0,39.76,0,46.12H909.39V229.08
		c0-24.36-0.18-47.88-0.48-70.6c-0.3-22.73-0.48-43.03-0.48-60.97V39.88z'
        />
        <path
          fill={fill}
          d='M57.77,574.77c7.7-7.64,16.3-13.39,25.94-17.27c9.58-3.82,19.82-5.88,30.73-6.24c10.85-0.3,21.45,1.76,31.7,6.24
		c21.09,8.97,35.82,23.88,44.18,44.66c8.3,20.79,8.3,41.76,0,62.91c-7.09,15.33-9.94,28.79-8.67,40.3
		c1.27,11.58,3.51,21.15,6.73,28.85c3.82,8.97,9.58,16.67,17.27,23.03c-13.45,0.67-27.51-0.3-42.24-2.85
		c-12.85-2.55-26.73-6.61-41.76-12c-15.09-5.45-29.94-14.24-44.66-26.42c-42.91-35.21-55.39-73.33-37.45-114.3
		C44.01,591.43,50.07,582.46,57.77,574.77z M449.08,730.82c20.18-14.36,37.94-31.82,53.27-52.3c15.39-20.48,27.57-43.51,36.54-69.15
		c8.91-25.57,13.39-52.48,13.39-80.66V38H376.6v504.16V763c1.27-0.61,2.67-0.97,4.3-0.97c1.58,0,3.03-0.3,4.3-0.91
		C407.63,755.3,428.9,745.24,449.08,730.82z'
        />
      </g>
    </svg>
  );
}