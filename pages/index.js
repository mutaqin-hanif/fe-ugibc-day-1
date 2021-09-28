import Header from "../layouts/Header";
import Main from "../layouts/Main";
import Layout from "../layouts/Layout";
import { host } from "../configs";
export default function Home({ users }) {
  return (
    <Layout>
      <Header />
      <Main users={users} />
    </Layout>
  );
}
export async function getServerSideProps(context) {
  const res = await host.get("products");
  const data = res.data;
  return {
    props: { users: data }, // will be passed to the page component as props
  };
}
