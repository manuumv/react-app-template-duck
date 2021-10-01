import { CountState } from 'model/countState';
import { CountViewModel } from './viewModel/count';

export const mapCountStateToVM = (countState: CountState): CountViewModel => ({
  clicks: countState?.clicks ?? 0,
  value: countState?.value ?? 0,
});
