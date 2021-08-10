import React, { Component } from 'react';
import { DropDown } from "../Utils/dropdown";
import { Tools } from "./Tools";

class Resume extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="resumepage" className="page">
                <div className="page-title">
                    <span >Resume</span>
                </div>
                <div id="resumeContainer">
                    <DropDown title="University of Chicago" tclass="dropdown-large" cclass="dropdown-medium" content={
                        <div className="resumeContainer__section">
                            <div>Graduated 2021 with a Bachelors of Science in Computer Science</div>
                            <div>Varsity Student-Athelete with Cumulative GPA 3.5/4.00</div>
                            <div>Honors: Dean's List, Academic All-Conference</div>
                            <div className="resumeContainer__title">Computer Science Classes</div>
                            <MyClasses />
                            <a target="_blank" href='/me/files/transcript.pdf' download>Download my transcript</a>
                        </div>
                    } />
                    <DropDown title="Work Experience" tclass="dropdown-large" cclass="dropdown-medium" content={
                        <div className="resumeContainer__section ">
                            <ul>
                                <li>Software Development Engineer I, <strong>Amazon</strong> (August 2021) </li>
                                <li>Software Development Engineer Intern, <strong>Amazon</strong> (June 2020 - August 2020)</li>
                                <ul> <li>Gained experience using Javascript, React, HTML, and CSS developing alexaskills.</li> </ul>
                                <li>Software Developer Intern, <strong>Center for Translational Data Science</strong> (July 2019 - August 2019)</li>
                                <ul> <li>Gained experience using Python, Flask, and HTTP requests. Worked with a team using the Agile Framework. Worked with aws cli.</li> </ul>
                            </ul>
                        </div>
                    } />
                    <DropDown title="Programming Experience" tclass="dropdown-large" cclass="dropdown-medium" content={
                        <div className="resumeContainer__section">
                            <div>Language Proficiency</div>
                            <ul>
                                <li>Javascript, HTML, CSS, React, Rust, SQL, Alexa SFB</li>
                            </ul>
                            <div>Some experience</div>
                            <ul>
                                <li>C, Python, Ruby, Bash Scripting, php</li>
                            </ul>
                            <div>Technologies</div>
                            <ul>
                                <li>AWS, Kubernetes, Github</li>
                            </ul>
                        </div>
                    } />
                    <DropDown title="Projects" tclass="dropdown-large" cclass="dropdown-medium" content={
                        <div className="resumeContainer__section">
                            <div>Python SDK (<strong>Python</strong>) - Center for Translational Data Science</div>
                            <ul>
                                <li>Created a software development kit for users and developers using gen3 data commons to hit a datacommons api endpoints using python rather than using the UI.</li>
                            </ul>
                            <div>Project Database (<strong>Rust</strong>) - University of Chicago</div>
                            <ul>
                                <li>Build a database in Rust. Stored records in heapfiles, implemented a buffer pool, and used volcano style execution.</li>
                            </ul>
                            <div>Project Cache (<strong>C</strong>) - University of Chicago</div>
                            <ul>
                                <li>Built a C program to simulate a cache given number of sets, number of lines in each set, and block sizethen return the number of hits, misses, and evictions.</li>
                            </ul>
                            <div>Checkout the <a href="/tools">tools page</a> or the <a href="/games">games page</a> to checkout more finished projects</div>
                        </div>
                    } />
                    <DropDown title="Extracurricular" tclass="dropdown-large" cclass="dropdown-medium" content={
                        <div className="resumeContainer__section">
                            <div>Varsity Football - University of Chicago, Running Back</div>
                            <ul>
                                <li>Balanced a 20+ hour weekly commitment to football with full academic course load. I developed skills in leadership, teamwork, time management, and resilience. 
                                    Played three seasons (our fourth was canceled due to the corona virus).</li>
                                <li>Honors: Academic All Conference (3 years), Special Teams player of the year (2018), Most Valuable Player (2019), Voted team captain for the 2020 season. </li>
                            </ul>
                            <div>Fellowship of Christian Athletes - University of Chicago</div>
                            <ul>
                                <li>Positions: Co Social Media Chair (2019), President (2020). </li>
                                <li>Coordinate, organize, and lead weekly meetings and club events. An example of an event that we ran is blanket making for kids in childrens hospitals.</li>
                            </ul>
                        </div>
                    } />
                    <DropDown title="Interests" tclass="dropdown-large" cclass="dropdown-medium" content={
                        <div className="resumeContainer__section">
                            <ul>
                                <li>I have a wide range of interests and hobbies that I like to do and I always love to try new things. </li>
                                <li>To list a few: Sports, Board Games, Video Games, Cooking, Learning, Game Development, Cyber Security, Hiking, Surfing.</li>
                            </ul>
                        </div>
                    } />
                    <DropDown title="Strengths" tclass="dropdown-large" cclass="dropdown-medium" content={
                        <div className="resumeContainer__section">
                            <div>
                                I would say that my biggest strengths are that I am ambitious and driven. I am always looking 
                                for ways to improve myself. One thing that I do to be disciplined and productive is keep a white 
                                board of tasks that I want to complete each day. I write my goals for the next day every night and 
                                the rule is: if I write it down I have to do it. 
                            </div>
                            <div>
                                I am eager to learn something new and challenge myself. I am not scared of failure because I know
                                failure is just an opportunity to learn and improve. If I lack knowledge to solve a problem I am confident
                                that I can quickly gain the skills necessary to solve it. I would say that some of my other
                                strengths are: fast learner, persistent, hard worker, team player, passionate, optimistic, eager.
                            </div>
                        </div>
                    } />
 
                </div>
                <div id="resumedownload">
                    <p>Download the pdf or source files below!</p>
                    <a target="_blank" href='/me/files/Resume.pdf' download>Download Resume pdf </a>
                    <a target="_blank" href='/me/files/resume.html' download>Download html file </a>
                    <a target="_blank" href='/me/files/resume.css' download>Download css (style sheet) </a>
                </div>
            </div>
        );
    }
}

