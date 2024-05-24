import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";

const reactQuery = () => {
  const {
    data: comments,
    isLoading,
    error,
  } = useQuery({
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/comments?_limit=10").then(
        (res) => res.json()
      ),
    queryKey: ["comments"],
  });

  // Show a loading message while data is fetching
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  // to handle error
  if (error) {
    return <div className="error">Error: error fetching</div>;
  }
  return (
    <>
      <h1 className="title">Email address of users</h1>
      {comments.map((comment) => (
        <h2 key={comment.id} className="users">
          {comment.id}.{comment.email}
        </h2>
      ))}
    </>
  );
};

export default reactQuery();
