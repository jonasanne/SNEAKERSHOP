import Cart from "@/models/Cart";
import Shoe from "@/models/Shoe";

const DB_NAME = "sneakershopdb",
  DB_VERSION = 2,
  idName = "idbId";

//STATIC DATA
const shoes: Array<Shoe> = [
  {
    id: 1,
    title: "Nike Air Zoom Pegasus 36",
    description:
      "The iconic Nike Air Zoom Pegasus 36 has an updated upper with more perforations and more targeted ventilation, namely in places where the foot heats up quickly. The tongue and heel counter have a thinner finish, without sacrificing comfort. The Flywire cables ensure that the shoe fits perfectly around the foot.",
    color: "GREY",
    sizes: [36, 39, 43, 42, 44, 45],
    price: 89.99,
    model: "https://jonasanne.be/models/Nike_Air_Zoom_36.glb",
    iosModel: "https://jonasanne.be/models/Nike_Air_Zoom_36.usdz",
    imgUrl: "https://jonasanne.be/img/shoes/Nike_Air_Zoom_36.webp",
    posterUrl: "https://jonasanne.be/models/Nike_Air_Zoom_36_poster.webp",
  },
  {
    id: 2,
    title: "Puma Suede Classic Eco",
    description:
      "With the red low sneakers suede classic eco from Puma you can go in all directions. The sneakers score high points due to the high-quality finish of the sole of durable rubber and the insole of textile. The 7-hole lacing gives the sneakers a trendy look. The outer layer of this product is made of leather.",
    color: "RED",
    sizes: [36, 38, 39, 43],
    price: 79.99,
    model: "https://jonasanne.be/models/puma_suede.glb",
    iosModel: "https://jonasanne.be/models/puma_suede.usdz",
    imgUrl: "https://jonasanne.be/img/shoes/puma_suede.webp",
    posterUrl: "https://jonasanne.be/models/puma_suede_Poster.webp",
  },
  {
    id: 3,
    title: "Nike Air Zoom Pegasus 35",
    description:
      "The Nike Air Zoom Pegasus 35 for men are neutral running shoes. The shoes provide responsive cushioning. The thirty-fifth edition of one of Nike's most popular shoes features a full-length Zoom Air unit and a more streamlined design.",
    color: "BLACK",
    sizes: [36, 38, 39, 43, 44],
    price: 69.99,
    model: "https://jonasanne.be/models/Nike_Air_Zoom.glb",
    iosModel: "https://jonasanne.be/models/Nike_Air_Zoom.usdz",
    imgUrl: "https://jonasanne.be/img/shoes/Nike_Air_Zoom.webp",
    posterUrl: "https://jonasanne.be/models/Nike_Air_Zoom_Poster.webp",
  },
  {
    id: 4,
    title: "Vans Old Skool Low Sneakers",
    description:
      "The Old Skool shoe is a true Vans classic. a low top lace-up shoe that was the first to wear the iconic side stripe. The shoe is lined, has padded cuffs for support and flexibility and the reinforced toe cap can take a beating. Of course, the waffle sole that is characteristic of Vans shoes is also included.",
    color: "BLUE",
    sizes: [36, 38, 39, 43, 42, 44],
    price: 49.99,
    model: "https://jonasanne.be/models/Vans_Old_Skool.glb",
    iosModel: "https://jonasanne.be/models/Vans_Old_Skool.usdz",
    imgUrl: "https://jonasanne.be/img/shoes/Vans_Old_Skool.webp",
    posterUrl: "https://jonasanne.be/models/Vans_Old_Skool_Poster.webp",
  },
  // {
  //   id: 1,
  //   title: "Nike Court Vision Low",
  //   description:
  //     "So you're in love with the classic look of 80s basketball, but also love the fast - paced look of today 's sport. Discover the new Nike Court Vision Low.The sleek upper and stitched overlays are inspired by the hook shots of old - school basketball, and the super soft, low - cut collar creates a streamlined look that 's comfortable all day long.",
  //   color: "black",
  //   sizes: [36, 37, 38, 39, 40, 41, 43],
  //   price: 69.99,
  //   model:
  //     "httpss://raw.githubusercontent.com/jonasanne/SNEAKERSHOP/master/sneakershop/src/assets/models/nike_court_vision.glb",
  //   iosModel:
  //     "httpss://raw.githubusercontent.com/jonasanne/SNEAKERSHOP/master/sneakershop/src/assets/models/nike_court_vision.usdz",
  //   imgUrl:
  //     "httpss://raw.githubusercontent.com/jonasanne/SNEAKERSHOP/master/sneakershop/src/assets/images/shoes/nike_court_vision.png",
  //   posterUrl: "",
  // },
];

