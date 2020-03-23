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
    title = 'resume';

    mainPanelElements: MainPanelElement[];
    sidePanelElements: SidePanelElement[];

    desc: string;

    constructor() {

    }

    ngOnInit() {
        this.desc = 'Innovative full stack developer skilled in leadership and project management, with a strong foundation in math, programming logic, cross-platform coding. Seeking to leverage solid development skills with a focus on collaboration and communication.'

        this.sidePanelElements = [
            {
                header: 'Personal Info',
                itemGroups: [
                    ['Address',
                    '205 S. Coronado St. Apt 105, ',
                    'Los Angeles, CA 90057'],
                    ['Phone',
                    '714-204-2188'],
                    ['E-mail',
                    'm.thompson.code@gmail.com'],
                    ['WWW',
                    'mark-thompson.web.app'],
                    ['GitHub',
                    '@m-thompson-code'],
                    ['LinkedIn',
                    '@m-thompson-code'],
                ]
            },
            {
                header: 'Front End',
                itemGroups: [
                    ['Ionic 5, Angular 9, HTML 5, SCSS, CSS3, TypeScript, ES8'],
                ]
            },
            {
                header: 'Back End',
                itemGroups: [
                    ['Express.js, NPM, Node.js, Python, AWS'],
                ]
            },
            {
                header: 'Testing',
                itemGroups: [
                    ['Jasmine, Karma'],
                ]
            },
            {
                header: 'Databases',
                itemGroups: [
                    ['MongoDB, MySql, NoSQL, SQL'],
                ]
            },
            {
                header: 'SDLC',
                itemGroups: [
                    ['Agile, Confluence, Jira'],
                ]
            }
        ];

        this.mainPanelElements = [
            {
                header: 'Experience',
                sections: [
                    {
                        start: '2019-01',
                        end: 'Current', 
                        title: 'SMPL LLC',
                        subTitle: 'Full Stack Developer - Rocket Rounding project',
                        listItems: [
                            `Managed web / native application, public API, and node module SDK`,
                            'Worked with Product Owner to define project scope and objectives and coordinated sprints',
                            'Responsible for maintaining staging and production environments for all applications'
                        ],
                    },
                    {
                        start: '2018-06',
                        end: '2018-12', 
                        title: 'SMPL LLC',
                        subTitle: 'Back End Developer - Willoe project',
                        listItems: [
                            `Collaborated with external teams to parse big data`,
                            `Built dashboards to present analytics to Shareholders`,
                        ],
                    },
                    {
                        start: '2017-01',
                        end: 'Current', 
                        title: 'SMPL LLC',
                        subTitle: 'Full Stack Developer - Smpl Talk project',
                        listItems: [
                            `Managed mobile-friendly and print-friendly applications`,
                            `Scaled web application from handling a single location of Adventist Health to all locations in California`,
                            `Developed and documented API for integration with enterprise intranet`,
                            `Built dashboards for exportable analytics such as user activity`,
                        ],
                    },
                ]
            },
            {
                header: 'Education',
                sections: [
                    {
                        start: '2011-08',
                        end: '2015-05', 
                        title: 'Northern Arizona University, B.S. in Computer Science',
                        subTitle: 'Minor in Mathematics',
                        listItems: [
                            `Capstone project - Application for managing agendas and mailing lists for the Center for International Educational`,
                            `Worked for the Department of Teaching and Learning as a tutor`,
                        ],
                    },
                ]
            },
            {
                header: 'Projects',
                sections: [
                    {
                        title: 'Chess opening learning application',
                        listItems: [
                            `Application that teaches users the 500 listed chess openings in the ECO and the 20,000 variations.`,
                        ],
                    },
                    {
                        title: 'Twitch interactive overlay and bot',
                        listItems: [
                            `Developed client-side interactive overlay that responds to Twitch users`,
                            `Developed server-side bot interacts with Twitch chat`,
                        ],
                    },
                ]
            },
        ];
    }
}
