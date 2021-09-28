import './styles.scss';
import DivHiddenUnderNavbar from 'src/components/DivHiddenUnderNavbar';

const Blog = () => {
  const cssClass = 0;

  return (
    <main className={cssClass}>
    <DivHiddenUnderNavbar />
      <h1 className="posts-title">Blog</h1>
    </main>
  );
};

export default Blog;
