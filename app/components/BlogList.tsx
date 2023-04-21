type Props = {
  posts: Post[];
};

function BlogList({ posts }: Props) {
  console.log(posts);
  return <div>BlogList</div>;
}

export default BlogList;
