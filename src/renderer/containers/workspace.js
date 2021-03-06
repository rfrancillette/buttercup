import { connect } from 'react-redux';
import Workspace from '../components/workspace';
import { installUpdate } from '../../shared/actions/update';
import { setColumnSize } from '../../shared/actions/ui';
import { getCurrentArchive, getColumnSizes } from '../../shared/selectors';

export default connect(
  state => ({
    columnSizes: getColumnSizes(state),
    currentArchive: getCurrentArchive(state),
    update: state.update,
  }),
  {
    setColumnSize,
    installUpdate
  }
)(Workspace, 'Workspace');
