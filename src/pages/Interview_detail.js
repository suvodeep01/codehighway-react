import { Link } from "react-router-dom";
import React, { useEffect } from 'react';


export default function Interview_detail(){

    useEffect(() => {
        document.querySelectorAll(".accordion-item").forEach((item) => {
            item.querySelector(".accordion-item-header").addEventListener("click", () => {
              item.classList.toggle("open");
            });
          });
      }, []);
    return(
        <>

        {/* start section banner */}
  <div className="section_banner">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="text-center title">
          <h2>Interview Questions & Answer</h2>
          <ul>
            <li>
              <Link to={"/"}>Home &nbsp;&nbsp;&nbsp;&gt;</Link>
            </li>
            <li>
              <Link to={"/Interview"}>Interview Q &nbsp;&nbsp;&nbsp;&gt;</Link>
            </li>
            <li>Interview details</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
{/* end section banner */}


{/* start interview Questions */}
<section className="interview_q pb-70 pt-70">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-12">
          <div className="title">
            <h2 id="interview_h2">Html Interview Question &amp; Answer:</h2>
          </div>
        </div>
        <div className="col-lg-12 col-12">
          <div className="accordion">
            <div className="accordion-item">
              <div className="accordion-item-header">
                <span className="accordion-item-header-title">
                  What is HTML?
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-down accordion-item-header-icon"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
              <div className="accordion-item-description-wrapper">
                <div className="accordion-item-description ">
                  <hr />
                  <p>
                    HTM is an extension for Hypertext Markup Language (HTML),
                    which is a markup language used to create web pages. HTM
                    files are text-only files that contain text and references
                    to other external files, such as images, videos, CSS, or JS
                    files. HTML defines how a web browser displays every page
                    element, including pictures, text, and hyperlinks.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div className="accordion-item-header">
                <span className="accordion-item-header-title">
                  What is the difference between HTML elements and tags?
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-down accordion-item-header-icon"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
              <div className="accordion-item-description-wrapper">
                <div className="accordion-item-description">
                  <hr />
                  <p>
                    HTML elements communicate to the browser to render text.
                    When the elements are enclosed by brackets &lt;&gt;, they
                    form HTML tags. Most of the time, tags come in a pair and
                    surround content.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div className="accordion-item-header">
                <span className="accordion-item-header-title">
                  What is semantic HTML?
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-down accordion-item-header-icon"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
              <div className="accordion-item-description-wrapper">
                <div className="accordion-item-description">
                  <hr />
                  <p>
                    {" "}
                    Semantic HTML is a coding style. It is the use of HTML
                    markup to reinforce the semantics or meaning of the content.
                    For example: In semantic HTML <b> </b> tag is not used for
                    bold statement as well as <i> </i> tag is used for italic.
                    Instead of these we use <strong /> and <em /> tags.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div className="accordion-item-header">
                <span className="accordion-item-header-title">
                  What is an image map?
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-down accordion-item-header-icon"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
              <div className="accordion-item-description-wrapper">
                <div className="accordion-item-description">
                  <hr />
                  <p>
                    {" "}
                    Image map facilitates you to link many different web pages
                    using a single image. It is represented by{" "}
                    <map>
                      {" "}
                      tag. You can define shapes in images that you want to make
                      part of an image mapping.
                    </map>
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div className="accordion-item-header">
                <span className="accordion-item-header-title">
                  What is semantic HTML?
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-down accordion-item-header-icon"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
              <div className="accordion-item-description-wrapper">
                <div className="accordion-item-description">
                  <hr />
                  <p>
                    {" "}
                    HTML SVG is used to describe the two-dimensional vector and
                    vector/raster graphics. SVG images and their behaviors are
                    defined in XML text files. So as XML files, you can create
                    and edit an SVG image with the text editor. It is mostly
                    used for vector type diagrams like pie charts, 2-Dimensional
                    graphs in an X, Y coordinate system.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div className="accordion-item-header">
                <span className="accordion-item-header-title">
                  What is the use of figcaption tag in HTML 5?
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-down accordion-item-header-icon"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
              <div className="accordion-item-description-wrapper">
                <div className="accordion-item-description">
                  <hr />
                  <p>
                    {" "}
                    The HTML 5 datalist tag provides an autocomplete feature on
                    the form element. It facilitates users to choose the
                    predefined options to the users to select data.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div className="accordion-item-header">
                <span className="accordion-item-header-title">
                  What is datalist tag?
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-down accordion-item-header-icon"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
              <div className="accordion-item-description-wrapper">
                <div className="accordion-item-description">
                  <hr />
                  <p>
                    {" "}
                    The HTML 5 datalist tag provides an autocomplete feature on
                    the form element. It facilitates users to choose the
                    predefined options to the users to select data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="download_btn_interview">
            <a
              className="load download_btn"
              href="pdf/Computer-Basics--computer_basics2.pdf"
              download=""
            >
              Download Full Html Pdf
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end interview Questions */}


        </>
    )
}