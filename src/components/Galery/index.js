import './styles.scss';
import DivHiddenUnderNavbar from 'src/components/DivHiddenUnderNavbar';

const Galery = () => {
  const cssClass = 0;

  return (
    <main className={cssClass}>
    <DivHiddenUnderNavbar />
      <h1 className="posts-title">Galerie</h1>
    </main>
  );
};

export default Galery;
