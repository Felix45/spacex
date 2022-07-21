import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux';
import { missionData } from '../data/mock';
import Mission from '../components/Mission';

test('Mission component renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store({})}>
      <Mission mission={missionData[1]} />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
