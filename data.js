/**
 * BCA GOKAK - Comprehensive Institutional Dataset
 * Gokak Institute of Computer Applications & Technology
 * Affiliated to Rani Channamma University (RCU), Belagavi | Approved by Govt. of Karnataka
 */

const BCA_GOKAK_DATA = {
    college: {
        shortName: "BCA GOKAK",
        fullName: "Gokak Institute of Computer Applications & Technology",
        tagline: "Empowering Rural & Urban Tech Talent with Global Software Engineering Standards",
        affiliation: "Affiliated to Rani Channamma University (RCU), Belagavi",
        recognition: "Approved by Government of Karnataka | AISHE & RCU Code: 4218",
        established: 2008,
        motto: "Vidya, Vinaya, Vignana & Vikaasa (Knowledge, Humility, Science & Progress)",
        address: "Falls Road, Near Court Circle, Gokak, District: Belagavi, Karnataka - 591307",
        phone: "+91 8332 225488 / +91 94812 34567",
        admissionsHelpline: "+91 98450 12345 / +91 97420 56789",
        email: "admissions@bcagokak.edu.in",
        officeHours: "Monday to Saturday: 9:00 AM – 5:30 PM",
        nearestHubs: "Ghataprabha Railway Junction: 10 KM | Belagavi City: 65 KM | Gokak Bus Stand: 1 KM",
        principal: {
            name: "Prof. Raghavendra B. Kulkarni",
            qualification: "M.C.A., M.Tech (CSE), Ph.D. (Pursuing)",
            designation: "Principal & Head of Department",
            experience: "19+ Years of Academic Leadership & Research",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
            message: "Welcome to BCA College Gokak! Since our inception in 2008, our unwavering focus has been on bridging the gap between local academic talent in North Karnataka and global IT opportunities. With two ultra-modern computer laboratories, dual-boot Linux/Windows environments, 300 Mbps optical fiber internet, and comprehensive placement mentorship, we equip every student to succeed at tech titans like Infosys, TCS, and Wipro."
        }
    },

    stats: [
        { value: "100%", label: "Placement Guidance", icon: "fa-briefcase" },
        { value: "18+", label: "Years of Academic Glory", icon: "fa-award" },
        { value: "120+", label: "Intel Core i7 Lab PCs", icon: "fa-desktop" },
        { value: "3,400+", label: "Alumni Worldwide", icon: "fa-user-graduate" },
        { value: "16+", label: "RCU University Ranks", icon: "fa-trophy" },
        { value: "8.4 LPA", label: "Highest Campus Package", icon: "fa-chart-line" }
    ],

    programs: [
        {
            id: "bca-nep",
            name: "Bachelor of Computer Applications (BCA)",
            duration: "3 Years (6 Semesters) / 4 Years Honors with Research (NEP-2020)",
            eligibility: "Passed Karnataka PUC / 10+2 (Science, Commerce, or Arts) with minimum 40% aggregate (35% for SC/ST/Cat-I)",
            intake: "120 Approved Seats",
            tag: "Flagship Degree",
            badgeColor: "orange",
            description: "A prestigious undergraduate degree aligned with the National Education Policy (NEP-2020) of Rani Channamma University, Belagavi. Features foundational software engineering, full-stack development, database architecture, mobile apps, and cloud fundamentals.",
            highlights: [
                "Hands-on coding in C, C++, Core & Advanced Java, Python, and SQL",
                "Full Stack Web Development (HTML5, CSS3, JavaScript, React.js & PHP)",
                "Modern Cloud Computing & Android Mobile Application Architecture",
                "Artificial Intelligence, Machine Learning & Cyber Security Electives",
                "Mandatory 6th Semester Live Corporate Industry Project & Viva"
            ]
        },
        {
            id: "cert-mern",
            name: "Certificate in Full-Stack Web Development (MERN)",
            duration: "6 Months (Co-Curricular Weekend Sessions)",
            eligibility: "Enrolled BCA Gokak Students (2nd & 3rd Year)",
            intake: "60 Seats",
            tag: "Value Added Certificate",
            badgeColor: "amber",
            description: "Industry-aligned software development track training students on MongoDB, Express.js, React.js, and Node.js with REST API design, Git workflow, and cloud hosting.",
            highlights: [
                "Building 4+ production-ready real world web applications",
                "Authentication, JWT tokens, and secure state management",
                "Docker containerization & deployment to AWS / Vercel",
                "GitHub portfolio creation and code review sessions"
            ]
        },
        {
            id: "cert-ai",
            name: "Certificate in Python, Data Science & Machine Learning",
            duration: "4 Months (Weekend Bootcamp)",
            eligibility: "Enrolled BCA Students",
            intake: "45 Seats",
            tag: "Emerging Tech",
            badgeColor: "orange",
            description: "Deep dive into computational data science, NumPy, Pandas, Scikit-learn, statistical modeling, exploratory data analysis, and predictive machine learning models.",
            highlights: [
                "Real world business dataset cleaning and visualization",
                "Regression, classification, and neural network foundations",
                "Hackathon mentorship & Kaggle competition training",
                "Certificate endorsed by IT Industry Partner"
            ]
        }
    ],

    curriculum: [
        {
            sem: "Semester 1",
            title: "Foundations of Computing & Problem Solving",
            subjects: [
                "Fundamentals of Computers & Information Technology",
                "Problem Solving & Programming in C Language",
                "Discrete Mathematical Structures for CS",
                "Digital Electronics & Logic Design",
                "Generic Elective: Office Automation & Internet Tech",
                "C Programming Laboratory (Hands-on Lab 01)"
            ],
            credits: "22 Credits",
            examPattern: "RCU Belagavi Semester End Exam + Internal Assessments (IA)"
        },
        {
            sem: "Semester 2",
            title: "Data Structures & Object-Oriented Programming",
            subjects: [
                "Data Structures using C & Algorithm Analysis",
                "Object-Oriented Programming Paradigms using C++",
                "Computer Architecture & Microprocessors (8086)",
                "Environmental Studies & Scientific Ethics",
                "Data Structures Lab & C++ Laboratory"
            ],
            credits: "22 Credits",
            examPattern: "Theory Exams + University Practical Lab Viva"
        },
        {
            sem: "Semester 3",
            title: "Enterprise Java & Database Engineering",
            subjects: [
                "Core & Advanced Java Programming (J2SE/JDBC)",
                "Relational Database Management Systems (RDBMS & MySQL)",
                "Operating System Principles & Linux Shell Scripting",
                "Statistical Methods for Computer Science",
                "Java Programming Lab & Database Lab (Oracle/MySQL)"
            ],
            credits: "22 Credits",
            examPattern: "Theory Exams + Lab Examination"
        },
        {
            sem: "Semester 4",
            title: "Python, Web Technologies & Computer Networks",
            subjects: [
                "Python Programming & Application Development",
                "Web Technologies (HTML5, CSS3, JavaScript & PHP)",
                "Data Communication & Computer Networks (TCP/IP)",
                "Software Engineering Principles & Agile Methodologies",
                "Python Programming Lab & Full-Stack Web Lab"
            ],
            credits: "22 Credits",
            examPattern: "Continuous Internal Assessment (CIE) + RCU Final Exams"
        },
        {
            sem: "Semester 5",
            title: "Cloud, Android Mobile Apps & Cyber Security",
            subjects: [
                "Cloud Computing Architecture & AWS Infrastructure",
                "Mobile Application Development using Android & Kotlin",
                "Introduction to Data Science & Big Data Analytics",
                "Elective I: Information & Cyber Security / Internet of Things",
                "Android Application Lab & Mini Capstone Project"
            ],
            credits: "24 Credits",
            examPattern: "Project Demonstration + University Practical Exam"
        },
        {
            sem: "Semester 6",
            title: "Artificial Intelligence & Major Industry Capstone",
            subjects: [
                "Artificial Intelligence & Machine Learning Fundamentals",
                "Elective II: Software Testing & Quality Assurance (QA)",
                "Major Corporate Capstone Project Work (Live Industry Problem)",
                "Comprehensive Seminar Presentation & Viva-Voce"
            ],
            credits: "24 Credits",
            examPattern: "Live Software Project Demonstration & External Viva-Voce"
        }
    ],

    facilities: [
        {
            id: "fac-1",
            title: "Hi-Tech Air-Conditioned Computer Labs",
            icon: "fa-desktop",
            image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=700",
            description: "Two dedicated labs featuring 120+ Intel Core i7 workstations, 16GB RAM, dual-boot Linux/Windows 11, Gigabit LAN, 300 Mbps dedicated optical fiber, and 24/7 central online UPS power backup."
        },
        {
            id: "fac-2",
            title: "Digital Central Library & E-Learning Center",
            icon: "fa-book-open",
            image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=700",
            description: "Over 8,500 physical textbook volumes, international computer science journals, IEEE e-database subscription, DELNET membership, NPTEL video server, and quiet digital reading zones."
        },
        {
            id: "fac-3",
            title: "Smart Classrooms & Interactive Projection",
            icon: "fa-chalkboard-user",
            image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=700",
            description: "Acoustically treated smart classrooms equipped with ceiling laser projectors, interactive digital whiteboards, high-fidelity sound systems, and high-speed Wi-Fi."
        },
        {
            id: "fac-4",
            title: "350-Seater Auditorium & Seminar Hall",
            icon: "fa-users-between-lines",
            image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=700",
            description: "Air-conditioned auditorium hosting annual technical symposiums, hackathons ('TechGokak'), guest lectures by Bangalore software architects, and cultural celebrations."
        },
        {
            id: "fac-5",
            title: "Dedicated Training & Placement Cell",
            icon: "fa-user-tie",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=700",
            description: "Specialized training center running daily aptitude masterclasses, group discussion rounds, mock technical coding interviews, and personality grooming."
        },
        {
            id: "fac-6",
            title: "College Bus Fleet (Free / Subsidized)",
            icon: "fa-bus",
            image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=700",
            description: "Extensive bus connectivity across Gokak, Ghataprabha, Konnur, Ankalagi, Kaujalagi, Mudhol Bypass, and surrounding rural taluk hubs ensuring hassle-free daily student commute."
        }
    ],

    gallery: [
        {
            id: "gal-1",
            title: "Hands-on Practical Coding Session in Lab 1",
            category: "labs",
            image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
            caption: "Students coding Java and Python algorithms under faculty supervision in Lab 1."
        },
        {
            id: "gal-2",
            title: "BCA College Gokak Main Academic Building",
            category: "campus",
            image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800",
            caption: "Modern green campus located near Falls Road, Gokak."
        },
        {
            id: "gal-3",
            title: "TechGokak 24-Hour State-Level Hackathon",
            category: "events",
            image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800",
            caption: "Inter-collegiate 24-hour coding sprint with 40+ participating colleges."
        },
        {
            id: "gal-4",
            title: "On-Campus IT Placement Recruitment Drive",
            category: "placements",
            image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
            caption: "Technical interviews by Infosys, TCS & Wipro corporate hiring panels."
        },
        {
            id: "gal-5",
            title: "Digital Library & Research Reading Hall",
            category: "campus",
            image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800",
            caption: "Peaceful research library equipped with IEEE access and 8,500+ tech volumes."
        },
        {
            id: "gal-6",
            title: "Annual Sports Meet & Athletic Championship",
            category: "sports",
            image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800",
            caption: "Cricket, volleyball, table tennis, and track events held annually."
        },
        {
            id: "gal-7",
            title: "Robotics & IoT Sensor Workshop",
            category: "events",
            image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
            caption: "Hands-on micro-controller, Arduino, and smart automation training."
        },
        {
            id: "gal-8",
            title: "Cultural Fest 'Sanskriti' Celebrations",
            category: "events",
            image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800",
            caption: "Showcasing music, drama, folk dances, and North Karnataka cultural heritage."
        }
    ],

    faculty: [
        {
            id: "f-1",
            name: "Prof. Raghavendra B. Kulkarni",
            role: "Principal & Head of Department",
            qualification: "M.C.A., M.Tech (CSE), Ph.D. (Pursuing)",
            experience: "19 Years Experience",
            specialization: "Cloud Computing, Advanced Java & Compilers",
            email: "principal@bcagokak.edu.in",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
        },
        {
            id: "f-2",
            name: "Prof. Savitri M. Patil",
            role: "Assistant Professor & Placement Head",
            qualification: "M.C.A., M.Phil (Computer Applications)",
            experience: "14 Years Experience",
            specialization: "RDBMS, Full-Stack Web Tech & Software Engg.",
            email: "placements@bcagokak.edu.in",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
        },
        {
            id: "f-3",
            name: "Prof. Anand S. Koujalagi",
            role: "Assistant Professor & Labs In-Charge",
            qualification: "M.Sc. (Computer Science), UGC-NET Qualified",
            experience: "11 Years Experience",
            specialization: "Python, Data Structures, Machine Learning & Linux",
            email: "anand.k@bcagokak.edu.in",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400"
        },
        {
            id: "f-4",
            name: "Prof. Priyanka V. Gokak",
            role: "Assistant Professor & Cultural Coordinator",
            qualification: "M.Tech (Software Engineering)",
            experience: "8 Years Experience",
            specialization: "Android Application Dev, Software Testing & Cyber Security",
            email: "priyanka.g@bcagokak.edu.in",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400"
        }
    ],

    recruiters: [
        { name: "Tata Consultancy Services (TCS)", badge: "Tier 1 Partner" },
        { name: "Infosys Technologies", badge: "Annual Recruiter" },
        { name: "Wipro Technologies", badge: "Preferred Employer" },
        { name: "Cognizant (CTS)", badge: "Campus Recruiter" },
        { name: "Tech Mahindra", badge: "IT Partner" },
        { name: "Capgemini India", badge: "Global Recruiter" },
        { name: "LTIMindtree", badge: "Digital Partner" },
        { name: "HCL Technologies", badge: "Major Recruiter" }
    ],

    testimonials: [
        {
            name: "Basavaraj Hiremath",
            batch: "BCA Class of 2024",
            role: "Systems Engineer at Infosys (Bangalore)",
            quote: "Joining BCA Gokak was the turning point in my life. Coming from a rural Kannada-medium schooling background, the teachers here invested personal time to mentor my English communication and data structures. I cleared Infosys during the campus drive on my very first attempt!",
            image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200"
        },
        {
            name: "Pooja Sanikoppa",
            batch: "BCA Class of 2023",
            role: "Cloud Associate at Wipro (Hyderabad)",
            quote: "The computer labs in BCA Gokak are on par with Bangalore colleges. We coded daily on high-speed internet with modern IDEs. The mock interviews and weekly aptitude tests conducted by our placement cell gave me the confidence to crack top corporate exams.",
            image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200"
        },
        {
            name: "Vinayak Deshpande",
            batch: "BCA Class of 2022",
            role: "Full-Stack Developer at Tech Mahindra (Pune)",
            quote: "I commuted daily on the college bus from Ghataprabha. The college fees were extremely affordable, and the scholarship desk helped me obtain the SSP government scholarship every single year. Proud to be an alumnus of BCA Gokak!",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200"
        }
    ],

    notices: [
        {
            id: "not-1",
            date: "Oct 15, 2026",
            title: "BCA 1st, 3rd & 5th Semester Internal Assessment - 1 Examination Timetable Announced",
            category: "Examinations",
            badge: "Important",
            link: "#"
        },
        {
            id: "not-2",
            date: "Oct 10, 2026",
            title: "Government of Karnataka SSP & NSP Post-Matric Scholarship Applications 2026-27 Open",
            category: "Scholarship",
            badge: "Action Required",
            link: "#"
        },
        {
            id: "not-3",
            date: "Oct 04, 2026",
            title: "Annual Campus Recruitment Drive by TCS & Tech Mahindra on Nov 5th for Final Year Students",
            category: "Placements",
            badge: "Urgent",
            link: "#"
        },
        {
            id: "not-4",
            date: "Sep 28, 2026",
            title: "'TechGokak 2026' State-Level Inter-Collegiate Coding Battle Registrations Open",
            category: "Hackathon",
            badge: "New",
            link: "#"
        }
    ],

    faqs: [
        {
            q: "What is the eligibility criteria for admission into BCA at Gokak?",
            a: "Candidates who have passed 10+2 / Karnataka Pre-University Course (PUC) in Science, Commerce, or Arts with at least 40% aggregate (35% for SC/ST/Category-I candidates) are eligible. Students from any stream with an interest in computing are welcome!"
        },
        {
            q: "Which university is BCA College Gokak affiliated to?",
            a: "The college is permanently affiliated to Rani Channamma University (RCU), Belagavi. The curriculum strictly complies with the National Education Policy (NEP-2020), offering both a 3-Year BCA Degree and a 4-Year BCA Honors with Research Degree recognized globally."
        },
        {
            q: "Does the college offer placement assistance for BCA graduates?",
            a: "Yes! We maintain an active Placement & Training Cell. Renowned IT companies including TCS, Infosys, Wipro, Cognizant, Tech Mahindra, and Capgemini recruit our students. We provide comprehensive training in quantitative aptitude, coding interviews, and verbal communication."
        },
        {
            q: "Are government scholarships supported by the college?",
            a: "Absolutely. Our dedicated scholarship desk assists eligible students in applying for Government of Karnataka Post-Matric Scholarships (SSP Portal, Vidyasiri, SC/ST Fee Concessions, OBC Scholarships, Minority NSP, and Jindal Foundation Scholarships)."
        },
        {
            q: "Is college bus transportation available for students outside Gokak town?",
            a: "Yes! We run daily college buses connecting Gokak with Ghataprabha, Konnur, Ankalagi, Kaujalagi, Mudhol Bypass, and adjacent villages with convenient pick-up and drop timings synchronized with class hours."
        }
    ]
};
