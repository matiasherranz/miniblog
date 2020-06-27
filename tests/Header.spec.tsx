import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import { store } from '../lib/store';
import Header from '../components/Header';

describe('Header', () => {
  const getWrapper = () =>
    mount(
      <Provider store={store}>
        <Header setDrawerOpen={() => true} open={true} />
      </Provider>
    );

  test('Header component renders properly', () => {
    const wrapper = getWrapper();

    expect(wrapper).toMatchSnapshot();
  });
});
