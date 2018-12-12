import SyntaxHighlighter from 'react-syntax-highlighter'
import SyntaxHighlighterTheme from 'react-syntax-highlighter/styles/prism/atom-dark';
import Page from '../components/page'
import Layout from '../components/layout'

export default class extends Page {
  render() {
    return (
      <Layout {...this.props} title="Search">
        <h1 className="display-2">Search</h1>
        <p className="lead">
         Enter an Oregon SID number to view risk score.
        </p>

     </Layout>
    )
  }
}