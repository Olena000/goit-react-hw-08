import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <p>Not found... 404</p>
      <Link to="/">Back to home page</Link>
    </div>
  );
}
