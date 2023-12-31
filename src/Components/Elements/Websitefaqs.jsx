import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
    // title: "FAQ (How it works)",
    rows: [
        {
            title: "What kind of websites do you develop?",
            content: `We specialize in developing a variety of websites, including but not limited to corporate websites, e-commerce sites, portfolio websites, and custom web applications`,
        },
        {
            title: " Do you provide website maintenance services?",
            content:
                "Yes, we offer ongoing website maintenance services to ensure your site remains up-to-date and secure..",
        },
        {
            title: "What types of content writing services do you offer?",
            content: `Our content writing services cover a wide range, including blog posts, website content, product descriptions, social media content, and more. `,
        }
        ,
        {
            title: "Can you create SEO-friendly content?",
            content:
                " Yes, our content writing team is experienced in creating content that is not only engaging but also optimized for search engines.",
        },
        {
            title: "Can you customize HR solutions for my business?",
            content: `Yes, we tailor our HR solutions to meet the specific needs and size of your business.`,
        }
        ,
        {
            title: " How can UI/UX design benefit my website or app?",
            content: `Good UI/UX design enhances user satisfaction, increases usability, and contributes to positive brand perception, ultimately driving user engagement and loyalty`,
        }
        
    ],
};

const styles = {
    // bgColor: 'white',
    titleTextColor: "black",
    rowTitleColor: "black",
    // rowContentColor: 'grey',
    // arrowColor: "red",
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};
function Websitefaqs() {
  return (
    <div className="react-faq">
        <div className="container-fluid py-5">
            <div className="row py-3 text-center" >
                <div>
                    <h1>Your Right To Know</h1>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-6">
                <Faq
                data={data}
                styles={styles}
                config={config}
            />
                </div>
            </div>
        </div>
           
        </div>
  )
}

export default Websitefaqs