import api from "@/api";
import { Card } from "@/components/Card";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Dish } from "@recipe-book/api-client/types/dish/dish.type";
import { getTimeSince } from "@recipe-book/helpers";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Pressable } from "react-native";

export default function HomeScreen() {
  const [data, setData] = useState<Dish[]>();

  useEffect(() => {
    api.dish.getAll().then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <FlatList
      data={data}
      contentContainerClassName="gap-4 p-4"
      ListHeaderComponent={() => (
        <ThemedView className="p-6">
          <ThemedText>Platos recientemente añadidos</ThemedText>
        </ThemedView>
      )}
      renderItem={({ item }) => (
        <Link asChild href={`/dish/${item.id}`}>
          <Pressable className="active:bg-red-400">
            <Card.Root>
              <Card.Header>{item.name}</Card.Header>
              <Card.Footer>{getTimeSince(item.createdAt)}</Card.Footer>
            </Card.Root>
          </Pressable>
        </Link>
      )}
    />
  );
}
