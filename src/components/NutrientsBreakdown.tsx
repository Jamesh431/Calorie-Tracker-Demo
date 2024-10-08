import { useEffect, useState } from "react";
import { View, Text } from "react-native";

import handleFoodFetch from "@/util/handleFoodFetch";

export default function NutrientsBreakdown({ foodCode }: { foodCode: any }) {
  const [foodObj, setFoodObj] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedFoodObj = await handleFoodFetch(foodCode);
        setFoodObj(fetchedFoodObj);
      } catch (err) {
        console.error("Error fetching food data:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [foodCode]);

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  console.log("\n\nwhat is passed: ", JSON.stringify(foodObj));

  if (!foodObj || !foodObj.nutrients || foodObj.nutrients.length === 0) {
    return <Text>No nutrients data available</Text>;
  }

  const MountNutrients = () => {
    return foodObj.nutrients.map((nutrient: any, idx: number) => {
      const nutrAmount = `${nutrient.amount}${nutrient.unitAbbr}`;
      return (
        <View key={idx}>
          <Text>
            {nutrient.name}: {nutrAmount}
          </Text>
        </View>
      );
    });
  };

  return (
    <View>
      <Text>Food: {foodObj.name}</Text>
      <Text>Brand Owner: {foodObj.brandOwner}</Text>
      <Text>Serving Size: {foodObj.servingSizeTotal}</Text>

      <Text>Nutrients</Text>

      <MountNutrients />
    </View>
  );
}
