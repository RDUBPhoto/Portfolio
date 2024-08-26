import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  projects = [
    {
        id: 1,
        title: 'Component Design System',
        description: `
        <p>In my tenure at BD/Carefusion, I was instrumental in the creation and management of an advanced component design system that would serve as the foundational building block for all our applications. Here's an insight into the project:</p>
        <ul>
            <li><span class="keyword">Technological Stack:</span> Our design system was developed using a blend of cutting-edge technologies. We utilized Angular's robust framework for component structure and logic, and paired it with Bootstrap for responsive grid layouts. The styling was meticulously handcrafted using SASS, allowing for deep customization and thematic consistency.</li>
            <li><span class="keyword">Storybook Integration:</span> By incorporating StorybookJS, we were able to visualize our components in isolation. This not only sped up our development and debugging processes but also provided an interactive documentation for developers and designers alike.</li>
            <li><span class="keyword">Device Agnostic:</span> In today's diverse device landscape, ensuring seamless user experience across all screen sizes was paramount. Our components were designed to be responsive, guaranteeing consistency from the smallest mobile screens to large desktop displays.</li>
            <li><span class="keyword">User-Centric Approach:</span> Every component in our library underwent rigorous user testing. This empirical approach ensured that our components weren't just aesthetically pleasing, but also intuitive and user-friendly.</li>
            <li><span class="keyword">Regulatory Compliance:</span> We understand the significance of accessibility and regulatory compliances, especially in the medical field. Our components are ADA/WCAG compliant, ensuring accessibility for all users, irrespective of their physical abilities. Additionally, FDA compliance was maintained to meet the stringent standards of the medical industry.</li>
            <li><span class="keyword">Unified Aesthetics:</span> The primary objective of this project was to ensure visual and functional consistency across all BD/Carefusion applications. With our agnostic component library, we successfully created a uniform look and feel, making every application feel like a seamless part of a larger ecosystem.</li>
        </ul>
        <p> Through this project, I've learned the importance of meticulous planning, the value of user feedback, and the impact of seamless design in enhancing user experience. I'm incredibly proud of what we achieved, setting a benchmark for design systems in the medical industry.</p>
        `,
        imageUrl: 'assets/img/works/design-system-370.png',
        images: [
          'assets/img/works/component-design-system/design-system.png',
          'assets/img/works/component-design-system/design-system-1.png',
          'assets/img/works/component-design-system/design-system-2.png',
          'assets/img/works/component-design-system/design-system-3.png',
          'assets/img/works/component-design-system/design-system-4.png',
          'assets/img/works/component-design-system/design-system-5.png',
        ],

        tags: ['Figma/XD', 'Angular', 'React', 'HTML', 'SCSS', 'StorybookJS', 'Bootstrap', 'Azure DevOps', 'Git', 'Confluence', 'Chromatic', 'Miro'],
        class: 'col-lg-4 col-md-6 col-sm-6'
    },
    {
        id: 2,
        title: 'Nebula',
        description: `
        <p>While working on the Nebula project, I had the unique opportunity to delve deep into the world of server management and deployment. Nebula is not just a server deployment portal; it's an embodiment of precision, usability, and efficiency. Here's an overview of the project:</p>
        <ul>
            <li><span class="keyword">Technological Stack:</span> At the heart of Nebula lies Angular, a powerful web application platform. We employed Google's Material UI, ensuring a sleek, intuitive, and consistent user interface that prioritizes usability and visual appeal.</li>
            <li><span class="keyword">User-Centric Design:</span> Our approach was deeply rooted in user experience (UX) principles. We embarked on a comprehensive UX journey, which encompassed everything from persona creation, user interviews, to A/B testing. This exhaustive process ensured that our final product was not just functional but also incredibly user-friendly.</li>
            <li><span class="keyword">Prototyping & Iteration:</span> The design process began with low-fidelity mocks that helped us visualize the user flow and layout. As we refined our ideas and gathered feedback, these evolved into high-fidelity wireframes. Each iteration was a step closer to a seamless user experience, ensuring that every feature and interface element was purposeful and efficient.</li>
            <li><span class="keyword">Extensive User Testing:</span> The efficacy of any design can only be ascertained through rigorous testing. We engaged in various testing methods, from A/B tests to in-depth interviews, ensuring that each design decision was validated by real user feedback.</li>
            <li><span class="keyword">Final Validation:</span> After the development phase, we revisited our designs, validating the final product against our initial goals and user feedback. This iterative feedback loop ensured that Nebula wasn't just a product but a solution tailored to meet specific user needs.</li>
        </ul>
        <p>Through Nebula, I deepened my understanding of the intricacies of server management systems and the paramount importance of a user-centric design approach. The project stands as a testament to the synergy of robust technology and empathetic design.</p>
        `,
        imageUrl: 'assets/img/works/teradata-770.png',
        images: [
          'assets/img/works/nebula/nebula.jpg',
          'assets/img/works/nebula/nebula-1.jpg',
          'assets/img/works/nebula/nebula-2.jpg',
          'assets/img/works/nebula/nebula-3.jpg',
          'assets/img/works/nebula/nebula-4.png',
        ],
        tags: ['Figma/XD', 'Angular', 'HTML', 'SCSS', 'Git', 'Confluence', 'Material UI', 'Miro'],
        class: 'col-lg-8 col-md-8 col-sm-12'
    },
    {
        id: 3,
        title: 'BisVine Electronic Health Records',
        description: `
        <p>During my time working on the BisVine project, I was introduced to the critical realm of electronic health records (EHR). BisVine isn't just an EHR platform; it's a holistic solution catering specifically to Chiropractors, Acupuncturists, and Massage Therapists. Here's a comprehensive overview of our endeavors with BisVine:</p>
        <ul>
            <li><span class="keyword">Technological Framework:</span> We anchored BisVine on Vue.js, a progressive JavaScript framework, offering a seamless user experience. Coupled with Bootstrap for a responsive UI and hosted on Azure, we ensured reliability and scalability for our users.</li>
            <li><span class="keyword">Agile Development:</span> Embracing the Agile methodology, our development process was iterative and feedback-driven, allowing us to adapt to changing requirements and ensuring the platform's continual enhancement.</li>
            <li><span class="keyword">Comprehensive Patient Management:</span> Practitioners could effortlessly onboard patients into the system, creating HIPAA-compliant medical notes, ensuring patient data security and integrity at all times.</li>
            <li><span class="keyword">Insurance and Claims:</span> With an integrated feature set, practitioners could easily access insurance procedure codes, verify medical coverage, submit insurance claims, and seamlessly manage payments for approved claims.</li>
            <li><span class="keyword">Advanced Features:</span> Beyond the core EHR functionalities, BisVine also offered a suite of advanced tools. From a dynamic scheduling system, text message reminders for appointments, an integrated point-of-sale system to comprehensive employee management, we ensured that practitioners had everything they needed at their fingertips.</li>
        </ul>
        <p>Working on BisVine was an enlightening journey into the complexities of healthcare IT. It emphasized the importance of combining robust technology with user-centric design to create a product that not only meets regulatory standards but also offers a seamless experience to its end-users. This project remains a testament to our dedication to bridging technology and healthcare in the most user-friendly way possible.</p>
        `,
        imageUrl: 'assets/img/works/bisvine-370.png',
        images: [
          'assets/img/works/bisvine/bisvine-1.png',
          'assets/img/works/bisvine/bisvine-2.png',
          'assets/img/works/bisvine/bisvine-3.png',
          'assets/img/works/bisvine/bisvine-4.png',
          'assets/img/works/bisvine/bisvine-5.png',
          'assets/img/works/bisvine/bisvine-6.png',
        ],
        tags: ['Figma/XD', 'Vue.JS', 'HTML', 'SCSS', 'Bootstrap', 'Azure DevOps', 'Git', 'Confluence', 'Miro'],
        class: 'col-lg-4 col-md-6 col-sm-6'
    },
    {
        id: 4,
        title: 'Icon Library',
        description: `
        <p>While working on the Icon Library project, I delved deep into the intricacies of modern design and automation tools to create a seamless and efficient solution for application icons. Here's a detailed overview of the Icon Library project:</p>
        <ul>
            <li><span class="keyword">Tooling Mastery:</span> The Icon Library was meticulously crafted using a slew of modern tools. Grunt/Gulp for task automation, Node for backend operations, and Illustrator for refining SVG designs formed the foundation of our project.</li>
            <li><span class="keyword">SVG to PNG Conversion:</span> At the heart of our library was an automated process, keenly observing an SVG directory. Upon detecting a new icon design, it would swiftly convert the SVG into a PNG, ensuring our library was ever-evolving without manual intervention.</li>
            <li><span class="keyword">Efficient Minification:</span> Efficiency was key. After the SVG-to-PNG conversion, we automated the creation of the requisite CSS and Font files. These files were then compactly minified to ensure optimal loading times and performance across applications.</li>
            <li><span class="keyword">FontAwesome Inspired Usage:</span> Borrowing from the intuitive nature of FontAwesome's implementation, our icons could be effortlessly integrated into applications. The usage was as straightforward as: <code><i class="our-icon icon-alarm"></i></code>, bringing a touch of elegance and simplicity to the developer's experience.</li>
        </ul>
        <p>The Icon Library project was a harmonious blend of design, automation, and optimization. It underscored the potential of leveraging modern tooling to streamline design processes and enhance application aesthetics. This venture stands as a testament to our commitment to innovative solutions and user-friendly implementations in the design space.</p>
        `,
        imageUrl: 'assets/img/works/icon-library.png',
        images: [
          'assets/img/works/icon-library/icon-library-1.png',
          'assets/img/works/icon-library/icon-library-2.png',
        ],
        tags: ['Adobe Illustrator', 'Grunt/Gulp', 'Node', 'Git', 'HTML', 'FontFace', 'CSS'],
        class: 'col-lg-4 col-md-6 col-sm-6'
    },
    {
        id: 5,
        title: 'User Experience Prototype Testing',
        description: `
        <p>In my leadership role for the "User Experience Prototype Testing" of DealerSocket's new CRM system, I embarked on a comprehensive journey to revolutionize the user experience. Our objective was to identify pain points in the existing system and deliver a solution that was both intuitive and efficient. Here’s a dive into our meticulous process:</p>
        <ul>
            <li><span class="keyword">User-Centric Research:</span> The project began with in-depth consultations with our current customers. This provided invaluable insights and set the groundwork for the direction we would take.</li>
            <li><span class="keyword">Persona Development:</span> Based on our interactions, we constructed internal personas. This allowed us to tailor our designs to cater to diverse user needs, from tech-savvy individuals to those more accustomed to traditional ways.</li>
            <li><span class="keyword">Iterative Design:</span> Our approach was iterative. Starting with wireframes, moving on to high-fidelity mocks, and eventually creating working demos. At each stage, user testing was paramount, ensuring our designs were aligned with real-world requirements.</li>
            <li><span class="keyword">In-Person Feedback:</span> By engaging in in-person testing sessions, we delved deep into understanding the challenges users faced with the current system. It was evident that there were issues in terms of design aesthetics, system speed, and customization.</li>
            <li><span class="keyword">Custom Dashboard Need:</span> One major revelation was the requirement for a role-based custom dashboard. Users sought a more personalized experience, and this became a central theme in our redesign strategy.</li>
            <li><span class="keyword">Modern Aesthetics:</span> The feedback unanimously pointed towards the need for a contemporary design overhaul. We set out to deliver a look and feel that was both fresh and user-friendly.</li>
            <li><span class="keyword">Technological Mastery:</span> Our technological arsenal for this project was extensive. Tools like Figma, XD, Axure, Balsamiq, and the Adobe Creative Suite were instrumental in the design phase. For implementation, Angular, HTML, SCSS, and Bootstrap played crucial roles. FontAwesome enriched our iconography, while Jira, Confluence, and Miro streamlined our workflow and collaboration.</li>
        </ul>
        <p>Steering the DealerSocket New CRM project, I conducted over 60 user interviews, each offering a unique perspective and shaping our final product. The experience underscored the importance of empathetic design, the value of iterative testing, and the profound impact a well-executed user experience has on product adoption and satisfaction. I take immense pride in the transformative changes we introduced and the benchmarks we set in CRM design.</p>
        `,
        imageUrl: 'assets/img/works/video.png',
        images: [
          'assets/img/works/user-experience-prototype-testing/ui-ux-1.jpg',
          'assets/img/works/user-experience-prototype-testing/ui-ux-2.jpg',
          'assets/img/works/user-experience-prototype-testing/ui-ux-3.jpg',
          'assets/img/works/user-experience-prototype-testing/ui-ux-4.jpg',
          'assets/img/works/user-experience-prototype-testing/video.jpg',
        ],
        tags: ['Figma/XD', 'Angular', 'HTML', 'SCSS', 'Git', 'Confluence', 'Material UI', 'Miro'],
        class: 'col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3'
    },
    {
        id: 6,
        title: 'Gamification',
        description: `
        <p>At DealerSocket, the objective was clear: drive motivation and improve productivity among our customers. The CTO envisioned a system where the top-performing dealerships could be recognized and rewarded, with the pinnacle being an all-expenses-paid trip to Hawaii. This not only incentivized the users but also introduced a touch of competition and fun. My role was to bring this vision to life in the most engaging way possible. Here's a closer look at our unique approach:</p>
        <ul>
            <li><span class="keyword">Fantasy Football Inspiration:</span> Drawing parallels from the sports world, we devised a "Fantasy Football" style gamification system. This innovative system allowed dealerships to view and compare performances in a variety of categories, such as calls made, weekly sales, monthly deals, and so forth. This fostered a competitive spirit, inspiring every individual to put their best foot forward.</li>
            <li><span class="keyword">Real-time Performance Metrics:</span> Our system offered real-time insights, enabling dealerships to monitor their rank and performance. This immediate feedback was pivotal in driving engagement and fueling the competitive spirit among users.</li>
            <li><span class="keyword">User-Centric Design:</span> Before diving into full-scale development, we laid the groundwork with extensive mockups and testing. Utilizing tools like Axure and Balsamiq, we designed interactive prototypes. The feedback we garnered from these mockups informed our final design choices, ensuring the system was not only intuitive but also catered to the users' preferences.</li>
            <li><span class="keyword">Styling and Responsiveness:</span> Leveraging the power of HTML and SCSS, our designs were brought to life with meticulous detail, ensuring a seamless experience across devices.</li>
            <li><span class="keyword">Feedback-Driven Iteration:</span> User testing was integral to our design process. By constantly gathering feedback and iterating on our designs, we crafted a system that resonated with our target audience, making sure it not only served its purpose but was also enjoyable to use.</li>
        </ul>
        <p>The outcome was a gamification system that effectively incentivized performance, fostered healthy competition, and made day-to-day operations more engaging for the dealerships. Through this project, I've recognized the profound impact gamification can have on user behavior and motivation, and the importance of marrying creativity with functionality in design.</p>
        `,
        imageUrl: 'assets/img/works/gamification-770.png',
        images: [
          'assets/img/works/gamification/game-1.jpg',
          'assets/img/works/gamification/game-2.jpg',
          'assets/img/works/gamification/game-3.jpg',
          'assets/img/works/gamification/game-4.jpg',
        ],
        tags: ['Axure', 'Balsamiq', 'HTML', 'SCSS', 'Jira'],
        class: 'col-lg-8 col-md-8 col-sm-12'
    },
    {
        id: 7,
        title: 'Automotive Dealership CRM',
        description: `
        <p>While at NCC Credit, an exciting challenge lay ahead of me. Brought on by a director familiar with my prior work, I was entrusted with designing an innovative automotive CRM from scratch. With the pressure of unveiling a working prototype at the largest automotive software convention in Las Vegas in just three months, the stakes were high. Here's a closer look at our solution:</p>
        <ul>
            <li><span class="keyword">Streamlined Design:</span> Recognizing the demanding nature of a salesman's day-to-day tasks – from making calls and managing leads to sending emails and texts – our primary objective was efficiency. Our solution was the "Papers" layout, a unique design that folded down the previous section as users navigated through their tasks. This innovative approach ensured they had all necessary tools at their fingertips, streamlining their daily workflow and enhancing productivity.</li>
            <li><span class="keyword">All-in-One Layout:</span> The system was meticulously crafted to offer a holistic experience. Everything a user needed was accessible from a single interface, eliminating the need to juggle between different screens or tools.</li>
            <li><span class="keyword">Rapid Prototyping:</span> With tools like Balsamiq and Axure, the design process was agile. We swiftly moved from wireframes to interactive prototypes, ensuring we stayed on track to meet our tight deadline.</li>
            <li><span class="keyword">Cutting-Edge Technologies:</span> Backed by Angular's powerful framework, the application was robust and responsive. Coupled with Bootstrap, the interface was seamless across devices. And with Azure DevOps at its core, collaboration and deployment were a breeze.</li>
            <li><span class="keyword">Creative Design:</span> Adobe Creative Suite allowed us to fine-tune the visuals, ensuring our CRM wasn't just functional, but also aesthetically pleasing.</li>
            <li><span class="keyword">Collaborative Workflow:</span> Using Confluence, the entire team stayed in sync, ensuring a smooth and collaborative development process.</li>
        </ul>
        <p>The result was a CRM that redefined efficiency in the automotive domain. Through this project, I've reinforced the importance of intuitive design, the power of collaboration, and the impact of leveraging the right tools for the right job. The success of Avendas at the convention was a testament to our dedication and innovative approach.</p>
        `,
        imageUrl: 'assets/img/works/avendas-370.png',
        images: [
          'assets/img/works/automotive-dealership-crm/avendas.png',
          'assets/img/works/automotive-dealership-crm/avendas-1.png',
          'assets/img/works/automotive-dealership-crm/avendas-2.png',
          'assets/img/works/automotive-dealership-crm/avendas-3.png',
          'assets/img/works/automotive-dealership-crm/avendas-4.jpeg',
        ],
        tags: ['Figma/XD', 'Angular', 'HTML', 'SCSS', 'Bootstrap', 'Azure DevOps', 'Git', 'Confluence', 'Adobe Creative Suite', 'Jira', 'Miro'],
        class: 'col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3'  
    },
    {
        id: 8,
        title: 'MyHealthEVet Online Health Portal',
        description: `
        <p>Collaborating with the Veterans Affairs (VA) Design team was an enriching experience. Our mission was clear: to build a secure portal that would empower veterans to access their sensitive, HIPPA-compliant health records. The project went beyond mere data access – it was about facilitating seamless healthcare for our nation's heroes. Here's a deep dive into the project's intricacies:</p>
        <ul>
            <li><span class="keyword">Veteran-Centric Design:</span> At the heart of our design process were the veterans. Through extensive UX interviews and case studies, we strived to understand their unique needs and pain points. This user-centric approach paved the way for intuitive screens, enabling veterans to easily access prescriptions, lab results, and more.</li>
            <li><span class="keyword">Rigorous Testing:</span> Ensuring the effectiveness of our design was crucial. We employed a myriad of testing techniques, including A/B testing, to refine our user interfaces, ensuring they were both user-friendly and efficient.</li>
            <li><span class="keyword">Code/Design Challenges:</span> The project was peppered with challenges that pushed our team to its limits. Our company participated in multiple code and design challenges, with each victory awarding us a contract. These 2-4 day exercises required us to not just design, but also showcase our workflow. Collaborating with developers, product owners, and fellow UI/UX designers, it was a race against time, but the learnings and camaraderie made it all worthwhile.</li>
            <li><span class="keyword">Holistic Healthcare Portal:</span> Beyond mere record access, the portal served as a comprehensive healthcare hub. Veterans could order and refill prescriptions, share their records with healthcare providers, view lab results, and more – all in one place.</li>
            <li><span class="keyword">Impactful Role:</span> The significance of our work wasn't lost on us. By creating a user-friendly portal, we played a part in ensuring our veterans received the timely care they deserved.</li>
        </ul>
        <p>Through the MyHealtheVet project, I gained invaluable insights into the world of healthcare UX design. But more than that, I learned the importance of empathy and the role technology can play in making a tangible difference in people's lives. Working for our veterans was not just a project; it was a responsibility we wore with pride.</p>
        `,
        imageUrl: 'assets/img/works/myhealthevet-770.png',
        images: [
          'assets/img/works/myhealthevet/myhealhevet-2.jpg',
          'assets/img/works/myhealthevet/myhealhevet-3.jpg',
        ],
        tags: ['Figma/XD', 'Balsamiq', 'Confluence', 'HTML', 'SCSS', 'Jira', 'Miro'],
        class: 'col-lg-8 col-md-8 col-sm-12'
    },
    {
        id: 9,
        title: 'Big Data Dashboards',
        description: `
        <p>In the fast-paced world of automotive sales, having real-time insights is paramount. At DealerSocket, we identified a challenge: there was a wealth of data accumulated over the years, stored away in a data cube. Our mission was to transform this raw data into actionable insights for sales managers and dealership executives. And so began the journey of the Big Data Dashboards project. Here's an in-depth look:</p>
        <ul>
            <li><span class="keyword">Data Visualization:</span> The primary challenge was not just to access the data, but to present it in a manner that was easy to comprehend. Through the integration of ChartJS and KendoUI, we were able to bring data to life through vivid graphs and charts tailored to the specific needs of the dealership executives.</li>
            <li><span class="keyword">Accessibility on the Go:</span> Given the dynamic nature of the sales environment, it was imperative that these insights be accessible from any device. Whether on a tablet in a sales meeting or a desktop in an executive suite, our dashboards adapted seamlessly, thanks to Bootstrap's responsive capabilities.</li>
            <li><span class="keyword">Customization:</span> Recognizing that every executive has unique preferences, we built in features that allowed for dashboard customization. This ensured that each user could focus on the metrics most relevant to them.</li>
            <li><span class="keyword">Alerts and Notifications:</span> To keep the team proactive, we incorporated a feature to send daily email alerts, ensuring that key insights were never missed. Coupled with secure authentication processes, we made sure that the right data reached the right person at the right time.</li>
            <li><span class="keyword">Agile Approach:</span> The project's success was largely attributed to our agile methodology. Using tools like Jira and Confluence, we maintained a fluid communication channel, ensuring that feedback was incorporated promptly and the project remained on track.</li>
            <li><span class="keyword">UX/UI Design:</span> The interface was designed keeping in mind the end user. Through tools like Axure and Balsamiq, we crafted an intuitive design, ensuring that navigating through vast amounts of data was a breeze.</li>
        </ul>
        <p>Reflecting on the Big Data Dashboards project, it was a testament to the power of data when harnessed correctly. It wasn't just about presenting numbers; it was about converting those numbers into stories that drove decisions. Through this initiative, we successfully bridged the gap between data accumulation and data utilization, providing DealerSocket with a tool that truly made a difference.</p>
        `,
        imageUrl: 'assets/img/works/big-data-370.png',
        images: [
          'assets/img/works/big-data/big-data-1.png',
          'assets/img/works/big-data/big-data-2.jpeg',
          'assets/img/works/big-data/big-data-3.jpeg',
          'assets/img/works/big-data/big-data-4.jpeg',
        ],
        tags: ['Axure', 'Balsamiq', 'Angular', 'ChartJS', 'HTML', 'SCSS', 'Jira', 'Confluence'],
        class: 'col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3'
    },
    {
        id: 10,
        title: 'Visual Task Boards',
        description: `
        <p>Modern enterprises demand agility and efficiency, and to meet these needs, we embarked on the journey to build the Visual Task Boards at ServiceNow. Modeled after the simplicity and efficiency of "Trello", our objective was to provide internal users with a holistic platform to manage, track, and streamline their tasks, bugs, and tickets. Let's delve into the intricacies of this transformative project:</p>
        <ul>
            <li><span class="keyword">Unified Platform:</span> One of the project's key achievements was eliminating the need for external third-party tools. By integrating ticketing and task management within the ServiceNow ecosystem, we enhanced user efficiency and reduced dependency on multiple platforms.</li>
            <li><span class="keyword">Flexible Board Styles:</span> Catering to diverse working styles, we provided users with the flexibility to choose between kanban and agile board styles, ensuring they could work in an environment they were most comfortable with.</li>
            <li><span class="keyword">Customization:</span> Acknowledging that no two teams work alike, our boards offered extensive customization options. From adjusting colors to defining categories, users had the freedom to tailor the boards to their specific requirements.</li>
            <li><span class="keyword">Real-time Notifications:</span> Staying updated was made effortless with built-in email and push notifications, ensuring that every team member was in sync and informed about task progress and updates.</li>
            <li><span class="keyword">In-depth UX Research:</span> The backbone of the project's success was our rigorous user experience methodology. Through internal testing, persona creation, and iterative design, we ensured that our solution was not just functional but user-centric. The use of mock designs further facilitated this iterative process, enabling us to refine our vision based on real feedback.</li>
            <li><span class="keyword">Collaboration with Visionaries:</span> A project of this magnitude and innovation required visionary insights. I had the unique opportunity to work directly with ServiceNow's original founder, Fred Luddy. Being part of a hand-picked team that he curated for creating groundbreaking products was an invaluable experience that significantly shaped the direction and outcome of the Visual Task Boards.</li>
        </ul>
        <p>Visual Task Boards were more than just a tool; they represented a shift in how ServiceNow approached task management. By bridging the gap between task creation and execution, we provided our users with a cohesive, intuitive, and efficient system, redefining how they interacted with their daily workflows.</p>
        `,
        imageUrl: 'assets/img/works/vtb-370.png',
        images: [
          'assets/img/works/visual-task-boards/vtb.jpg',
          'assets/img/works/visual-task-boards/vtb-1.png',
          'assets/img/works/visual-task-boards/vtb-2.png',
          'assets/img/works/visual-task-boards/vtb-4.png',
          'assets/img/works/visual-task-boards/vtb-5.jpeg',
        ],
        tags: ['Balsamiq', 'Axure', 'Adobe Creative Suite', 'HTML', 'SCSS', 'Jira', 'Confluence'],
        class: 'col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3'
    },
  ];

  constructor() { }

  getProjects() {
    return this.projects;
  }
}