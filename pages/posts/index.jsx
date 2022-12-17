import Layout from "../../components/layout"
import { getPosts } from "../../lib/posts"
import Link from "next/link";

export default function PostList({posts}) {
    console.log(posts)
    return <Layout>
        <section>
            <h1>Posts</h1>
            {posts.map((post) => 
                <div key={post.id}>
                    <h2><Link href={`posts/${post.id}`}>{post.title}</Link></h2>
                    <p>{post.id}</p>
                    <p>{post.date}</p>
                </div>
            )}
        </section>
    </Layout>

}

export function getStaticProps(){
    let posts = getPosts()
    return {props: {posts,}}
}