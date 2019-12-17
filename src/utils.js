export let variantArr = [
  {
    name: "tryFree",
    content: "header.tryFree"
  },
  {
    name: "expIDEX",
    content: "headSection.expIDEX"
  },
  {
    name: "getStarted",
    content: "footer.getStarted"
  }
];
export default function d() {
  console.log('mmmmmmmmmm');
  let locatStoregeItem = { ...localStorage };
  let finalArray = [];
  variantArr.forEach((value, i) => {
    let status = false;
    for (let curr in locatStoregeItem) {
      if (value.name === locatStoregeItem[curr]) {
        return (status = false);
      } else {
        status = true;
      }
    }
    if (status) finalArray.push(value);
  });

  return finalArray;
}
