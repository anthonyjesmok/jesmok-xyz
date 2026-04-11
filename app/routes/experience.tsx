import { SplitPageLayout } from "../components/SplitPageLayout";

export function meta() {
  return [{ title: "Experience" }];
}

export default function Experience() {
  return (
    <SplitPageLayout
      title="Experience"
      description="A look at professional and personal experience."
      imageUrl="https://www.placecats.com/1200/1600"
    >
      <p>
        See the story behind my work and the types of projects I enjoy building.
        This page highlights the experience that helps shape the way I create and collaborate.
      </p>
    </SplitPageLayout>
  );
}
