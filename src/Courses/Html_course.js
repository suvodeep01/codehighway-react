import React, { useEffect } from 'react';
import styles from './css/course.module.css';
import Images from '../images/images';


const Html_Course = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('sidebar');
      if (window.scrollY > 40) {
        navbar.style.top = '70px';
      } else {
        navbar.style.top = '121px';
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <div className={styles.courses}>
        {/* navbar */}
        <nav className={styles.navbar}>
          <div className={styles.logo_item}>
            <i className={`${styles.bx} ${styles['bx-menu']}`} id={styles.sidebarOpen} />
            <img src="images/logo.png" alt="" />
            CodingNepal
          </div>
        </nav>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-2'>
              {/* sidebar */}
              <nav className={styles.sidebar} id='sidebar'>
                <div className={styles.menu_content}>
                  <ul className={styles.menu_items}>
                    <div className={`${styles.menu_title} ${styles.menu_dahsboard}`} />
                    {/* duplicate or remove this li tag if you want to add or remove navlink with submenu */}
                    {/* start */}
                    <li className={styles.item}>
                      <div href="#" className={`${styles.nav_link} ${styles.submenu_item}`} id={styles.nav_link_active}>
                        <span className={styles.navlink}>Home</span>
                        <i className={`${styles.bx} ${styles['bx-chevron-right']} ${styles['arrow-left']}`} />
                      </div>
                      <ul className={`${styles.menu_items} ${styles.submenu}`}>
                        <a href="#" className={`${styles.nav_link} ${styles.sublink}`}>
                          Nav Sub Link
                        </a>
                        <a href="#" className={`${styles.nav_link} ${styles.sublink}`}>
                          Nav Sub Link
                        </a>
                        <a href="#" className={`${styles.nav_link} ${styles.sublink}`}>
                          Nav Sub Link
                        </a>
                        <a href="#" className={`${styles.nav_link} ${styles.sublink}`}>
                          Nav Sub Link
                        </a>
                      </ul>
                    </li>
                    {/* end */}
                    {/* duplicate this li tag if you want to add or remove  navlink with submenu */}
                    {/* start */}
                    <li className={styles.item}>
                      <div href="#" className={`${styles.nav_link} ${styles.submenu_item}`}>
                        <span className={styles.navlink}>Overview</span>
                        <i className={`${styles.bx} ${styles['bx-chevron-right']} ${styles['arrow-left']}`} />
                      </div>
                      <ul className={`${styles.menu_items} ${styles.submenu}`}>
                        <a href="#" className={`${styles.nav_link} ${styles.sublink}`}>
                          Nav Sub Link
                        </a>
                        <a href="#" className={`${styles.nav_link} ${styles.sublink}`}>
                          Nav Sub Link
                        </a>
                        <a href="#" className={`${styles.nav_link} ${styles.sublink}`}>
                          Nav Sub Link
                        </a>
                        <a href="#" className={`${styles.nav_link} ${styles.sublink}`}>
                          Nav Sub Link
                        </a>
                      </ul>
                    </li>
                    {/* end */}
                  </ul>
                  <ul className={styles.menu_items}>
                    <div className={`${styles.menu_title} ${styles.menu_editor}`} />
                    {/* duplicate these li tag if you want to add or remove navlink only */}
                    {/* Start */}
                    <li className={styles.item}>
                      <a href="#" className={styles.nav_link}>
                        <span className={styles.navlink}>Magic build</span>
                      </a>
                    </li>
                    {/* End */}
                    <li className={styles.item}>
                      <a href="#" className={styles.nav_link}>
                        <span className={styles.navlink}>Filters</span>
                      </a>
                    </li>
                    <li className={styles.item}>
                      <a href="#" className={styles.nav_link}>
                        <span className={styles.navlink}>Filter</span>
                      </a>
                    </li>
                    <li className={styles.item}>
                      <a href="#" className={styles.nav_link}>
                        <span className={styles.navlink}>Upload new</span>
                      </a>
                    </li>
                  </ul>
                  <ul className={styles.menu_items}>
                    <div className={`${styles.menu_title} ${styles.menu_setting}`} />
                    <li className={styles.item}>
                      <a href="#" className={styles.nav_link}>
                        <span className={styles.navlink}>Notice board</span>
                      </a>
                    </li>
                    <li className={styles.item}>
                      <a href="#" className={styles.nav_link}>
                        <span className={styles.navlink}>Award</span>
                      </a>
                    </li>
                    <li className={styles.item}>
                      <a href="#" className={styles.nav_link}>
                        <span className={styles.navlink}>Setting</span>
                      </a>
                    </li>
                    <li className={styles.item}>
                      <a href="#" className={styles.nav_link}>
                        <span className={styles.navlink}>Features</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className='col-md-10'>
              <div className={styles.course_inner_main}>
                <div className='row justify-content-center'>
                  {/* previous next section */}
                  <div className='col-md-8'>
                    <div className={styles.navContainer}>
                      <button className={styles.navButton}>← Prev</button>
                      <div className={styles.navTitle}>HTML INTRODUCTION</div>
                      <button className={styles.navButton}>Next →</button>
                    </div>
                  </div>
                  {/* text section */}
                  <div className={styles.introSection}>

                    <h2>Introduction</h2>
                    <p>
                      HTML tutorial or HTML 5 tutorial provides basic and advanced concepts of HTML. Our HTML tutorial is developed for beginners and professionals. In our tutorial, every topic is given step-by-step so that you can learn it in a very easy way. If you are new in learning HTML, then you can learn HTML from basic to a professional level and after learning HTML with CSS and JavaScript you will be able to create your own interactive and dynamic website. But Now We will focus on HTML only in this tutorial.
                    </p>
                    <p>
                      HTML is the language of the web, used by billions of websites to create the pages you see every day. Want to learn HTML from scratch and make your web pages? This tutorial is for you! In this HTML tutorial, you will learn how to use HTML to create and style web pages. You will start with HTML fundamentals, such as basic HTML tags and their attributes, classes, layout, and responsiveness. Then, you will move on to advanced HTML5 topics, such as HTML forms, media, APIs, and more. By the end of this tutorial, you will have a solid foundation in HTML.
                    </p>
                  </div>

                  {/* text video section */}
                  <div className={styles.courseSection}>
                    <div className="row align-content-center">
                      <div className="col-md-6">
                        <div className={styles.courseSection_text}>
                          <h5 className="card-title">What Is HTML</h5>
                          <p className="card-text">
                            HTML stands for HyperText Markup Language. It is the standard language used to create and design web pages on the internet. It was introduced by Tim Berners-Lee in 1991 at CERN as a simple markup language. Since then, it has evolved through versions from HTML 2.0 to HTML5 (the latest 2024 version).
                          </p>
                          <p className="card-text">
                            HTML 4.01 was a major version of HTML and it was published in late 1999. Though HTML 4.01 version is widely used but currently we have HTML-5 version which is an extension to HTML 4.01, and this version was published in 2012.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className='courseSection_video'>
                          <video controls width='100%'>
                            <source src="your-video-url.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* list section */}
                  <div className={styles.courseSection_list}>
                    <h4 className="mb-4">Html Learning Index</h4>
                    <div className="row">
                      <div className="col-md-4">
                        <h6 className="text-muted" id={styles.list_text_h5}>HTML Basics</h6>
                        <ul className="list-group">
                          <li className="list-group-item" id={styles.list_group_item_font}>Introduction to HTML</li>
                          <li className="list-group-item" id={styles.list_group_item_font}>HTML Editors</li>
                          <li className="list-group-item" id={styles.list_group_item_font}>HTML Comments</li>
                          <li className="list-group-item" id={styles.list_group_item_font}>HTML Elements</li>
                          <li className="list-group-item" id={styles.list_group_item_font}>HTML Attributes</li>
                          <li className="list-group-item" id={styles.list_group_item_font}>HTML Heading</li>
                          <li className="list-group-item" id={styles.list_group_item_font}>HTML Doctypes</li>
                          <li className="list-group-item" id={styles.list_group_item_font}>HTML Links</li>
                          <li className="list-group-item" id={styles.list_group_item_font}>HTML Images</li>
                          <li className="list-group-item" id={styles.list_group_item_font}>HTML Semantics</li>
                          <li className="list-group-item" id={styles.list_group_item_font}>HTML Symbols</li>
                          <li className="list-group-item" id={styles.list_group_item_font}>HTML Entities</li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <h6 className="text-muted" id={styles.list_text_h5}>HTML Tags</h6>
                        <ul className="list-group">
                          <li className="list-group-item" id={styles.list_group_item_font}>HTML Marquee</li>
                          <li className="list-group-item" id={styles.list_group_item_font}>HTML Textarea</li>
                          <li className="list-group-item" id={styles.list_group_item_font}>HTML Quotes</li>
                          <li className="list-group-item" id={styles.list_group_item_font}>HTML Style</li>
                          <li className="list-group-item" id={styles.list_group_item_font}>HTML Title</li>
                          <li className="list-group-item" id={styles.list_group_item_font}>HTML Div Tag</li>
                          <li className="list-group-item" id={styles.list_group_item_font}>HTML Label Tag</li>
                          <li className="list-group-item" id={styles.list_group_item_font}>HTML Input Tag</li>
                          <li className="list-group-item" id={styles.list_group_item_font}>HTML Button Tag</li>
                          <li className="list-group-item" id={styles.list_group_item_font}>HTML HR Tag</li>
                          <li className="list-group-item" id={styles.list_group_item_font}>HTML Script Tag</li>
                          <li className="list-group-item" id={styles.list_group_item_font}>HTML NoScript Tag</li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <h6 className="text-muted" id={styles.list_text_h5}>HTML Advanced</h6>
                        <ul className="list-group">
                          <li className="list-group-item" id={styles.list_group_item_font}>HTML Iframes</li>
                          <li className="list-group-item" id={styles.list_group_item_font}>HTML File Paths</li>
                          <li className="list-group-item" id={styles.list_group_item_font}>HTML Favicon</li>
                          <li className="list-group-item" id={styles.list_group_item_font}>HTML Computer Code</li>
                          <li className="list-group-item" id={styles.list_group_item_font}>HTML Emojis</li>
                          <li className="list-group-item" id={styles.list_group_item_font}>HTML Charsets</li>
                          <li className="list-group-item" id={styles.list_group_item_font}>HTML URL Encoding</li>
                          <li className="list-group-item" id={styles.list_group_item_font}>HTML Forms</li>
                          <li className="list-group-item" id={styles.list_group_item_font}>HTML Responsive Design</li>
                          <li className="list-group-item" id={styles.list_group_item_font}>HTML Audio</li>
                          <li className="list-group-item" id={styles.list_group_item_font}>HTML5 Video</li>
                          <li className="list-group-item" id={styles.list_group_item_font}>HTML Layout</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* course tab section */}
                  <div className={styles.courseSection_tab}>
                    <ul className={`nav nav-tabs ${styles.navTabs}`} role="tablist">
                      <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#tabs-1" role="tab">Why to Learn HTML?</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab">Applications of HTML</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#tabs-3" role="tab">Who Should Learn HTML</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#tabs-4" role="tab">Prerequisites to Learn HTML</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#tabs-5" role="tab">Careers with HTML</a>
                      </li>
                    </ul>
                    <div className={`tab-content ${styles.tabContent}`}>
                      <div className="tab-pane show active" id="tabs-1" role="tabpanel">
                        <p>
                          Originally, HTML was developed with the intent of defining the structure of documents like headings, paragraphs, lists, and so forth to facilitate the sharing of scientific information between researchers. Now, HTML is being widely used to format web pages with the help of different tags available in HTML language.
                        </p>
                        <p>
                          HTML is a MUST for students and working professionals to become a great Software Engineer especially when they are working in Web Development Domain. I will list down some of the key advantages of learning HTML –
                        </p>
                        <ul className={`list-group ${styles.listGroup}`}>
                          <li className="list-group-item">Create a Website – You can create a website or customize an existing web template if you know HTML well.</li>
                          <li className="list-group-item">Become a web designer –If you want to start a career as a professional web designer, HTML and CSS designing is a must skill.</li>
                          <li className="list-group-item">Understand web – If you want to optimize your website, to boost its speed and performance, it is good to know HTML to yield the best results.</li>
                          <li className="list-group-item">Learn other languages –Once you understand the basics of HTML then other related technologies like JavaScript, PHP, or Angular become easier to understand.</li>
                          <li className="list-group-item">Create a Website – You can create a website or customize an existing web template if you know HTML well.</li>
                        </ul>
                      </div>
                      <div className="tab-pane" id="tabs-2" role="tabpanel">
                        <p> welcome
                          Originally, HTML was developed with the intent of defining the structure of documents like headings, paragraphs, lists, and so forth to facilitate the sharing of scientific information between researchers. Now, HTML is being widely used to format web pages with the help of different tags available in HTML language.
                        </p>
                        <p>
                          HTML is a MUST for students and working professionals to become a great Software Engineer especially when they are working in Web Development Domain. I will list down some of the key advantages of learning HTML –
                        </p>
                        <ul className={`list-group ${styles.listGroup}`}>
                          <li className="list-group-item">Create a Website – You can create a website or customize an existing web template if you know HTML well.</li>
                          <li className="list-group-item">Become a web designer –If you want to start a career as a professional web designer, HTML and CSS designing is a must skill.</li>
                          <li className="list-group-item">Understand web – If you want to optimize your website, to boost its speed and performance, it is good to know HTML to yield the best results.</li>
                          <li className="list-group-item">Learn other languages –Once you understand the basics of HTML then other related technologies like JavaScript, PHP, or Angular become easier to understand.</li>
                          <li className="list-group-item">Create a Website – You can create a website or customize an existing web template if you know HTML well.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* start image section */}
                  <div className={styles.courseSection_image}>
                    <div className='row'>
                      <div className="col-md-12 mb-4">
                        <div className="card h-100">
                          <div className="card-body text-center">
                            <h5 className="mb-4">Basic Html Structure</h5>
                            <div className="d-flex flex-column flex-sm-row justify-content-between text-center">
                              <img
                                src={Images.html_structure}
                                alt=""
                                className="mx-auto d-block"
                              />
                            </div>
                            <button type="button" className="btn rounded-pill btn-primary mt-4">
                              Try Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* accoridan section */}
                  <div className={`accordion ${styles.faqSection}`} id="faqAccordion">
                    <h3 className='text-center'>Frequently Asked Questions about HTML</h3>
                    <p>There are some very Frequently Asked Questions(FAQ) about HTML, this section tries to answer them briefly.</p>
                    <div className="accordion-item" id={styles.accordion_item}>
                      <h3 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" id={styles.accordion_button}>
                          Why HTML is important for web development?
                        </button>
                      </h3>
                      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                        <div className={`accordion-body ${styles.accordian_body}`}>
                          HTML is the standard markup language for creating web pages. It stands for HyperText Markup Language, and it is used to structure the content on the web. Without HTML, web pages would have no structure and no way to display text, images, or other elements.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item" id={styles.accordion_item}>
                      <h3 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          What are HTML tags and how do they work?
                        </button>
                      </h3>
                      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                        <div className={`accordion-body ${styles.accordian_body}`}>
                          HTML tags are the hidden keywords within a web page that define how your web browser must format and display the content. Tags are used to create HTML elements such as paragraphs, links, and images.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item" id={styles.accordion_item}>
                      <h3 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          What software do I need to learn HTML?
                        </button>
                      </h3>
                      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                        <div className={`accordion-body ${styles.accordian_body}`}>
                          To learn HTML, you do not need any special software. A simple text editor like Notepad on Windows or TextEdit on macOS is sufficient. However, there are more advanced editors and IDEs like Visual Studio Code, Sublime Text, and Atom which provide features like syntax highlighting, code completion, and more.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item" id={styles.accordion_item}>
                      <h3 className="accordion-header" id="headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                          Is HTML difficult to learn for beginners?
                        </button>
                      </h3>
                      <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                        <div className={`accordion-body ${styles.accordian_body}`}>
                          HTML is considered one of the easiest programming languages to learn, especially for beginners. Its syntax is very basic, and it provides instant visual feedback, making it an ideal starting point for those new to coding.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* footer banner */}
                  <div className={styles.footer_banner}>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className={`${styles.card} ${styles.certificateCard}`}>
                          <div className='row'>
                            <div className='col-md-6'>
                              <div className={styles.card_content}>
                                <h5 className={styles.cardTitle}>Earn a Certificate</h5>
                                <p className={styles.cardText}>Get the right professional certificate program for you.</p>
                                <button className={`${styles.viewButton} ${styles.viewProgramsButton}`}>View Programs</button>
                              </div>
                            </div>
                            <div className='col-md-6'>
                              <img src={Images.footer_banner1} alt="Certificate" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='col-md-6'>
                        <div className={`${styles.card} ${styles.coursesCard}`}>
                          <div className='row'>
                            <div className='col-md-6'>
                              <div className={styles.card_content}>
                                <h5 className={styles.cardTitle}>Best Rated Courses</h5>
                                <p className={styles.cardText}>Enroll now in the most popular and best rated courses.</p>
                                <button className={`${styles.viewButton} ${styles.viewCoursesButton}`}>View Courses</button>
                              </div>
                            </div>
                            <div className='col-md-6'>
                              <img src={Images.footer_banner2} alt="Certificate" />
                            </div>
                          </div>
                        </div>
                      </div>


                    </div>
                    </div>

                    

                  {/* footer next previous */}
                  <div className={styles.footer_arrow}>
                    <div className='row justify-content-center'>
                      {/* previous next section */}
                      <div className='col-md-8'>
                        <div className={styles.navContainer} id={styles.footer_buttons}>
                          <button className={styles.navButton}>← Prev</button>
                          <div className={styles.navTitle}>HTML INTRODUCTION</div>
                          <button className={styles.navButton}>Next →</button>
                        </div>
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Html_Course;
