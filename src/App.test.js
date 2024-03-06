// import React from 'react';
// import { render } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { store } from './app/store';
// import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(
//     <Provider store={store}>
//       <App />
//     </Provider>
//   );

//   expect(getByText(/learn/i)).toBeInTheDocument();
//   // const element = screen.getByText('your text');
// });
import React from 'react';
import { render, screen } from '@testing-library/react'; // Додано `screen` імпорт
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

test('renders learn react link', () => {
  render(
    // Видалено деструктуризацію
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(screen.getByText(/learn/i)).toBeInTheDocument(); // Використовуємо `screen.getByText`
  // const element = screen.getByText('your text');
});
