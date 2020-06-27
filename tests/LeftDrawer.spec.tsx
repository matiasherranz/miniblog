import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import { store } from '../lib/store';
import LeftDrawer from '../components/LeftDrawer';

describe('LeftDrawer', () => {
  const getWrapper = () =>
    mount(
      <Provider store={store}>
        <LeftDrawer setDrawerOpen={() => true} open={true} />
      </Provider>
    );

  test('LeftDrawer component renders properly', () => {
    const wrapper = getWrapper();

    expect(wrapper).toMatchSnapshot();
  });
});
