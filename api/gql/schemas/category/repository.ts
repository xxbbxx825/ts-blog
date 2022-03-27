import { gqlClient, } from '../../gql-client'
import { getStatement, } from '../common/arg'
import { GET_CATEGORY, GET_CATEGORIES, CREATE_CATEGORY, UPDATE_CATEGORY, REMOVE_CATEGORY, } from './statement'

export default {
  async getCategory (variables: { id: string }) {
    const gqls = getStatement(GET_CATEGORY, variables)
    const result = await gqlClient.query(gqls, {
      ...variables,
    })
    return result
  },
  async getCategories () {
    const gqls = getStatement(GET_CATEGORIES, {})
    const result = await gqlClient.query(gqls, {})
    return result
  },
  async createCategory (variables) {
    const gqls = CREATE_CATEGORY()
    const result = await gqlClient.mutation(gqls, variables)
    return result
  },
  async updateCategory (variables) {
    const gqls = UPDATE_CATEGORY()
    const result = await gqlClient.mutation(gqls, variables)
    return result
  },
  async removeCategory (variables: { id: string }) {
    const gqls = getStatement(REMOVE_CATEGORY, variables)
    const result = await gqlClient.mutation(gqls, {})
    return result
  },
}
