import axios from 'axios'
import config from '../../../config/config.js'
import { CSVtoJSON } from '../../../utils/helpers'
import iconv from 'iconv'

export default async function endPointHandler(req, res) {
  const { personales: { url } } = config.BCRA_urls
  const { data } = await axios({ 
    url: url, 
    method: 'GET',
  })


  const csvData = CSVtoJSON(data)
  res.status(200).send(csvData)
}