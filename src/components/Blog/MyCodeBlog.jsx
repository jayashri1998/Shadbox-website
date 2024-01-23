import React from 'react'
import { CodeBlock,dracula } from "react-code-blocks"


const MyCodeBlog = () => {
  return (
    <div>
      <CodeBlock
        text={`console.log('Hello world');

const function = () => {
  return (
    <h1>This is a Title.</h1>
      );
    };
`}
        language="javascript"
        showLineNumbers={true}
        startingLineNumber={1}
        theme={dracula}
      />
    </div>
  )
}

export default MyCodeBlog