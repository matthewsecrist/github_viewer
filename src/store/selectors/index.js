import { path, any, propEq, filter, compose, prop } from 'ramda'
import { createSelector } from 'reselect'

export const selectIssues = path(['issues', 'data'])

export const selectFilter = path(['filter', 'id'])

const hasLabel = tag => any(propEq('id', tag))

export const filterByTag = (issues, tag) =>
  filter(
    compose(
      hasLabel(tag),
      prop('labels')
    )
  )(issues)

export const issuesFilter = createSelector(
  selectIssues,
  selectFilter,
  (issues, filter) => (filter ? filterByTag(issues, filter) : issues)
)
