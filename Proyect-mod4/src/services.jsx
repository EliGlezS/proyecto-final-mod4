/*Se crea un array de objetos para trabajar con los datos mockeados*/

const technologicalProducts = [
    {
      id: 1,
      name: "Apple iPhone 14 Pro",
      category: "Smartphones",
      description: "High-end smartphone with Super Retina XDR display, A16 Bionic chip, and 48 MP camera.",
      price: 999.99,
      image: "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111846_sp875-sp876-iphone14-pro-promax.png",
      inStock: true,
      features: [
        "6.1-inch Super Retina XDR display",
        "A16 Bionic chip",
        "48 MP main camera",
        "Up to 1TB storage",
        "5G compatible"
      ]
    },
    {
      id: 2,
      name: "MacBook Pro 14",
      category: "Laptops",
      description: "Professional laptop with M2 Pro chip, Liquid Retina XDR display, and up to 32GB of RAM.",
      price: 1999.99,
      image: "https://www.notebookcheck.org/fileadmin/Notebooks/Apple/MacBook_Pro_14_2024_M4/IMG_7747.JPG",
      inStock: true,
      features: [
        "14\" Liquid Retina XDR display",
        "M2 Pro chip",
        "Up to 32GB of RAM",
        "Up to 1TB SSD",
        "Up to 17-hour battery life"
      ]
    },
    {
      id: 3,
      name: "Samsung Galaxy S23 Ultra",
      category: "Smartphones",
      description: "Premium smartphone with 200 MP camera, Dynamic AMOLED 2X display, and 5000mAh battery.",
      price: 1199.99,
      image: "https://images.samsung.com/es/smartphones/galaxy-s23-ultra/buy/02_Image_Carousel/02-3_Group_KV_Exclusive_Color/S23Ultra_groupkv_exclusive_MO.jpg",
      inStock: true,
      features: [
        "6.8\" Dynamic AMOLED 2X display",
        "200 MP main camera",
        "5000mAh battery",
        "Snapdragon 8 Gen 2 chipset",
        "Up to 1TB storage"
      ]
    },
    {
      id: 4,
      name: "Sony WH-1000XM5",
      category: "Accessories",
      description: "Wireless headphones with noise cancellation, high-resolution sound, and 30-hour battery life.",
      price: 348.00,
      image: "https://www.lavanguardia.com/andro4all/hero/2022/05/Sony-WH-1000XM5.1652371428.8406.jpg?width=768&aspect_ratio=16:9&format=nowebp",
      inStock: false,
      features: [
        "Superior noise cancellation",
        "High-resolution sound",
        "30-hour battery life",
        "Bluetooth 5.2 connectivity",
        "Touch control"
      ]
    },
    {
      id: 5,
      name: "Apple Watch Series 8",
      category: "Wearables",
      description: "Smartwatch with Always-On display, health monitoring, and water resistance.",
      price: 399.99,
      image: "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111848_apple-watch-series8.png",
      inStock: true,
      features: [
        "Always-On Retina display",
        "Blood oxygen monitoring",
        "Fall and car crash detection",
        "WR50 water resistance certification",
        "Compatible with iOS"
      ]
    },
    {
      id: 6,
      name: "Bose QuietComfort 45",
      category: "Accessories",
      description: "Headphones with active noise cancellation, high-quality sound, and up to 24 hours of battery.",
      price: 329.99,
      image: "https://cdn.mos.cms.futurecdn.net/SCA2aj9p63DU7LTBKRiwfH.jpg",
      inStock: true,
      features: [
        "Adjustable noise cancellation",
        "Up to 24 hours battery life",
        "High-quality immersive sound",
        "Bluetooth 5.1 connectivity",
        "Comfortable and lightweight design"
      ]
    },
    {
      id: 7,
      name: "Dell XPS 13 9310",
      category: "Laptops",
      description: "Ultrathin laptop with Intel Core i7 processor, InfinityEdge display, and up to 16GB of RAM.",
      price: 1499.99,
      image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/emea/hero/spring-sl-cons-dell-ls-xps-9340nt-s2725hs-wl3024-ms5320w-uhp-2601-05-uk-hero-1024x768.jpg?fmt=pjpg&pscan=auto&scl=1&wid=1024&hei=768&resMode=sharp2&op_usm=1.75,0.3,2,0&size=1024,768",
      inStock: true,
      features: [
        "13.4\" InfinityEdge display",
        "Intel Core i7 processor",
        "Up to 16GB of RAM",
        "512GB SSD",
        "Up to 12-hour battery life"
      ]
    },
    {
      id: 8,
      name: "GoPro HERO11 Black",
      category: "Cameras",
      description: "Action camera with 5.3K resolution, HyperSmooth stabilization, and extreme condition recording capabilities.",
      price: 399.99,
      image: "https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202208/22/00110113904469____2__1200x1200.jpg",
      inStock: true,
      features: [
        "5.3K resolution",
        "HyperSmooth stabilization",
        "Water-resistant up to 10m",
        "Front and rear touch screens",
        "TimeWarp 3.0 mode"
      ]
    },
    {
      id: 9,
      name: "Microsoft Surface Pro 9",
      category: "Tablets",
      description: "2-in-1 tablet with Intel Core i7 processor, PixelSense display, and up to 16GB of RAM.",
      price: 999.99,
      image: "https://i.pcmag.com/imagery/reviews/04oXeqT4MuFbMo7fc7QSrAx-2.fit_lim.size_1050x591.v1680110421.jpg",
      inStock: true,
      features: [
        "13\" PixelSense display",
        "Intel Core i7 processor",
        "Up to 16GB of RAM",
        "1TB SSD",
        "Up to 15-hour battery life"
      ]
    },
    {
      id: 10,
      name: "NVIDIA GeForce RTX 3080",
      category: "Components",
      description: "High-end graphics card with Ampere architecture, ideal for gaming and content creation.",
      price: 699.99,
      image: "https://img.pccomponentes.com/articles/51/514403/1873-gigabyte-geforce-rtx-3080-gaming-oc-v2-10gb-gddr6x.jpg",
      inStock: false,
      features: [
        "Ampere architecture",
        "10GB GDDR6X",
        "Real-time ray tracing",
        "DLSS (Deep Learning Super Sampling)",
        "HDMI 2.1 connectivity"
      ]
    },
    {
      id: 11,
      name: "Sony PlayStation 5",
      category: "Consoles",
      description: "Next-generation gaming console with support for 4K games and 120Hz.",
      price: 499.99,
      image: "https://m.media-amazon.com/images/I/51NbBH89m1L.jpg",
      inStock: true,
      features: [
        "4K games up to 120Hz",
        "825GB SSD",
        "Ray tracing support",
        "Compatibility with most PS4 games",
        "DualSense controller"
      ]
    },
    {
      id: 12,
      name: "Xbox Series X",
      category: "Consoles",
      description: "Gaming console with support for 4K resolution, HDR, and 120Hz speed.",
      price: 499.99,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxZNYKF1eE2zMWH9hZ6wOe9iwinL5aaBVI5Z-AgpZiNl8I8UvRgPFapD3HlQkZGTp14Rc&usqp=CAU",
      inStock: true,
      features: [
        "4K resolution, HDR, and up to 120Hz",
        "1TB SSD storage",
        "Ray tracing technology",
        "Compatible with Xbox One games",
        "Wireless controller"
      ]
    },
    {
      id: 13,
      name: "Razer Blade 15",
      category: "Laptops",
      description: "Gaming laptop with Intel Core i7 processor, NVIDIA RTX 3070 graphics card, and 15.6\" display.",
      price: 1999.99,
      image: "https://thumb.pccomponentes.com/w-530-530/articles/61/615686/141-razer-blade-15-advanced-model-qhd-intel-core-i7-11800h-16gb-1tb-ssd-rtx-3060-156.jpg",
      inStock: true,
      features: [
        "15.6\" Full HD 144Hz display",
        "NVIDIA RTX 3070",
        "Intel Core i7 11th gen processor",
        "16GB of RAM",
        "1TB SSD"
      ]
    },
    {
      id: 14,
      name: "Oculus Quest 2",
      category: "Accessories",
      description: "Autonomous virtual reality headset with 3664 x 1920 resolution and up to 256GB of storage.",
      price: 299.99,
      image: "https://m.media-amazon.com/images/I/618PlE1DM8L.jpg",
      inStock: true,
      features: [
        "3664 x 1920 resolution",
        "No PC needed to operate",
        "Up to 256GB storage",
        "Compatible with Oculus Link",
        "Touch controllers included"
      ]
    },
    {
      id: 15,
      name: "Google Pixel 7 Pro",
      category: "Smartphones",
      description: "Smartphone with 50 MP camera, 6.7\" OLED display, and Google's Tensor processor.",
      price: 899.99,
      image: "https://m.media-amazon.com/images/I/711GOHSF5wL.jpg",
      inStock: true,
      features: [
        "6.7\" OLED display",
        "50 MP main camera",
        "Google Tensor processor",
        "Up to 512GB storage",
        "5000mAh battery"
      ]
    },
    {
      id: 16,
      name: "Amazon Echo Studio",
      category: "Smart Home",
      description: "Smart speaker with 3D sound and Dolby Atmos support.",
      price: 199.99,
      image: "https://m.media-amazon.com/images/I/91Z0cGhaeCL._AC_SX425_.jpg",
      inStock: true,
      features: [
        "3D sound with Dolby Atmos",
        "Wi-Fi and Bluetooth connectivity",
        "Compatible with Alexa",
        "High-quality 5.25\" speakers",
        "Voice command response"
      ]
    },
    {
      id: 17,
      name: "HP Omen 35L",
      category: "Gaming PCs",
      description: "Gaming PC with Intel Core i9 processor and NVIDIA GeForce RTX 3080 graphics card.",
      price: 2799.99,
      image: "https://thumb.pccomponentes.com/w-530-530/articles/1086/10861261/1349-hp-omen-35l-gt16-0034ns-intel-core-i7-14700f-32gb-1tb-ssd-rtx-4070-super-caracteristicas.jpg",
      inStock: true,
      features: [
        "Intel Core i9 10th gen",
        "NVIDIA GeForce RTX 3080",
        "16GB of RAM",
        "1TB SSD + 2TB HDD",
        "Advanced cooling system"
      ]
    },
    {
      id: 18,
      name: "Logitech MX Master 3",
      category: "Accessories",
      description: "Ergonomic and precise mouse for professionals with 70 days of battery life.",
      price: 99.99,
      image: "https://thumb.pccomponentes.com/w-530-530/articles/1034/10347976/1382-logitech-mx-master-3s-performance-raton-inalambrico-8000-dpi-grafito-9205e5c4-4126-47ed-aa39-26ad1df14282.jpg",
      inStock: true,
      features: [
        "Bluetooth connectivity",
        "70 days of battery life",
        "Customizable buttons",
        "4000 DPI sensor",
        "Ergonomic design"
      ]
    },
    {
      id: 19,
      name: "Canon EOS R5",
      category: "Cameras",
      description: "Mirrorless camera with 45 MP, 8K recording, and image stabilization.",
      price: 3899.99,
      image: "https://i1.adis.ws/i/canon/eos-r5_front_rf24-105mmf4lisusm_square_32c26ad194234d42b3cd9e582a21c99b",
      inStock: true,
      features: [
        "45 MP resolution",
        "8K recording",
        "Full-frame CMOS sensor",
        "5-axis image stabilization",
        "Wi-Fi connectivity"
      ]
    },
    {
      id: 20,
      name: "Sony A7 III",
      category: "Cameras",
      description: "Mirrorless camera with 24.2 MP, 4K recording, and fast autofocus.",
      price: 1999.99,
      image: "https://m.media-amazon.com/images/I/811szlYNZQL.jpg",
      inStock: true,
      features: [
        "24.2 MP Exmor R CMOS sensor",
        "4K recording",
        "693-point autofocus",
        "Up to 710 shots battery life",
        "Wi-Fi connectivity"
      ]
    }
];

export const getAllProducts = () => {
    return technologicalProducts;
}
