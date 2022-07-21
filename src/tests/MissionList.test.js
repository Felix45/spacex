import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux';
import { missionData } from '../data/mock';
import MissionList from '../components/MissionList';

test('MissionsList component renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <MissionList missions={missionData} />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
