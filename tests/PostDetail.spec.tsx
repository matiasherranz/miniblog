import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import { store } from '../lib/store';
import PostDetail from '../components/PostDetail';

describe('PostDetail', () => {
  const getWrapper = () =>
    mount(
      <Provider store={store}>
        <PostDetail />
      </Provider>
    );

  test('PostDetail component renders properly', () => {
    const wrapper = getWrapper();

    expect(wrapper).toMatchSnapshot();
  });
});
