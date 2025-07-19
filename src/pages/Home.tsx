import { useState } from "react";
import Appetizers from "../Components/Appetizers";
import CategoriesList from "../Components/CategoriesList";
import Products from "../Components/Products";
import SimpleSlider from "../Components/shared/KeenSlider";
import { slides, productsData } from "../data";
import type { IProduct } from "../interfaces";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("برجر");

  // تصفية المنتجات حسب الكاتيجوري
  const filteredProducts: IProduct[] = selectedCategory
    ? productsData.filter((product) => product.category === selectedCategory)
    : [];

  return (
    <div className="mt-2 rounded-xl overflow-hidden space-y-10 custom-container">
      <SimpleSlider
        slides={slides.map(({ id, src, alt }) => (
          <img
            key={id}
            src={src}
            alt={alt}
            className="rounded-xl overflow-hidden shadow-lg w-full h-[70vh] object-cover"
          />
        ))}
        options={{
          mode: "snap",
          slides: {
            perView: 1,
            spacing: 15,
          },
          rtl: true,
        }}
      />

      <Appetizers />
      <CategoriesList onSelectCategory={setSelectedCategory} selected={selectedCategory} />
      <Products data={filteredProducts} />
    </div>
  );
};

export default Home;
