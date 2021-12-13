import CardAssociation from '../../components/CardAssociation';
import ControlCenter from '../../components/ControlCenter';

import './styles.scss';

// == Composant
const DashboardSuperAdmin = () => (
  <div className="DashboardSuperAdmin">
    <CardAssociation />
    <CardAssociation />
    <ControlCenter />
    <CardAssociation />
    <CardAssociation />
    <CardAssociation />
    <CardAssociation />
  </div>
);

// == Export
export default DashboardSuperAdmin;
