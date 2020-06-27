import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import { store } from '../lib/store';
import Footer from '../components/Footer';

describe('Footer', () => {
  const getWrapper = () =>
    mount(
      <Provider store={store}>
        <Footer />
      </Provider>
    );

  test('Footer component renders properly', () => {
    const wrapper = getWrapper();

    expect(wrapper).toMatchSnapshot();
  });
});
