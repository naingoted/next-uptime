import Head from "next/head";
import Monitor from "../components/monitor/Monitor";
import { MonitorProvider } from '../contexts/monitorContext'

export default function Home() {

  return (
    <MonitorProvider>
      <Head>
        <title>AWS Services status page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Monitor />
    </MonitorProvider>
  );
}
