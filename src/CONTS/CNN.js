import React, { Component } from 'react';

import '../CSS/imagestyles.css';

const CodeFrame = (props) => (
<div className = "code-frame" {...props} />)



export const CNNIntro=(

<div>
        <p className="textStyle"> CNN Introduction: </p>
       <CodeFrame >
       <pre>
       <code>
       <p className= "codeStyle">y = activation(torch.mm(features, weights.view(5,1)) + bias)</p>

       </code>
       </pre>
       </CodeFrame>
</div>

)
