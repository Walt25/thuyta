import { collection, addDoc } from "firebase/firestore";
import { db } from "../FireBase/firebaseConfig";
import { MenuItem } from "../Redux/Slices/MenuSlice";

const menuItems: MenuItem[] = [
  {
    name: "Bò",
    numberOfItems: 4,
    items: [
      {
        type: "Bò Argentina",
        name: "Sốt tiêu đen",
        img: "https://i.imgur.com/uEo4EhN.png",
        description: "Dipped Argentina beef with black pepper sauce",
        ingredients: ["Thịt bò", "Tiêu đen"],
        minPrice: 150000,
        maxPrice: 300000,
      },
      {
        type: "Thịt bò",

        name: "beefsteak",
        img: "https://s3-alpha-sig.figma.com/img/e36f/5eb1/19a599b93a71c299d32bbedb7a5ae2c6?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CrSqDD2xEbuoMhTFTtjj~fjS-HxFqq3ZWCsQVro4ZVj0-2QnlvIIcNYBD7fBzZD7GEDX2OVCAoqJh5EY6hKh2yMlZMh3Z9PbjlPYtV8BbnYtWod1u7P9ogdp6vCEg0~qmEv5vD7cWgYq0HIzRe5eokMHRSm1yAxATbP37AlfKBXVAu9nl1H3ypPWfVJcTu~kSpI4mHv1DYmmbR-Kow7UwNexoE01S9B6HnpLcznCB6syhV~gjXDZ~BpgAXyud5C8EvhazFrIwrbozG~Obc1Pzf7Tvbi6SjOIUHp33lraMhzsXoz7XKtrJuuCgKfm9bSU496akkkxAHTd8DksD6zycA__",

        description: "Beefsteak",

        ingredients: ["Khoai tây", "Thịt bò"],
        minPrice: 150000,
        maxPrice: 300000,
      },
      {
        type: "Bò lúc lắc ",
        name: "Khoai tây",
        img: "https://s3-alpha-sig.figma.com/img/3ebf/a3f2/e95b50833d4dd28f42f65768117d303b?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gF3R1VOGVdvbrrhkNQCXe5qfhEouM3EBS2mE0~94kDMKLc7hNeib3~qodbZy1iWYFaZgelUlTgcH3QukqQX-RbjtqHRSDwVb8s68usekYsPp~04XTWeUfeYiesEhB50nW51DliTzntT3bBCU4sQ7YUJk13e2fRfgmWYcFJjjFqtXQs307WnBCp4v7-CXaIVNQWnEgNSSotEr~hEUYjiPZIpsLIvB9yOhPFxxaqspLSuC36IET57gnOtW8mEG-2CTEznZ8O3rRObyuszr6YMI3Lu6BCE73nhTrr7LD5oWYx1Vzimo8fhWDWkcbav0rPNEQdE29xdJlmNZJdRcjWk6Uw__",

        description: "Beef dish served with fried potato",
        ingredients: ["Khoai tây", "Thịt bò"],
        minPrice: 180000,
        maxPrice: 360000,
      },
      {
        type: "Bò xào",
        name: "Cải rổ",
        img: "https://s3-alpha-sig.figma.com/img/2951/f6e2/1c3b6a1766a48a4587003c990703b1e0?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MqbrNFz4C9H60ChiTKPsr9DGBaTH-iD-~iylnVxRMaSI2kUHc1-nOpceeUgh7529AVH8j8UksNl0t4ak~UVfqlbzay3Zx17TXGAMXy80IdUxmhXoG34ZG0VFAV02bAiRWmuLzxhIcAJPdRqAd371xsSFBoiuGXZw5zQ2pknNzHf8Z~XfDVmYR~KInk799svd64aZ4LZjS16ztB7qxezdyOkmTeCeVyLhoMg1q~ll0GWAwEKi2iavDL5V4awF-9J5ERlnIjXnL8RpP6s8T4JIUlXtJ-GXCuFs6nLxKgd7YROhkwif17QVNyOxdwrvR1dHGW3buCgSUlkGI0o53pAhvA__",

        description: "Sauted beef with chinese broccoli",
        ingredients: ["Cải rổ", "Thịt bò"],
        minPrice: 180000,
        maxPrice: 360000,
      },
    ],
  },
  {
    name: "Dồi Trường",
    numberOfItems: 3,
    items: [
      {
        type: "Dổi Trường",
        name: "Hấp hành gừng",
        img: "https://s3-alpha-sig.figma.com/img/633e/f5bf/09b105bf841357fb487707b4f5c98d90?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PLGl53BDKeRf1jpaAMeE5pNcaKbK1B8qlzcRZW6yv~y1T500q3z1ppnFDDiXrrtXkjvJ9Aq7f11~-sd8gqRETcZwU6SFQufCLSJP81wSNjTML8BCUo34t5hHOiEkKIk4WNat8Jnl94BWwLz-twX-fWfCJ2prMDsoiHiTLJBcUyqqEUbkNMXP75O60SnJ02oi~jalYuzBpba4bSqQPg2PJvzXLhDyl4sLwjvEgWZbQwk-qyE103T~eWglt4z-YHf57iSGIYfwNCviMz-LAvAaBI5f2F95cu2tCka3E6mAbsLubxucejAPmZ7kelZNw6TvuGAhmGV7LuPAXbFqZYJepQ__",
        description: "Steamed pig’s uterine with ginger & scallions",
        ingredients: ["Dồi trường", "Gừng", "Hành lá"],
        minPrice: 150000,
        maxPrice: 300000,
      },
      {
        type: "Dổi Trường",
        name: "Chiên giòn",
        img: "https://s3-alpha-sig.figma.com/img/4c45/f904/bfe7c0a7cb4f2d02153c552c36fbe6a2?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hF7vDCuL8XMSWEcxZ-G70dZbP3nYokb3TiD1-1sWA4mJ~Cug~v31nOEEBgh~kZDgrdtw6zVDvmzVwT-OkCTiJbjtWesifcT~wcopdo2ZEZGr3P6QcYLIPJVWtF4PehpXy9646IWIEZewk7BUZp2ZynMaqNPE5X3-HJgkMFR-4~q~~7ovd~nxi7fY-oLLFCZuGixFeVAd6OldLTCQG7IqCmIu3bHzAFoqws4FUIaK-CWQaKzCx82w9BLSQuBVLIbhxYw4B8djsDbY~AynZeRTCLl5oQb85fygbzPVKFkzWGoWgCskD2ejqMqG96P5MyiMjj0hh6AC3pGF64Q-T0DH3w__",
        description: "Fried hog’s pudding",
        ingredients: ["Dồi trường"],
        minPrice: 150000,
        maxPrice: 300000,
      },
      {
        type: "Dổi Trường",
        name: "Rang muối",
        img: "https://s3-alpha-sig.figma.com/img/f73b/6a16/20e4c4cbe59ddd3127a3e1972a8d4ebf?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M~TH-~1TJjrrClUcr4x9UUIl~1EApaOb6oq5vpeM2RwVq3P~j8SjcNPglhQJOEynKRCRft8LDY6Wm1Ac5dESyOvuZvnUWVgbrQoXismWsZntwa7-KMS2uzTS~xdmCp~5hKzP9NQDXoPYxOkkGiVT57AGdDLbFsssUHVEgN9ImrMD8T5hvZiSaHBEV7A04SRnjXSMwb9nAXzHYHUjfyc9QI6jgKKAvhZS0yDT63OxgvTa9lyyV2UMR5TJ8uGBPmhVp5kFtTb61m4QG-kS9h347WhmqQUZVNiB32P68VdUVEloJE5Z2bxnTYEtbWJIvwkPbqHKRnCvOKESNQlLMLy6wQ__",
        description: "Roasted pig’s uterine with salf",
        ingredients: ["Dồi trường", "Gừng", "Hành lá"],
        minPrice: 150000,
        maxPrice: 300000,
      },
    ],
  },
  {
    name: "Chả giò",
    numberOfItems: 3,
    items: [
      {
        type: "Chả giò cá",
        name: "THÁT LÁT THÌA LÀ",
        img: "https://s3-alpha-sig.figma.com/img/f778/ffdf/c493fa08fd2329a2d6fa33f314670729?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mdZHW8rmvbuZ8aVFvp3a41W4TiaLo046LUJUmcaf0ej83fjA-cPcf66A1eLFZuD~VKyjiC3PkQIsEXeeKJCwBp2iVZVAuiUeugKC3wG~hJvwFbayklAwrcZF3bTDxiGaXLXwiVuhvb0k4KpJC-ojoXiKj~VQE3uQycEuriB9-eLh6IAso3o1nzgX8Al2dLy3HjBJ~06yWhCdxpeEnjX5a4vuyxozZmRa33-RJ9PNwc6K9p60EFBlNZzd2Oq-fLf0Kfvn7I0hadq5RhZveevL-KmYiDortiuzaMPugj7Wu9BCkd9od293a4W3nzQQLbSeMIT~OiEEN1B~LcQt9vlCjw__",
        description: "Spring rolls Bronze featherback & dills",
        ingredients: ["Cá thái lát", "Rau thìa là"],
        minPrice: 150000,
        maxPrice: 300000,
      },
      {
        type: "Chả giò",
        name: "Cocktail",
        img: "https://s3-alpha-sig.figma.com/img/51ce/0c84/f20199a4ed2a9693b47fe43c8c315a0a?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bB4eh8SPtgW5i1S2aQCF~q9MESSSLHteceZr8SdVkoqFyeXH99LcTRyCsXL78y91-hE2KOxBsRUFOh67zmrX2TYSPJlGXaqTxaR4yVO32xJXiRLWyxejjVrBuM~GrnQs5XrBgiiCsM9VisFSbo8B5TVhhRYNQzi9HILJMMk9YRCVs-U1GqdLFEk~1oNxALo6t234a83Qff2O1OkjDqQ485ZA9XQcPkElbygGdRXuadtjrz-gjY0iPUwEX52RcoL2TEiWcLwwejtJmsI52m954A6yHKy4YmfbwM1rJAdaUCs7uvJnL4Qq-dou40KWZCQdV2GJvhkVann0kppkk-L-Iw__",
        description: "Cocktail Spring rolls",
        ingredients: ["Khoai tây", "Thịt bò"],
        minPrice: 150000,
        maxPrice: 300000,
      },
      {
        type: "Chả giò Rế",
        name: "Tôm cua",
        img: "https://s3-alpha-sig.figma.com/img/6c8f/5d51/a5d39c2bbb596fbb8b0f81a99a3d3545?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=enVD7fLPYY7FcPOScSqmKKb8phTJS6pRICCBzBUIFzFjTZy2d0KpWKOt6aOmQ5oJyOPMvV4v8e0cBKPmdr~3SenRbXYb6MR6~AoWckNae4GeBIgWA-9jHGlJ64dXm0rZGXmEq~IkO849otaYkEJgIxQncliEAxY061p73iqOjWqrk61PvITzpQywmIOuEdy5EVTcveiCJbPig~cYtcofkVqQoCVK~4nYEib71dc8mInp3n93V8q3pb~NAiJmgkMySpXoGfP7E5PN8Vj8FbaZaTuWwAJozgDA4SNRjNsUO6U7aS5NuxgczE5naQzouj2tjno7s7gPEjNvnC8O5MRZbw__",
        description: "Shrimp & crab spring rools trivet",
        ingredients: ["Cua", "Tôm"],
        minPrice: 150000,
        maxPrice: 300000,
      },
      {
        type: "Chả giò",
        name: "Tôm",
        img: "https://s3-alpha-sig.figma.com/img/4684/8c99/7efbb957e9cebcf7c1759a3cca4d3802?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i14633WHvDyJw6rxMAUBlTyYcXefZgY8Sy29fWQwrgm9YGWoCmGJp0h2BXqoSYhRFdIHiG3w1NGYWQpeT85wpzODrkfSlRB5-JufLcDKm7sh0G-ALywcIePOtbXKhsS47MSi6hDjcNomNlT5Lx0VHxvLqceCQkCzl-hgB~vmRu0FN4VFDhr-j0yMK2c9tnw2Y0kDLHS3AovT6asm2QhDqpzJ~F-v~S1b5hgNZPTNADOprVCbaeFqdmkjrn-vmEbGFaeNEIzAObBJCWLYCOwjAJxzOkFVQ7uyhqBRayiW203eapDps-1ix3BkAh8bP6bhiwOwyUob8xyeh4evgpZH3w__",
        description: "Sauted Beef with Chinese broccoli",
        ingredients: ["Tôm"],
        minPrice: 150000,
        maxPrice: 300000,
      },
    ],
  },
  {
    name: "Gỏi",
    numberOfItems: 1,
    items: [
      {
        type: "Gỏi",
        name: "",
        img: "https://i.imgur.com/uEo4EhN.png",
        description: "Dipped Argentina beef with black pepper sauce",
        ingredients: ["Cá thái lát", "Rau thìa là"],
        minPrice: 150000,
        maxPrice: 300000,
      },
    ],
  },
  {
    name: "Chim bồ câu",
    numberOfItems: 1,
    items: [
      {
        type: "Chim bồ câu",
        name: "",
        img: "https://i.imgur.com/uEo4EhN.png",
        description: "Dipped Argentina beef with black pepper sauce",
        ingredients: ["Cá thái lát", "Rau thìa là"],
        minPrice: 150000,
        maxPrice: 300000,
      },
    ],
  },
];

const addMenuItems = async () => {
  try {
    const menuCollection = collection(db, "menu");

    for (const menuItem of menuItems) {
      await addDoc(menuCollection, menuItem);
      console.log(`Added menu: ${menuItem.name}`);
    }
    console.log("All menu items added successfully!");
  } catch (error) {
    console.error("Error adding menu items: ", error);
  }
};

export default addMenuItems;
