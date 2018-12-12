import SyntaxHighlighter from 'react-syntax-highlighter'
import SyntaxHighlighterTheme from 'react-syntax-highlighter/styles/prism/atom-dark';
import Page from '../components/page'
import Layout from '../components/layout'

export default class extends Page {
  render() {
    return (
      <Layout {...this.props} title="Contact">
        <h1 className="display-2">Contact</h1>
        <p className="lead">
         Send the Criminal Justice Commission a message.
        </p>

     </Layout>
    )
  }
}