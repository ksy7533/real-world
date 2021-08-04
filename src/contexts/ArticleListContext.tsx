import React, {
  createContext,
  Dispatch,
  ReactElement,
  ReactNode,
  useContext,
  useReducer,
} from 'react'

interface AuthorType {
  username: string
  bio: string
  image: string
  following: boolean
}

export interface ArticleType {
  title: string
  slug: string
  body: string
  createdAt: string
  updatedAt: string
  tagList: []
  description: string
  author: AuthorType
  favorited: boolean
  favoritesCount: number
}

interface StateType {
  articleList: ArticleType[]
  articleListPageInfo: any
}

type ActionType = { type: 'SET_ARTICLE_LIST'; articleList: ArticleType[] }

type DispatchType = Dispatch<ActionType>

const ArticleListContext = createContext<StateType | null>(null)
const ArticleListDispatchContext = createContext<DispatchType | null>(null)

function reducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case 'SET_ARTICLE_LIST':
      return {
        ...state,
        articleList: [...action.articleList],
      }
    default:
      throw new Error('Unhandled action')
  }
}

const ArticleListProvider = ({
  children,
}: {
  children: ReactNode
}): ReactElement => {
  const [state, dispatch] = useReducer(reducer, {
    articleList: [],
    articleListPageInfo: {},
  })

  return (
    <ArticleListContext.Provider value={state}>
      <ArticleListDispatchContext.Provider value={dispatch}>
        {children}
      </ArticleListDispatchContext.Provider>
    </ArticleListContext.Provider>
  )
}

export { ArticleListProvider }

export function useArticleListState(): StateType {
  const state = useContext(ArticleListContext)
  if (!state) throw new Error('Cannot find ArticleListProvider')
  return state
}

export function useArticleListDispatch(): React.Dispatch<ActionType> {
  const dispatch = useContext(ArticleListDispatchContext)
  if (!dispatch) throw new Error('Cannot find ArticleListProvider')
  return dispatch
}
