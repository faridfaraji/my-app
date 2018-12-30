
import React, { Component } from 'react';
import '../CSS/imagestyles.css';

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
        The advantage of using libraries like Pytorch and TensorFlow is that their tensors can used 
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
      <li className="li">torch.mm() </li>
       <li className="li">torch.randn((a,b))</li>
      <li className="li">Milk</li>
       </ul>
       
        </font></p>

         </p>
       <CodeFrame>
       <pre><code>
       y = activation(torch.mm(features, weights.view(5,1)) + bias)

       </code></pre>
       </CodeFrame>
</div>
       
)


export const NeuralNetPytorch=(

<div>
        <p className="textStyle"> Neural Networks in Pytorch: </p>
       <CodeFrame>
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



