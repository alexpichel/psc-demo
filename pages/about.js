import SyntaxHighlighter from 'react-syntax-highlighter'
import SyntaxHighlighterTheme from 'react-syntax-highlighter/styles/prism/atom-dark';
import Page from '../components/page'
import Layout from '../components/layout'

export default class extends Page {
  render() {
    return (
      <Layout {...this.props} title="About">
        <h1 className="display-2">About</h1>
        <p className="lead">
         A project by the Criminal Justice Commission to search offender risk scores.
        </p>
        <h2 className="mt-3">How This Works</h2>
        <p>
          Something, something, something about how the PSC works and where the data comes from.
        </p>
        <p>Links to CJC and DOC</p>
     </Layout>
    )
  }
}