import Layout from "../../components/layout";
import { getPostIds, getPostData } from "../../lib/posts";

export default function PostDetail({postData}) {
    return <Layout>
        <h1>{postData.title}</h1>
        <p>{postData.slug}</p>
        <p>{postData.date}</p>
    </Layout>
}

export async function getStaticPaths() {
    const paths = getPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const postData = getPostData(params.slug)
    return {
        props: {
            postData,
        }
    }
}