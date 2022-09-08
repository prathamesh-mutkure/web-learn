import Link from "next/link";

// LINK TAG
// 'a' tag sends new request when clicked
// 'Link' tag utilises SPA and loads new page without sending new request

function HomePage() {
  return (
    <div>
      <h1>Hello Next.js!</h1>

      <ul>
        <li>
          <a href="/about">About (Anchor)</a>
        </li>
        <li>
          <Link href="/about">About (Link)</Link>
        </li>
        <li>
          <Link
            href={{
              pathname: "/clients",
            }}
          >
            Clients
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
