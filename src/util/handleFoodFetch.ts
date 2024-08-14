import axios from "axios";

export default async function handleFoodFetch(foodCode: string) {
  const usdaURL = "https://api.nal.usda.gov/fdc/v1/foods/search?query=";
  const endParams = "api_key=DEMO_KEY";

  const reqUrl = `${usdaURL}${foodCode}&${endParams}`;

  const parseObj = async (foodObj: any) => {
    let nutrientsArr = [] as any;

    if (foodObj?.foodNutrients) {
      for (const nutrient of foodObj.foodNutrients) {
        nutrientsArr.push({
          name: nutrient.nutrientName,
          amount: nutrient.nutrientNumber,
          unitAbbr: nutrient.unitName,
        });
      }
    }

    let newObj = {
      name: `${foodObj.brandName} ${foodObj.description}`,
      brandOwner: foodObj.brandOwner,
      servingSizeUnit: foodObj.servingSizeUnit,
      servingSize: foodObj.servingSize,
      householdServing: foodObj.householdServingFullText,
      servingSizeTotal: `${foodObj.householdServingFullText} (${foodObj.servingSize}${foodObj.servingSizeUnit})`,
      nutrients: nutrientsArr,
    };

    console.log("newObj", newObj);

    return newObj;
  };

  try {
    const response = await axios.get(reqUrl);

    const foodResults = parseObj(response.data.foods[0]);

    console.log("response: ", response.data.foods);

    console.log("\nfoodResults: ", foodResults);

    return foodResults;
  } catch (err) {
    return console.error(`An error has occured fetching food: ${err}`);
  }
}
