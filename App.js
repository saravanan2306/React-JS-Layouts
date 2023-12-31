import "./App.css";
//bootstrap link
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
//react-router-dom link
import { BrowserRouter,Routes,Route } from "react-router-dom";
//font awesome link
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


function App() {

  // Task-7
  // function add1(){
  //   let a=document.querySelector('#one');
  //   let b=a.textContent;
  //   b++;
  //   a.innerHTML=b;
  // }

  // function add2(){
  //   let c=document.querySelector('#two');
  //   let d=c.textContent;
  //   d++;
  //   c.innerHTML=d;
// }


    // hooks concept usestate
    let [num,viswa]=useState(0);

  

  return (
    <>
      {/* Task-1 */}

      {/* <div className='over-all'>
<div className='content-box'>
  <h1>Congratulations</h1>
  <div className='bg-col p-4'>
    <img src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png' alt='img'/>
    <h3>Saravanan N</h3>
    <p>B.Sc Information Technology in Sadakathullah appa college,<br/> Tirunelveli.</p>
    <img src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png' alt='img'/>
  </div>
</div>
  </div> */}

      {/* Task-2 */}

      {/* <div className='over-all-col'>
  <div className='img-box'>
    <h1>Super Over League</h1>
    <img src='https://assets.ccbp.in/frontend/react-js/rcb-img.png' alt='img'/>
    <img src='https://assets.ccbp.in/frontend/react-js/csk-img.png' alt='img'/>
  </div>
</div> */}

      {/* Task-3 */}

      {/* <div className='night-img'>
  <div className='social-box'>
<h1>Social Buttons</h1>
<button type="button" class="btn btn-warning text-white">Like</button>
<button type="button" class="btn btn-light ms-4 me-4">Comment</button>
<button type="button" class="btn btn-primary">Share</button>
</div>
</div> */}

      {/* Task-4 */}

      {/* <div className='notification'>
  
  <div className='msg-box'>
  <h1>Notifications</h1>
  <div className='blue-col'>
    <p> &nbsp; &nbsp;<FontAwesomeIcon icon={faCircleCheck} /> &nbsp; Information Message</p>
  </div>

  <div className='green-col mt-4'>
    <p> &nbsp; &nbsp;<FontAwesomeIcon icon={faCircleCheck} /> &nbsp; Success Message</p>
  </div>

  <div className='yellow-col  mt-4'>
    <p> &nbsp; &nbsp;<FontAwesomeIcon icon={faBell} /> &nbsp; Warning Message</p>
  </div>

  <div className='red-col  mt-4'>
    <p> &nbsp; &nbsp;<FontAwesomeIcon icon={faCircleExclamation} /> &nbsp; Error Message</p>
  </div>
  </div>
</div> */}

      {/* Task-5 */}

      {/* <div className="purble-col p-5">
        <div className="white-col p-5">
          <div className="row">
            <div className="computer col-sm-6">
              <img
                src="https://cdn3.iconfinder.com/data/icons/flat-rounded-5/50/482-1024.png"
                alt="img"
              />
            </div>
            <div className="col-sm-6">
              <div className="form-box">
                <h1 className="text-center pb-4">Member Login</h1>
                <div className="input-box">
                <input type="text" placeholder="Email" /> <br />
               <div className="i-mail">
                <FontAwesomeIcon icon={faEnvelope} />
                </div>
                </div>
                <div className="input-box">
                <input type="password" className="mt-4" placeholder="******" /> <br />
                <div className="i-mail">
                <FontAwesomeIcon icon={faLock} />
                </div>
                </div>
                <button className="mt-4" type="submit">LOGIN</button>
                <p className="text-center pt-5">
                  Forgot <span>Username / Password</span>
                </p>
                <p className="text-center account">
                  <span>
                    Create your account <FontAwesomeIcon icon={faRightLong} />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Task-6 */}
      {/* <div className="bg-col-gray">
        <div className="header">
          <h1 className="pb-3">Learn 4.0 Technologies</h1>
          <p className="pb-4">
            Javascript is Progarmming language, It is the Validation. Easy to
            Create Website, Dynamic and Interactive webpages. It's
            Formvalidation,
            <br /> Text Effects, Calculation ect... one of the core technologies
            of the World Wide Web, alongside HTML and CSS. As of 2023, 98.7% of{" "}
            <br /> websites use JavaScript
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="tech-box p-4 ">
                <h3>Data Scientist</h3>
                <p>
                  Develop algorithms (sets of instructions that tell computers
                  what to do) and models to support programs for machine
                  learning.
                </p>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/6361/6361001.png"
                  alt="img"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="tech-box p-4 saro">
                <h3>Dot Developer</h3>
                <p>
                  Develop algorithms (sets of instructions that tell computers
                  what to do) and models to support programs for machine
                  learning.
                </p>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4241/4241497.png"
                  alt="img"
                />
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-sm-6">
              <div className="tech-box p-4 saro1">
                <h3>VR Developer</h3>
                <p>
                  Develop algorithms (sets of instructions that tell computers
                  what to do) and models to support programs for machine
                  learning.
                </p>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShMrnmAROUznyzx7VaUdUPWA7PQixA5nsIPw&usqp=CAU"
                  alt="img"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="tech-box p-4 saro2">
                <h3>ML Engineer</h3>
                <p>
                  Develop algorithms (sets of instructions that tell computers
                  what to do) and models to support programs for machine
                  learning.
                </p>
                <img
                  src="https://w7.pngwing.com/pngs/217/769/png-transparent-python-language-logo-python-data-science-data-analyst-programming-language-interface-3d-icon-thumbnail.png"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Task-7 */}

      {/* <div className="yellow-col">
        <div className="container">
          <div className="back-white">
            <h1>
              Bob ate <span id="one">4</span> mangoes <span id="two">5</span> bananas
            </h1>
            <div className="row">
              <div className="col-sm-6">
                <div className="mango">
                  <img
                    src="https://www.freepnglogos.com/uploads/mango-png/mango-diy-skin-care-hacks-for-mangoes-mangoes-for-your-skin-2.png"
                    alt="img"
                  />
                  <button className="mt-4" onClick={add1}>Eat Mango</button>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="mango banan pt-3">
                  <img
                    src="https://i.pinimg.com/originals/39/e3/8a/39e38a13253cb077924e1714b0f292e9.png"
                    alt="img"
                  />
                  <br />
                  <button className="mt-3" onClick={add2}>Eat Banana</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}



{/* Task-8 */}

{/* <section className="bg-pink">
  <div className="imoji-cont">
    <h1>How satisfied are you with our <br/> customer support performance? </h1>
    <div className="imojis">
      <div className="row">
        <div className="col-sm-4">
          <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <span>&#128549;</span>
        <p>  <strong>Sad</strong></p></a>
        </div>
        <div className="col-sm-4">
          <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <span>&#128528;</span>
        <p>    <strong>None</strong></p>
        </a>
          </div>
          <div className="col-sm-4">
            <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
          <span>&#128515;</span>
          <p><strong>Happy</strong></p>
          </a>
          </div>
      </div>
    </div>
  </div>
</section> */}

{/* Modal */}
{/* <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body thank">
      <FontAwesomeIcon icon={faHeart} />
      <h2>Thank You!</h2>
      <p>We will use your feedback to improve our customer support <br/> performance.</p>
      </div>
    </div>
  </div>
</div> */}

{/* Hooks concept > UseState */}

<h1 className="">UseState</h1>

<h1>{num}</h1>
<button className="" onClick={()=> viswa(num+1)}> Increment</button> <br/>
<button className="" onClick={()=> viswa(num-1)}> Decrement</button><br/>
<button className="" onClick={()=> viswa(0)}> Reset</button>

    </>
  );
}


export default App;
