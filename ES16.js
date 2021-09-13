function createStore() {
  catalog = [];
  return (item) => {
      catalog.push(item);
      console.log(catalog);
    };
  }


const redPants = { id: 1, name: 'Red Pants' };
const whiteHat = { id: 2, name: 'White Hat' };
const blackSneakers = { id: 3, name: 'Black Sneakers' };
const greenBoots = {id:4, name: `Crocodile Boots` };

console.log('--- Dress Store ---');
const dressStore = createStore();
dressStore(redPants);
dressStore(whiteHat);

console.log('--- Shoes Store ---');
const shoesStore = createStore();
shoesStore(greenBoots);
shoesStore(blackSneakers);