import React, { Component } from 'react';

import '../CSS/imagestyles.css';

const CodeFrame = (props) => (
<div className = "code-frame" {...props} />)



export const tensorIntro=(

<div>
        <p className="textStyle"> TensorFlow Introduction: </p>
       <CodeFrame >
       <pre>
       <code>
       <p className= "codeStyle">y = activation(torch.mm(features, weights.view(5,1)) + bias)</p>

       </code>
       </pre>
       </CodeFrame>
</div>

)
