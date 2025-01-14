document.addEventListener("DOMContentLoaded", () => {
    function output(courses) {
        const certificates = {
            "Web and Computer Programming": {
                container: document.querySelector(".boxcertificate01"),
                totalCredits: 0,
                totalCreditsElement:
                    document.getElementById("totalCreditsCert01"),
            },
        };

        courses.forEach((course) => {
            const courseDiv = document.createElement("div");
            courseDiv.classList.add(
                "course",
                course.completed ? "courseComplete" : "courseNoComplete"
            );
            courseDiv.setAttribute("data-subject", course.subject);
            courseDiv.setAttribute("data-credits", course.credits);

            const courseTitle = document.createElement("h3");
            courseTitle.textContent = `${course.subject} ${course.number}`;
            courseDiv.appendChild(courseTitle);

            const certificate = certificates[course.certificate];
            if (certificate) {
                certificate.container.appendChild(courseDiv);
            }

            courseDiv.addEventListener("click", () => {
                displayCourseDetails(course);
            });
        });

        updateCredits("ALL");
    }

    function updateCredits(filter) {
        let totalCredits = 0;

        document.querySelectorAll(".course").forEach((course) => {
            const credits = parseInt(course.getAttribute("data-credits"), 10);
            const subject = course.getAttribute("data-subject").toUpperCase();

            if (filter === "ALL" || filter === subject) {
                totalCredits += credits;
            }
        });

        document.getElementById(
            "totalCreditsCert01"
        ).innerHTML = `<strong>Total Credits:</strong> ${totalCredits}`;
    }

    const boxButtons = document.querySelectorAll(".boxButton button");
    boxButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const filter = button.value.toUpperCase();

            document.querySelectorAll(".course").forEach((course) => {
                const subject = course
                    .getAttribute("data-subject")
                    .toUpperCase();
                course.style.display =
                    filter === "ALL" || filter === subject ? "block" : "none";
            });

            updateCredits(filter);
        });
    });

    document.querySelector('.boxButton button[value="all"]').click();

    const courseDetails = document.getElementById("courses-details");

    function displayCourseDetails(course) {
        courseDetails.innerHTML = `
            <button id="closeModal">X</button>
            <h2>${course.subject} ${course.number}</h2>
            <h3>${course.title}</h3>
            <p><strong>Credits</strong>: ${course.credits}</p>
            <p>${course.description}</p>
            <p><strong>Technologies</strong>: ${course.technology.join(
                ", "
            )}</p>
        `;
        courseDetails.showModal();

        document.getElementById("closeModal").addEventListener("click", () => {
            courseDetails.close();
        });
    }

    const courses = [
        {
            subject: "CSE",
            number: 110,
            title: "Introduction to Programming",
            credits: 2,
            certificate: "Web and Computer Programming",
            description:
                "Therefore, this course is the first in programming. It teaches the fundamental components of programming languages and their use in problem-solving through: variables, decision statements, calculations, loops, arrays, and input/output operations with regard to the course.",
            technology: ["Python"],
            completed: true,
        },
        {
            subject: "WDD",
            number: 130,
            title: "Web Fundamentals",
            credits: 2,
            certificate: "Web and Computer Programming",
            description:
                "The introduction to the World Wide Web and different careers such as website design and development are discussed in this course. Students easily make web design and programming tasks through practicals. Basic knowledge in web design and development is expected from students.",
            technology: ["HTML", "CSS"],
            completed: true,
        },
        {
            subject: "CSE",
            number: 111,
            title: "Programming with Functions",
            credits: 2,
            certificate: "Web and Computer Programming",
            description:
                "CSE 111 facilitates the training of students to become better organized, more efficient, and more effective programmers. Also, it helps students learn to research and use others' functions, write, call, debug, test their own functions, and manage errors. Their working program sets up such functions that solve problems in disciplines including but not limited to business, physical sciences, human performance, and the humanities.",
            technology: ["Python"],
            completed: true,
        },
        {
            subject: "CSE",
            number: 210,
            title: "Programming with Classes",
            credits: 2,
            certificate: "Web and Computer Programming",
            description:
                "This course gives a foundational understanding where classes and objects are concerned, plus an understanding of encapsulation itself; it goes further to explore inheritance and polymorphism, emphasizing their practical applications.",
            technology: ["C#"],
            completed: true,
        },
        {
            subject: "WDD",
            number: 131,
            title: "Dynamic Web Fundamentals",
            credits: 2,
            certificate: "Web and Computer Programming",
            description:
                " In this course, the student understands creating dynamic web pages. The learner will also get hands-on experience by learning to use JavaScript primarily for handling events and updates of the content that happens in real-time as well as to make user experiences for highly responsive and interactive usage.",
            technology: ["HTML", "CSS", "JavaScript"],
            completed: true,
        },
        {
            subject: "WDD",
            number: 231,
            title: "Frontend Web Development I",
            credits: 2,
            certificate: "Web and Computer Programming",
            description:
                "This course gets a step further from the introduction of Dynamic Web Fundamentals program courses. It is more on user experience, accessibility, compliance, performance optimization, and basic foundation use of APIs.",
            technology: ["HTML", "CSS", "JavaScript"],
            completed: false,
        },
    ];
    output(courses);
});