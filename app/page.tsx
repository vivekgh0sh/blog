import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        vivekgh0sh
      </h1>
      <p className="mb-4">
        {`if you want to have a peak in my mind, congratulations you are in the right place!`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
