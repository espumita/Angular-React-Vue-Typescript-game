import { DEPLOY_MINES } from './actionsTypes'
import { DEPLOY_MINES_MUTATION } from '../mutations/mutationTypes'

export default {
    [DEPLOY_MINES]: ({ commit, rootGetters }: any) => commit(DEPLOY_MINES_MUTATION, rootGetters)
}