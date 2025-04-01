// pages/product/[id].js
import Image from 'next/image';

// Simulate a data fetching function (you can replace this with actual data from an API later)
const fetchProductData = (id) => {
  const products = [
    { id: 1, name: 'T-Shirt', price: '$20', description: 'A cool t-shirt', image: '/images/tshirt.jpg' },
    { id: 2, name: 'Coffee Mug', price: '$10', description: 'A stylish mug', image: '/images/mug.jpg' },
  ];
  return products.find(product => product.id === parseInt(id));
};

export async function getStaticPaths() {
  // Simulate product IDs
  const paths = [1, 2].map(id => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,  // Show 404 for non-existing paths
  };
}

export async function getStaticProps({ params }) {
  const product = fetchProductData(params.id);
  return {
    props: {
      product,
    },
  };
}

export default function ProductPage({ product }) {
  return (
    <div>
      <h1>{product.name}</h1>
      <Image src={product.image} alt={product.name} width={500} height={500} />
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
}
