import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux';
import MissionsView from '../components/MissionsView';

test('Missions view renders correctly', () => {
  const tree = renderer.create(<Provider store={store({})}><MissionsView /></Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});
