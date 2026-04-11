import { SplitPageLayout } from "../components/SplitPageLayout";

export function meta() {
  return [{ title: "Contact" }];
}

export default function Contact() {
  return (
    <SplitPageLayout
      title="Contact"
      description="Reach out via email, social, or other channels."
      imageUrl="https://www.placecats.com/1200/1600"
    >
      <p>
        I’m always happy to connect. Whether you have a project idea, question, or just want to say hello,
        drop a note and I’ll get back to you soon.
      </p>
    </SplitPageLayout>
  );
}
