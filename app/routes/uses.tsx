import { SplitPageLayout } from "../components/SplitPageLayout";

export function meta() {
  return [{ title: "Uses" }];
}

export default function Uses() {
  return (
    <SplitPageLayout
      title="Uses"
      description="A quick summary of tools, hardware, and workflows."
      imageUrl="https://www.placecats.com/1200/1600"
    >
      <p>
        A curated overview of the software, devices, and practices that help me stay
        productive and build better work.
      </p>
    </SplitPageLayout>
  );
}
