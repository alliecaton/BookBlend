import { useState } from 'react'

import axios, { AxiosError } from 'axios'

export const useFetchAi = <ResponseData>() => {
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState<ResponseData | null>(null)
  const [error, setError] = useState<Error | AxiosError | null>(null)

  type Config = {
    url: string
    method: 'get' | 'post' | 'put' | 'delete'
    data: string
  }

  const fetchAI = async (config: Config) => {
    setLoading(true)

    try {
      await axios({
        method: config.method,
        url: import.meta.env.VITE_API_BASE + config.url,
        data: config.data,
        // headers: {
        // },
      }).then((res) => {
        setData(res.data)
      })
    } catch (e) {
      console.error(e)
      setError(e as Error | AxiosError)
    } finally {
      setLoading(false)
    }
  }

  return { loading, data, error, fetchAI }
}
