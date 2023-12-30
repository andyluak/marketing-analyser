import { GetServerSideProps } from "next"
import { buildClerkProps, getAuth } from "@clerk/nextjs/server"

export default function Home() {
  return <section>Start Building</section>
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { userId } = getAuth(ctx.req)

  if (!userId) {
    return { redirect: { destination: "/sign-in", permanent: false } }
  }

  return { props: { ...buildClerkProps(ctx.req) } }
}
