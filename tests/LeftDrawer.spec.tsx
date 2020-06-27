import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import LeftDrawer from '../components/LeftDrawer';
import top from './mocks/top.json';

describe('LeftDrawer opened|closed', () => {
  const createStore = configureStore([reduxThunk]);
  const store = createStore({
    reddit: {
      posts: top.data.children.map((child) => child.data),
      readPostIds: {},
      dismissedPostIds: {},
    },
    drawer: {
      mobileOpen: true,
    },
  });
  const getWrapper = (open: boolean) =>
    mount(
      <Provider store={store}>
        <LeftDrawer setDrawerOpen={() => open} open={open} />
      </Provider>
    );

  test('LeftDrawer renders properly', () => {
    // Drawer opened
    const openWrapper = getWrapper(true);
    expect(openWrapper).toMatchSnapshot();

    // Drawer closed
    const closedWrapper = getWrapper(false);
    expect(closedWrapper).toMatchSnapshot();
  });
});
