import CardCatalog from '../../components/CardCatalog';
import CommnetCatalog from '../../components/CommentCatalog';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './styles.css';

export default function Catalog() {
  return (
    <>
      <Header />
      <main>
        <section>
          <h3 className='ct-title-section ct-mg-top-25 ct-mg-bottom-25'>Venha nos visitar</h3>
          <CardCatalog />
          <CardCatalog />
        </section>

        <section id='comment'>
          <h3 className='ct-title-section'>O que estão dizendo</h3>
          <CommnetCatalog />
          <CommnetCatalog />
          <CommnetCatalog />
          <CommnetCatalog />
          <CommnetCatalog />
        </section>
      </main>
      <Footer />
    </>
  );
}