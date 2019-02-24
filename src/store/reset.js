import { resetUser } from './userSlice'
import { resetRepo } from './repoSlice'
import { resetIssues } from './issuesSlice'
import { resetLabels } from './issueLabelsSlice'

export const reset = () => dispatch => {
  dispatch(resetUser())
  dispatch(resetRepo())
  dispatch(resetIssues())
  dispatch(resetLabels())
}
