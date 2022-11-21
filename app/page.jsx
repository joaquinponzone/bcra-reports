import Link from "next/link";
import config from '../config/config'

export default function Home() {
  const { BCRA_reports } = config
  return (
    <main>
      {BCRA_reports.map(report => {
        return (
          <h3 key={report}>
            <Link href={`${report}`}>
              Reporte {`${report}`}
            </Link>
          </h3>
        )
      })}
    </main>
  )
}
