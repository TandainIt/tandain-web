import { gql } from '@apollo/client';

export const GET_ARTICLE_LIST = gql`
  query ArticleList($limit: Int) {
    articles(limit: $limit) {
      id
      title
      image
      sourceName
      sourceUrl
    }
  }
`;
