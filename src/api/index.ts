import axios from 'axios'

const fetcher = async (url: string) =>
  await axios.get(url).then((res) => res.data)

export const getArticleList = async ({
  currentPage,
  pageLimit,
}: {
  currentPage: number
  pageLimit: number
}): Promise<any> => {
  return await fetcher(
    `https://conduit.productionready.io/api/articles?offset=${
      (currentPage - 1) * 10
    }&limit=${pageLimit}`
  )
}

export const getArticle = async ({ slug }: { slug: string }): Promise<any> => {
  return await fetcher(
    `https://conduit.productionready.io/api/articles/${slug}`
  )
}

export const getArticleCommentList = async ({
  slug,
}: {
  slug: string
}): Promise<any> => {
  return await fetcher(
    `https://conduit.productionready.io/api/articles/${slug}/comments`
  )
}
