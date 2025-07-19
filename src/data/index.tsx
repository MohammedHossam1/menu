import type { IProduct } from "../interfaces";

export const slides = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
    alt: "وجبة فطور",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    alt: "سلطة طازجة",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    alt: "طبق دجاج",
  },
];

export const appetizersData: IProduct[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80",
    alt: "مقبلات 1",
    title: "حمص بالطحينة",
    price: 25,
    category: "برجر",

  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
    alt: "مقبلات 2",
    title: "تبولة",
    price: 20,
    category: "برجر",

  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80",
    alt: "مقبلات 3",
    title: "ورق عنب",
    price: 30,
    category: "برجر",

  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80",
    alt: "مقبلات 4",
    title: "فلافل",
    price: 15,
    category: "برجر",

  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=400&q=80",
    alt: "مقبلات 5",
    title: "كبة مقلية",
    price: 35,
    category: "برجر",

  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80",
    alt: "مقبلات 6",
    title: "متبل باذنجان",
    price: 28,
    category: "برجر",

  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80",
    alt: "مقبلات 7",
    title: "بطاطس مقلية",
    price: 18,
    category: "برجر",

  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
    alt: "مقبلات 8",
    title: "حمص باللحم",
    price: 40,
    category: "برجر",

  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80",
    alt: "مقبلات 9",
    title: "صحن جبن",
    price: 35,
    category: "برجر",

  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80",
    alt: "مقبلات 10",
    title: "بطاطس بالثوم",
    price: 22,
    category: "برجر",

  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=400&q=80",
    alt: "مقبلات 11",
    title: "مخلل مشكل",
    price: 20,
    category: "برجر",

  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80",
    alt: "مقبلات 12",
    title: "حمص بطحينة",
    price: 25,
    category: "برجر",


  },
];
export const productsData: IProduct[] = [
  // 🍔 برجر
  {
    id: 1,
    title: "برجر دجاج",
    price: 50,
    src: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=800&q=80",
    alt: "برجر دجاج",
    category: "برجر",
  },
  {
    id: 2,
    title: "برجر لحمة",
    price: 55,
    src: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    alt: "برجر لحمة",
    category: "برجر",
  },
  {
    id: 3,
    title: "برجر سبايسي",
    price: 58,
    src: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
    alt: "برجر سبايسي",
    category: "برجر",
  },
  {
    id: 4,
    title: "برجر بالجبنة",
    price: 60,
    src: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=800&q=80",
    alt: "برجر بالجبنة",
    category: "برجر",
  },
  {
    id: 5,
    title: "برجر مشروم",
    price: 63,
    src: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
    alt: "برجر مشروم",
    category: "برجر",
  },
  {
    id: 6,
    title: "برجر مكسيكي",
    price: 59,
    src: "https://images.unsplash.com/photo-1601050690497-d3ed53fbc6b3?auto=format&fit=crop&w=800&q=80",
    alt: "برجر مكسيكي",
    category: "برجر",
  },
  {
    id: 7,
    title: "برجر بيج سايز",
    price: 68,
    src: "https://images.unsplash.com/photo-1598133894009-61a6f5a6fc29?auto=format&fit=crop&w=800&q=80",
    alt: "برجر كبير",
    category: "برجر",
  },

  // 🍕 بيتزا
  {
    id: 8,
    title: "بيتزا مارجريتا",
    price: 70,
    src: "https://images.unsplash.com/photo-1601924582975-4a3e37c1604f?auto=format&fit=crop&w=800&q=80",
    alt: "بيتزا مارجريتا",
    category: "بيتزا",
  },
  {
    id: 9,
    title: "بيتزا سوبر سوبريم",
    price: 85,
    src: "https://images.unsplash.com/photo-1594007654729-407eedc4be04?auto=format&fit=crop&w=800&q=80",
    alt: "بيتزا سوبر سوبريم",
    category: "بيتزا",
  },
  {
    id: 10,
    title: "بيتزا بالخضار",
    price: 68,
    src: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=800&q=80",
    alt: "بيتزا خضار",
    category: "بيتزا",
  },
  {
    id: 11,
    title: "بيتزا بالسلامي",
    price: 75,
    src: "https://images.unsplash.com/photo-1548365328-8b69b1a94016?auto=format&fit=crop&w=800&q=80",
    alt: "بيتزا سلامي",
    category: "بيتزا",
  },
  {
    id: 12,
    title: "بيتزا أربع أجبان",
    price: 80,
    src: "https://images.unsplash.com/photo-1618005198919-d3d4c6e5db7c?auto=format&fit=crop&w=800&q=80",
    alt: "بيتزا جبن",
    category: "بيتزا",
  },
  {
    id: 13,
    title: "بيتزا ببروني",
    price: 77,
    src: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
    alt: "بيتزا ببروني",
    category: "بيتزا",
  },
  {
    id: 14,
    title: "بيتزا دجاج باربكيو",
    price: 82,
    src: "https://images.unsplash.com/photo-1585238341974-498bff0c0e4d?auto=format&fit=crop&w=800&q=80",
    alt: "بيتزا باربكيو",
    category: "بيتزا",
  },

  // 🍣 سوشي
  {
    id: 15,
    title: "سوشي رول",
    price: 90,
    src: "https://images.unsplash.com/photo-1579884113364-fd4fbcbe1071?auto=format&fit=crop&w=800&q=80",
    alt: "سوشي رول",
    category: "سوشي",
  },
  {
    id: 16,
    title: "سوشي سلمون",
    price: 95,
    src: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80",
    alt: "سوشي سلمون",
    category: "سوشي",
  },
  {
    id: 17,
    title: "سوشي تونا",
    price: 92,
    src: "https://images.unsplash.com/photo-1605478031253-3ad62e20c904?auto=format&fit=crop&w=800&q=80",
    alt: "سوشي تونا",
    category: "سوشي",
  },
  {
    id: 18,
    title: "سوشي جمبري",
    price: 96,
    src: "https://images.unsplash.com/photo-1625947751163-cb38c3e3b701?auto=format&fit=crop&w=800&q=80",
    alt: "سوشي جمبري",
    category: "سوشي",
  },
  {
    id: 19,
    title: "سوشي أفوكادو",
    price: 87,
    src: "https://images.unsplash.com/photo-1594007654729-407eedc4be04?auto=format&fit=crop&w=800&q=80",
    alt: "سوشي أفوكادو",
    category: "سوشي",
  },
  {
    id: 20,
    title: "سوشي كابوريا",
    price: 93,
    src: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
    alt: "سوشي كابوريا",
    category: "سوشي",
  },
  {
    id: 21,
    title: "سوشي ميكس",
    price: 98,
    src: "https://images.unsplash.com/photo-1601050690497-d3ed53fbc6b3?auto=format&fit=crop&w=800&q=80",
    alt: "سوشي ميكس",
    category: "سوشي",
  },

  // وهكذا تكمل باقي الأصناف مثل "حلويات"، "فراخ"، "باستا"، "آسيوي" بنفس الطريقة
];



export const categoriesData = [
  { id: 1, name: "برجر" },
  { id: 2, name: "بيتزا" },
  { id: 3, name: "سوشي" },
  { id: 4, name: "حلويات" },
  { id: 5, name: "فراخ" },
  { id: 6, name: "باستا" },
  { id: 7, name: "آسيوي" },
  { id: 8, name: "برجر" },
  { id: 9, name: "بيتزا" },
  { id: 10, name: "سوشي" },
  { id: 11, name: "حلويات" },
  { id: 12, name: "فراخ" },
];
