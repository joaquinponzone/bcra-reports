import axios from 'axios'
import { config } from '../../../config/config.js'
import { CSVtoJSON } from '../../../utils/helpers'

export default async function endPointHandler(req, res) {
  const { hipoteca } = config.BCRA_urls
  const { data } = await axios({ 
    url: hipoteca.url, 
    method: 'GET', 
    responseType: 'blob' 
  })
  const csvData = CSVtoJSON(data)
  res.status(200).json(csvData)
}