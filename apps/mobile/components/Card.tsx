import { PropsWithChildren } from "react";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

function Root({ children }: PropsWithChildren) {
  return (
    <ThemedView className="p-4 rounded-2xl border border-border">
      {children}
    </ThemedView>
  );
}

function Header({ children }: PropsWithChildren) {
  return (
    <ThemedText className="text-xl font-semibold capitalize">
      {children}
    </ThemedText>
  );
}

function Footer({ children }: PropsWithChildren) {
  return (
    <ThemedText className="font-light text-sm opacity-50">
      {children}
    </ThemedText>
  );
}

export const Card = {
  Root,
  Header,
  Footer,
};
