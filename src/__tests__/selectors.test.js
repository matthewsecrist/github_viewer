import {
  filterByTag,
  selectIssues,
  selectFilter,
  issuesFilter
} from '../store/selectors'

describe('selector', () => {
  let state

  beforeEach(() => {
    state = {
      filter: {
        id: 'mock-issue-label-id-1'
      },
      issues: {
        data: [
          {
            title: 'mock-issue-title',
            user: {
              login: 'mock-user'
            },
            labels: [
              {
                id: 'mock-issue-label-id-1'
              }
            ],
            body: 'mock-issue-body'
          },
          {
            title: 'mock-issue-title2',
            user: {
              login: 'mock-user2'
            },
            labels: [],
            body: 'mock-issue-body2'
          },
          {
            title: 'mock-issue-title2',
            user: {
              login: 'mock-user2'
            },
            labels: [
              {
                id: 'mock-issue-label-id-1'
              },
              {
                id: 'mock-issue-label-id-2'
              }
            ],
            body: 'mock-issue-body2'
          }
        ]
      }
    }
  })

  describe('filterByTag', () => {
    it('filters a single issue', () => {
      expect(filterByTag([{ labels: [{ id: '1234' }] }], '1234').length).toBe(1)
    })

    it('filters out issues', () => {
      expect(filterByTag([{ labels: [{ id: 'asdf' }] }], '1234').length).toBe(0)
    })
  })

  describe('selectIssues', () => {
    it('selects the issues', () => {
      expect(selectIssues(state).length).toBe(3)
    })
  })

  describe('selectFilter', () => {
    it('selects the filter', () => {
      expect(selectFilter(state)).toBe('mock-issue-label-id-1')
    })
  })

  describe('issuesFilter', () => {
    it('selects the correct issues', () => {
      expect(issuesFilter(state).length).toBe(2)
    })

    it('selects no issues', () => {
      state = { ...state, filter: {} }
      expect(issuesFilter(state).length).toBe(0)
    })
  })
})
