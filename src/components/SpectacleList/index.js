import { CardHeader, Collapse, CardBody, Card } from 'reactstrap';
import ombrelleData from '../../assets/data/ombrelleData'
const SpectacleList = () => (
  const [isOpen, setIsOpen] = useState(false);
  console.log(ombrelleData)
  const toggle = () => setIsOpen(!isOpen);

  return(
  <div>
  <Card>
  <CardHeader onClick={this.toggle} data-event={bannerId} data-type="collapseBanner">{bannerId}</CardHeader>
        <Collapse isOpen={isOpen}>
          <CardBody>
            {this.renderCycles(banners)}            
          </CardBody>
        </Collapse>
      </Card>
  </div>
  )
);

export default SpectacleList;
