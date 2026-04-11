import { SplitPageLayout } from "../components/SplitPageLayout";

export function meta() {
  return [{ title: "Musings" }];
}

export default function Musings() {
  return (
    <SplitPageLayout
      title="Musings"
      description="Thoughts, short essays, and ideas."
      imageUrl="https://www.placecats.com/1200/1600"
    >
      <p>
        Read through observations, stories, and reflections on technology, design,
        and the creative process.
      </p>
    </SplitPageLayout>
  );
}
