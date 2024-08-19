"use client";
import { CopilotKit } from "@copilotkit/react-core";
import { CopilotPopup } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";
import "@copilotkit/react-textarea/styles.css";
import App from "../components/App";
import { RecipesProvider } from "../context/RecipesProvider";

export default function Home() {
  return (
    <CopilotKit runtimeUrl="/api/copilotkit/">
      <RecipesProvider>
        <App />
        <CopilotPopup
          instructions="Help the user find different recipes and add them to the app."
          defaultOpen={true}
          labels={{
            title: "Data Visualization Copilot",
            initial:
              "Hello there! Let's get started adding recipe's to our collection!",
          }}
          clickOutsideToClose={false}
        />
      </RecipesProvider>
    </CopilotKit>
  );
}
