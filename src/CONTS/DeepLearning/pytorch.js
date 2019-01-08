
import React, { Component } from 'react';

import '../../CSS/imagestyles.css';

const CodeFrame = (props) => (
<div className = "code-frame" {...props} />)

export const Introduction= (

<div>
        <p className="textStyle"> 
       
        Introduction To Pytorch:
         <p><font size="4">
        PyTorch is an open-source machine learning library for Python, just like Tensorflow, 
        I personally find using pyTorch easier, Since pytorch tensors behave very similar to 
        Numpy arrays. (Note: Tensors can simply be considered multidimensional arrays)
        </font> </p>
        <p><font size="4">
        The advantage of using libraries like Pytorch and TensorFlow is that their tensors can be used 
        on a GPU that supports CUDA.
        </font> </p>
        <p><font size="4">
        In the Pytorch and TensorFlow sections we will implement bunch of neural Networks, So make sure 
        you know about Neural Networks first. 
        </font> </p>
        <p><font size="4">
        Lets go over some built in Pytorch functions we are going to need:
        <br/>
        <ul  className="ul" >
      <li className="li">torch.mm(a,b) => this function multiplies the two matrices a and b</li>
<li className="li">torch.randn((a,b)) => creates a random matrix of size (a,b)</li>
      <li className="li">tensor.view(a,b) => reshape the matrix to a (a,b) shaped matrix</li>
       
       </ul>
       Note: to flatten a matrix, pass the first arg as first dimension and -1 as second arg.
        </font></p>

         </p>
       
</div>
       
)


export const NeuralNetPytorch=(

<div>
        <p className="textStyle"> Neural Networks in Pytorch: </p>
       <CodeFrame >
       <pre>
       <code>
       <p className= "codeStyle">y = activation(torch.mm(features, weights.view(5,1)) + bias)</p>

       </code>
       </pre>
       </CodeFrame>
</div>

)


export const NetWorkArch= (

<div>
        <p className="textStyle"> Neural NEtWork Architechture with Pytorch: </p>
       <CodeFrame>
       </CodeFrame>
</div>
       
)



