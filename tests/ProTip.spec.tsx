import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import { store } from '../lib/store';
import ProTip from '../components/ProTip';

describe('ProTip', () => {
  const getWrapper = () =>
    mount(
      <Provider store={store}>
        <ProTip />
      </Provider>
    );

  test('ProTip component renders properly', () => {
    const wrapper = getWrapper();

    expect(wrapper).toMatchSnapshot();
  });
});
