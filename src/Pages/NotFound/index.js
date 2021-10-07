import './styles.scss';
import DivHiddenUnderNavbar from 'src/components/DivHiddenUnderNavbar';

const NotFound = () => {
  const cssClass = 0;

  return (    
    <main className={cssClass}>
    <DivHiddenUnderNavbar />
      <h1 className="posts-title">Error 404</h1>
    </main>
  );
};

export default NotFound;
