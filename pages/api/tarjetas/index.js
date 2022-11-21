import axios from 'axios'
import config from '../../../config/config.js'
import { CSVtoJSON } from '../../../utils/helpers'

export default async function endPointHandler(req, res) {
  const { tarjetas: { url } } = config.BCRA_urls
  const { data } = await axios({ 
    url: url, 
    method: 'GET',
  })

  const csvData = CSVtoJSON(data)
  res.status(200).send(csvData)
}