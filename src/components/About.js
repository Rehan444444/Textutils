import React from 'react'

export default function About(props) {
  
  // let myStyle={
  //   color: props.mode==='dark'?'white':'black',
  //   backgroundColor: props.mode==='dark'?'rgb(26 38 80)':'white'

  // }




  return (
    <div className='container'style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
      <h1>About us </h1>
       <div class="accordion"  id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" style={{ color: props.mode === 'dark' ? 'white' : 'black' , backgroundColor: props.mode==='dark'?'rgb(26 38 80)':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" style={{color: props.mode === 'dark' ? 'white' : 'black' , backgroundColor: props.mode==='dark'?'#5ba58d':'white'}} class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the , though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" style={{ color: props.mode === 'dark' ? 'white' : 'black' , backgroundColor: props.mode==='dark'?'rgb(26 38 80)':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={{color: props.mode === 'dark' ? 'white' : 'black' , backgroundColor: props.mode==='dark'?'#5ba58d':'white'}}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the , though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed"style={{ color: props.mode === 'dark' ? 'white' : 'black' , backgroundColor: props.mode==='dark'?'rgb(26 38 80)':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" style={{color: props.mode === 'dark' ? 'white' : 'black' , backgroundColor: props.mode==='dark'?'#5ba58d':'white'}} class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the , though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
   
    </div>
  )
}
