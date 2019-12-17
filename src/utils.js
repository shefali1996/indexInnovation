export let variantArr = [
  {
    name: "Try-It-For-Free",
    content: "header.tryFree"
  },
  {
    name: "Experience-IDEX",
    content: "headSection.expIDEX"
  },
  {
    name: "Get-Started",
    content: "footer.getStarted"
  }
];
export default function d() {
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
