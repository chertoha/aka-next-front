import Image from "next/image";
import Link from "next/link";
// import styles from './page.module.css'

interface ISubCutegory {
  id: number;
  title: string;
  img: string;
}

interface ICategories {
  id: number;
  title: string;
  sub: ISubCutegory[];
}

const Home = async () => {
  const response = await fetch("http://localhost:5000/categories.json");
  const categories: ICategories[] = await response.json();

  console.log(categories);
  return (
    <main>
      <h1 hidden>Комплектуючі для машинобудування</h1>
      <section>New Items</section>
      <section>Product Catalog</section>
      {/* ----------------------------------------------------- */}
      <ul>
        {categories.map(({ id, sub, title }) => (
          <div key={id}>
            <h2>{title}</h2>
            <Link href={`products/${title}`}>to cat - {title}</Link>
            <ul>
              {sub.map(({ id, title: subtitle, img }) => (
                <li key={id}>
                  <Link href={`products/${title}/${subtitle}`}>
                    to sub - {subtitle}{" "}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </ul>
      {/* ----------------------------------------------------- */}
    </main>
  );
};

export default Home;

// html markup structure
// Container
// Header
