import Layout from "../../components/layout"
import { getPosts } from "../../lib/posts"

export default function PostList({posts}) {
    console.log(posts)
    return <Layout>
        <section>
            <h1>Posts</h1>
            {posts.map((post) => 
                <div key={post.id}>
                    <h2>{post.title}</h2>
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