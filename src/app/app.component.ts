import { Component, OnInit } from '@angular/core';

export type SidePanelItem = string;

export interface SidePanelElement {
    header: string;
    itemGroups: string[][];
};

export interface MainPanelElement {
    header: string;
    sections: {
        start?: string;
        end?: string;
        title: string;
        subTitle?: string;
        listItems: string[];
    }[];
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public mainPanelElements: MainPanelElement[];
    public sidePanelElements: SidePanelElement[];

    public desc: string;

    public showWarning: boolean = false;

    constructor() {

    }

    public ngOnInit(): void {
        if (!this.isChrome()) {
            this.showWarning = true;
        }

        // this.desc = 'Innovative full stack developer skilled in leadership and project management, with a strong foundation in math, programming logic, cross-platform coding. Seeking to leverage solid development skills with a focus on collaboration and communication.'
        this.desc = 'Innovative full stack developer with a foundation in mathematics, programming logic, and cross-platform coding. Strong background in developing and maintaining web applications using Angular.';

        this.sidePanelElements = [
            {
                header: 'Personal Info',
                itemGroups: [
                    ['Contact', 'm.thompson.code@gmail.com', '714-204-2188'],
                    ['Location', 'Downtown Los Angeles, CA'],
                    ['WWW',
                    'mark-thompson.web.app'],
                    ['GitHub',
                    '@m-thompson-code'],
                    ['LinkedIn',
                    '@m-thompson-code'],
                ],
            },
            {
                header: 'Soft Skills',
                itemGroups: [
                    ['Adaptability, Self-management, Strong Work Ethic, Quick Learner'],
                ],
            },
            {
                header: 'Languages',
                itemGroups: [
                    ['Typescript, Javascript, ES2020, HTML5, CSS3, Python, Ruby, C, C++'],
                ],
            },
            {
                header: 'Frameworks and Libraries',
                itemGroups: [
                    ['Angular 10, Ionic 5, SendGrid, Django, Ruby on Rails'],
                ],
            },
            {
                header: 'Database Management',
                itemGroups: [
                    ['Firebase Realtime and Firestore, MongoDB, MySql'],
                ],
            },
            {
                header: 'Cloud-Based Technologies',
                itemGroups: [
                    ['Google/Firebase Cloud Functions, AWS, Heroku'],
                ],
            },
            {
                header: 'Tools',
                itemGroups: [
                    ['Figma, ProtoPie, Adobe XD'],
                ],
            },
            {
                header: 'SDLC',
                itemGroups: [
                    ['Agile, Confluence, Jira, npm, Git'],
                ],
            },
        ];

        this.mainPanelElements = [
            {
                header: 'Experience',
                sections: [
                    {
                        start: 'Aug 2020',
                        end: 'Sep 2020', 
                        title: 'Master of Shapes, Visible',
                        subTitle: 'Full Stack Developer - Red Rocks Unpaused project',
                        listItems: [
                            `Angular 10, Firebase`,
                            `Interactive web experience that allowed for real time user interaction for the Visible X Red Rocks concert`,
                        ],
                    },
                    {
                        start: 'Mar 2020',
                        end: 'Jun 2020', 
                        title: 'Master of Shapes, SAP',
                        subTitle: 'Full Stack Developer - Commit Water project',
                        listItems: [
                            `Angular 9, Firebase, Node JS, MongoDB`,
                            `Interactive intelligent enterprise showcase during the Sapphire NOW Reimagined event for SAP`,
                        ],
                    },
                    {
                        start: 'Jan 2019',
                        end: 'Current', 
                        title: 'SMPL LLC',
                        subTitle: 'Full Stack Developer - Rocket Rounding project',
                        listItems: [
                            `Angular 7 - 10, Ionic 3 - 5, Firebase, Node JS`,
                            `Applications for digital patient rounding, public API, and Node SDK`,
                            'Coordinated sprints and worked with product owner to define project scope and objectives',
                        ],
                    },
                    {
                        start: 'Jun 2018',
                        end: 'Dec 2018', 
                        title: 'SMPL LLC',
                        subTitle: 'Back End Developer - Willoe project',
                        listItems: [
                            `Angular 8, Mongo DB, AWS`,
                            `Application MVP for monitoring analytics for hospitals and staff hygiene`,
                        ],
                    },
                    {
                        start: 'Jan 2017',
                        end: 'Sep 2020', 
                        title: 'SMPL LLC',
                        subTitle: 'Full Stack Developer - Smpl Talk project',
                        listItems: [
                            `Angular 2 - 8, Ionic 3 - 5, Firebase, Node JS`,
                            `Applications for making communication simpler for hospitals and staff, public API, automated emailing services, easy to print newsletters for all of Adventist Health's locations in California`,
                        ],
                    },
                ],
            },
            {
                header: 'Education',
                sections: [
                    {
                        start: 'Aug 2011',
                        end: 'May 2015', 
                        title: 'Northern Arizona University, \nB.S. in Computer Science',
                        subTitle: 'Minor in Mathematics',
                        listItems: [
                            `Capstone project - Application for managing agendas and mailing lists for the Center for International Educational using Ruby on Rails and MySQL`,
                            `Worked for the Department of Teaching and Learning as a tutor`,
                        ],
                    },
                ],
            },
            // {
            //     header: 'Projects',
            //     sections: [
            //         {
            //             title: 'Chess opening learning application',
            //             listItems: [
            //                 `Application that teaches users the 500 listed chess openings in the ECO and the 20,000 variations.`,
            //             ],
            //         },
            //         {
            //             title: 'Chess opening learning application',
            //             listItems: [
            //                 `Application that teaches users the 500 listed chess openings in the ECO and the 20,000 variations.`,
            //             ],
            //         },
            //         {
            //             title: 'Twitch interactive overlay and bot',
            //             listItems: [
            //                 `Developed client-side interactive overlay that responds to Twitch users`,
            //                 `Developed server-side bot interacts with Twitch chat`,
            //             ],
            //         },
            //     ],
            // },
        ];
    }

    public isChrome(): boolean {
        try {
            // const isChrome = navigator.userAgent.indexOf("Chrome") !== -1;

            // source: https://stackoverflow.com/a/9851769/9115419
            const isChrome = !!(window as any).chrome?.webstore || !!(window as any).chrome?.runtime;

            // Edge (based on chromium) detection
            const isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") !== -1);

            if (isEdgeChromium) {
                return false;
            }

            return isChrome;
        }catch(error) {
            console.warn(error);
            return false;
        }
    }
}
