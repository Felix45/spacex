import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux';
import ProfileView from '../components/ProfileView';

test('Missions view renders correctly', () => {
  const tree = renderer.create(<Provider store={store}><ProfileView /></Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});
