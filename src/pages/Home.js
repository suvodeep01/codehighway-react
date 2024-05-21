import React from "react"
import Banner from "../Components/Banner.js";
import Courses from "../Components/Courses.js";
import Programming from "../Components/Programming.js";
import Career from "../Components/Career.js";
import Video from "../Components/Video.js";
import Teacher from "../Components/Teacher.js";
import Join from "../Components/Join.js";
import Code_edit from "../Components/Code_edit.js";
import Redirect from "../Components/Redirect.js";

export default function Home() {
    return (
        <>
            <Banner />
            <Courses />
            <Programming />
            <Career />
            <Video />
            <Teacher />
            <Join />
            <Code_edit />
            <Redirect />
        </>
    )
}