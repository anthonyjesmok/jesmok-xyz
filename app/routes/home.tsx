import type { Route } from "./+types/home";
import { SplitPageLayout } from "../components/SplitPageLayout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home" },
    { name: "description", content: "A personal site with projects, ideas, and tools." },
  ];
}

export default function Home() {
  return (
    <SplitPageLayout
      title="Home"
      description="A personal space for projects, ideas, and the tools I use every day."
      imageUrl="https://www.placecats.com/1200/1600"
    >
      <p>
        Explore thoughts, updates, and the tools that shape my workflow. Each page
        uses a clean split layout so the content is easy to scan and the photo panel stays fully covered.
      </p>
    </SplitPageLayout>
  );
}
