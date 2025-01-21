import api from "@/api";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Dish } from "@recipe-book/api-client/types/dish/dish.type";
import { Redirect, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

export default function DishIdScreen() {
  const { id } = useLocalSearchParams();
  const [dish, setDish] = useState<Dish | null>();

  if (!id) {
    return <Redirect href="/" />;
  }

  useEffect(() => {
    api.dish
      .getOne({ id: String(id) })
      .then((response) => setDish(response.data));
  }, []);

  return (
    <ThemedView>
      <ThemedText>Informacion acerca del plato</ThemedText>
      <ThemedText>{dish?.name}</ThemedText>
    </ThemedView>
  );
}
