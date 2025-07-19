// Product.tsx
import type { IProduct } from "../interfaces";
import priceImg from "../assets/price.svg";
import { motion } from "framer-motion";

const productVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Product = ({ item }: { item: IProduct }) => {
  return (
    <motion.div
      className="rounded-xl bg-white py-4 px-7 h-full overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
      variants={productVariants}
      layout
    >
      <img
        src={item.src}
        alt={item.alt}
        className="w-full m-auto h-30 lg:h-40 object-cover rounded-xl select-none"
        draggable={false}
      />
      <h2 className="text-center my-2  text-base lg:text-xl font-bold">{item.title}</h2>
      <p className="text-center text-main flex items-center text-xl font-bold justify-center gap-1">
        {item.price}
        <img src={priceImg} alt="price icon" className="w-6 h-6" />
      </p>
    </motion.div>
  );
};

export default Product;