const MyClasses = () => (
    <div className="resumeContainer__classes">
        <DropDown title="Computer Science Intro Sequence" tclass="dropdown-medium dropdown-height" cclass="dropdown-small" content={
            <div className="classes__content">
                <p>
                    Topics in this sequence included program design, control and data abstraction, recursion and induction, higher-order programming,
                    types and polymorphism, time and space analysis, memory management, and data structures including lists, trees,
                    and graphs.
                    Additionally covered the basics of computer systems: data representation, machine language programming, exceptions,
                    code optimization, performance measurement, memory systems, and system-level I/O.
                                        Programmed in <strong>Typed Racket</strong> and <strong>C</strong>.
                                    </p>
            </div>
        } />
        <DropDown title="Programming Languages" tclass="dropdown-medium dropdown-height" cclass="dropdown-small" content={
            <div className="classes__content">
                <p>
                    This course was an introduction to scientific programming language design.
                    The curriculum included lambda calculus, type systems, formal semantics, and logic and proof.
                                        Programmed in <strong>Standard ML</strong>.
                                    </p>
            </div>
        } />
        <DropDown title="Intro to Data Engineering" tclass="dropdown-medium dropdown-height" cclass="dropdown-small" content={
            <div className="classes__content">
                <p>
                    This course was an introduction to "big" data engineering where we received hands-on experience building and deploying
                    realistic data-intensive systems. It covered streaming, data cleaning, relational data modeling and SQL, and Machine Learning model training.
                                        Programmed in <strong>Python</strong> and <strong>SQL</strong>.
                                    </p>
            </div>
        } />
        <DropDown title="Software Construction" tclass="dropdown-medium dropdown-height" cclass="dropdown-small" content={
            <div className="classes__content">
                <p>
                    The course discussed both the empirical aspects of software engineering and the underlying theory. Topics included, among others, software
                    specifications, software design, software architecture, software testing, software reliability, and software maintenance.
                    Worked with a team of 8 other students to design and create a software application.
                                    </p>
            </div>
        } />
        <DropDown title="Discrete Mathematics" tclass="dropdown-medium dropdown-height" cclass="dropdown-small" content={
            <div className="classes__content">
                <p>
                    This course emphasized mathematical discovery and rigorous proof. Topics included counting, proof by induction; recurrences and
                    Fibonacci numbers; graph theory and trees; number theory, congruences, and Fermat's little theorem; counting, factorials,
                    and binomial coefficients; combinatorial probability; random variables, expected value, and variance; and limits of sequences,
                    asymptotic equality, and rates of growth.
                                    </p>
            </div>
        } />
        <DropDown title="Theory of Algorithms" tclass="dropdown-medium dropdown-height" cclass="dropdown-small" content={
            <div className="classes__content">
                <p>
                    This course covered design and analysis of efficient algorithms. Algorithmic questions included sorting and searching,
                    graph algorithms, elementary algorithmic number theory, combinatorial optimization, and randomized algorithms.
                    Design techniques included "divide-and-conquer" methods, dynamic programming, greedy algorithms, and graph search,
                    as well as the design of efficient data structures.
                    Methods of algorithm analysis included asymptotic notation, evaluation of recurrent inequalities, amortized analysis,
                    analysis of probabilistic algorithms, the concepts of polynomial-time algorithms, and of NP-completeness.
                                    </p>
            </div>
        } />
        <DropDown title="Foundations of Computer Networks" tclass="dropdown-medium dropdown-height" cclass="dropdown-small" content={
            <div className="classes__content">
                <p>
                    This course focused on the principles and techniques used in the development of networked and distributed
                    software. Topics included programming with sockets; concurrent programming; data link layer
                    (Ethernet, packet switching, etc.); internet and routing protocols (IP, IPv6, ARP, etc.);
                    end-to-end protocols (UDP, TCP); and other commonly used network protocols and techniques.
                                        Programmed in <strong>C</strong>.
                                    </p>
            </div>
        } />
        <DropDown title="Parallel Computing" tclass="dropdown-medium dropdown-height" cclass="dropdown-small" content={
            <div className="classes__content">
                <p>
                    This course provided an introduction to the concepts of parallel programming, with an emphasis on
                    programming multicore processors. Topics included: Processes and threads, shared memory, message passing,
                    direct-memory access (DMA), hardware mechanisms for parallel computing, synchronization and communication,
                    patterns of parallel programming.
                                    </p>
            </div>
        } />
        <DropDown title="Advanced Networks" tclass="dropdown-medium dropdown-height" cclass="dropdown-small" content={
            <div className="classes__content">
                <p>
                    This course expanded on the concepts in Foundations of Computer Networks. It included analysis
                                        of current network behaviors. Used <strong>Bash Scripting</strong> to track our network traffic
                                        and analyse the route our packets took to their destination.
                                    </p>
            </div>
        } />
        <DropDown title="Computer Architecture" tclass="dropdown-medium dropdown-height" cclass="dropdown-small" content={
            <div className="classes__content">
                <p>
                    This course was a survey of contemporary computer organization covering CPU design, instruction sets, control,
                    processors, busses, ALU, memory, pipelined computers, multiprocessors, networking, and case studies. We focused
                    on the techniques of quantitative analysis and evaluation of modern computing systems, such as the selection
                    of appropriate benchmarks to reveal and compare the performance of alternative design choices in system design.
                    We emphasize major component subsystems of high-performance computers: pipelining, instruction-level parallelism,
                    memory hierarchies, input/output, and network-oriented interconnections.
                                        Programmed in <strong>C</strong> to simulate the x86 instruction set to execute assembly instructions.
                                    </p>
            </div>
        } />
        <DropDown title="Introduction to Cryptography" tclass="dropdown-medium dropdown-height" cclass="dropdown-small" content={
            <div className="classes__content">
                <p>
                    This course was an introduction to the design and analysis of cryptography, including how "security" is
                    defined, how practical cryptographic algorithms work, and how to exploit flaws in cryptography. The course
                    covered algorithms for symmetric-key and public-key encryption, authentication, digital signatures, hash
                    functions, and other primitives.
                                        Programmed in <strong>Python</strong>.
                                    </p>
            </div>
        } />
        <DropDown title="Application Development" tclass="dropdown-medium dropdown-height" cclass="dropdown-small" content={
            <div className="classes__content">
                <p>
                    This course was an introduction to web application design. Large focus on database design and usability.
                                        I used <strong>Ruby on Rails</strong>, <strong>HTML</strong>, and <strong>CSS</strong> to create
                                        a web application.
                                    </p>
            </div>
        } />
        <DropDown title="Introduction to Computer Security" tclass="dropdown-medium dropdown-height" cclass="dropdown-small" content={
            <div className="classes__content">
                <p>
                    This course introduced the principles and practice of computer security. It aimed to teach how to model
                    threats to computer systems and how to think like a potential attacker. It presented standard cryptographic
                    functions and protocols and gave an overview of threats and defenses for software, host systems, networks,
                    and the Web. It also touched on some of the legal, policy, and ethical issues surrounding computer security in
                    areas such as privacy, surveillance, and the disclosure of security vulnerabilities.
                                        Programmed in <strong>C</strong> and <strong>Python</strong>.
                                    </p>
            </div>
        } />
        <DropDown title="Introduction to Database Systems" tclass="dropdown-medium dropdown-height" cclass="dropdown-small" content={
            <div className="classes__content">
                <p>
                    This course was an introduction to database design and implementation. Topics included DBMS architecture,
                    entity-relationship and relational models, relational algebra, concurrency control, recovery, indexing,
                    physical data organization, and modern database systems. We worked on a quarter long project to implement
                                        a database using <strong>Rust</strong>. Also programmed in <strong>Python</strong> and <strong>SQL</strong>.
                                    </p>
            </div>
        } />
    </div>
);

export default Resume;