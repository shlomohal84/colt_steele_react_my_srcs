import axios from "axios";
import { useEffect } from "react";
import Link from "next/link";

const Index = ({ posts }) => {
  return (
    <div>
      <h1>OUR INDEX PAGE!!!</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/post?id=${post.id}`} as={`/p/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

Index.getInitialProps = async () => {
  // https://jsonplaceholder.typicode.com/posts
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const { data } = res;
  return { posts: data, mood: "happy" };
};

export default Index;

// import { Component } from "react";
// import axios from "axios";

// class Index extends Component {
//   constructor(props) {
//     super(props);
//   }
//   static async getInitialProps() {
//     const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
//     const { data } = res;
//     return { posts: data, mood: "happy" };
//   }

//   // componentDidMount() {
//   //   console.log("FETCHING YOUR DATA IN COMPONENTDIDMOUNT");
//   // }
//   render() {
//     const { posts } = this.props;
//     return (
//       <div>
//         <h1>OUR INDEX PAGE!!!</h1>
//         <ul>
//           {posts.map((post) => (
//             <li key={post.id}>{post.title}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }
// export default Index;