const getDb = async (): Promise<IDBDatabase> => {
  let DB: IDBDatabase;

  return new Promise((resolve, reject) => {
    if (DB) {
      return resolve(DB);
    }
    const request: IDBOpenDBRequest = window.indexedDB.open(
      DB_NAME,
      DB_VERSION
    );

    request.onerror = (e) => {
      console.log("Error opening db", e);
      reject("Error");
    };

    request.onsuccess = (e: any) => {
      if (e.target) {
        DB = e.target.result;
        resolve(DB);
      }
    };

    request.onupgradeneeded = (e: any) => {
      console.log("onupgradeneeded");
      if (e.target) {
        const db = e.target.result;
        db.createObjectStore("shoes", {
          autoIncrement: true,
          keyPath: idName,
        });
        db.createObjectStore("cartItems", {
          autoIncrement: true,
          keyPath: idName,
        });
      }
    };
  });
};

export const getItemById = async (
  entity: string,
  id: number | string
): Promise<any> => {
  const db = await getDb();

  return new Promise((resolve) => {
    const trans: IDBTransaction = db.transaction([entity], "readonly");
    const store: IDBObjectStore = trans.objectStore(entity);

    let item: any = {};

    trans.oncomplete = () => {
      resolve(item);
    };

    store.openCursor().onerror = (e: any): void => {
      console.error("An error occured", e);
    };

    store.openCursor().onsuccess = (e: any): void => {
      const cursor = e.target.result;

      if (cursor) {
        if (cursor.value.id == id) {
          item = cursor.value;
        } else {
          cursor.continue();
        }
      }
    };
  });
};
export const getItems = async (entity: string): Promise<any> => {
  const db = await getDb();

  return new Promise((resolve) => {
    const trans: IDBTransaction = db.transaction([entity], "readonly");
    const store: IDBObjectStore = trans.objectStore(entity);

    const items: Array<any> = [];

    trans.oncomplete = () => {
      resolve(items);
    };

    store.openCursor().onerror = (e: any): void => {
      console.error("An error occured", e);
    };

    store.openCursor().onsuccess = (e: any): void => {
      const cursor = e.target.result;
      if (cursor) {
        items.push(cursor.value);
        cursor.continue();
      }
    };
  });
};

export const saveItem = async (entity: string, item: any) => {
  const db = await getDb();

  return new Promise((resolve) => {
    const trans: IDBTransaction = db.transaction(entity, "readwrite");
    trans.oncomplete = (e: any) => {
      resolve(e);
    };

    const store = trans.objectStore(entity);
    store.add(item);
  });
};

export const deleteItem = async (entity: string, item: any) => {
  const db = await getDb();

  return new Promise<void>((resolve) => {
    const trans: IDBTransaction = db.transaction(entity, "readwrite");
    trans.oncomplete = () => {
      resolve();
    };

    const store: IDBObjectStore = trans.objectStore(entity);
    store.delete(item[idName]);
  });
};

export const editItem = async (entity: string, item: any) => {
  const db = await getDb();

  return new Promise((resolve) => {
    const trans: IDBTransaction = db.transaction(entity, "readwrite");
    trans.oncomplete = (e: any) => {
      resolve(e);
    };

    const store = trans.objectStore(entity);
    store.openCursor().onerror = (e: any): void => {
      console.error("An error occured", e);
    };

    store.openCursor().onsuccess = (e: any): void => {
      const cursor = e.target.result;

      if (cursor) {
        if (cursor.key == item[idName]) {
          cursor.update(item);
        } else {
          cursor.continue();
        }
      }
    };
  });
};

export const seedData = async () => {
  // get data
  const dbShoes = await getItems("shoes");

  if (dbShoes.length == 0) {
    //geen schoenen aanwezig --> seed
    console.log(" schoenen seeden");

    shoes.forEach((shoe) => {
      console.log("seeding data in db");
      saveItem("shoes", shoe);
    });
  }
};
