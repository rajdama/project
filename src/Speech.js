import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
 
function Speech() {
  const [value, setValue] = useState('');
  const { speak } = useSpeechSynthesis();
 
  return (
    <div className='speech'>
      <center>
    <img className='img-fluid' style={{width:'20%', borderRadius:'100%',marginBottom:'30px',marginTop:'-30px'}} src="images/electroencephalogram-turquoise-concept-icon-vector-34032798.png" alt="" />
    </center>
    <h2>Attention Deficit Hyperactivity Disorder</h2>
          <div style={{marginBottom:"30px"}}>
              About 25-40% of children with dyslexia also have ADHD, and approximately 25% of those with ADHD have dyslexia.
In 2016, 6.1 million children were diagnosed with ADHD.<br/>
<strong>Children with ADHD benefit from reading along with a program that can take the text and turn it into audio. Hence, we have provided a text-to-speech program. This helps with reading speed and learning new vocabulary.</strong></div>
      <textarea style={{height:'20vh', marginBottom:'30px'}} className='writing_area'
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
     <center> <button className='btn btn-lg btn-dark' style={{width:'40%'}} onClick={() => speak({ text: value })}>Speak</button></center>
    </div>
  );
}

export default Speech