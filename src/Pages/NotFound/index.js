import './styles.scss';
import EmptyDiv from '../../components/EmptyDiv';
const NotFound = () => {
  const cssClass = 0;

  return (
    <main className={cssClass}>
      <EmptyDiv />
      <h1 className="posts-title">Error 404</h1>
    </main>
  );
};

export default NotFound;
